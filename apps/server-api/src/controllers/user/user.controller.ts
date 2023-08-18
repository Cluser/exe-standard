import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { UserService } from '../../use-cases/user/user.service';

@ApiTags("App")
@Controller()
export class UserController {
  constructor(private readonly usersService: UserService) {}
  
  @Get('getUsers')
  @ApiOkResponse({ type: Object })
  getUsers() {
    return this.usersService.getUsers();
  }
}
