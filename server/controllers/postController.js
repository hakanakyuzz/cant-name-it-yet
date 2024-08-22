import { Post } from '../models/Post.js';
import { Comment } from '../models/Comment.js';
import {User} from "../models/User.js";

export const createPost = async (req, res) => {
    const { content } = req.body
    const userId = req.user.id

    try {
        const post = await Post.create({
            author: userId,
            content
        });

        res.status(201).json({ message: "Post created successfully!", post })
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "Post creation error: Unable to create the post!", err })
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
        console.log(err)
        res.status(500).json({ message: "Like toggle error: Unable to update the like on the post!", err})
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

        post.comments.push(comment._id)
        await post.save()

        res.status(201).json({ message: 'Comment added to the post successfully!', comment })
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "Comment error: Unable to add a comment to the post!", err})
    }
}

export const getPost  = async (req, res) => {
    const { postId } = req.params

    try {
        const post = await Post.findById( postId )

        if (!post)
            return res.status(400).json({message: 'Post not found!'})

        res.status(200).json({message: "Post found successfully!", post })
    } catch (err) {
        console.log(err)
        res.status(500).json({message: 'Post retrieval error: Unable to retrieve the post!'})
    }
}

export const getComments = async (req, res) => {
    const { postId } = req.params

    try {
        const comments = await Comment.find({ parentPost: postId, parentComment: null })
            .populate('author', 'nickname profilePicture')

        if (!comments.length)
            return res.status(200).json({ message: 'No comments found for this post!', comments: [] })

        res.status(200).json({ message: 'Comments retrieved successfully!', comments })
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Comment retrieval error: Unable to retrieve comments!', err })
    }
}

export const getPostsByUser = async (req, res) => {
    const { userId } = req.params

    try {
        const user = await User.findById( userId )

        if (!user)
            return res.status(400).json({message: 'No user found with the provided user ID!'})

        const posts = await Post.find({ author: userId })
            .populate('author', 'username profilePicture')
            .sort({ createdAt: -1 })

        if (!posts.length)
            return res.status(200).json({ message: 'No posts found for this user!', posts: [] })

        res.status(200).json({ message: 'Posts retrieved successfully!', posts })
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Post retrieval error: Unable to retrieve posts!', err })
    }
}

export const deletePost = async (req, res) => {
    const post = req.resource

    try {
        if (!post)
            return res.status(400).json({ message: 'Post not found!' })

        await Comment.deleteMany({ parentPost: post._id })
        await Post.findByIdAndDelete(post._id)

        res.status(200).json({ message: 'Post deleted successfully!' })
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Post deletion error: Unable to delete the post!', err })
    }
}
