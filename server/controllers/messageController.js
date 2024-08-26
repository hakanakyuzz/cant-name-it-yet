import { Message } from '../models/Message.js';
import { Chat } from '../models/Chat.js';

export const sendMessage = async (req, res, next) => {
    const { content } = req.body
    const { chatId } = req.params
    const userId = req.user.id

    try {
        const chat = await Chat.findById(chatId)

        if (!chat)
             return res.status(403).json({ message: 'This chat does not exist!' })

        if (!chat.participants.includes(userId))
            return res.status(403).json({ message: 'Unauthorized to message to this chat!' })

        const msg = new Message({
            chat: chatId,
            sender: userId,
            content
        })
        await msg.save()

        chat.lastMessage = msg._id
        await chat.save()

        const io = req.app.get('io')
        io.to(chatId).emit('receive_message', {
            chatId,
            sender: userId,
            content,
            createdAt: msg.createdAt
        })

        req.chat = chat
        req.msgId = msg._id
        res.status(201).json({ message: 'Message sent successfully!', msg })

        next()
    } catch (err) {
        res.status(500).json({ message: 'Error sending message!', err })
    }
}

export const getMessages = async (req, res) => {
    const { chatId } = req.params
    const userId = req.user.id

    try {
        const chat = await Chat.findById(chatId)

        if (!chat)
            return res.status(403).json({ message: 'This chat does not exist!' })

        if (!chat.participants.includes(userId))
            return res.status(403).json({ message: 'Unauthorized for messaging it this chat!' })

        const messages = await Message.find({ chat: chatId })
            .populate('sender', 'nickname profilePicture')
            .sort({ createdAt: 1 })

        res.status(200).json({ message: 'Messages retrieved successfully!', messages })
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving messages!', err })
    }
}

export const deleteMessage = async (req, res) => {
    const { messageId } = req.params
    const userId = req.user.id

    try {
        const message = await Message.findById(messageId).populate('chat')

        if (!message)
            return res.status(404).json({ message: 'Message not found!' })

        const isSender = message.sender.toString() === userId
        const isParticipant = message.chat.participants.includes(userId)

        if (!isSender || !isParticipant)
            return res.status(403).json({ message: 'You are not authorized to delete this message!' })

        await message.deleteOne()

        res.status(200).json({ message: 'Message deleted successfully!' })
    } catch (err) {
        res.status(500).json({ message: 'Error deleting message!', err })
    }
}
