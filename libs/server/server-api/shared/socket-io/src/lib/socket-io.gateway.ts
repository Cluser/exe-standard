import { WebSocketGateway, OnGatewayConnection, WebSocketServer, OnGatewayDisconnect, OnGatewayInit } from '@nestjs/websockets';
import { SocketIOService } from './socket-io.service';
import { Server, Socket } from 'socket.io';
import { SubscribeMessage } from '@nestjs/websockets';
import { Observable } from 'rxjs';
import { SOCKET_IO_MESSAGES, SocketIOMessage } from './socket-io.model';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class SocketIOGateway implements OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit {
  @WebSocketServer()
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  private server: Server = new Server();

  constructor(private readonly socketIOService: SocketIOService) {}

  afterInit(socket: Socket): Observable<SocketIOMessage<null>> {
    return this.socketIOService.handleAfterInit(socket);
  }

  handleConnection(socket: Socket): Observable<SocketIOMessage<null>> {
    return this.socketIOService.handleConnection(socket);
  }

  handleDisconnect(socket: Socket): Observable<SocketIOMessage<null>> {
    return this.socketIOService.handleDisconnect(socket);
  }

  @SubscribeMessage(SOCKET_IO_MESSAGES.IDENTITY)
  handleIdentity(socket: Socket, data: string): Observable<SocketIOMessage<string>> {
    return this.socketIOService.handleIdentity(socket, data);
  }
}
