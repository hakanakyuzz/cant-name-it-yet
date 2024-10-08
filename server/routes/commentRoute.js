import express from 'express';
import { Comment } from "../models/Comment.js";
import { authMiddleware, checkOwnership } from "../middlewares/auth.js";
import { notifyCommentLike, notifyCommentReply } from "../middlewares/notification.js";
import { validateComment, validateReply } from "../middlewares/validation.js";
import { deleteComment, getReplies, likeComment, replyComment, updateComment } from "../controllers/commentController.js";

const router = express.Router()

router.post('/reply/:commentId', authMiddleware, validateReply, replyComment, notifyCommentReply)
router.post('/like/:commentId', authMiddleware, likeComment, notifyCommentLike)
router.get('/:commentId/replies', getReplies)
router.delete('/:commentId', authMiddleware, checkOwnership(Comment, 'commentId'), deleteComment)
router.patch('/:commentId', authMiddleware, checkOwnership(Comment, 'commentId'), validateComment, updateComment)

export {router as commentRoute}