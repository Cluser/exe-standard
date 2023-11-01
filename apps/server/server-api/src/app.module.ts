import { Module } from '@nestjs/common';
import { CoreModule } from '@exe/server/server-api/core/core';
import { FeatureUserModule } from '@exe/server/server-api/feature/feature-user';
import { FeatureCommunicationModule } from '@exe/server/server-api/feature/feature-communication';

@Module({
  imports: [
    CoreModule,
    FeatureUserModule,
    FeatureCommunicationModule
  ]
})
export class AppModule {}
