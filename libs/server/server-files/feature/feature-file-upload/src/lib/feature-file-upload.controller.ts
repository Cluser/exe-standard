import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { FeatureFileUploadService } from './feature-file-upload.service';
import { UploadFileDto } from './dtos';

@Controller()
export class FeatureFileUploadController {  

  constructor(private featureFileUplaodService: FeatureFileUploadService) {}

  /**
   * Uploads a file using the provided payload.
   * @param payload The payload containing the file to upload.
   * @returns A Promise that resolves when the file has been uploaded.
   */
  @MessagePattern('uploadFile')
  uploadFile(@Payload() payload: UploadFileDto): Promise<any> {
    return this.featureFileUplaodService.uploadFile(payload);
  }

  /**
   * Uploads files using the provided payload.
   * @param payload The payload containing the files to upload.
   * @returns A Promise that resolves when the files have been uploaded.
   */
  @MessagePattern('uploadFiles')
  uploadFiles(@Payload() payload: UploadFileDto[]): Promise<any> {
    return this.featureFileUplaodService.uploadFiles(payload);
  }
}

