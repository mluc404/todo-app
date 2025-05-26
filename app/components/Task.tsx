"use client";
import { TaskInterface } from "@/types/task";
import { FiEdit } from "react-icons/fi";
import { FaRegTrashCan } from "react-icons/fa6";
import { Modal } from "./Modal";
import { useState } from "react";

interface TaskProps {
  task: TaskInterface;
}

export function Task({ task }: TaskProps) {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
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
          <div>hi</div>
          {/* <form onSubmit={handleSubmitNewTodo}>
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
        </form> */}
        </Modal>
        <FaRegTrashCan cursor="pointer" className="text-red-400" size={20} />
      </td>
    </tr>
  );
}
