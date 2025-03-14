import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class WorkerConsumerService {
  private readonly logger = new Logger(WorkerConsumerService.name);
  
  processTask(data: any) {
    this.logger.log('processing...', data);
  }
}
