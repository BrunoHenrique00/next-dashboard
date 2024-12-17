import { ProjectWithRelationships } from "@/types/project";
import ProjectCard from "./project-card";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useProjects } from "@/hooks/useProjects";
import { LoaderCircleIcon } from "lucide-react";

interface Props {
  projects: ProjectWithRelationships[];
}

export function RecentProjects({ projects }: Props) {
  const { createProject } = useProjects();
  return (
    <Card className="col-span-4 md:col-span-3 ">
      <CardHeader>
        <CardTitle className="flex">
          Projetos Recentes{" "}
          {createProject.isPending && (
            <LoaderCircleIcon className="animate-spin" />
          )}
        </CardTitle>
        <CardDescription>Aqui estão todos os projetos.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {projects.length === 0 ? (
            <span>Sem projetos por enquanto.</span>
          ) : (
            projects.map((project) => (
              <ProjectCard project={project} key={project.id} />
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
}
