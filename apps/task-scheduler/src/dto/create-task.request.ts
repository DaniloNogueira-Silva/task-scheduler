import { IsDate, IsNotEmpty, IsObject, IsString } from "class-validator";

import { Type } from "class-transformer";

export class CreateTaskRequest {

    @IsString()
    @IsNotEmpty()
    type: string;

    @Type(() => Date)
    @IsDate()
    @IsNotEmpty()
    execute_at: Date;

    @IsNotEmpty()
    @IsObject()
    payload: object;
}