"use client";
import { FormEventHandler, useState } from "react";
import { Modal } from "./Modal";
import { addTodo, getAllTodos } from "@/api";
import { TaskInterface } from "@/types/task";
import { useRouter } from "next/navigation";

interface AddTaskProps {
  handleAddTask: (newTodo: TaskInterface) => void;
}

export function AddTask({ handleAddTask }: AddTaskProps) {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newTaskValue, setNewTaskValue] = useState<string>("");
  const router = useRouter();

  const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    console.log(newTaskValue);

    const newTodo: TaskInterface = {
      id: "8",
      text: newTaskValue,
    };
    addTodo(newTodo);
    handleAddTask(newTodo);
    setNewTaskValue("");
    setModalOpen(false);
    // router.refresh();
  };
  return (
    <div>
      <button
        onClick={() => setModalOpen(true)}
        className="w-32 h-10 bg-blue-500 hover:bg-blue-600 text-black border-2 rounded-md border-white"
      >
        Add new task
      </button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmitNewTodo}>
          <h3 className="font-bold text-[1.2rem]">Add new task</h3>
          <div className="modal-action">
            <input
              value={newTaskValue}
              onChange={(e) => setNewTaskValue(e.target.value)}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full text-white"
            />
            <button type="submit" className="btn">
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
