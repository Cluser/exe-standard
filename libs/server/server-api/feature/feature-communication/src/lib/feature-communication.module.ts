import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { MICROSERVICES } from '@exe/server/shared/config';
import { FeatureCommunicationController } from './feature-communication.controller';

@Module({
  imports: [
    ClientsModule.register([
      MICROSERVICES.SERVER_SIEMENS
    ]),
  ],
  controllers: [FeatureCommunicationController],
  providers: [],
  exports: []
})
export class FeatureCommunicationModule {}
