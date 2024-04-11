import { TasksService } from './tasks.service';
import { Prisma } from '@prisma/client';
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    create(createTaskDto: Prisma.TasksCreateInput): Promise<{
        id: number;
        title: string;
        category: string;
        description: string;
        date: string;
        importance: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<{
        id: number;
        title: string;
        category: string;
        description: string;
        date: string;
        importance: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        title: string;
        category: string;
        description: string;
        date: string;
        importance: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: number, updateTaskDto: Prisma.TasksCreateInput): Promise<{
        id: number;
        title: string;
        category: string;
        description: string;
        date: string;
        importance: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        id: number;
        title: string;
        category: string;
        description: string;
        date: string;
        importance: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
