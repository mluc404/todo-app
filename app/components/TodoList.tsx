import { TaskInterface } from "@/types/task";
import { Task } from "./Task";

interface TodoListProps {
  tasks: TaskInterface[];
}

export function TodoList({ tasks }: TodoListProps) {
  return (
    <div className="container w-[80%] mx-auto px-4 bg-gray-800">
      <table className="table w-full text-[1rem]">
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
