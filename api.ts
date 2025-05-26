import { TaskInterface } from "./types/task";
import { supabase } from "./libs/supabase";

// const baseURL = "http://localhost:3001";

// export async function getAllTodos(): Promise<TaskInterface[]> {
//   const res = await fetch(`${baseURL}/tasks`);
//   const todos = await res.json();

//   return todos;
// }

// export async function addTodo(todo: TaskInterface): Promise<TaskInterface> {
//   const res = await fetch(`${baseURL}/tasks`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(todo),
//   });
//   const newTodo = await res.json();
//   return newTodo;
// }

// export async function editTodo(
//   todo: TaskInterface,
//   newText: string
// ): Promise<TaskInterface> {
//   const res = await fetch(`${baseURL}/tasks/${todo.id}`, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       text: newText,
//     }),
//   });
//   const editedTodo = await res.json();
//   return editedTodo;
// }

// export async function deleteTodo(todo: TaskInterface): Promise<void> {
//   await fetch(`${baseURL}/tasks/${todo.id}`, {
//     method: "DELETE",
//   });
// }

export async function getAllTodos(): Promise<TaskInterface[]> {
  const { data, error } = await supabase
    .from("tasks")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data;
}

export async function addTodo(todo: TaskInterface): Promise<TaskInterface> {
  const { data, error } = await supabase
    .from("tasks")
    .insert([{ text: todo.text }])
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function editTodo(
  todo: TaskInterface,
  newText: string
): Promise<TaskInterface> {
  const { data, error } = await supabase
    .from("tasks")
    .update({ text: newText })
    .eq("id", todo.id)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function deleteTodo(todo: TaskInterface): Promise<void> {
  const { error } = await supabase.from("tasks").delete().eq("id", todo.id);

  if (error) throw error;
}
