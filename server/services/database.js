import mongoose from 'mongoose';

export function connectDatabase() {
    mongoose.connect(process.env.DATABASE_URL)
        .then(() => console.log('MongoDB Connected'))
        .catch((err) => console.error('Could not connect to MongoDB!', err))
}
