import express from 'express'
import { createpost, deletepost, getpost, updatepost } from '../controller/postCont';
import { auth } from '../middleware/auth';
const postRouter = express.Router()


postRouter.post('/new',auth,createpost);
// postRouter.post('/new',createpost);


postRouter.get('/',auth ,getpost);

postRouter.delete('/:id',auth,deletepost);

postRouter.put('/:id', auth, updatepost)


export {
    postRouter
}