"use client";

import { useParams } from "next/navigation";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import TaskList from "@/components/ui/task-list";
import CommentSection from "@/components/ui/comment-section";
import { useProjects } from "@/hooks/useProjects";
import ProjectCard from "@/components/ui/project-card";

export default function ProjectDetailsPage() {
  const { id } = useParams();
  const { GetById } = useProjects();

  if (typeof id !== "string") {
    return <div>Projeto não encontrado</div>;
  }

  const { data } = GetById(parseInt(id));

  const project = data;

  return (
    <div className="container mx-auto p-6 lg:w-1/2">
      <h1 className="text-3xl font-bold mb-6">{project.name}</h1>

      <ProjectCard hideLink project={project} />

      <Card className="my-8">
        <CardHeader>
          <CardTitle>Detalhes do Projeto</CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>
      </Card>

      <TaskList tasks={project.tasks} projectId={project.id} />
      <CommentSection comments={project.comments} projectId={project.id} />
    </div>
  );
}
