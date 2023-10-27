import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { Socket } from 'socket.io';
import { SOCKET_IO_MESSAGES } from './socket-io.model';

@Injectable()
export class SocketIOService {

    private _sockets: Socket[] = [];

    getSockets(): Socket[] {
        return this._sockets;
    }

    handleAfterInit(socket: Socket): Observable<void> {
        console.log({ socketId: socket.id, message: 'AFTER_INIT'})
        return of()
    }

    handleConnection(socket: Socket): Observable<void> {
        console.log({ socketId: socket.id, message: 'CONNECTED'})
        this._sockets.push(socket);
        return of()
    }

    handleDisconnect(socket: Socket): Observable<void> {
        console.log({ socketId: socket.id, message: 'DISCONNECTED'})
        this._sockets = this._sockets.filter(s => s.id !== socket.id);
        return of()
    }

    handleIdentity(socket: Socket, data: string): Observable<string> {
        console.log({ socketId: socket.id, message: SOCKET_IO_MESSAGES.IDENTITY, data: data})
        return of(data);
    }
}