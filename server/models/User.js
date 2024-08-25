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
    followers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    following: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    emailVerified: {
        type: Boolean,
        default: false
    },
    verificationToken: {
        type: String
    },
    verificationTokenExpires: {
        type: Date
    }
}, { timestamps: true })

export const User = mongoose.model('User', userSchema)