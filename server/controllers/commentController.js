import { Comment } from '../models/Comment.js';

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