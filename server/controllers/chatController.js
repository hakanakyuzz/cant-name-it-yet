import { Chat } from '../models/Chat.js';
import { Message } from '../models/Message.js';

export const createChat = async (req, res) => {
    const {participantId} = req.params
    const userId = req.user.id

    try {
        let chat = await Chat.findOne({
            participants: { $all: [userId, participantId] }
        })

        if (!chat) {
            chat = new Chat({
                participants: [userId, participantId]
            })
            await chat.save()
        }

        res.status(201).json({ message: 'Chat created successfully!', chat })
    } catch (err) {
        res.status(500).json({ message: 'Error creating chat!', err })
    }
}

export const getChats = async (req, res) => {
    const userId = req.user.id

    try {
        const chats = await Chat.find({ participants: userId })
            .populate('participants', 'nickname profilePicture')
            .populate('lastMessage')
            .sort({ updatedAt: -1 })

        res.status(200).json({ message: 'Chats retrieved successfully!', chats })
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving chats', err })
    }
}

export const deleteChat = async (req, res) => {
    const { chatId } = req.params
    const userId = req.user.id

    try {
        const chat = await Chat.findById(chatId)

        if (!chat)
            return res.status(404).json({ message: 'Chat not found!' })

        const isParticipant = chat.participants.includes(userId)
        if (!isParticipant)
            return res.status(403).json({ message: 'You are not authorized to delete this chat!' })

        await chat.deleteOne()

        await Message.deleteMany({ chat: chatId })

        res.status(200).json({ message: 'Chat deleted successfully!' })
    } catch (err) {
        res.status(500).json({ message: 'Error deleting chat!', err })
    }
}
