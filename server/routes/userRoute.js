import express from 'express';
import {deleteUser, getUser, loginUser, refreshToken, registerUser} from "../controllers/userController.js";
import {authMiddleware, checkOwnership} from "../middlewares/middlewares.js";
import {User} from "../models/User.js";

const router = express.Router()

router.post('/refresh-token', refreshToken)
router.post('/register' , registerUser)
router.post('/login', loginUser)
router.get('/:userId', getUser)
router.delete('/:userId', authMiddleware, checkOwnership(User, 'userId'), deleteUser)

export {router as userRoute}