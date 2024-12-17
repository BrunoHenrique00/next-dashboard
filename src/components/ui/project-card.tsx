"use client";

import Link from "next/link";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProjectWithRelationships } from "@/types/project";
import getTaskProgress from "@/utils/getTaskProgress";
import getProjectStatus from "@/utils/getProjectStatus";
import getProjectRangeDate from "@/utils/getProjectRangeDate";
import { useTasks } from "@/hooks/useTasks";

interface Props {
  project: ProjectWithRelationships;
  hideLink?: boolean;
}
export default function ProjectCard({ project, hideLink = false }: Props) {
  const { id, name, tasks } = project;
  const statusColor = {
    ativo: "bg-blue-500",
    atrasado: "bg-red-500",
    concluído: "bg-green-500",
  };

  const { updateTask } = useTasks();

  console.log(updateTask.isPending);
  const progress = getTaskProgress(tasks);
  const status = getProjectStatus(project);
  const projectRangeDate = getProjectRangeDate(project);

  return (
    <div className="border rounded-lg p-4">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold">{name}</h3>
        <Badge className={statusColor[status]}>{status}</Badge>
      </div>
      <Progress value={progress} className="mb-2" />
      <p className="text-sm text-gray-600 mb-2">{progress}% completo</p>
      <div className="flex justify-between">
        {!hideLink && (
          <Link href={`/projects/${id}`} passHref>
            <Button variant="outline" size="sm">
              Ver detalhes
            </Button>
          </Link>
        )}
        <p className="text-sm text-gray-600 ml-auto my-auto">
          {projectRangeDate}
        </p>
      </div>
    </div>
  );
}
