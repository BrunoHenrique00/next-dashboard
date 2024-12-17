"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Comment } from "@/types/comment";
import { useComments } from "@/hooks/useComments";

interface Props {
  comments: Comment[];
  projectId: number;
}

export default function CommentSection({ comments, projectId }: Props) {
  const [newComment, setNewComment] = useState("");
  const { createComment } = useComments();

  const addComment = () => {
    if (newComment.trim()) {
      createComment.mutate({ content: newComment, projectId });
      setNewComment("");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Comentários</h2>
      <div className="space-y-4 mb-4">
        {comments.map((comment) => (
          <div key={comment.id} className="flex space-x-4">
            <div>
              <p>{comment.content}</p>
              <p className="text-sm text-gray-500">
                {new Date(comment.createdAt).toLocaleDateString("pt-BR", {
                  weekday: "long",
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>
        ))}
      </div>
      <Textarea
        placeholder="Adicione um comentário..."
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        className="mb-2"
      />
      <Button
        onClick={addComment}
        disabled={!newComment || createComment.isPending}
        isLoading={createComment.isPending}
      >
        Comentar
      </Button>
    </div>
  );
}
