import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { User } from '@prisma/client';

@ApiTags('App')
@Controller()
export class UserController {
  constructor(private readonly usersService: UserService) {}

  @Get('getUsers')
  getUsers(): User {
    return this.usersService.getUsers() as User;
  }
}
