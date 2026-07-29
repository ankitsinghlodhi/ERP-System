import { createContext, useContext, useState } from "react";
import { chatWithAI } from "../services/aiService";

const AiContext = createContext();

export const AiProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  /* ================= PANEL ================= */

  const openPanel = () => {
    setIsOpen(true);
  };

  const closePanel = () => {
    setIsOpen(false);
  };

  /* ================= CHAT ================= */

  const clearConversation = () => {
    setMessages([]);
  };

  const sendMessage = async (text) => {
    const message = text.trim();

    if (!message || loading) return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      sender: "user",
      text: message,
    };

    setMessages((prev) => [...prev, userMessage]);

    setLoading(true);

    try {
      const response = await chatWithAI(message);

      const aiMessage = {
        id: Date.now() + 1,
        sender: "ai",
        text: response.reply,
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("AI Error:", error);

      const errorMessage = {
        id: Date.now() + 1,
        sender: "ai",
        text: "Sorry, something went wrong. Please try again.",
      };

      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AiContext.Provider
      value={{
        // Panel
        isOpen,
        openPanel,
        closePanel,

        // Chat
        messages,
        loading,
        sendMessage,
        clearConversation,
      }}
    >
      {children}
    </AiContext.Provider>
  );
};

export const useAi = () => useContext(AiContext);