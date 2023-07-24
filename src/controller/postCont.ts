import {Post} from '../models/postMod'

export const createpost = async (req:any, res:any) =>{
    // console.log(req.userId);
    const uID = req.userId;
    // console.log(uID);
    try {
        const { photo, caption} = req.body
        // const userId = req.userId;
        // const uID = req.userId;
        if(!photo || !caption ){
            res.status(400).send('Please fill all the fields')
        }
         const createPost = new Post({
            photo,
            caption,
            // user: req.userID
            user: uID
         })
         await createPost.save()
         res.status(200).send('Create Post successfully')
    } catch (error) {
        res.status(500).send('Someting went wrong')
    }
}

export const updatepost = async (req:any, res:any) =>{
    // const uID = req.userId;
    const id = req.params.id;
    const { caption , photo } = req.body;
    const updatepost = {
        caption,
        photo
        // user: uID
    }
    try {
        await Post.findByIdAndUpdate(id, updatepost, {new: true});
        res.status(200).send(updatepost)
    } catch (error) {
        res.status(500).send('Someting went wrong')
    }

}

export const getpost = async (req:any, res:any) =>{
    try {
        const posts = await Post.findOne({user: req.userId});
        res.status(200).json(posts)
    } catch (error) {
        res.status(500).send('Someting went wrong')
    }

}

export const deletepost = async (req:any, res:any) =>{
    const id = req.params.id;
    try {
        const delpost = await Post.findByIdAndRemove(id);
        res.status(202).send(delpost)
    } catch (error) {
        res.status(500).send('Someting went wrong')
    }

}