import { TaskInterface } from "@/types/task";

interface TaskProps {
  task: TaskInterface;
}

export function Task({ task }: TaskProps) {
  return (
    <tr key={task.id}>
      <td>{task.text}</td>
      <td>Blue</td>
    </tr>
  );
}
