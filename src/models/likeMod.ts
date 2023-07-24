import mongoose, {Document} from 'mongoose'
const Schema = mongoose.Schema


const likeSchema = new Schema({
    user_id: {
        type: String,
        required: true
    },
    post_id: {
        type: String,
        required: true
    },
    liked_by: {
        type: String,
        required: true
    }
},{timestamps:true})

const Like = mongoose.model('Like', likeSchema)
module.exports = Like;

export default mongoose.model('Like', likeSchema)