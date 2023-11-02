import { Controller, Get } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { HealthCheckService, HealthCheck, HealthCheckResult, HealthIndicatorResult, HttpHealthIndicator, MicroserviceHealthIndicator } from '@nestjs/terminus';
import { Transport } from '@nestjs/microservices';

@ApiTags('Healthcheck')
@ApiBearerAuth('access-token')
@Controller()
export class FeatureHealthcheckController {
  constructor(
    private readonly healthCheckService: HealthCheckService,
    private readonly httpHealthIndicator: HttpHealthIndicator,
    private readonly microserviceHealthIndicator: MicroserviceHealthIndicator
  ) {}
  
  @Get('healthcheck')
  @HealthCheck()
  async check(): Promise<HealthCheckResult> {
    return this.healthCheckService.check([
      async (): Promise<HealthIndicatorResult> => {
        return await this.httpHealthIndicator.pingCheck('client-web', 'http://127.0.0.1:4200');
      },
      async (): Promise<HealthIndicatorResult> => {
        return await this.microserviceHealthIndicator.pingCheck('rabbit-mq', {
          transport: Transport.RMQ,
          options: {
            urls: ['amqp://localhost:5672'],
            queue: 'tasks',
            queueOptions: { durable: false },
          },
        })
      }
    ]);
  }
}
