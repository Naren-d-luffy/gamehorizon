interface ModuleProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Create({ isOpen, onClose }: ModuleProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white p-10 rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
        <div className="flex justify-between">
          <h1>hello team</h1>
          <button onClick={onClose} className="bg-blue-500 p-5">
            X
          </button>
        </div>
      </div>
    </div>
  );
}
