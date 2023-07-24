import mongoose from 'mongoose'
const Schema = mongoose.Schema


const followingSchema = new Schema({
    user_id: {
        type: String,
        required: true
    },
    followed_id: {
        type: String,
        required: true
    },
    status: {
        type: String
    }
},{timestamps:true})

const Following = mongoose.model('Following', followingSchema)
module.exports = Following;

export default mongoose.model('Following', followingSchema)