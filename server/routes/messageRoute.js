import express from 'express';
import { sendMessage, getMessages, deleteMessage } from '../controllers/messageController.js';
import { authMiddleware } from '../middlewares/authMiddlewares.js';
import {notifyUserMessage} from "../middlewares/notificationMiddlewares.js";

const router = express.Router()

router.post('/send/:chatId', authMiddleware, sendMessage, notifyUserMessage)
router.get('/:chatId', authMiddleware, getMessages)
router.delete('/:messageId', authMiddleware, deleteMessage)

export { router as messageRoute }