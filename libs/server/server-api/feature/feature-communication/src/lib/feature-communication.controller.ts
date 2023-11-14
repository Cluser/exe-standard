import { Controller, Get, Inject } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { MICROSERVICES } from '@exe/server/shared/config';

@ApiTags('Communication')
@ApiBearerAuth('access-token')
@Controller()
export class FeatureCommunicationController {
  constructor(
    @Inject(MICROSERVICES.SERVER_SIEMENS.name) private readonly serverSiemensClient: ClientProxy
  ) {}

  @Get('getData')
  getUsers(): Observable<boolean> {
    return this.serverSiemensClient.send('getData', {});
  }
}
