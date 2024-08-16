import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    nickname: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    about:{
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    profilePicture: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    }
})

export const User = mongoose.model('User', userSchema)