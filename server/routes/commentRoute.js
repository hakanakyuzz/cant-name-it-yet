import express from 'express';
import {authMiddleware} from "../middlewares/authMiddleware.js";
import {replyComment} from "../controllers/commentController.js";

const router = express.Router()

router.post('/reply/:commentId', authMiddleware, replyComment)

export {router as commentRoute}