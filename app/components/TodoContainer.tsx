"use client";

import { TaskInterface } from "@/types/task";
import { AddTask } from "./AddTask";
import { TodoList } from "./TodoList";
import { useState } from "react";

interface TodoContainerProps {
  initialTasks: TaskInterface[];
}

export function TodoContainer({ initialTasks }: TodoContainerProps) {
  const [tasks, setTasks] = useState<TaskInterface[]>(initialTasks);

  const handleAddTask = (newTodo: TaskInterface) => {
    setTasks((prev) => [...prev, newTodo]);
  };
  const handleEditTask = (taskId: string, taskUpdatedValue: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { id: taskId, text: taskUpdatedValue } : task
      )
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center">
      <main className="w-full max-w-4xl px-4 flex flex-col gap-4">
        <div className="flex flex-col items-center gap-4">
          <h1>Todo App</h1>
          <AddTask handleAddTask={handleAddTask} />
        </div>
        <TodoList tasks={tasks} onEdit={handleEditTask} />
      </main>
      <footer className="mt-auto py-4 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
