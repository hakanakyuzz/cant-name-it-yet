import express from 'express';
import {deleteUser, getUser, loginUser, registerUser} from "../controllers/userController.js";
import {authMiddleware, checkOwnership} from "../middlewares/middlewares.js";
import {User} from "../models/User.js";

const router = express.Router()

router.post('/register' , registerUser)
router.post('/login', loginUser)
router.get('/profile/:userId', getUser)
router.delete('/:userId', authMiddleware, checkOwnership(User, 'userId'), deleteUser)

export {router as userRoute}