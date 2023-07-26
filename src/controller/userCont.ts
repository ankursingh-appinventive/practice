import {User} from '../models/userMod'

import {Session} from '../models/sessionMod' //....................................
import redisclient from '../redis/redis' //................................................

import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'


const SEC_KEY = "INSTAGRAM";


const register =async (req:any, res:any, next:any) =>{
    // const hashedPass = await bcrypt.hash(req.body.password, 10)
    // let user = await new User ({
    //     prid: req.body.profileId,
    //     name: req.body.name,
    //     email: req.body.email,
    //     phone: req.body.phone,
    //     password: hashedPass
    // })
    // user.save()
    // .then(user => {
    //     res.json({
    //         message: 'User added successfully!'
    //     })
    // })
    // .catch(error =>{
    //     res.json({
    //         message: 'An error occured'
    //     })
    // })
    try {
        const {profileId, name, email, phone, password} = req.body
    const existemail = await User.findOne({email:email})
    const existingphone = await User.findOne({phone:phone})
    const existingprid = await User.findOne({prid:profileId})
    if(existemail || existingphone || existingprid){
        return res.status(400).json({message: "User already exists !!!"})
    }
    const hashedPass = await bcrypt.hash(req.body.password, 10);
    const result = await User.create({
        prid:profileId,
        name:name,
        email:email,
        phone:phone,
        password: hashedPass
    })
//...................................................
    const session = await Session.create({
        userID : result._id,
        isActive : true,
        deviceID: req.body.deviceID        
    })

    await redisclient.set(`status:${result._id}`,'true');
//...................................................    

    const token = jwt.sign({email: result.email, id:result._id}, SEC_KEY, {expiresIn: '1h'});
    res.status(200).json({user: result, token: token, Session: session});

    } catch (error) {
        console.log(error)
        res.status(500).json({message: "something went wrong !!!"})
    }
}



const login = async (req:any, res:any, next:any) =>{
    const username = req.body.username
    const password = req.body.password

    const user = await User.findOne({$or: [{email: username},{phone:username},{prid:username}]})
    
//.....................................................................
    // const userID = user?._id;
    // const exist = await Sesssion.findOne({userID: user._id})
//.....................................................................

        if(user){
            bcrypt.compare(password, user.password, async function(err:any,result:any){
                if(err){
                    res.json({
                        error: err
                    })
                }
                if(result){
                    let token = jwt.sign({email: user.email, id:user._id}, SEC_KEY, {expiresIn: '1h'})
//.................................................................................................................
                    const session = await Session.create({
                        userID : user._id,
                        isActive : true,
                        deviceID: req.body.deviceID        
                    })

//.................................................................................................................
                    res.status(201).json({
                        message : 'login successfull !!',
                        user: user,
                        token: token
                    })
                }else{
                    res.json({
                        message: 'Password does not match'
                    })
                }
            })
        }else{
            res.json({
                message: 'No user found'
            })
        }
}



export  {
    register,
    login
}

// export default register
