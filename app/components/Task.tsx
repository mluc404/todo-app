"use client";
import { TaskInterface } from "@/types/task";
import { FiEdit } from "react-icons/fi";
import { FaRegTrashCan } from "react-icons/fa6";
import { Modal } from "./Modal";
import { FormEventHandler, useState } from "react";
import { editTodo } from "@/api";

interface TaskProps {
  task: TaskInterface;
  onEdit: (taskId: string, taskUpdatedValue: string) => void;
}

export function Task({ task, onEdit }: TaskProps) {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [editTaskValue, setEditTaskValue] = useState<string>(task.text);

  const handleSubmitEditTask: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log(editTaskValue);
    editTodo(task, editTaskValue);
    onEdit(task.id, editTaskValue);
    setModalOpen(false);
  };
  return (
    <tr key={task.id}>
      <td className="w-full">{task.text}</td>
      <td className="flex gap-5">
        <FiEdit
          onClick={() => setModalOpen(true)}
          cursor="pointer"
          className="text-blue-400"
          size={20}
        />
        <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
          <form onSubmit={handleSubmitEditTask}>
            <h3 className="font-bold text-[1.2rem]">Edit Task</h3>
            <div className="modal-action">
              <input
                value={editTaskValue}
                onChange={(e) => setEditTaskValue(e.target.value)}
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
        <FaRegTrashCan cursor="pointer" className="text-red-400" size={20} />
      </td>
    </tr>
  );
}
