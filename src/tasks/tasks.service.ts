import {Injectable, NotFoundException} from "@nestjs/common";
import {DatabaseService} from "../database/database.service";
import {Prisma} from "@prisma/client";

@Injectable()
export class TasksService {
  constructor(private readonly databaseService: DatabaseService) {}

  async findAll() {
    return this.databaseService.tasks.findMany();
  }

  async findOne(id: number) {
    const task = await this.databaseService.tasks.findUnique({
      where: {
        id,
      },
    });

    if (!task) {
      throw new NotFoundException(`Task with ID "${id}" not found.`);
    }

    return task;
  }

  async create(createTaskDto: Prisma.TasksCreateInput) {
    return this.databaseService.tasks.create({
      data: createTaskDto,
    });
  }

  async update(id: number, updateTaskDto: Prisma.TasksUpdateInput) {
    return this.databaseService.tasks.update({
      where: {
        id,
      },
      data: updateTaskDto,
    });
  }

  async remove(id: number) {
    return this.databaseService.tasks.delete({
      where: {
        id,
      },
    });
  }
}
