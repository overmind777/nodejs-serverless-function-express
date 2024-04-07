import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe, HttpStatus,
} from '@nestjs/common';
import {TasksService} from "./tasks.service";
import {Prisma} from "@prisma/client";
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Task } from './dto/task.dto';
import { CreateTask } from './dto/create-task.dto';

@ApiTags('Tasks')
@Controller("tasks")
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  @ApiOperation({ summary: "Returns all tasks" })
  @ApiResponse({ status: HttpStatus.OK, description: "Success", isArray: true, type: Task })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: "Bad Request" })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: "Not Found" })
  findAll() {
    return this.tasksService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "Returns task by id" })
  @ApiResponse({ status: HttpStatus.FOUND, description: "Success", type: Task })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: "Bad Request" })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: "Not Found" })
  findOne(@Param("id", ParseIntPipe) id: number) {
    return this.tasksService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: "Create task" })
  @ApiBody({type: CreateTask})
  @ApiResponse({ status: HttpStatus.CREATED, description: "Success", type: Task })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: "Bad Request" })
  create(@Body() createTaskDto: Prisma.TasksCreateInput) {
    return this.tasksService.create(createTaskDto);
  }

  @Patch(":id")
  @ApiOperation({ summary: "Returns all available tasks" })
  @ApiResponse({type: Task})
  @ApiResponse({ status: HttpStatus.OK, description: "OK" })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: "Bad Request" })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: "Not Found" })
  update(
    @Param("id", ParseIntPipe) id: number,
    @Body() updateTaskDto: Prisma.TasksUpdateInput,
  ) {
    return this.tasksService.update(id, updateTaskDto);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Delete task by id" })
  @ApiResponse({type: Task})
  @ApiResponse({ status: HttpStatus.ACCEPTED, description: "Accepted" })
  @ApiResponse({ status: HttpStatus.NO_CONTENT, description: "No Content" })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: "Not Found" })
  remove(@Param("id", ParseIntPipe) id: number) {
    return this.tasksService.remove(id);
  }
}
