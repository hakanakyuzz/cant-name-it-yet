import express from 'express';
import {Comment} from "../models/Comment.js";
import {authMiddleware, checkOwnership} from "../middlewares/authMiddlewares.js";
import {deleteComment, getReplies, likeComment, replyComment, updateComment} from "../controllers/commentController.js";

const router = express.Router()

router.post('/reply/:commentId', authMiddleware, replyComment)
router.post('/like/:commentId', authMiddleware, likeComment)
router.get('/:commentId/replies', getReplies)
router.delete('/:commentId', authMiddleware, checkOwnership(Comment, 'commentId'), deleteComment)
router.patch('/:commentId', authMiddleware, checkOwnership(Comment, 'commentId'), updateComment)

export {router as commentRoute}