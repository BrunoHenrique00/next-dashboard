import { ProjectWithRelationships } from "@/types/project";
import getTaskProgress from "./getTaskProgress";

export default function getProjectStatus(project: ProjectWithRelationships) {
  const tasks = project.tasks;
  const isProjectLate = Date.now() > new Date(project.endDate).getTime();
  const progress = getTaskProgress(tasks);

  if (progress >= 100) return "concluído";

  if (isProjectLate) return "atrasado";

  if (tasks.length === 0) {
    return "ativo";
  }

  return progress >= 100 && isProjectLate ? "concluído" : "atrasado";
}
