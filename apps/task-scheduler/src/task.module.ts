import * as Joi from 'joi';

import { DatabaseModule, RmqModule } from '@app/common';
import { Task, TaskSchema } from './schemas/task.schema';

import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskController } from './task.controller';
import { TaskRepository } from './task.repository';
import { TaskService } from './task.service';
import { WORKER_CONSUMER_SERVICE } from './constants/services';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
        PORT: Joi.number().required(),
      }),
      envFilePath: './apps/task-scheduler/.env',
    }),
    DatabaseModule,
    MongooseModule.forFeature([{ name: Task.name, schema: TaskSchema }]),
    RmqModule.register({ 
      name: WORKER_CONSUMER_SERVICE,
    }),
  ],
  controllers: [TaskController],
  providers: [TaskService, TaskRepository],
})
export class TaskModule {}
