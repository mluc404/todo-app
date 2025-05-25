import { TaskInterface } from "@/types/task";
import { Task } from "./Task";

interface TodoListProps {
  tasks: TaskInterface[];
}

export function TodoList({ tasks }: TodoListProps) {
  return (
    <div className="container w-[500px] mx-auto px-4 border-2 border-blue-500">
      <table className="table w-full">
        <thead>
          <tr>
            <th>TASKS</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
