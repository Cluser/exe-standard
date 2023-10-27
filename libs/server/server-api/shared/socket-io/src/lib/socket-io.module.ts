import { Module } from '@nestjs/common';
import { SocketIOGateway } from './socket-io.gateway';
import { SocketIOService } from './socket-io.service';

@Module({
  providers: [SocketIOGateway, SocketIOService]
})
export class SocketIoModule {}
