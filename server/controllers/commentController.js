import { Comment } from '../models/Comment.js';
import {Post} from "../models/Post.js";

export const replyComment = async (req, res) => {
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

        res.status(201).json({ message: 'Reply added successfully!', reply })
    } catch (err) {
        res.status(500).json({ message: "Something went wrong while replying to the comment!", error: err.message })
        console.error(err)
    }
}

export const likeComment = async (req, res) => {
    const { commentId } = req.params
    const userId = req.user.id

    try {
        const comment = await Comment.findById(commentId)

        if (!comment)
            return res.status(404).json({ message: "Comment not found!" })

        const likeIndex = comment.likes.indexOf(userId)

        if (likeIndex === -1) {
            comment.likes.push(userId)
            res.status(200).json({ message: "Comment liked successfully", comment })
        } else {
            comment.likes.splice(likeIndex, 1)
            res.status(200).json({ message: "Comment unliked successfully", comment })
        }

        await comment.save()

    } catch (err) {
        res.status(500).json({ message: "Something went wrong while toggling the like on the comment!", err})
        console.log(err)
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
            return res.status(200).json({ message: 'No replies found!', replies: [] })

        res.status(200).json({ message: 'Replies retrieved successfully!', replies })
    } catch (err) {
        res.status(500).json({ message: "Something went wrong while retrieving replies!", err})
        console.log(err)
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
        res.status(500).send('Something went wrong while deleting the comment!')
        console.log(err)
    }
}