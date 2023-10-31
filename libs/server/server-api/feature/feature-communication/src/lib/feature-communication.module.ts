import { Module } from '@nestjs/common';
import { FeatureCommunicationController } from './feature-communication.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'SERVER_SIEMENS',
        transport: Transport.TCP,
        options: {
          host: 'localhost',
          port: 3001,
        },
      }
    ]),
  ],
  controllers: [FeatureCommunicationController],
  providers: [],
  exports: []
})
export class FeatureCommunicationModule {}
