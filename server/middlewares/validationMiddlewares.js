import {body, validationResult} from 'express-validator';

export const validateUserRegistration = [
    body('nickname').isString().withMessage('Nickname is required!'),
    body('name').isString().withMessage('Name is required!'),
    body('email').isEmail().withMessage('Please enter a valid email address!'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long!'),

    (req, res, next) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() })

        next()
    }
]

export const validateUserLogin = [
    body('email').isEmail().withMessage('Please enter a valid email address!'),
    body('password').notEmpty().withMessage('Password is required!'),
    (req, res, next) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() })

        next()
    }
]

export const validateUserProfile = [
    body('name').optional().isString().withMessage('Name must be a string!'),
    body('about').optional().isString().withMessage('About must be a string!'),
    body('profilePicture').optional().isURL().withMessage('Profile picture must be a valid URL!'),
    (req, res, next) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() })

        next()
    }
]

export const validateUserNickname = [
    body('nickname').isString().withMessage('Please enter a valid nickname!'),
    (req, res, next) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() })

        next()
    }
]

export const validateUserEmail = [
    body('email').isEmail().withMessage('Please enter a valid email address!'),
    (req, res, next) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() })

        next()
    }
]

export const validateUserPassword = [
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long!'),
    (req, res, next) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() })

        next()
    }
]

export const validatePost = [
    body('content').notEmpty().withMessage('Post content cannot be empty!'),
    (req, res, next) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() })

        next()
    }
]

export const validateComment = [
    body('content').notEmpty().withMessage('Comment content cannot be empty'),
    (req, res, next) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() })

        next()
    }
]

export const validateReply = [
    body('content').notEmpty().withMessage('Reply content cannot be empty'),
    (req, res, next) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() })

        next()
    }
]
