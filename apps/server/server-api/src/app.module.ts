import { Module } from '@nestjs/common';
import { FeatureUserModule } from '@exe/server/server-api/feature/feature-user';

@Module({
  imports: [FeatureUserModule]
})
export class AppModule {}
