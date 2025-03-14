import { Body, Controller, Get, Post } from '@nestjs/common';

import { TaskService } from './task.service';
import { CreateTaskRequest } from './dto/create-task.request';

@Controller('/task')
export class TaskController {
  constructor(private readonly TaskService: TaskService) {}

  @Post()
  async createTask(@Body() request: CreateTaskRequest): Promise<object | null> {
    return this.TaskService.createTask(request);
  }

  @Get()
  async getAllTasks(): Promise<object | null> {
    return this.TaskService.getAllTasks();
  }
}
