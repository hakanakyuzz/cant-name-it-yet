import {User} from '../models/User.js';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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

        const token = jwt.sign(
            { user: { id: user._id } },
            process.env.JWT_SECRET,
            { expiresIn: '1h'}
        )

        res.status(201).json({message: "User registered successfully!", token, user})

    } catch (err) {
        res.status(500).send('Something went wrong while registering user!')
    }
}

export const loginUser = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.findOne({ email })
        if (!user)
            return res.status(400).json({message: 'Invalid username!'})

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch)
            return res.status(400).json({ message: 'Invalid password!' })

        const token = jwt.sign(
            { user: { id: user._id } },
            process.env.JWT_SECRET,
            { expiresIn: '1h'}
        )
        res.status(200).json({ token })
    } catch (err) {
        res.status(500).send('Something went wrong while logging user!')
    }
}