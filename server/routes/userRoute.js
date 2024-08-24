import express from 'express';
import {User} from "../models/User.js"
import {authLimiter, authMiddleware, checkOwnership, clearCookiesMiddleware} from "../middlewares/authMiddlewares.js";
import {
    deleteUser,
    followUser,
    getUser,
    loginUser,
    logoutUser,
    registerUser,
    updateEmail,
    updateNickname,
    updatePassword,
    updateProfile
} from "../controllers/userController.js";
import {
    validateUserEmail,
    validateUserLogin,
    validateUserNickname,
    validateUserPassword,
    validateUserProfile,
    validateUserRegistration
} from "../middlewares/validationMiddlewares.js";

const router = express.Router()

router.post('/register', authLimiter, validateUserRegistration, registerUser)
router.post('/login', authLimiter, validateUserLogin, loginUser)
router.post('/logout', authLimiter, authMiddleware, clearCookiesMiddleware, logoutUser)
router.get('/:userId', getUser)
router.delete('/:userId', authMiddleware, checkOwnership(User, 'userId'), deleteUser)
router.patch('/:userId', authMiddleware, checkOwnership(User, 'userId'), validateUserProfile, updateProfile)
router.put('/updateNickname/:userId', authLimiter, authMiddleware, checkOwnership(User, 'userId'), validateUserNickname, updateNickname)
router.put('/updateEmail/:userId', authLimiter, authMiddleware, checkOwnership(User, 'userId'), validateUserEmail, updateEmail)
router.put('/updatePassword/:userId', authLimiter, authMiddleware, checkOwnership(User, 'userId'), validateUserPassword, updatePassword)
router.post('/follow/:userId', authMiddleware, followUser)


export {router as userRoute}