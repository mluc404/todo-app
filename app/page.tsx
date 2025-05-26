import { getAllTodos } from "@/api";
import { TodoContainer } from "./components/TodoContainer";

export default async function Home() {
  const initialTasks = await getAllTodos();
  return <TodoContainer initialTasks={initialTasks} />;
}
