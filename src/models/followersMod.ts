import mongoose from 'mongoose'
const Schema = mongoose.Schema


const followerSchema = new Schema({
    user_id: {
        type: String,
        required: true
    },
    follower_id: {
        type: String,
        required: true
    },
    status: {
        type: String
    }
},{timestamps:true})

const Follower = mongoose.model('Follower', followerSchema)
module.exports = Follower;

export default mongoose.model('Follower', followerSchema)