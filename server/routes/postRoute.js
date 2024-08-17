import express from 'express';
import {
    commentPost,
    createPost,
    getComments,
    getPost,
    getPostsByUser,
    likePost
} from "../controllers/postController.js";
import {authMiddleware} from "../middlewares/middlewares.js";

const router = express.Router()

router.post('/create', authMiddleware, createPost)
router.post('/like/:postId', authMiddleware, likePost)
router.post('/comment/:postId', authMiddleware, commentPost)
router.get('/:postId', getPost)
router.get('/:postId/comments', getComments)
router.get('/:userId/posts', getPostsByUser)

export {router as postRoute}