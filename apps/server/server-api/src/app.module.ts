import { Module } from '@nestjs/common';
import { FeatureUserModule } from '@exe/server/server-api/feature/feature-user';
// import { LoggerPinoModule } from '@exe/server/shared/logger-pino';

@Module({
  imports: [
    // LoggerPinoModule, Turn off logging
    FeatureUserModule
  ]
})
export class AppModule {}
