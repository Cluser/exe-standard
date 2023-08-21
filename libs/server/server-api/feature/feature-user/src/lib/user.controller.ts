import { Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { User } from '@prisma/client';
import { UserService } from './user.service';

@ApiTags('App')
@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('getUsers')
  getUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }

  @Post('createUser')
  createUser(): Promise<User> {
    return this.userService.createUser();
  }
}
