import { Injectable } from '@nestjs/common'
import { PrismaClient, User } from '@prisma/client'
import { PrismaClientService } from 'libs/server/shared/prisma-client/src/lib/prisma-client.service'

@Injectable()
export class UserService {
    constructor(private readonly prismaClientService: PrismaClientService) {}

    getUsers(): Promise<User[]> {
        return this.prismaClientService.user.findMany();
    }

    createUser(): Promise<User> {
        return this.prismaClientService.user.create({
          data: {
            name: 'Alice',
            surname: 'Doe'
          }
        });
      }
}