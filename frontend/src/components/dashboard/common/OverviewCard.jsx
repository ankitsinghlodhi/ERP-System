import React from "react";
import { ChevronRight } from "lucide-react";

const OverviewCard = ({
  title,
  value,
  subtitle,
  icon: Icon,
  color = "blue",
  onClick,
}) => {
  const colors = {
    blue: {
      bg: "bg-blue-50",
      icon: "text-blue-600",
      border: "hover:border-blue-300",
    },

    green: {
      bg: "bg-green-50",
      icon: "text-green-600",
      border: "hover:border-green-300",
    },

    yellow: {
      bg: "bg-yellow-50",
      icon: "text-yellow-600",
      border: "hover:border-yellow-300",
    },

    red: {
      bg: "bg-red-50",
      icon: "text-red-600",
      border: "hover:border-red-300",
    },

    purple: {
      bg: "bg-purple-50",
      icon: "text-purple-600",
      border: "hover:border-purple-300",
    },
  };

  const theme = colors[color];

  return (
    <div
      onClick={onClick}
      className={`
        group
        cursor-pointer
        bg-white
        rounded-2xl
        border
        border-gray-200
        p-5
        shadow-sm
        hover:shadow-xl
        hover:-translate-y-1
        transition-all
        duration-300
        ${theme.border}
      `}
    >
      <div className="flex justify-between items-start">

        <div>

          <p className="text-sm text-gray-500">
            {title}
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mt-2">
            {value}
          </h2>

          <p className="text-sm text-gray-500 mt-2">
            {subtitle}
          </p>

        </div>

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

      </div>

      <div className="flex justify-end mt-6">

        <ChevronRight
          className="
            text-gray-400
            group-hover:translate-x-1
            transition-all
          "
        />

      </div>

    </div>
  );
};

export default OverviewCard;