import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { FeatureFileDownloadService } from './feature-file-download.service';
import { DownloadFileDto } from './dtos';

@Controller()
export class FeatureFileDownloadController {
  constructor(private featureFileDownloadService: FeatureFileDownloadService) {}

  @MessagePattern('downloadFile')
  downloadFile(@Payload() payload: DownloadFileDto): Promise<any> {
    return this.featureFileDownloadService.downloadFile(payload);
  }

  @MessagePattern('downloadFiles')
  async downloadFiles(@Payload() payload: DownloadFileDto[]): Promise<any> {
    return this.featureFileDownloadService.downloadFiles(payload);
  }
}
