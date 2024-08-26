import { Server as SocketIOServer } from 'socket.io';

export function configureSocket(server) {
    const io = new SocketIOServer(server, {
        cors: {
            origin: "http://localhost:5173",
            methods: ["GET", "POST", "DELETE"],
            credentials: true
        }
    })

    io.on('connection', (socket) => {
        console.log('A user connected:', socket.id)

        socket.on('disconnect', () => console.log('User disconnected:', socket.id))

    })

    return io
}
