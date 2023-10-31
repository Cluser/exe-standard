import { Module } from '@nestjs/common';
import { FeatureCommunicationController } from './feature-communication.controller';

@Module({
  controllers: [FeatureCommunicationController],
  providers: [],
  exports: []
})
export class FeatureCommunicationModule {}
