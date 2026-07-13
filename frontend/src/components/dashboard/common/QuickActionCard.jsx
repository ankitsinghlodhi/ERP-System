import { ArrowRight } from "lucide-react";

const QuickActionCard = ({
  title,
  description,
  icon: Icon,
  color = "blue",
  onClick,
}) => {
  const colors = {
    blue: {
      bg: "bg-blue-50",
      icon: "text-blue-600",
    },
    green: {
      bg: "bg-green-50",
      icon: "text-green-600",
    },
    purple: {
      bg: "bg-purple-50",
      icon: "text-purple-600",
    },
    yellow: {
      bg: "bg-yellow-50",
      icon: "text-yellow-600",
    },
    red: {
      bg: "bg-red-50",
      icon: "text-red-600",
    },
    cyan: {
      bg: "bg-cyan-50",
      icon: "text-cyan-600",
    },
  };

  const theme = colors[color];

  return (
    <button
      onClick={onClick}
      className="
        group
        w-full
        bg-white
        rounded-2xl
        border
        border-gray-200
        p-5
        text-left
        hover:shadow-xl
        hover:-translate-y-1
        transition-all
        duration-300
      "
    >
      <div
        className={`
          w-12
          h-12
          rounded-xl
          flex
          items-center
          justify-center
          ${theme.bg}
        `}
      >
        <Icon className={`w-6 h-6 ${theme.icon}`} />
      </div>

      <h3 className="mt-5 text-lg font-semibold text-gray-800">
        {title}
      </h3>

      <p className="text-sm text-gray-500 mt-2">
        {description}
      </p>

      <div className="flex justify-end mt-6">
        <ArrowRight
          className="
            w-5
            h-5
            text-gray-400
            group-hover:translate-x-1
            transition-all
          "
        />
      </div>
    </button>
  );
};

export default QuickActionCard;