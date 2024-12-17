import Project, { ProjectWithRelationships } from "@/types/project";
import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";

export type CreateProject = Omit<Project, "id" | "status">;
export type UpdateProject = Partial<Omit<ProjectWithRelationships, "status">>;

const API_BASE_URL = "/api/projects";

const fetchProjects = async (): Promise<ProjectWithRelationships[]> => {
  const data = await fetch(API_BASE_URL);
  const json = await data.json();
  return json;
};

const fetchProjectById = async (
  id: number,
): Promise<ProjectWithRelationships> => {
  const data = await fetch(`${API_BASE_URL}?id=${id}`);
  const json = await data.json();
  return json;
};

export const useProjects = () => {
  const queryClient = useQueryClient();

  const getAll = useSuspenseQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });

  const GetById = (id: number) => {
    return useSuspenseQuery({
      queryKey: [`project/${id}`],
      queryFn: () => fetchProjectById(id),
    });
  };

  const createProject = useMutation({
    mutationFn: async (newProject: CreateProject) => {
      const data = await fetch(API_BASE_URL, {
        body: JSON.stringify(newProject),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await data.json();
      return json;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
    },
  });

  const updateProject = useMutation({
    mutationFn: async (project: UpdateProject) => {
      const data = await fetch(`${API_BASE_URL}/tasks/?id=${project.id}`, {
        body: JSON.stringify(project),
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await data.json();
      return json;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
    },
  });

  return { getAll, GetById, createProject, updateProject };
};
