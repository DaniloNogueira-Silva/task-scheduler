import { NestFactory } from '@nestjs/core';
import { TaskModule } from './task.module';

async function bootstrap() {
  const Task = await NestFactory.create(TaskModule);
  await Task.listen(process.env.PORT ?? 3000);
}
bootstrap();
