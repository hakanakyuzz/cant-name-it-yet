import express from 'express';
import {createPost, likePost} from "../controllers/postController.js";
import {authMiddleware} from "../middlewares/authMiddleware.js";

const router = express.Router()

router.post('/create', authMiddleware, createPost)
router.post('/like/:postId', authMiddleware, likePost)

export {router as postRoute}