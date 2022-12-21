import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    name: {
        type: String,
        requierd:true
    },
    email: {
        type: String,
        requierd:true
    },
    password: {
        type: String,
        requierd:true
    },
    about: {
        type: String
    },
    tags: {
        type: [String],

    },
    joinedOn: {
        type: Date,
        default:Date.now
    }
})

export default mongoose.model("User",userSchema)