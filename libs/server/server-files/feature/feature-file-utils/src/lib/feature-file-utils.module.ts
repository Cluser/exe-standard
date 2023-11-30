import { Module } from '@nestjs/common';
import { PrismaClientModule } from '@exe/server/server-files/core/prisma-client';
import { FeatureFilUtilsController } from './feature-file-utils.controller';
import { FeatureFileUtilsService } from './feature-file-utils.service';

@Module({
  imports: [PrismaClientModule],
  controllers: [FeatureFilUtilsController],
  providers: [FeatureFileUtilsService]
})
export class FeatureFileUtilsModule {}
