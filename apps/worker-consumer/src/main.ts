import { NestFactory } from '@nestjs/core';
import { WorkerConsumerModule } from './worker-consumer.module';

async function bootstrap() {
  const app = await NestFactory.create(WorkerConsumerModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
