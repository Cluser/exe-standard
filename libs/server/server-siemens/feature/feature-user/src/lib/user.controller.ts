import { Controller } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('App')
@ApiBearerAuth('access-token')
@Controller()
export class UserController {
  constructor() {}

}
