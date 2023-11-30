import { Module } from '@nestjs/common';
import { FeatureFileUploadModule } from '@exe/server/server-files/feature/feature-file-upload';
import { FeatureFileDownloadModule } from '@exe/server/server-files/feature/feature-file-download';
import { FeatureFileUtilsModule } from '@exe/server/server-files/feature/feature-file-utils';

@Module({
  imports: [
    FeatureFileUploadModule, 
    FeatureFileDownloadModule, 
    FeatureFileUtilsModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
