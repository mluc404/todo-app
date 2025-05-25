import { getAllTodos } from "@/api";
import { AddTask } from "./components/AddTask";
import { TodoList } from "./components/TodoList";

export default async function Home() {
  const tasks = await getAllTodos();
  console.log(tasks);
  return (
    // <div>
    //   <main>
    //     <div>
    //       <h1>Todo App</h1>
    //       <AddTask />
    //     </div>
    //     <TodoList tasks={tasks} />
    //   </main>
    //   <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    // </div>

    <div className="min-h-screen flex flex-col items-center">
      <main className="w-full max-w-4xl px-4">
        <div className="flex flex-col items-center gap-4">
          <h1>Todo App</h1>
          <AddTask />
        </div>
        <TodoList tasks={tasks} />
      </main>
      <footer className="mt-auto py-4 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
