import { Module } from '@nestjs/common';
import { FeatureFileUploadModule } from '@exe/server/server-files/feature/feature-file-upload';
import { FeatureFileDownloadModule } from '@exe/server/server-files/feature/feature-file-download';

@Module({
  imports: [FeatureFileUploadModule, FeatureFileDownloadModule],
  controllers: [],
  providers: []
})
export class AppModule {}
