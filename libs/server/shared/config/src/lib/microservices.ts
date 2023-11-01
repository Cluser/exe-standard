import { ClientProviderOptions, Transport } from '@nestjs/microservices';

export interface Microservices {
    SERVER_SIEMENS: ClientProviderOptions;
}

export const MICROSERVICES: Microservices = {
    SERVER_SIEMENS: {
        name: 'SERVER_SIEMENS',
        transport: Transport.TCP,
        options: {
            host: 'localhost',
            port: 3001
        }
    }
}