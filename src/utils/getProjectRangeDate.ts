import Project from "@/types/project";

export default function getProjectRangeDate(project: Project) {
  const startDate = new Date(project.initialDate);
  const endDate = new Date(project.endDate);
  return `${startDate.toLocaleDateString(
    "pt-BR",
  )} até ${endDate.toLocaleDateString("pt-BR")}`;
}
