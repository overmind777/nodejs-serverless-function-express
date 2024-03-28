import {PartialType} from "@nestjs/mapped-types";
import {CreateTask} from "./create-task.dto";

export class UpdateTaskDto extends PartialType(CreateTask) {}
