import React from "react";

const FeeStatCard = ({
  title,
  value,
  subtitle,
  icon: Icon,
  color = "blue",
}) => {
  const styles = {
    blue: {
      bg: "bg-blue-50",
      icon: "bg-blue-600",
      text: "text-blue-700",
    },

    green: {
      bg: "bg-green-50",
      icon: "bg-green-600",
      text: "text-green-700",
    },

    red: {
      bg: "bg-red-50",
      icon: "bg-red-600",
      text: "text-red-700",
    },

    orange: {
      bg: "bg-orange-50",
      icon: "bg-orange-600",
      text: "text-orange-700",
    },
  };

  const theme = styles[color];

  return (
    <div
      className="
      bg-white
      rounded-3xl
      shadow-sm
      border
      hover:shadow-xl
      hover:-translate-y-1
      transition-all
      duration-300
      p-5
      relative
      overflow-hidden
      "
    >
      <div
        className={`
        absolute
        -right-6
        -top-6
        w-20
        h-20
        rounded-full
        ${theme.bg}
        opacity-40
        `}
      />

      <div className="relative flex justify-between items-start">

        <div className="flex-1">

          <p className="text-slate-500 text-sm">
            {title}
          </p>

          <h2 className="text-2xl font-bold mt-1.5 break-words">
            {value}
          </h2>

          {subtitle && (
            <p
              className={`mt-2 text-sm font-medium ${theme.text}`}
            >
              {subtitle}
            </p>
          )}

        </div>

        <div
          className={`
          w-12
          h-12
          rounded-2xl
          ${theme.icon}
          text-white
          flex
          items-center
          justify-center
          shadow-lg
          shrink-0
          `}
        >
          <Icon size={24} />
        </div>

      </div>

    </div>
  );
};

export default FeeStatCard;