import mongoose, {Document} from 'mongoose'
// const Schema = mongoose.Schema


const postSchema = new mongoose.Schema({
    photo: {
        type: String,
        reqired: true
    },
    caption: {
        type: String,
        reqired: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    likeCount: {
        type: Number,
        default: 0
    },
    commentCount: {
        type: Number,
        default: 0
    }
},{timestamps:true})

const Post = mongoose.model('Post', postSchema)
export {Post};
// module.exports = Post;


// export default mongoose.model('Post',postSchema)