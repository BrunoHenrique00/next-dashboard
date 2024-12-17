import { Comment } from "@/types/comment";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export type CreateComment = Pick<Comment, "content" | "projectId">;

const API_BASE_URL = "/api/projects/comment";

// Hook: Buscar todos os projetos
export const useComments = () => {
  const queryClient = useQueryClient();

  const createComment = useMutation({
    mutationFn: async (newComment: CreateComment) => {
      const data = await fetch(API_BASE_URL, {
        body: JSON.stringify(newComment),
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

  return { createComment };
};
