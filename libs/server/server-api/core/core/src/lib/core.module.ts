import { Module } from '@nestjs/common';
import { AuthKeycloakModule } from '@exe/server/server-api/core/auth-keycloak';
import { LoggerPinoModule } from '@exe/server/server-api/core/logger-pino';

@Module({
  imports: [
    AuthKeycloakModule,
    LoggerPinoModule
  ],
  exports: [
    AuthKeycloakModule,
    LoggerPinoModule
  ]
})
export class CoreModule {}
