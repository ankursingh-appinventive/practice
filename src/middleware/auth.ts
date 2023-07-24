import jwt, { JwtPayload } from 'jsonwebtoken'


const SEC_KEY = "INSTAGRAM";

const auth = (req:any, res:any, next:any) =>{
    try {
        let token = req.headers.authorization;
        if(token){
            token = token.split(" ")[1];
            let user = <JwtPayload>jwt.verify(token, SEC_KEY);
            req.userId = user.id;
            // const verifyToken = jwt.verify(token, SEC_KEY)
            // const user = users.findOne({ _id: token._id, token})

        }else{
            res.status(401).json({message: "Unouthorized User"});
        }
        next()
    } catch (error) {
        console.log(error)
        res.status(401).json({message: "Unouthorized User"});
    }
}

export {
    auth
}