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

export const getPost  = async (req, res) => {
    const { postId } = req.params

    try {
        const post = await Post.findById( postId )

        if (!post)
            return res.status(400).json({message: 'Post could not be found!'})

        res.status(200).json({message: "Post found successfully!", post })
    } catch (err) {
        res.status(500).json({message: 'Something went wrong while getting the post!'})
        console.log(err)
    }
}

export const getComments = async (req, res) => {
    const { postId } = req.params

    try {
        const comments = await Comment.find({ parentPost: postId, parentComment: null })
            .populate('author', 'nickname profilePicture')

        if (!comments.length)
            return res.status(200).json({ message: 'No comments found!', comments: [] })

        res.status(200).json({ message: 'Comments retrieved successfully!', comments })
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong while retrieving comments!', err })
        console.log(err)
    }
}

export const getPostsByUser = async (req, res) => {
    const userId = req.user.id

    try {
        const user = await findById( userId )

        if (!user)
            return res.status(400).json({message: 'User not found with that userId!'})

        const posts = await Post.find({ author: userId })
            .populate('author', 'username profilePicture')
            .sort({ createdAt: -1 })

        if (!posts.length)
            return res.status(200).json({ message: 'No posts found for this user!', posts: [] })

        res.status(200).json({ message: 'Posts retrieved successfully!', posts })
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong while retrieving posts!', err})
    }
}
