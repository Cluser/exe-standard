import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { PrismaClientModule } from '@exe/server/shared/prisma-client';
import { UserService } from './user.service';
// import { AuthKeycloakModule } from '@exe/server/shared/auth-keycloak'

@Module({
  imports: [PrismaClientModule],
  controllers: [UserController],
  providers: [UserService],
  exports: []
})
export class FeatureUserModule {}
