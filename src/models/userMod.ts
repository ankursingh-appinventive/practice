import mongoose, {Document} from 'mongoose'
// const Schema = mongoose.Schema



const userSchema = new mongoose.Schema({
    prid: {
        type: String,
        requied: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        default:""
    },
    profile_pic: {
        type: String,
        default:"https://DefaultPic"
    },
    followingCount: {
        type: Number,
        default: 0
    },
    followersCount: {
        type: Number,
        default:0
    },
    isPrivate: {
        type: Boolean,
        default:false
    }
},{timestamps:true})

const User = mongoose.model('User', userSchema)

export {User};

//export default mongoose.model('User', userSchema)