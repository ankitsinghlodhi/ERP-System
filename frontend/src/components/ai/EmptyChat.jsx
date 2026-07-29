import { aiSuggestions } from "../../config/aiSuggestions";
import { useAi } from "../../context/AiContext";

const EmptyChat = ({ onSuggestionClick }) => {
    //const { addUserMessage } = useAi();
    const { sendMessage } = useAi();
  return (
    <div className="h-full flex flex-col justify-center px-8">

      <h1 className="text-3xl font-bold mb-3">
        👋 Welcome!
      </h1>

      <p className="text-gray-500 mb-8">
        I can help you with your ERP.
      </p>

      <div className="grid gap-4">

        {aiSuggestions.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.id}
             onClick={() => {
    sendMessage(item.prompt);
}}
              className="border rounded-xl p-4 hover:border-blue-500 hover:shadow transition text-left flex items-center gap-4"
            >
              <Icon size={24} />

              <span>{item.title}</span>
            </button>
          );
        })}

      </div>

    </div>
  );
};

export default EmptyChat;