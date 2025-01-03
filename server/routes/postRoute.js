import express from 'express';
import { Post } from "../models/Post.js";
import { authMiddleware, checkOwnership } from "../middlewares/auth.js";
import { notifyPostComment, notifyPostLike } from "../middlewares/notification.js";
import { validateComment, validatePost } from "../middlewares/validation.js";
import {
    commentPost,
    createPost,
    deletePost,
    getComments,
    getPost,
    getPostsByFollowed,
    getPostsByUser,
    likePost,
    updatePost
} from "../controllers/postController.js";

const router = express.Router()

router.post('/create', authMiddleware, validatePost, createPost)
router.post('/like/:postId', authMiddleware, likePost, notifyPostLike)
router.post('/comment/:postId', authMiddleware, validateComment, commentPost, notifyPostComment)
router.get('/followed', authMiddleware, getPostsByFollowed)
router.get('/:postId', getPost)
router.get('/:postId/comments', getComments)
router.get('/:userId/posts', getPostsByUser)
router.delete('/:postId', authMiddleware, checkOwnership(Post, 'postId'), deletePost)
router.patch('/:postId', authMiddleware, checkOwnership(Post, 'postId'), validatePost, updatePost)

export {router as postRoute}