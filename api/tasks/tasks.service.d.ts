import { DatabaseService } from "../database/database.service";
import { Prisma } from "@prisma/client";
export declare class TasksService {
    private readonly databaseService;
    constructor(databaseService: DatabaseService);
    findAll(): Promise<{
        id: number;
        title: string;
        category: string;
        description: string;
        importance: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        title: string;
        category: string;
        description: string;
        importance: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    create(createTaskDto: Prisma.TasksCreateInput): Promise<{
        id: number;
        title: string;
        category: string;
        description: string;
        importance: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: number, updateTaskDto: Prisma.TasksUpdateInput): Promise<{
        id: number;
        title: string;
        category: string;
        description: string;
        importance: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: number): Promise<{
        id: number;
        title: string;
        category: string;
        description: string;
        importance: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
