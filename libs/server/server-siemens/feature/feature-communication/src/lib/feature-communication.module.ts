import { Module } from '@nestjs/common';
import { FeatureCommunicationController } from './feature-communication.controller';
import { PlcSiemensModule } from '@exe/server/server-siemens/shared/plc-siemens';

@Module({
  imports: [PlcSiemensModule],
  controllers: [FeatureCommunicationController],
  providers: [],
  exports: []
})
export class FeatureCommunicationModule {}
