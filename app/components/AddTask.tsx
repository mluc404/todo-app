"use client";
import { useState } from "react";
import { Modal } from "./Modal";

export function AddTask() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  return (
    <div>
      <button
        onClick={() => setModalOpen(true)}
        className="w-32 h-10 bg-blue-500 hover:bg-blue-600 text-black border-2 rounded-md border-white"
      >
        Add new task
      </button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  );
}
