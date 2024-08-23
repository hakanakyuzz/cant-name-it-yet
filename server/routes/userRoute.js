import express from 'express';
import {User} from "../models/User.js"
import {authLimiter, authMiddleware, checkOwnership, clearCookiesMiddleware} from "../middlewares/middlewares.js";
import {
    deleteUser,
    getUser,
    loginUser,
    logoutUser,
    registerUser, updateEmail, updatePassword,
    updateProfile
} from "../controllers/userController.js";

const router = express.Router()

router.post('/register', authLimiter, registerUser)
router.post('/login', authLimiter, loginUser)
router.post('/logout', authLimiter, authMiddleware, clearCookiesMiddleware, logoutUser)
router.get('/:userId', getUser)
router.delete('/:userId', authMiddleware, checkOwnership(User, 'userId'), deleteUser)
router.patch('/:userId', authMiddleware, checkOwnership(User, 'userId'), updateProfile)
router.put('/updateEmail/:userId', authLimiter, authMiddleware, checkOwnership(User, 'userId'), updateEmail)
router.put('/updatePassword/:userId', authLimiter, authMiddleware, checkOwnership(User, 'userId'), updatePassword)

export {router as userRoute}