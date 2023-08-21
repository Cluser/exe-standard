import { Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { User } from '@prisma/client';
import { UserService } from './user.service';

@ApiTags('App')
@Controller()
export class UserController {
  constructor(private readonly usersService: UserService) {}

  @Get('getUsers')
  getUsers(): Promise<User[]> {
    return this.usersService.getUsers();
  }

  @Post('createUser')
  createUser(): Promise<User> {
    return this.usersService.createUser();
  }
}
