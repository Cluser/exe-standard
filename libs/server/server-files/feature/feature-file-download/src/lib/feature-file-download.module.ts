import { Module } from '@nestjs/common';
import { PrismaClientModule } from '@exe/server/server-files/core/prisma-client';
import { FeatureFileDownloadController } from './feature-file-download.controller';
import { FeatureFileDownloadService } from './feature-file-download.service';

@Module({
  imports: [PrismaClientModule],
  controllers: [FeatureFileDownloadController],
  providers: [FeatureFileDownloadService]
})
export class FeatureFileDownloadModule {}
