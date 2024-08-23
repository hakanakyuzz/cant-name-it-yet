import express from 'express';
import {User} from "../models/User.js"
import {authMiddleware, checkOwnership, clearCookiesMiddleware} from "../middlewares/middlewares.js";
import {
    deleteUser,
    getUser,
    loginUser,
    logoutUser,
    registerUser, updateEmail, updatePassword,
    updateProfile
} from "../controllers/userController.js";

const router = express.Router()

router.post('/register' , registerUser)
router.post('/login', loginUser)
router.post('/logout', authMiddleware, clearCookiesMiddleware, logoutUser)
router.get('/:userId', getUser)
router.delete('/:userId', authMiddleware, checkOwnership(User, 'userId'), deleteUser)
router.patch('/:userId', authMiddleware, checkOwnership(User, 'userId'), updateProfile)
router.put('/updateEmail/:userId', authMiddleware, checkOwnership(User, 'userId'), updateEmail)
router.put('/updatePassword/:userId', authMiddleware, checkOwnership(User, 'userId'), updatePassword)

export {router as userRoute}