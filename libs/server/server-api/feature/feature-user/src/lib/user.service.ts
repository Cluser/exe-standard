import { Injectable } from '@nestjs/common'
import { User } from '@prisma/client'
import { PrismaClientService } from 'libs/server/shared/prisma-client/src/lib/prisma-client.service'
import { UserGetDto } from './dtos';

@Injectable()
export class UserService {
    constructor(private readonly prismaClientService: PrismaClientService) {}

    getUsers(userGet: UserGetDto): Promise<User[]> {
      console.log(typeof(userGet.id))
      return this.prismaClientService.user.findMany({
        where: {
          id: { 
            equals: Number(userGet.id)
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
        take: 100,
      });
    }

    updateUser(): Promise<User> {
      return this.prismaClientService.user.update({
        where: {
          id: 1
        },
        data: {
          name: 'Alice',
          surname: 'Doe'
        }
      });
    }

    createUser(): Promise<User> {
      return this.prismaClientService.user.create({
        data: {
          name: 'Alice',
          surname: 'Doe'
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