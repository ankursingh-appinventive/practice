const db = require('../models')

const Chat = db.chats

const home = (req,res) =>{
    res.send("welcome to chat!")
}

const sendchat = async (req,res) =>{
    let info = {
        messageID: req.body.messageID,
        person1: req.body.person1,
        person2: req.body.person2,
        text: req.body.text
    }

    const chat = await Chat.create(info)
    res.status(200).send(chat)
}


const getAllmsgs= async (req,res) =>{
    let chats = await Chat.findAll({
        // attributes:[
        //     'person1',
        //     'person2',
        //     'text'
        // ]
    })
    res.send(chats)
}


const getPerson1msgs= async (req,res) =>{
    let id = req.params.person1
     let pmsgs = await Chat.findOne({
        where: {person1:id}
     })


    /*
    let chats = await Chat.findAll({
        // attributes:[
        //     'person1',
        //     'person2',
        //     'text'
        // ]
    })*/
    res.send(pmsgs)
}

const getPerson2msgs= async (req,res) =>{
    let id = req.params.person2
     let pmsgs = await Chat.findOne({
        where: {person2:id}
     })
    res.send(pmsgs)
}

const getlastmsg= async (req,res) =>{
    let id = req.params.person1
    let pmsg = await Chat.findOne()
    res.send(pmsg)
}

const deletechat= async (req,res) =>{
    let id = req.params.messageID
    await Chat.destroy({where: {messageID:id}})
    res.status(200).send(' message deleted successfully')
}


const deleteall= async (req,res) =>{
    await Chat.destroy({})
    res.status(200).send('all messages deleted seccessfully')
}

module.exports = {
    sendchat,
    getAllmsgs,
    getPerson1msgs,
    getPerson2msgs,
    getlastmsg,
    deleteall,
    deletechat,
    home

}