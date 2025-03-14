import { NestFactory } from '@nestjs/core';
import { RmqService } from '@app/common';
import { WorkerConsumerModule } from './worker-consumer.module';

async function bootstrap() {
  const app = await NestFactory.create(WorkerConsumerModule);
  const rmqService = app.get<RmqService>(RmqService);
  app.connectMicroservice(rmqService.getOptions('WORKER_CONSUMER'));
  await app.startAllMicroservices();
}
bootstrap();
