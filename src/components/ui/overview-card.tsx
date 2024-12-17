"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProjectWithRelationships } from "@/types/project";
import getProjectStatus from "@/utils/getProjectStatus";
import Link from "next/link";
import { Pie, PieChart, ResponsiveContainer, Legend, Cell } from "recharts";
import { Button } from "./button";

interface Props {
  projects: ProjectWithRelationships[];
}

export default function OverviewCard({ projects }: Props) {
  const data = [
    {
      name: "Ativos",
      value: projects.filter((p) => getProjectStatus(p) === "ativo").length,
    },
    {
      name: "Concluídos",
      value: projects.filter((p) => getProjectStatus(p) === "concluído").length,
    },
    {
      name: "Atrasados",
      value: projects.filter((p) => getProjectStatus(p) === "atrasado").length,
    },
  ];

  const COLORS = ["#10B981", "#3B82F6", "#EF4444"];

  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Resumo Gráfico</CardTitle>
      </CardHeader>
      <CardContent className="pl-2">
        {projects.length === 0 && (
          <div className="flex flex-col items-center gap-4">
            <p className="text-xl text- text-center">
              Sem projetos cadastrados no app.
            </p>
            <Link href={`/projects`} passHref>
              <Button variant="outline" size="sm">
                Ir para projetos
              </Button>
            </Link>
          </div>
        )}
        <ResponsiveContainer width="100%" height={350}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
