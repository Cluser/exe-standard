import { Socket } from 'socket.io';

export interface SocketIOMessage<T> {
    socket: Socket;
    message: string;
    data?: T;
}

export interface SocketIOMessages {
    AFTER_INIT: string;
    CONNECTED: string;
    DISCONNECTED: string;
    IDENTITY: string;
}

export const SOCKET_IO_MESSAGES: SocketIOMessages = {
    AFTER_INIT: 'AFTER_INIT',
    CONNECTED: 'CONNECTED',
    DISCONNECTED: 'DISCONNECTED',
    IDENTITY: 'IDENTITY'
};

