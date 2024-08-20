import express from 'express';
import {authMiddleware, checkOwnership} from "../middlewares/middlewares.js";
import {deleteComment, getReplies, likeComment, replyComment} from "../controllers/commentController.js";
import {Comment} from "../models/Comment.js";

const router = express.Router()

router.post('/reply/:commentId', authMiddleware, replyComment)
router.post('/like/:commentId', authMiddleware, likeComment)
router.get('/:commentId/replies', getReplies)
router.delete('/:commentId', authMiddleware, checkOwnership(Comment, 'commentId'), deleteComment)

export {router as commentRoute}