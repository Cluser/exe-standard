import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client/users';
import { PrismaClientService } from '@exe/server/shared/prisma-client';
import { UserCreateDto, UserGetDto, UserUpdateDto } from './dtos';

@Injectable()
export class UserService {
  constructor(private readonly prismaClientService: PrismaClientService) {}

  getUsers(userGet: UserGetDto): Promise<User[]> {
    return this.prismaClientService.user.findMany({
      where: {
        id: {
          equals: userGet.id
        },
        name: {
          contains: userGet.name
        },
        surname: {
          contains: userGet.surname
        }
      },
      include: {
        posts: true
      },
      skip: 0,
      take: 100
    });
  }

  updateUser(id: number, userUpdateDto: UserUpdateDto): Promise<User> {
    return this.prismaClientService.user.update({
      where: {
        id: id
      },
      data: {
        ...userUpdateDto
      }
    });
  }

  createUser(userCreateDto: UserCreateDto): Promise<User> {
    return this.prismaClientService.user.create({
      data: {
        ...userCreateDto
      }
    });
  }

  deleteUser(): Promise<User> {
    return this.prismaClientService.user.delete({
      where: {
        id: 1
      }
    });
  }
}
