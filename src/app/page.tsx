"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import OverviewCard from "@/components/ui/overview-card";
import { useProjects } from "@/hooks/useProjects";
import getProjectStatus from "@/utils/getProjectStatus";
import Link from "next/link";

export default function DashboardPage() {
  const { getAll } = useProjects();

  const projects = getAll.data;

  const activeProjects = projects.filter(
    (project) => getProjectStatus(project) == "ativo",
  );

  return (
    <div className="flex-1 space-y-4 p-8 pt-6 m-auto container">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total de projetos
            </CardTitle>
            <Link href={`/projects`} passHref>
              <Button variant="outline" size="sm">
                Ver Projetos
              </Button>
            </Link>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{projects.length}</div>
            <p className="text-xs text-muted-foreground">
              Resumo do total de projetos
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Projetos Ativos Agora
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeProjects.length}</div>
            <p className="text-xs text-muted-foreground">
              Projetos que estão com status ativo
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <OverviewCard projects={projects} />
      </div>
    </div>
  );
}
