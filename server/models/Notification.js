import mongoose from 'mongoose';

const notificationSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    targetUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    type: {
        type: String,
        enum: ['like', 'comment', 'reply', 'follow', 'message'],
        required: true
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    },
    comment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    },
    message: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message'
    },
    read: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

export const Notification = mongoose.model('Notification', notificationSchema)