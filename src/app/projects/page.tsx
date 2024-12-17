"use client";

import { RecentProjects } from "@/components/ui/recent-projects";
import CreateProjectModal from "@/components/forms/create-project";
import { useProjects } from "@/hooks/useProjects";

export default function ProjectsPage() {
  const { getAll } = useProjects();

  const projects = getAll.data;

  return (
    <div className="flex-1 space-y-4 p-8 pt-6 container m-auto">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Projetos</h2>
        <div className="flex items-center space-x-2">
          <CreateProjectModal />
        </div>
      </div>
      <div className="">
        <RecentProjects projects={projects} />
      </div>
    </div>
  );
}
