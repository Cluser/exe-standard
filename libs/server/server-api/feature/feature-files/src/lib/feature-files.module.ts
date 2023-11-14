import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { MICROSERVICES } from '@exe/server/shared/config';
import { FileUploadModule } from '@exe/server/server-api/shared/file-upload';
import { FeatureFilesController } from './feature-files.controller';

@Module({
  imports: [
    ClientsModule.register([
      MICROSERVICES.SERVER_FILES
    ]),
    FileUploadModule
  ],
  controllers: [FeatureFilesController]
})
export class FeatureFilesModule {}
