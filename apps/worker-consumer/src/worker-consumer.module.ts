import { Module } from '@nestjs/common';
import { WorkerConsumerController } from './worker-consumer.controller';
import { WorkerConsumerService } from './worker-consumer.service';

@Module({
  imports: [],
  controllers: [WorkerConsumerController],
  providers: [WorkerConsumerService],
})
export class WorkerConsumerModule {}
