import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import {userRoute} from "./routes/userRoute.js";
import {postRoute} from "./routes/postRoute.js";
import {commentRoute} from "./routes/commentRoute.js";
import cookieParser from "cookie-parser";

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

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Listening on ${PORT}`))
