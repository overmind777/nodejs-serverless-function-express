import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from "@nestjs/common";
import {TasksService} from "./tasks.service";
import {Prisma} from "@prisma/client";

@Controller("tasks")
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  create(@Body() createTaskDto: Prisma.TasksCreateInput) {
    return this.tasksService.create(createTaskDto);
  }

  @Get()
  findAll() {
    return this.tasksService.findAll();
  }

  @Get(":id")
  findOne(@Param("id", ParseIntPipe) id: number) {
    return this.tasksService.findOne(id);
  }

  @Patch(":id")
  update(
    @Param("id", ParseIntPipe) id: number,
    @Body() updateTaskDto: Prisma.TasksUpdateInput,
  ) {
    return this.tasksService.update(id, updateTaskDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.tasksService.remove(+id);
  }
}
