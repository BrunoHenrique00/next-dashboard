import { Task } from "@prisma/client";

export default function getTaskProgress(tasks: Task[]) {
  const totalTasks = tasks.length;
  const tasksDone = tasks.filter((task) => task.completed).length;
  return totalTasks == 0 ? 0 : Math.floor((tasksDone / totalTasks) * 100);
}
