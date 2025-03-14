import { CreateTaskRequest } from './dto/create-task.request';
import { Injectable } from '@nestjs/common';
import { TaskRepository } from './task.repository';
import { TaskStatus } from './schemas/task.schema';

@Injectable()
export class TaskService {
  constructor(private readonly taskRepository: TaskRepository) {}

  async createTask(request: CreateTaskRequest): Promise<object | null> {
    return this.taskRepository.create({
      ...request,
      status: TaskStatus.PENDING,
    });
  }

  async getAllTasks(): Promise<object | null> {
    return this.taskRepository.find({}); 
  }
}
