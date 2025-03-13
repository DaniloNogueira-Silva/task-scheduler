import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { AbstractDocument } from '@app/common';

export enum TaskStatus {
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
}

@Schema({ versionKey: false })
export class Task extends AbstractDocument {
  @Prop({ required: true })
  type: string;

  @Prop({ type: Object, required: true })
  payload: object;

  @Prop({ required: true, name: 'execute_at' })
  executeAt: Date;

  @Prop({
    required: true,
    enum: TaskStatus,
    default: TaskStatus.PENDING,
  })
  status: TaskStatus;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
