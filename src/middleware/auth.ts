import jwt, { JwtPayload } from 'jsonwebtoken'
import {Session} from '../models/sessionMod'
import redisclient from '../redis/redis'
import { Request, Response, NextFunction } from 'express';

const SEC_KEY: string = "INSTAGRAM";

const auth = async (req:any, res:any, next:any) =>{
    try {
        let token = req.headers.authorization;
        let user:any
        if(token){
            token = token.split(" ")[1];
            user = <JwtPayload>jwt.verify(token, SEC_KEY);
            req.userId = user.id;
            // const verifyToken = jwt.verify(token, SEC_KEY)
            // const user = users.findOne({ _id: token._id, token})

        }else{
            res.status(401).json({message: "Unouthorized User"});
        }
        let session = await Session.find({$and:[{userID:user.id},{"isActive":true}]})
        if(!session){
            res.status(401).json({message: "You are loggedout"});
        }else{
            next()
        }
    } catch (error) {
        console.log(error)
        res.status(401).json({message: "Unouthorized User"});
    }
}


export const sessionCheck = async(req: Request, res:Response, next:NextFunction): Promise<void> => {
    const token : string = '' + req.headers.authorization;
    let ans:any;
    try {
        ans = jwt.verify(token,SEC_KEY);

    } catch (error) {
        res.send('Token expired or nat valid token')
        return;
    }

    try {
        const rediscontent: string | null = await redisclient.get(`${ans?.id}`);
        if(!rediscontent == true){
            console.log('not found in redis')
            const session = await Session.find({
                userID:ans.id,
                isActive:true,
            })
            session.length>0? next() : res.send('Authorization failed');
        }else{
            console.log('redis found');
            next()
        }
    } catch (error) {
        res.send('error');
    }
}



export {
    auth
}