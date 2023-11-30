import { Controller, Get, Inject } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@ApiTags('Communication')
@ApiBearerAuth('access-token')
@Controller()
export class FeatureCommunicationController {
  constructor(
    @Inject('SERVER_SIEMENS') private readonly serverSiemensClient: ClientProxy
  ) {}

  @Get('communication/isConnected')
  isConnected(): Observable<boolean> {
    return this.serverSiemensClient.send('isConnected', {});
  }

  @Get('communication/connect')
  connect(): Observable<boolean> {
    return this.serverSiemensClient.send('connect', {});
  }

  @Get('communication/disconnect')
  disconnect(): Observable<boolean> {
    return this.serverSiemensClient.send('disconnect', {});
  }
  @Get('communication/readData')
  readData(): Observable<any> {
    return this.serverSiemensClient.send('readData', {});
  }

  @Get('communication/writeData')
  writeData(): Observable<any> {
    return this.serverSiemensClient.send('writeData', {});
  }
}
