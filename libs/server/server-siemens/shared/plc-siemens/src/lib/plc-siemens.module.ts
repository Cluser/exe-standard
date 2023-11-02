import { Module } from '@nestjs/common';
import { PlcSiemensService } from './plc-siemens.service';

@Module({
  controllers: [],
  providers: [PlcSiemensService],
  exports: [PlcSiemensService]
})
export class PlcSiemensModule {}
