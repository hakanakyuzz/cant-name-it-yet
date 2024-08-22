import jwt from 'jsonwebtoken';
import {User} from "../models/User.js";

export const authMiddleware = async (req, res, next) => {
    const token = req.header('Authorization')

    if (!token)
        return res.status(401).json({ message: 'No token provided, authorization denied!' })

    try {
        const decoded = jwt.verify(token.replace('Bearer ', ''), process.env.ACCESS_TOKEN)
        const user = await User.findById(decoded.user.id)

        if (!user)
            return res.status(403).json({ message: 'User not found!' })

        if (user.tokenVersion !== decoded.user.tokenVersion)
            return res.status(403).json({ message: 'Token version mismatch!' })

        req.user = decoded.user
        next()
    } catch (err) {
        res.status(401).json({ message: 'Authentication error: Unable to authenticate the user!', err })
        console.log(err)
    }
}

export const checkOwnership = (model, resourceField) =>
    async (req, res, next) => {
        const userId = req.user.id
        const resourceId = req.params[resourceField]

        try {
            const resource = await model.findById(resourceId)

            if (!resource)
                return res.status(404).json({ message: `${model.modelName} not found!` })

            const isUserResource = model.modelName === 'User'

            if (isUserResource) {
                if (resource._id.toString() !== userId)
                    return res.status(403).json({ message: 'You are not authorized to access this user!' })
            }
            else
                if (resource.author.toString() !== userId)
                    return res.status(403).json({ message: `You are not authorized to access this ${model.modelName}!` })

            req.resource = resource

            next()
        } catch (err) {
            res.status(500).json({ message: 'Ownership verification error: Something went wrong with the ownership check!', err })
            console.log(err)
        }
    }
