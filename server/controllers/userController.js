import {User} from '../models/User.js';
import bcrypt from "bcrypt";

export const createUser = async (req, res) => {
    const { email, password } = req.body
    const userExist = await User.findOne({ email })

    try {
        if (userExist)
            return res.status(400).json({message: 'User already exists!'})
        else {
            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(password, salt)

            const user = await User.create({
                ...req.body,
                password: hashedPassword
            })

            res.status(201).json({message: "User registered successfully!", user})
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Something went wrong while creating user!')
    }
}
