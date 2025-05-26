import { Besley } from "next/font/google";
import { TaskInterface } from "./types/task";
import { METHODS } from "http";

const baseURL = "http://localhost:3001";

export async function getAllTodos(): Promise<TaskInterface[]> {
  const res = await fetch(`${baseURL}/tasks`);
  const todos = await res.json();

  return todos;
}

export async function addTodo(todo: TaskInterface): Promise<TaskInterface> {
  const res = await fetch(`${baseURL}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  const newTodo = await res.json();
  return newTodo;
}

export async function editTodo(todo: TaskInterface): Promise<TaskInterface> {
  const res = await fetch(`${baseURL}/tasks`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  const editedTodo = await res.json();
  return editedTodo;
}
