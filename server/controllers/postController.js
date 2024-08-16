import { Post } from '../models/Post.js';
import { User } from '../models/User.js';

export const createPost = async (req, res) => {
    const { content, email } = req.body

    try {
        const user = await User.findOne({ email })
        if (!user)
            return res.status(404).json({ message: "User not found" })

        const post = await Post.create({
            author: user._id,
            content
        })

        res.status(201).json({ message: "Post created successfully!", post });
    } catch (err) {
        res.status(500).json({ message: "Something went wrong while creating the post!", err });
    }
};
