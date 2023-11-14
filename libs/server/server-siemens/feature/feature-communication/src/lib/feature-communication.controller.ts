import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { Observable, of } from 'rxjs';

@Controller()
export class FeatureCommunicationController {
  
  @MessagePattern('getData')
  getData(): Observable<boolean> {
    return of(true);
  }
}
