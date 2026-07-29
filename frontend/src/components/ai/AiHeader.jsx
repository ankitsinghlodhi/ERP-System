import { X, Sparkles } from "lucide-react";

const AiHeader = ({ onClose }) => {
  return (
    <div className="border-b px-6 py-4 flex items-center justify-between">

      <div>

        <div className="flex items-center gap-2">

          <Sparkles
            size={22}
            className="text-blue-600"
          />

          <h2 className="text-xl font-bold">
            College Cube AI
          </h2>

        </div>

        <p className="text-sm text-gray-500 mt-1">
          Always here to help.
        </p>

      </div>

      <button
        onClick={onClose}
        className="p-2 rounded-lg hover:bg-gray-100"
      >
        <X />
      </button>
    </div>
  );
};

export default AiHeader;