import { Module } from '@nestjs/common';
import { CoreModule } from '@exe/server/server-siemens/core/core';
import { FeatureCommunicationModule } from '@exe/server/server-siemens/feature/feature-communication';

@Module({
  imports: [
    CoreModule,
    FeatureCommunicationModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
