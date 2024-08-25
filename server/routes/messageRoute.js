import express from 'express';
import { sendMessage, getMessages, deleteMessage } from '../controllers/messageController.js';
import { authMiddleware } from '../middlewares/authMiddlewares.js';

const router = express.Router()

router.post('/send/:chatId', authMiddleware, sendMessage)
router.get('/:chatId', authMiddleware, getMessages)
router.delete('/:messageId', authMiddleware, deleteMessage)

export { router as messageRoute }