import express from 'express'
import  {register, login} from '../controller/userCont'

const router = express.Router()

router.post('/signup',register)
router.post('/login',login)

export {
    router
}

export default router