import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { Observable, of } from 'rxjs';
import { PlcSiemensService } from '@exe/server/server-siemens/shared/plc-siemens';

@Controller()
export class FeatureCommunicationController {

  constructor(private plcSiemensService: PlcSiemensService) {}
  
  @MessagePattern('getData')
  getData(): Observable<boolean> {
    this.plcSiemensService.connect();
    return of(true);
  }
}
