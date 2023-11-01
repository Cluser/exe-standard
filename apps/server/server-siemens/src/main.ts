import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';
import { MICROSERVICES } from '@exe/server/shared/config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, MICROSERVICES.SERVER_SIEMENS as MicroserviceOptions);
  
  await app.listen();
}
bootstrap();