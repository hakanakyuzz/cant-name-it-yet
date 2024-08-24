import {User} from '../models/User.js';
import bcrypt from "bcrypt";
import crypto from "crypto";
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

        const verificationToken = crypto.randomBytes(32).toString('hex');
        const verificationTokenExpires = Date.now() + 3600000; // 1 hour

        const user = await User.create({
            ...req.body,
            password: hashedPassword,
            verificationToken,
            verificationTokenExpires
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
        res.status(500).json({ message: 'Registration error: Unable to complete user registration!', err })
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
        res.status(500).json({ message: 'Login error: Unable to log in the user!', err })
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
        res.status(500).json({ message: 'Retrieval error: Unable to retrieve user information!', err })
    }
}

export const deleteUser = async (req, res) => {
    const userId = req.resource._id

    try {
        await User.findByIdAndDelete(userId)

        res.status(200).json({ message: 'User deleted successfully!' })
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Deletion error: Unable to delete the user!', err })
    }
}

export const logoutUser = async (req, res) => {
    try {
        res.status(200).json({ message: "Logout successful!" })
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Logout error: Unable to log out the user!', err })
    }
}

export const updateProfile = async (req, res) => {
    const user = req.resource
    const { name, about, profilePicture } = req.body

    try {
        if (name) user.name = name
        if (about) user.about = about
        if (profilePicture) user.profilePicture = profilePicture

        await user.save()

        res.status(200).json({ message: 'User profile updated successfully!', user })
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Update profile error: Unable to update the profile!', err })
    }
}

export const updateNickname = async (req, res) => {
    const user = req.resource
    const { nickname } = req.body

    try {
        const userExist = await User.findOne({ nickname })
        if (userExist)
            return res.status(400).json({ message: 'A user already exists with provided nickname!' })

        user.nickname = nickname
        user.tokenVersion += 1

        await user.save()

        res.status(200).json({ message: 'User nickname updated successfully!', user })
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Update nickname error: Unable to update the nickname!', err })
    }
}

export const updateEmail = async (req, res) => {
    const user = req.resource
    const { email } = req.body

    try {
        const userExist = await User.findOne({ email })
        if (userExist)
            return res.status(400).json({ message: 'A user already exists with provided email!' })

        user.email = email
        user.tokenVersion += 1

        await user.save()

        res.status(200).json({ message: 'User email updated successfully!', user })
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Update email error: Unable to update the email!', err })
    }
}

export const updatePassword = async (req, res) => {
    const user = req.resource
    const { password } = req.body

    try {
        const salt = await bcrypt.genSalt(10)
        user.password = await bcrypt.hash(password, salt)
        user.tokenVersion += 1

        await user.save()

        res.status(200).json({ message: 'User password updated successfully!', user })
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Update password error: Unable to update the password!', err })
    }
}

export const followUser = async (req, res) => {
    const userId = req.user.id
    const userToFollowId = req.params.userId

    try {
        const user = await User.findById(userId)
        const userToFollow = await User.findById(userToFollowId)

        if (!userToFollow)
            return res.status(404).json({ message: "User not found!" })

        const isFollowing = user.following.includes(userToFollowId)

        if (isFollowing) {
            console.log(user.following)
            user.following = user.following.filter(id => id.toString() !== userToFollowId)
            userToFollow.followers = userToFollow.followers.filter(id => id.toString() !== userId)
        } else {
            user.following.push(userToFollowId)
            userToFollow.followers.push(userId)
        }
        await user.save()
        await userToFollow.save()

        res.status(200).json({ message: `User ${isFollowing ? 'unfollowed' : 'followed'} successfully!` })
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Follow user error: Unable to follow the user!', err })
    }
}
