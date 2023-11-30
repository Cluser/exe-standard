import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { FeatureCommunicationService } from './feature-communication.service';

@Controller()
export class FeatureCommunicationController {

  constructor(private featureCommunicationService: FeatureCommunicationService) {}

  @MessagePattern('isConnected')
  isConnected(): Observable<boolean> {
    return this.featureCommunicationService.isConnected();
  }

  @MessagePattern('connect')
  connect(): Observable<boolean> {
    return this.featureCommunicationService.connect();
  }

  @MessagePattern('disconnect')
  disconnect(): Observable<boolean> {
    return this.featureCommunicationService.disconnect();
  }
  
  @MessagePattern('readData')
  readData(): Observable<boolean> {
    return this.featureCommunicationService.readData();
  }
  
  @MessagePattern('writeData')
  writeData(): Observable<boolean> {
    return this.featureCommunicationService.writeData();
  }
}
