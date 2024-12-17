"use client";

import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Task } from "@/types/task";
import { useTasks } from "@/hooks/useTasks";

interface Props {
  tasks: Task[];
  projectId: number;
}

export default function TaskList({ tasks, projectId }: Props) {
  const [newTask, setNewTask] = useState("");
  const { createTask, updateTask } = useTasks();

  const toggleTask = (task: Task) => {
    updateTask.mutate({
      ...task,
      completed: !task.completed,
    });
  };

  const addTask = () => {
    if (newTask.trim()) {
      createTask.mutate({
        description: newTask,
        completed: false,
        projectId,
      });

      setNewTask("");
    }
  };

  return (
    <div className="mb-6">
      <h2 className="text-2xl font-semibold mb-4">Tarefas</h2>
      <div className="space-y-2">
        {tasks.map((task) => (
          <div key={task.id} className="flex items-center space-x-2">
            <Checkbox
              id={`task-${task.id}`}
              checked={task.completed}
              onCheckedChange={() => toggleTask(task)}
            />
            <label
              htmlFor={`task-${task.id}`}
              className={`flex-grow ${
                task.completed ? "line-through text-gray-500" : ""
              }`}
            >
              {task.description}
            </label>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <Input
          type="text"
          placeholder="Nova tarefa"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="flex-grow"
        />
        <Button
          className="mt-4"
          onClick={addTask}
          disabled={!newTask.trim() || createTask.isPending}
          isLoading={createTask.isPending}
        >
          Adicionar
        </Button>
      </div>
    </div>
  );
}
