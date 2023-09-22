import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiExtraModels, ApiTags } from '@nestjs/swagger';
import { User } from '@prisma/client';
import { UserService } from './user.service';
import { Roles } from 'nest-keycloak-connect';
import { ApiOkResponsePaginated, PaginatedResponseDto } from '@exe/server/shared/pagination';
import { UserGetResposeDto, UserGetDto, UserUpdateDto, UserCreateDto } from './dtos';

@ApiTags('App')
@ApiBearerAuth('access-token')
@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('getUsers')
  @ApiExtraModels(UserGetDto)
  @ApiOkResponsePaginated(UserGetResposeDto)
  async getUsers(@Query() userGet: UserGetDto): Promise<PaginatedResponseDto<UserGetResposeDto>> {
    return { data: await this.userService.getUsers(), totalCount: (await this.userService.getUsers()).length };
  }

  @Put('updateUser')
  @Roles({ roles: ['admin'] })
  updateUser(@Param('id') id: string, @Body() userUpdateDto: UserUpdateDto): Promise<User> {
    return this.userService.updateUser();
  }

  @Post('createUser')
  createUser(@Body() userCreateDto: UserCreateDto): Promise<User> {
    return this.userService.createUser();
  }

  @Delete('deleteUser')
  deleteUser(): Promise<User> {
    return this.userService.deleteUser();
  }
}
