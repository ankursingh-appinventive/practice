const chatcontroller = require('../controllers/chatcontroller.js')

const router = require('express').Router()



router.get('/',chatcontroller.home)

router.post('/sendmsg',chatcontroller.sendchat)

router.get('/allmsg',chatcontroller.getAllmsgs)

router.get('/lastmsg',chatcontroller.getlastmsg)

router.get('/:person1msg',chatcontroller.getPerson1msgs)

router.get('/:person2msg',chatcontroller.getPerson2msgs)


router.delete('/deletemsg',chatcontroller.deletechat)

router.delete('/deleteAllmsg',chatcontroller.deleteall)

module.exports = router