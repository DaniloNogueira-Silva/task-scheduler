import { Controller, Get } from '@nestjs/common';
import { WorkerConsumerService } from './worker-consumer.service';

@Controller()
export class WorkerConsumerController {
  constructor(private readonly workerConsumerService: WorkerConsumerService) {}

  @Get()
  getHello(): string {
    return this.workerConsumerService.getHello();
  }
}
