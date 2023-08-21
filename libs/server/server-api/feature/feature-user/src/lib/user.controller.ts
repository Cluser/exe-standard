import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { User } from '@prisma/client';
import { PrismaClientService } from 'libs/server/shared/prisma-client/src/lib/prisma-client.service';

@ApiTags('App')
@Controller()
export class UserController {
  constructor(private readonly usersService: PrismaClientService) {}

  @Get('getUsers')
  getUsers(): Promise<User> {
    return this.usersService.getUsers();
  }
}
