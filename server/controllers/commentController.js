import { Post } from "../models/Post.js";
import { Comment } from '../models/Comment.js';

export const replyComment = async (req, res, next) => {
    const { commentId } = req.params
    const { content } = req.body
    const userId = req.user.id

    try {
        const comment = await Comment.findById(commentId)

        if (!comment)
            return res.status(404).json({ message: "Comment not found!" })

        const rootCommentId = comment.isReply ? comment.parentComment : commentId

        const reply = await Comment.create({
            author: userId,
            parentPost: comment.parentPost,
            parentComment: rootCommentId,
            isReply: true,
            content
        })

        await Comment.findByIdAndUpdate(rootCommentId, { $push: { replies: reply._id } })

        req.comment = comment
        res.status(201).json({ message: 'Reply added successfully!', reply })

        next()
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: "Reply error: Unable to reply to the comment!", err })
    }
}

export const likeComment = async (req, res ,next) => {
    const { commentId } = req.params
    const userId = req.user.id

    try {
        const comment = await Comment.findById(commentId)

        if (!comment)
            return res.status(404).json({ message: "Comment not found!" })

        const likeIndex = comment.likes.indexOf(userId)

        likeIndex === -1 ? comment.likes.push(userId) : comment.likes.splice(likeIndex, 1)
        await comment.save()

        req.comment = comment
        res.status(200).json({ message: `Comment ${likeIndex === -1 ? 'liked' : 'unliked'} successfully!`, comment })

        next()
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "Like toggle error: Unable to update the like on the comment!", err })
    }
}

export const getReplies  = async (req, res) => {
    const { commentId } = req.params

    try {
        const replies = await Comment.find({ parentComment: commentId })
            .populate('author', 'username profilePicture')
            .populate({
                path: 'replies',
                populate: { path: 'author', select: 'username profilePicture' }
            })

        if (!replies.length)
            return res.status(200).json({ message: 'No replies found for this comment!', replies: [] })

        res.status(200).json({ message: 'Replies retrieved successfully!', replies })
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "Reply retrieval error: Unable to retrieve replies!", err })
    }
}

export const deleteComment = async (req, res) => {
    const comment = req.resource

    try {
        await Post.findByIdAndUpdate(comment.parentPost, {
            $pull: { comments: comment._id }
        })

        if (comment.replies.length > 0)
            await Comment.deleteMany({ _id: { $in: comment.replies } })

        await comment.deleteOne()

        res.status(200).json({ message: 'Comment deleted successfully!' })
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Comment deletion error: Unable to delete the comment!', err })
    }
}

export const updateComment = async (req, res) => {
    const comment = req.resource
    const { content } = req.body

    try {
        if (!comment)
            return res.status(400).json({ message: 'Comment not found!' })

        comment.content = content

        await comment.save()

        res.status(200).json({ message: 'Comment updated successfully!', comment })
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Comment update error: Unable to update the comment!', err })
    }
}
