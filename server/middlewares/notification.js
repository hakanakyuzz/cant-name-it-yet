import { Notification } from '../models/Notification.js';

export const notifyCommentReply = async (req, res) => {
    const userId = req.user.id
    const { commentId } = req.params
    const comment = req.comment

    if (comment.author.toString() === userId.toString()) return

    try {
        const notification = new Notification({
            user: userId,
            targetUser: comment.author,
            type: 'reply',
            post: commentId
        })

        await notification.save()
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: 'Error sending notification!', err })
    }
}

export const notifyCommentLike = async (req, res) => {
    const userId = req.user.id
    const { commentId } = req.params
    const comment = req.comment

    if (comment.author.toString() === userId.toString()) return

    try {
        const likeIndex = comment.likes.indexOf(userId)

        if (likeIndex !== -1) {
            const notification = new Notification({
                user: userId,
                targetUser: comment.author,
                type: 'like',
                comment: commentId
            })

            await notification.save()
        }
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: 'Error sending notification!', err })
    }
}

export const notifyPostLike = async (req, res) => {
    const userId = req.user.id
    const { postId } = req.params
    const post = req.post

    if (userId.toString() === post.author.toString()) return

    try {
        const likeIndex = post.likes.indexOf(userId)

        if (likeIndex !== -1) {
            const notification = new Notification({
                user: userId,
                targetUser: post.author,
                type: 'like',
                post: postId
            })

            await notification.save()
        }
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: 'Error sending notification!', err })
    }
}

export const notifyPostComment = async (req, res) => {
    const userId = req.user.id
    const { postId } = req.params
    const post = req.post

    if (userId.toString() === post.author.toString()) return

    try {
        if (post.author.toString() !== userId) {
            const notification = new Notification({
                user: userId,
                targetUser: post.author,
                type: 'comment',
                post: postId
            })

            await notification.save()
        }
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: 'Error sending notification!', err })
    }
}

export const notifyUserFollow = async (req, res) => {
    const userId = req.user.id
    const userToFollowId = req.params.userId
    const isFollowing = req.isFollowing
    console.log(isFollowing)

    try {
        if (!isFollowing) {
            const notification = new Notification({
                user: userId,
                targetUser: userToFollowId,
                type: 'follow'
            })

            await notification.save()
        }
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: 'Error sending notification!', err })
    }
}

export const notifyUserMessage = async (req, res) => {
    const userId = req.user.id
    const chat = req.chat
    const msgId = req.msgId

    try {
        const recipient = chat.participants.filter(participant => participant.toString() !== userId)

        const notification = new Notification({
            user: userId,
            targetUser: recipient.toString(),
            type: 'message',
            message: msgId
        })

        await notification.save()
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: 'Error sending notification!', err })
    }
}
