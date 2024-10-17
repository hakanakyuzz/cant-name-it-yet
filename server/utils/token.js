import jwt from 'jsonwebtoken';

export const generateAccessToken = (user) => {
    return jwt.sign(
        { user: { id: user._id, tokenVersion: user.tokenVersion } },
        process.env.ACCESS_TOKEN,
        { expiresIn: '7d' } //update before production
    )
}

export const generateRefreshToken = (user) => {
    return jwt.sign(
        { user: { id: user._id, tokenVersion: user.tokenVersion } },
        process.env.REFRESH_TOKEN,
        { expiresIn: '7d' }
    )
}