import express from 'express';
import { authMiddleware } from '../middlewares/auth.js';
import { notifyUserMessage } from "../middlewares/notification.js";
import { sendMessage, getMessages, deleteMessage } from '../controllers/messageController.js';

const router = express.Router()

router.post('/send/:chatId', authMiddleware, sendMessage, notifyUserMessage)
router.get('/:chatId', authMiddleware, getMessages)
router.delete('/:messageId', authMiddleware, deleteMessage)

export { router as messageRoute }