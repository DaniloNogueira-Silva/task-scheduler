import { CreateTaskRequest } from './dto/create-task.request';
import { Inject, Injectable } from '@nestjs/common';
import { TaskRepository } from './task.repository';
import { TaskStatus } from './schemas/task.schema';
import { WORKER_CONSUMER_SERVICE } from './constants/services';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class TaskService {
  constructor(
    private readonly taskRepository: TaskRepository,
    @Inject(WORKER_CONSUMER_SERVICE)
    private readonly workerConsumerClient: ClientProxy,
  ) {}

  async createTask(request: CreateTaskRequest): Promise<object | null> {
    const session = await this.taskRepository.startTransaction();

    try {
      const task = await this.taskRepository.create({
        ...request,
        status: TaskStatus.PENDING,
      });
      await session.commitTransaction();

      await lastValueFrom(
        this.workerConsumerClient.emit('task_created', task),
      );

      return task;
    } catch (error) {
      await session.abortTransaction();
      throw error;
    }
  }

  async getAllTasks(): Promise<object | null> {
    return this.taskRepository.find({});
  }
}
