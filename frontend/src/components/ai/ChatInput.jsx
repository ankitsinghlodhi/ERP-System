import { useState } from "react";
import { SendHorizontal } from "lucide-react";

import { useAi } from "../../context/AiContext";

const ChatInput = () => {
  const [input, setInput] = useState("");

  const { sendMessage, loading } = useAi();

  const handleSend = async () => {
    if (!input.trim()) return;

    await sendMessage(input);

    setInput("");
  };

  const handleKeyDown = async (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="border-t p-4 bg-white">

      <div className="flex items-center gap-3">

        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask College Cube AI..."
          className="flex-1 border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={handleSend}
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded-xl p-3 transition"
        >
          <SendHorizontal size={20} />
        </button>

      </div>

    </div>
  );
};

export default ChatInput;