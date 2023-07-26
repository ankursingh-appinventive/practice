import mongoose, {Document} from 'mongoose'
// const Schema = mongoose.Schema


const sessionSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    isActive: {
        type: Boolean,
        default: false
    },
    deviceID: {
        type: String,
        required: true
    }
},{timestamps:true})

const Session = mongoose.model('Session', sessionSchema)
export {Session};
// module.exports = Post;


// export default mongoose.model('Post',postSchema)