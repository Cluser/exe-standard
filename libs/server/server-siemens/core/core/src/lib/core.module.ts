import { Module } from '@nestjs/common';
// import { LoggerPinoModule } from '@exe/server/server-api/core/logger-pino';

@Module({
  imports: [
    // LoggerPinoModule
  ],
  exports: [
    // LoggerPinoModule
  ]
})
export class CoreModule {}
