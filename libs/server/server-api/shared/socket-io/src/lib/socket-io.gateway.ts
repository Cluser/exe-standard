import { WebSocketGateway, OnGatewayConnection, WebSocketServer, OnGatewayDisconnect, OnGatewayInit } from '@nestjs/websockets';
import { SocketIOService } from './socket-io.service';
import { Server, Socket } from 'socket.io';
import { SubscribeMessage } from '@nestjs/websockets';
import { Observable } from 'rxjs';
import { SOCKET_IO_MESSAGES } from './socket-io.model';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class SocketIOGateway implements OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit {
  @WebSocketServer()
  // @ts-ignore
  private server: Server = new Server();

  constructor(private readonly socketIOService: SocketIOService) {}

  afterInit(socket: Socket): Observable<void> {
    return this.socketIOService.handleAfterInit(socket);
  }

  handleConnection(socket: Socket): Observable<void> {
    return this.socketIOService.handleConnection(socket);
  }

  handleDisconnect(socket: Socket): Observable<void> {
    return this.socketIOService.handleDisconnect(socket);
  }

  @SubscribeMessage(SOCKET_IO_MESSAGES.IDENTITY)
  identity(socket: Socket, data: string): Observable<string> {
    return this.socketIOService.handleIdentity(socket, data);
  }
}
