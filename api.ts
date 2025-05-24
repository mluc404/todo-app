import { Besley } from "next/font/google";
import { TaskInterface } from "./types/task";

const baseURL = "http://localhost:3001/tasks";

export async function getAllTodos(): Promise<TaskInterface[]> {
  const res = await fetch(`${baseURL}`);
  const todos = await res.json();

  return todos;
}
