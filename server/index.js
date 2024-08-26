import express from 'express';
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
import rateLimit from "express-rate-limit";
import cors from "cors";
import { userRoute } from "./routes/userRoute.js";
import { postRoute } from "./routes/postRoute.js";
import { commentRoute } from "./routes/commentRoute.js";
import { tokenRoute } from "./routes/tokenRoute.js";
import { notificationRoute } from "./routes/notificationRoute.js";
import { chatRoute } from "./routes/chatRoute.js";
import { messageRoute } from "./routes/messageRoute.js";
import { createServer } from 'http';
import { configureSocket } from "./services/socket.js";
import { connectDatabase } from "./services/database.js";

dotenv.config()

const app = express()

app.use(rateLimit({
    windowMs: 10 * 60 * 1000, // 10 minutes
    max: 100,
    message: 'Too many requests from this IP, please try again after 15 minutes!',
    headers: true
}))

app.use(cors({
    origin: 'http://localhost:5173',
    methods: 'GET,PUT,PATCH,POST,DELETE',
    credentials: true
}))

app.use(cookieParser())
app.use(express.json())

connectDatabase()

app.use('/api/user', userRoute)
app.use('/api/post', postRoute)
app.use('/api/comment', commentRoute)
app.use('/api/token', tokenRoute)
app.use('/api/notification', notificationRoute)
app.use('/api/chat', chatRoute)
app.use('/api/message', messageRoute)

const server = createServer(app)
export const io = configureSocket(server)

const PORT = process.env.PORT || 3000
server.listen(PORT, () => console.log(`Listening on ${PORT}`))