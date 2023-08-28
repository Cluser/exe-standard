import { Controller, Delete, Get, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { User } from '@prisma/client';
import { UserService } from './user.service';

@ApiTags('App')
@ApiBearerAuth('access-token')
@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('getUsers')
  getUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }

  @Post('updateUser')
  updateUser(): Promise<User> {
    return this.userService.updateUser();
  }

  @Post('createUser')
  createUser(): Promise<User> {
    return this.userService.createUser();
  }

  @Delete('deleteUser')
  deleteUser(): Promise<User> {
    return this.userService.deleteUser();
  }
}
