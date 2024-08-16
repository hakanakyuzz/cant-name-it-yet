import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import {userRoute} from "./routes/userRoute.js";
import {postRoute} from "./routes/postRoute.js";

dotenv.config()

const app = express()

app.use(express.json())

mongoose.connect(process.env.DATABASE_URL)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log('Could not connect to MongoDB!', err));

app.use('/api/user', userRoute)
app.use('/api/post', postRoute)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Listening on ${PORT}`))
