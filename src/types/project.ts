import { Comment, Project as ProjectPrisma, Task } from "@prisma/client";

type Project = ProjectPrisma;

export interface ProjectWithRelationships extends Project {
  tasks: Task[];
  comments: Comment[];
}

export default Project;
