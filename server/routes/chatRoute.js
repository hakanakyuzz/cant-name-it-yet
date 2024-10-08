import express from 'express';
import { authMiddleware } from '../middlewares/auth.js';
import { createChat, getChats, deleteChat } from '../controllers/chatController.js';

const router = express.Router()

router.post('/:participantId', authMiddleware, createChat)
router.get('/', authMiddleware, getChats)
router.delete('/:chatId', authMiddleware, deleteChat)

export { router as chatRoute }