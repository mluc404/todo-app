import { TaskInterface } from "@/types/task";

interface TaskProps {
  task: TaskInterface;
}

export function Task({ task }: TaskProps) {
  return (
    <tr key={task.id}>
      <td className="w-full">{task.text}</td>
      <td>Blue</td>
    </tr>
  );
}
