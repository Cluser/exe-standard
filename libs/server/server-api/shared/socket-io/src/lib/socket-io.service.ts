import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { Socket } from 'socket.io';
import { SOCKET_IO_MESSAGES, SocketIOMessage } from './socket-io.model';

@Injectable()
export class SocketIOService {

    private _sockets: Socket[] = [];

    getSockets(): Socket[] {
        return this._sockets;
    }

    handleAfterInit(socket: Socket): Observable<SocketIOMessage<null>> {
        return of({ socket, message: SOCKET_IO_MESSAGES.AFTER_INIT })
    }

    handleConnection(socket: Socket): Observable<SocketIOMessage<null>> {
        this._sockets.push(socket);
        return of({ socket, message: SOCKET_IO_MESSAGES.CONNECTED })
    }

    handleDisconnect(socket: Socket): Observable<SocketIOMessage<null>> {
        this._sockets = this._sockets.filter(s => s.id !== socket.id);
        return of({ socket, message: SOCKET_IO_MESSAGES.DISCONNECTED })
    }

    handleIdentity(socket: Socket, data: string): Observable<SocketIOMessage<string>> {
        return of({ socket, message: SOCKET_IO_MESSAGES.IDENTITY, data });
    }
}