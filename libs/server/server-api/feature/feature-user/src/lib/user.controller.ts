import { Controller, Delete, Get, Post, Type, applyDecorators } from '@nestjs/common';
import { ApiBearerAuth, ApiExtraModels, ApiOkResponse, ApiTags, getSchemaPath } from '@nestjs/swagger';
import { User } from '@prisma/client';
import { UserService } from './user.service';
import { Roles } from 'nest-keycloak-connect';
import { PaginatedResponseDto } from '@exe/server/shared/pagination';
import { UserGetResposeDto } from './user-get-response.dto';
import { UserGetDto } from './user-get.dto';


export const ApiOkResponsePaginated = <DataDto extends Type<unknown>>(dataDto: DataDto) =>
  applyDecorators(
    ApiExtraModels(PaginatedResponseDto, dataDto),
    ApiOkResponse({
      schema: {
        allOf: [
          { $ref: getSchemaPath(PaginatedResponseDto) },
          {
            properties: {
              data: {
                type: 'array',
                items: { $ref: getSchemaPath(dataDto) },
              },
            },
          },
        ],
      },
    })
  )

@ApiTags('App')
@ApiBearerAuth('access-token')
@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('getUsers')
  @ApiOkResponsePaginated(UserGetResposeDto)
  async getUsers(userGet: UserGetDto): Promise<PaginatedResponseDto<UserGetResposeDto>> {
    return { data: await this.userService.getUsers(), totalCount: (await this.userService.getUsers()).length };
  }

  // @Get('getUsers')
  // getUsers(): Promise<User[]> {
  //   return this.userService.getUsers();
  // }

  @Post('updateUser')
  @Roles({ roles: ['admin'] })
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
