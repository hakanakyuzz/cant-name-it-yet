import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    nickname: {
        type: String,
        required: true,
        unique: true
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
    name: {
        type: String,
        required: true
    },
    about:{
        type: String
    },
    profilePicture: {
        type: String,
    },
    tokenVersion: {
        type: Number,
        default: 0,
    },
    emailVerified: {
        type: Boolean,
        default: false
    },
    verificationToken: {
        type: String
    },
    verificationTokenExpires: {
        type: Date
    },
    date: {
        type: Date,
        default: Date.now
    }
})

export const User = mongoose.model('User', userSchema)