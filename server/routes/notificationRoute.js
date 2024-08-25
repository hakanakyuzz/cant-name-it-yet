import express from 'express';
import {getNotifications, markAsRead} from "../controllers/notificationController.js";
import {authMiddleware} from "../middlewares/authMiddlewares.js";

const router = express.Router()

router.get('/', authMiddleware, getNotifications)
router.get('/:notificationId', authMiddleware, markAsRead)

export {router as notificationRoute}