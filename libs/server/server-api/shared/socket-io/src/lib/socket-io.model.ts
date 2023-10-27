import { Socket } from 'socket.io';

export interface SocketIOMessage<T> {
    socket: Socket;
    message: string;
    data?: T;
}

export interface SocketIOMessages {
    IDENTITY: string;
}

export const SOCKET_IO_MESSAGES: SocketIOMessages = {
    IDENTITY: 'IDENTITY'
};

