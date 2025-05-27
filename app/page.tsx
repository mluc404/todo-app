// app/page.tsx
import { getAllTodos } from "@/api";
import { TodoContainer } from "./components/TodoContainer";

export default async function Home() {
  console.log("Fetching initial tasks..."); // Log before fetch
  try {
    const initialTasks = await getAllTodos();
    console.log("Initial tasks fetched:", initialTasks); // Log successful fetch
    return <TodoContainer initialTasks={initialTasks} />;
  } catch (error) {
    console.error("Error fetching initial tasks:", error); // Log fetch error
    return <TodoContainer initialTasks={[]} />;
  }
}
