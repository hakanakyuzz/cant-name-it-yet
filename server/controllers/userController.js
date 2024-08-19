import {User} from '../models/User.js';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {generateAccessToken, generateRefreshToken} from "../utils/tokenUtils.js";

export const refreshToken = async (req, res) => {
    const refreshToken = req.header('Authorization').replace('Bearer ', '')

    if (!refreshToken)
        return res.status(401).json({ message: 'No token provided!' })

    try {
        const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN)
        const user = await User.findById(decoded.user.id)

        if (!user || user.tokenVersion !== decoded.user.tokenVersion)
            return res.status(403).json({ message: 'Invalid token!' })

        const newAccessToken = generateAccessToken(user)
        res.status(200).json({ accessToken: newAccessToken })
    } catch (err) {
        res.status(403).json({ message: 'Somthing went wrong while refreshing the token!', err })
        console.log(err)
    }
}

export const registerUser = async (req, res) => {
    const { email, password } = req.body

    try {
        const userExist = await User.findOne({ email })

        if (userExist)
            return res.status(400).json({message: 'User already exists!'})

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const user = await User.create({
            ...req.body,
            password: hashedPassword
        })

        const accessToken = generateAccessToken(user)
        const refreshToken = generateRefreshToken(user)

        res.status(201).json({message: "User registered successfully!", accessToken, refreshToken, user})

    } catch (err) {
        res.status(500).send('Something went wrong while registering user!')
        console.log(err)
    }
}

export const loginUser = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.findOne({ email })
        if (!user)
            return res.status(400).json({ message: 'Invalid username!' })

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch)
            return res.status(400).json({ message: 'Invalid password!' })

        const accessToken = generateAccessToken(user)
        const refreshToken = generateRefreshToken(user)

        res.status(200).json({ message: "User logged in successfully!", accessToken, refreshToken })
    } catch (err) {
        res.status(500).send('Something went wrong while logging user!')
        console.log(err)
    }
}

export const getUser = async (req, res) => {
    const { userId } = req.params

    try {
        const user = await User.findById( userId )

        if (!user)
            return res.status(400).json({ message: 'User could not be found!' })

        res.status(200).json({ message: "User found successfully!", user })
    } catch (err) {
        res.status(500).send('Something went wrong while getting the user!')
        console.log(err)
    }
}

export const deleteUser = async (req, res) => {
    const userId = req.resource._id

    try {
        await User.findByIdAndDelete(userId)

        res.status(200).json({ message: 'User deleted successfully!' })
    } catch (err) {
        res.status(500).send('Something went wrong while deleting the user!')
        console.log(err)
    }
}