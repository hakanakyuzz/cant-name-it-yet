import express from 'express';
import { createChat, getChats, deleteChat } from '../controllers/chatController.js';
import { authMiddleware } from '../middlewares/authMiddlewares.js';

const router = express.Router()

router.post('/:participantId', authMiddleware, createChat)
router.get('/', authMiddleware, getChats)
router.delete('/:chatId', authMiddleware, deleteChat)

export { router as chatRoute }