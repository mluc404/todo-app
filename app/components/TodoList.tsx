import { TaskInterface } from "@/types/task";

interface TodoListProps {
  tasks: TaskInterface[];
}

export function TodoList({ tasks }: TodoListProps) {
  return (
    <div>
      <table className="table w-full">
        <thead>
          <tr>
            <th>Tasks</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id} className="">
              <td>{task.text}</td>
              <td>Blue</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div></div>
    </div>
  );
}
