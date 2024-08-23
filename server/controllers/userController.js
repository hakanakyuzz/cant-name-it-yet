import {User} from '../models/User.js';
import bcrypt from "bcrypt";
import {generateAccessToken, generateRefreshToken} from "../utils/tokenUtils.js";

export const registerUser = async (req, res) => {
    const { email, password, nickname } = req.body

    try {
        const userExist = await User.findOne({ email })
        if (userExist)
            return res.status(400).json({ message: 'User already exists!' })

        const nicknameExist = await User.findOne({ nickname })
        if (nicknameExist)
            return res.status(400).json({ message: 'This nickname already exists!' })

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const user = await User.create({
            ...req.body,
            password: hashedPassword
        })

        const accessToken = generateAccessToken(user)
        const refreshToken = generateRefreshToken(user)

        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'Strict',
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
        })

        res.status(201).json({ message: "Registration successful!", accessToken, user })
    } catch (err) {
        console.log(err)
        res.status(500).send('Registration error: Unable to complete user registration!')
    }
}

export const loginUser = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.findOne({ email })
        if (!user)
            return res.status(400).json({ message: 'Login failed: No user found with the provided email address!' })

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch)
            return res.status(400).json({ message: 'Invalid password!' })

        const accessToken = generateAccessToken(user)
        const refreshToken = generateRefreshToken(user)

        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'Strict',
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
        })

        res.status(200).json({ message: "Login successful!", accessToken })
    } catch (err) {
        console.log(err)
        res.status(500).send('Login error: Unable to log in the user!')
    }
}

export const getUser = async (req, res) => {
    const { userId } = req.params

    try {
        const user = await User.findById( userId )

        if (!user)
            return res.status(400).json({ message: 'User not found with the provided user ID!' })

        res.status(200).json({ message: "User found successfully!", user })
    } catch (err) {
        console.log(err)
        res.status(500).send('Retrieval error: Unable to retrieve user information!')
    }
}

export const deleteUser = async (req, res) => {
    const userId = req.resource._id

    try {
        await User.findByIdAndDelete(userId)

        res.status(200).json({ message: 'User deleted successfully!' })
    } catch (err) {
        console.log(err)
        res.status(500).send('Deletion error: Unable to delete the user!')
    }
}

export const logoutUser = async (req, res) => {
    try {
        res.status(200).json({ message: "Logout successful!" })
    } catch (err) {
        console.log(err)
        res.status(500).send('Logout error: Unable to log out the user!')
    }
}
