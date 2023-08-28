import { Injectable } from '@nestjs/common'
import { User } from '@prisma/client'
import { PrismaClientService } from 'libs/server/shared/prisma-client/src/lib/prisma-client.service'

@Injectable()
export class UserService {
    constructor(private readonly prismaClientService: PrismaClientService) {}

    getUsers(): Promise<User[]> {
      return this.prismaClientService.user.findMany({
        where: {
          id: {
            lt: 5,
            gt: 1
          }
        },
        include: {
          posts: true
        }
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