import { Module } from '@nestjs/common';
import { AuthKeycloakModule } from '@exe/server/server-api/core/auth-keycloak';
// import { LoggerPinoModule } from '@exe/server/server-api/core/logger-pino';
import { SocketIoModule } from '@exe/server/server-api/shared/socket-io';

@Module({
  imports: [
    AuthKeycloakModule,
    // LoggerPinoModule,
    SocketIoModule
  ],
  exports: [
    AuthKeycloakModule,
    // LoggerPinoModule,
    SocketIoModule
  ]
})
export class CoreModule {}
