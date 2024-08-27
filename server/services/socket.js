import { Server as SocketIOServer } from 'socket.io';
import {socketController} from "./socketController.js";

export function configureSocket(server) {
    const io = new SocketIOServer(server, {
        cors: {
            origin: "http://localhost:5173",
            methods: ["GET", "POST", "DELETE"],
            credentials: true
        }
    })
    io.on('connection', socket => socketController(socket))

    return io
}