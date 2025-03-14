import { Controller, Get, Logger } from '@nestjs/common';
import { WorkerConsumerService } from './worker-consumer.service';
import { Ctx, EventPattern, RmqContext } from '@nestjs/microservices';
import { RmqService } from '@app/common';

@Controller()
export class WorkerConsumerController {
  constructor(
    private readonly workerConsumerService: WorkerConsumerService,
    private readonly rmqService: RmqService,
  ) {}

  private readonly logger = new Logger(WorkerConsumerService.name);

  @EventPattern('task_created')
  async handleTaskCreated(data: any, @Ctx() context: RmqContext) {
    this.logger.log(`data: ${data}, context: ${context}`);

    this.workerConsumerService.processTask(data);
    this.rmqService.ack(context);
  }
}
