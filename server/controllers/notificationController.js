import { Notification } from '../models/Notification.js';

export const getNotifications = async (req, res) => {
    const userId = req.user.id

    try {
        const notifications = await Notification.find({ targetUser: userId })
            .populate('user', 'nickname profilePicture')
            .sort({ createdAt: -1 })

        res.status(200).json({ message: 'Notification retrieving successful!', notifications })
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving notifications!', err })
    }
}

export const markAsRead = async (req, res) => {
    const userId = req.user.id
    const { notificationId } = req.params

    try {
        const notification = await Notification.findById(notificationId)
        if (!notification || notification.targetUser.toString() !== userId)
            return res.status(404).json({ message: 'Notification not found or unauthorized!' })

        if (notification.read === false) {
            notification.read = true
            await notification.save()

            return res.status(200).json({ message: 'Notification marked as read!', notification })
        } else
            return res.status(200).json({ message: 'There is no notification to be marked as read!', notification })

    } catch (err) {
        res.status(500).json({ message: 'Error marking notification as read!', err })
    }
}