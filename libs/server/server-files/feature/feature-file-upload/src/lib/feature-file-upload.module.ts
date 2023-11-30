import { Module } from '@nestjs/common';
import { PrismaClientModule } from '@exe/server/server-files/core/prisma-client';
import { FeatureFileUploadController } from './feature-file-upload.controller';
import { FeatureFileUploadService } from './feature-file-upload.service';

@Module({
  imports: [PrismaClientModule],
  controllers: [FeatureFileUploadController],
  providers: [FeatureFileUploadService]
})
export class FeatureFileUploadModule {}
