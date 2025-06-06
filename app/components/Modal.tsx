interface ModalProps {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
  children: React.ReactNode;
}

export function Modal({ modalOpen, setModalOpen, children }: ModalProps) {
  if (!modalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-md mx-4 bg-white rounded-lg shadow-lg text-black">
        <div className="p-6 relative">
          <button
            onClick={() => setModalOpen(false)}
            className="absolute right-2 top-2 text-gray-800 hover:bg-gray-400 btn btn-circle bg-gray-200 border-none"
          >
            ✕
          </button>
          {children}
        </div>
      </div>
    </div>
  );
}
