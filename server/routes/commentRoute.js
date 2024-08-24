import express from 'express';
import {Comment} from "../models/Comment.js";
import {authMiddleware, checkOwnership} from "../middlewares/authMiddlewares.js";
import {deleteComment, getReplies, likeComment, replyComment, updateComment} from "../controllers/commentController.js";
import {validateComment, validateReply} from "../middlewares/validationMiddlewares.js";

const router = express.Router()

router.post('/reply/:commentId', authMiddleware, validateReply, replyComment)
router.post('/like/:commentId', authMiddleware, likeComment)
router.get('/:commentId/replies', getReplies)
router.delete('/:commentId', authMiddleware, checkOwnership(Comment, 'commentId'), deleteComment)
router.patch('/:commentId', authMiddleware, checkOwnership(Comment, 'commentId'), validateComment, updateComment)

export {router as commentRoute}