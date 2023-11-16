import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { FeatureFileUtilsService } from './feature-file-utils.service';
import { GetFilesDto } from './dtos';



@Controller()
export class FeatureFilUtilsController {  

  constructor(private featureFileUtilsService: FeatureFileUtilsService) {}

  @MessagePattern('getFiles')
  getFiles(@Payload() payload: GetFilesDto): Promise<any> {
    console.log(payload);
    return this.featureFileUtilsService.getFiles();
  }
}

