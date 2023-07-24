import mongoose, {Document} from 'mongoose'
const Schema = mongoose.Schema


const commentSchema = new Schema({
    user_id: {
        type: String,
        required: true
    },
    post_id: {
        type: String,
        required: true
    },
    commented_by: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    comentlike: {
        type: Number
    },
    reply: {
        type: [],String
    }
},{timestamps:true})

const Comment = mongoose.model('Comment', commentSchema)
module.exports = Comment;

export default mongoose.model('Comment', commentSchema)