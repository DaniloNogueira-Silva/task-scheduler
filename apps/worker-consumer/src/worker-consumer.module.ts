import * as Joi from 'joi';

import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { RmqModule } from '@app/common';
import { WorkerConsumerController } from './worker-consumer.controller';
import { WorkerConsumerService } from './worker-consumer.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        RABBIT_MQ_URI: Joi.string().required(),
        RABBIT_MQ_WORKER_CONSUMER_QUEUE: Joi.string().required(),
      })
    }),
    RmqModule],
  controllers: [WorkerConsumerController],
  providers: [WorkerConsumerService],
})
export class WorkerConsumerModule {}
