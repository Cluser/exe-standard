import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common'
import { PrismaClient, User } from '@prisma/client'

@Injectable()
export class PrismaClientService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  async onModuleInit() {
    await this.$connect()
  }

  async onModuleDestroy() {
    this.$disconnect();
  }

  async getUsers(): Promise<User> {
    console.log('ddddddddd')
    return await this.user.findFirst() as User;
  }
}