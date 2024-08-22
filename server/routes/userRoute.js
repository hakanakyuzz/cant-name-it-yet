import express from 'express';
import {User} from "../models/User.js"
import {authMiddleware, checkOwnership} from "../middlewares/middlewares.js";
import {deleteUser, getUser, loginUser, registerUser} from "../controllers/userController.js";

const router = express.Router()

router.post('/register' , registerUser)
router.post('/login', loginUser)
router.get('/:userId', getUser)
router.delete('/:userId', authMiddleware, checkOwnership(User, 'userId'), deleteUser)

export {router as userRoute}