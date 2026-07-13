import CountUp from "react-countup";

const colors = {
  blue: {
    bg: "bg-blue-50",
    icon: "bg-blue-600",
    text: "text-blue-600",
    glow: "shadow-blue-200",
  },

  green: {
    bg: "bg-green-50",
    icon: "bg-green-600",
    text: "text-green-600",
    glow: "shadow-green-200",
  },

  purple: {
    bg: "bg-purple-50",
    icon: "bg-purple-600",
    text: "text-purple-600",
    glow: "shadow-purple-200",
  },

  orange: {
    bg: "bg-orange-50",
    icon: "bg-orange-600",
    text: "text-orange-600",
    glow: "shadow-orange-200",
  },
};

const StatCard = ({
  title,
  value,
  suffix,
  icon: Icon,
  description,
  color,
}) => {
  const theme = colors[color];

  return (
    <div
      className="
      group
      relative
      overflow-hidden
      rounded-3xl
      border
      border-slate-200
      bg-white
      p-7
      transition-all
      duration-500
      hover:-translate-y-2
      hover:shadow-2xl
      "
    >
      {/* Glow */}

      <div
        className={`
        absolute
        -right-8
        -top-8
        h-28
        w-28
        rounded-full
        opacity-30
        blur-2xl
        ${theme.bg}
        `}
      />

      <div className="relative">

        {/* Icon */}

        <div
          className={`
          w-16
          h-16
          rounded-2xl
          ${theme.bg}
          flex
          items-center
          justify-center
          shadow-lg
          ${theme.glow}
          transition-transform
          duration-500
          group-hover:rotate-6
          `}
        >
          <Icon
            size={30}
            className={theme.text}
          />
        </div>

        {/* Number */}

        <h2
          className="
          mt-7
          text-4xl
          font-bold
          text-slate-900
          "
        >
          <CountUp
            end={value}
            duration={2}
          />

          {suffix}
        </h2>

        {/* Title */}

        <h3
          className="
          mt-2
          text-lg
          font-semibold
          text-slate-800
          "
        >
          {title}
        </h3>

        {/* Description */}

        <p
          className="
          mt-2
          text-sm
          text-slate-500
          "
        >
          {description}
        </p>

      </div>
    </div>
  );
};

export default StatCard;