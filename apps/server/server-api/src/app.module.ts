import { Module } from '@nestjs/common';
import { CoreModule } from '@exe/server/server-api/core/core';
import { FeatureHealthcheckModule } from '@exe/server/server-api/feature/feature-healthcheck';
import { FeatureUserModule } from '@exe/server/server-api/feature/feature-user';
import { FeatureCommunicationModule } from '@exe/server/server-api/feature/feature-communication';

@Module({
  imports: [
    CoreModule,
    FeatureHealthcheckModule,
    FeatureUserModule,
    FeatureCommunicationModule
  ]
})
export class AppModule {}
