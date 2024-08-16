import { Post } from '../models/Post.js';

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
    }
}
