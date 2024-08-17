import express from 'express';
import {authMiddleware} from "../middlewares/middlewares.js";
import {getReplies, likeComment, replyComment} from "../controllers/commentController.js";

const router = express.Router()

router.post('/reply/:commentId', authMiddleware, replyComment)
router.post('/like/:commentId', authMiddleware, likeComment)
router.get('/:commentId/replies', getReplies)

export {router as commentRoute}