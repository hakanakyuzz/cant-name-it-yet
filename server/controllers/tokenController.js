import jwt from "jsonwebtoken";
import {User} from "../models/User.js";
import {generateAccessToken, generateRefreshToken} from "../utils/tokenUtils.js";

export const refreshToken = async (req, res) => {
    const refreshToken = req.cookies.refreshToken

    if (!refreshToken)
        return res.status(401).json({ message: 'No token provided, authorization denied!' })

    try {
        const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN)
        const user = await User.findById(decoded.user.id)

        if (!user)
            return res.status(403).json({ message: 'User not found!' })

        if (user.tokenVersion !== decoded.user.tokenVersion)
            return res.status(403).json({ message: 'Token version mismatch!' })

        const newAccessToken = generateAccessToken(user)
        const newRefreshToken = generateRefreshToken(user)

        res.cookie('refreshToken', newRefreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'Strict',
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
        })

        res.status(200).json({ accessToken: newAccessToken })
    } catch (err) {
        res.status(403).json({ message: 'Token refresh error: Unable to refresh the token!', err })
        console.log(err)
    }
}
