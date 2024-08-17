import express from 'express';
import {commentPost, createPost, likePost} from "../controllers/postController.js";
import {authMiddleware} from "../middlewares/authMiddleware.js";

const router = express.Router()

router.post('/create', authMiddleware, createPost)
router.post('/like/:postId', authMiddleware, likePost)
router.post('/comment/:postId', authMiddleware, commentPost)

export {router as postRoute}