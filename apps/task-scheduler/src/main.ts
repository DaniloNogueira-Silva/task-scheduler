import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { TaskModule } from './task.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const Task = await NestFactory.create(TaskModule);
  Task.useGlobalPipes(new ValidationPipe());
  const configService = Task.get(ConfigService);
  await Task.listen(configService.get<number>('PORT'));
}
bootstrap();
