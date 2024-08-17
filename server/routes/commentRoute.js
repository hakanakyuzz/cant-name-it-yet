import express from 'express';
import {authMiddleware} from "../middlewares/authMiddleware.js";
import {likeComment, replyComment} from "../controllers/commentController.js";


const router = express.Router()

router.post('/reply/:commentId', authMiddleware, replyComment)
router.post('/like/:commentId', authMiddleware, likeComment)

export {router as commentRoute}