import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { PrismaClientModule } from '@exe/server/shared/prisma-client';

@Module({
  imports: [PrismaClientModule],
  controllers: [UserController],
  providers: [],
  exports: []
})
export class FeatureUserModule {}
