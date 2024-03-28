import { ApiProperty } from '@nestjs/swagger';

export class Task {
  @ApiProperty({ description: "Task identifier", nullable: false })
  id: number;

  @ApiProperty({ description: "Task title", nullable: true })
  title: string;

  @ApiProperty({ description: "Task description", nullable: true })
  description: string;

  @ApiProperty({ description: "Task importance", nullable: true })
  importance: string;
}