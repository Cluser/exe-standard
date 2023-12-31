import { ClientProviderOptions, Transport } from '@nestjs/microservices';

const rabbitMQUrl = 'amqp://localhost:5672';

interface Microservices {
    SERVER_SIEMENS: ClientProviderOptions;
    SERVER_FILES: ClientProviderOptions
}

export const MICROSERVICES: Microservices = {
    SERVER_SIEMENS: {
        name: 'SERVER_SIEMENS',
        transport: Transport.RMQ,
        options: {
          urls: [
            rabbitMQUrl
          ],
          queue: 'SERVER_SIEMENS_QUEUE',
          queueOptions: {
            durable: false
          },
        }
    },
    SERVER_FILES: {
      name: 'SERVER_FILES',
      transport: Transport.RMQ,
      options: {
        urls: [
          rabbitMQUrl
        ],
        queue: 'SERVER_FILES_QUEUE',
        queueOptions: {
          durable: false
        },
      }
  }
}