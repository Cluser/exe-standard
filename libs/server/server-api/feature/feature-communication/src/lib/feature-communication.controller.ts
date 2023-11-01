import { Controller, Get, Inject } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@ApiTags('App')
@ApiBearerAuth('access-token')
@Controller()
export class FeatureCommunicationController {
  constructor(
    @Inject('SERVER_SIEMENS') private readonly serverSiemensClient: ClientProxy
  ) {}

  @Get('getData')
  getUsers(): Observable<boolean> {
    return this.serverSiemensClient.send('getData', {});
  }
}
