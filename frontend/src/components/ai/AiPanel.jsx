import AiHeader from "./AiHeader";
import EmptyChat from "./EmptyChat";
import ChatInput from "./ChatInput";
import ChatMessages from "./ChatMessages";

import { useAi } from "../../context/AiContext";

const AiPanel = ({ isOpen, onClose }) => {
  const { messages } = useAi();

  return (
    <>
      {/* ================= OVERLAY ================= */}

      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 z-40 ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
        onClick={onClose}
      />

      {/* ================= RIGHT PANEL ================= */}

      <div
        className={`fixed top-0 right-0 h-screen w-[42vw] max-w-[650px] min-w-[420px]
        bg-white shadow-2xl z-50 transition-transform duration-300
        flex flex-col
        ${
          isOpen
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        {/* ================= HEADER ================= */}

        <AiHeader onClose={onClose} />

        {/* ================= CHAT AREA ================= */}

        <div className="flex-1 min-h-0 flex flex-col">
          {messages.length === 0 ? (
            <EmptyChat />
          ) : (
            <ChatMessages />
          )}
        </div>

        {/* ================= INPUT ================= */}

        <ChatInput />
      </div>
    </>
  );
};

export default AiPanel;