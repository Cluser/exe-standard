import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AppService } from '../use-cases/app-use-cases/app.service';

@ApiTags("App")
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('getData')
  @ApiOkResponse({ type: Object })
  getData() {
    return this.appService.getData();
  }
}
