import { ProjectWithRelationships } from "@/types/project";
import { Task } from "@/types/task";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export type CreateTask = Omit<Task, "id">;

const API_BASE_URL = "http://localhost:3000/api/projects/tasks";

// Hook: Buscar todos os projetos
export const useTasks = () => {
  const queryClient = useQueryClient();

  const createTask = useMutation({
    mutationFn: async (newTask: CreateTask) => {
      const data = await fetch(API_BASE_URL, {
        body: JSON.stringify(newTask),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await data.json();

      return json;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: [`project/${data.projectId}`],
      });
    },
  });

  const updateTask = useMutation({
    mutationFn: async (task: Task) => {
      const data = await fetch(`${API_BASE_URL}?id=${task.id}`, {
        body: JSON.stringify(task),
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await data.json();

      return json;
    },
    onMutate: async (taskUpdated: Task) => {
      const project = queryClient.getQueryData<ProjectWithRelationships>([
        `project/${taskUpdated.projectId}`,
      ]);

      if (!project) return;

      queryClient.setQueryData(
        [`project/${taskUpdated.projectId}`],
        (oldProject: ProjectWithRelationships) => {
          return {
            ...oldProject,
            tasks: oldProject.tasks.map((task) => {
              if (task.id === taskUpdated.id) {
                return taskUpdated;
              }
              return task;
            }),
          };
        },
      );

      return { ...project };
    },
    onSettled: (data) => {
      queryClient.invalidateQueries({
        queryKey: [`project/${data.projectId}`],
      });
    },
  });

  return { createTask, updateTask };
};
