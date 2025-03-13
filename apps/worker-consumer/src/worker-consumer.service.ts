import { Injectable } from '@nestjs/common';

@Injectable()
export class WorkerConsumerService {
  getHello(): string {
    return 'Hello World!';
  }
}
