import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class CommunicationController {

  @MessagePattern('getData')
  getData(): Promise<boolean> {
    return Promise.resolve(true);
  }
}
