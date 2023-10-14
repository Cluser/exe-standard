import { Module } from '@nestjs/common';
import { CoreModule } from '@exe/server/server-api/core/core';
import { FeatureUserModule } from '@exe/server/server-api/feature/feature-user';

@Module({
  imports: [
    CoreModule,
    FeatureUserModule
  ]
})
export class AppModule {}
