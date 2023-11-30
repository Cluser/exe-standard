import { Module } from '@nestjs/common';
import { FeatureCommunicationController } from './feature-communication.controller';
import { FeatureCommunicationService } from './feature-communication.service';

@Module({
  imports: [],
  controllers: [FeatureCommunicationController],
  providers: [FeatureCommunicationService],
  exports: []
})
export class FeatureCommunicationModule {}
