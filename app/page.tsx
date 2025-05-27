import { getAllTodos } from "@/api";
import { TodoContainer } from "./components/TodoContainer";

// Tell Next.js to render this page dynamically on each request
export const dynamic = "force-dynamic";

export default async function Home() {
  console.log("Fetching initial tasks...");
  try {
    const initialTasks = await getAllTodos();
    console.log("Initial tasks fetched:", initialTasks);
    return <TodoContainer initialTasks={initialTasks} />;
  } catch (error) {
    console.error("Error fetching initial tasks:", error);
    return <TodoContainer initialTasks={[]} />;
  }
}
