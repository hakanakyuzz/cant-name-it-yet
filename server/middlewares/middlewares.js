import jwt from 'jsonwebtoken';

export const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization')

    if (!token)
        return res.status(401).json({ message: 'No token, authorization denied!' })

    try {
        const decoded = jwt.verify(token.replace('Bearer ', ''), process.env.JWT_SECRET)
        req.user = decoded.user
        next()
    } catch (err) {
        res.status(401).json({ message: 'Token is not valid', err })
        console.log(err)
    }
}

export const checkOwnership = (model, resourceField) =>
    async (req, res, next) => {
        const { userId } = req.user
        const resourceId = req.params[resourceField]

        try {
            const resource = await model.findById(resourceId)

            if (resource.author.toString() !== userId)
                return res.status(403).json({message: `You are not authorized to access this ${resourceField}`})

            req.resource = resource

            next()
        } catch (err) {
            res.status(500).json({ message: 'Something went wrong with ownership check', err })
            console.log(err)
        }
    }