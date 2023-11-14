import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { HttpModule } from '@nestjs/axios';
import { FeatureHealthcheckController } from './feature-healthcheck.controller';

@Module({
  imports: [TerminusModule, HttpModule],
  controllers: [FeatureHealthcheckController]
})
export class FeatureHealthcheckModule {}
