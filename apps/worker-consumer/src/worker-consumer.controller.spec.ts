import { Test, TestingModule } from '@nestjs/testing';
import { WorkerConsumerController } from './worker-consumer.controller';
import { WorkerConsumerService } from './worker-consumer.service';

describe('WorkerConsumerController', () => {
  let workerConsumerController: WorkerConsumerController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [WorkerConsumerController],
      providers: [WorkerConsumerService],
    }).compile();

    workerConsumerController = app.get<WorkerConsumerController>(WorkerConsumerController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(workerConsumerController.getHello()).toBe('Hello World!');
    });
  });
});
