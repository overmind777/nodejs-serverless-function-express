import { ApiProperty } from '@nestjs/swagger';

export class CreateTask {
  @ApiProperty({ description: "Task category", nullable: true })
  category: string;

  @ApiProperty({ description: "Task title", nullable: true })
  title: string;

  @ApiProperty({ description: "Task description", nullable: true })
  description: string;

  @ApiProperty({ description: "Task importance", nullable: true })
  importance: string;
}
