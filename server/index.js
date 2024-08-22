import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieParser from "cookie-parser";
import {userRoute} from "./routes/userRoute.js";
import {postRoute} from "./routes/postRoute.js";
import {commentRoute} from "./routes/commentRoute.js";
import {tokenRoute} from "./routes/tokenRoute.js";

dotenv.config()

const app = express()

app.use(cookieParser())
app.use(express.json())

mongoose.connect(process.env.DATABASE_URL)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log('Could not connect to MongoDB!', err))

app.use('/api/user', userRoute)
app.use('/api/post', postRoute)
app.use('/api/comment', commentRoute)
app.use('/api/token', tokenRoute)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Listening on ${PORT}`))