import express from 'express';
import {Post} from "../models/Post.js";
import {authMiddleware, checkOwnership} from "../middlewares/middlewares.js";
import {
    commentPost,
    createPost,
    deletePost,
    getComments,
    getPost,
    getPostsByUser,
    likePost,
    updatePost
} from "../controllers/postController.js";

const router = express.Router()

router.post('/create', authMiddleware, createPost)
router.post('/like/:postId', authMiddleware, likePost)
router.post('/comment/:postId', authMiddleware, commentPost)
router.get('/:postId', getPost)
router.get('/:postId/comments', getComments)
router.get('/:userId/posts', getPostsByUser)
router.delete('/:postId', authMiddleware, checkOwnership(Post, 'postId'), deletePost)
router.patch('/:postId', authMiddleware, checkOwnership(Post, 'postId'), updatePost)

export {router as postRoute}