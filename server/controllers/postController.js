import { Post } from '../models/Post.js';
import { Comment } from '../models/Comment.js';

export const createPost = async (req, res) => {
    const { content } = req.body

    try {
        const userId = req.user.id

        const post = await Post.create({
            author: userId,
            content
        });

        res.status(201).json({ message: "Post created successfully!", post })
    } catch (err) {
        res.status(500).json({ message: "Something went wrong while creating the post!", err })
        console.log(err)
    }
}

export const likePost = async (req, res) => {
    const userId = req.user.id
    const { postId } = req.params

    try {
        const post = await Post.findById(postId)

        if (!post)
            return res.status(404).json({ message: "Post not found!" })

        const likeIndex = post.likes.indexOf(userId)

        if (likeIndex === -1) {
            post.likes.push(userId)
            res.status(200).json({ message: "Post liked successfully", post })
        } else {
            post.likes.splice(likeIndex, 1)
            res.status(200).json({ message: "Post unliked successfully", post })
        }

        await post.save()

    } catch (err) {
        res.status(500).json({ message: "Something went wrong while toggling the like on the post!", err})
        console.log(err)
    }
}

export const commentPost = async (req, res) => {
    const userId = req.user.id
    const { postId } = req.params
    const { content } = req.body

    try {
        const post = await Post.findById(postId)

        if (!post)
            return res.status(404).json({ message: "Post not found!" })

        const comment = await Comment.create({
            author: userId,
            parentPost: postId,
            content
        })

        await Comment.findByIdAndUpdate(postId, { $push: { comments: comment._id } })

        res.status(201).json({ message: 'Comment added to post successfully!', comment })
    } catch (err) {
        res.status(500).json({ message: "Something went wrong while commenting on the post!", err})
        console.log(err)
    }
}