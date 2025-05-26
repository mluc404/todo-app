import { getAllTodos } from "@/api";
import { AddTask } from "./components/AddTask";
import { TodoList } from "./components/TodoList";
import { TaskInterface } from "@/types/task";
import { TodoContainer } from "./components/TodoContainer";

export default async function Home() {
  const initialTasks = await getAllTodos();
  return <TodoContainer initialTasks={initialTasks} />;
}
