import express from 'express';
import { authMiddleware } from "../middlewares/auth.js";
import { getNotifications, markAsRead } from "../controllers/notificationController.js";

const router = express.Router()

router.get('/', authMiddleware, getNotifications)
router.get('/:notificationId', authMiddleware, markAsRead)

export {router as notificationRoute}