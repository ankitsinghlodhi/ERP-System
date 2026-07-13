import { TrendingUp, TrendingDown } from "lucide-react";

const gradientMap = {
  blue: "from-blue-500 to-indigo-600",
  green: "from-emerald-500 to-green-600",
  purple: "from-purple-500 to-violet-600",
  orange: "from-orange-500 to-red-500",
  red: "from-red-500 to-pink-600",
  yellow: "from-yellow-400 to-orange-500",
  cyan: "from-cyan-500 to-blue-500",
  slate: "from-slate-600 to-slate-800",
};

const StatCard = ({
  title,
  value,
  subtitle,
  icon: Icon,
  color = "blue",
  trend,
  footer,
}) => {
  return (
    <div
      className="
      group
      bg-white
      rounded-3xl
      border
      border-slate-200
      shadow-lg
      hover:shadow-2xl
      hover:-translate-y-1
      transition-all
      duration-300
      overflow-hidden
      "
    >
      {/* Top */}

      <div className="flex justify-between items-start p-6">

        <div>

          <p className="text-sm text-slate-500">
            {title}
          </p>

          <h2 className="text-4xl font-bold mt-2 text-slate-800">
            {value}
          </h2>

          {subtitle && (
            <p className="mt-2 text-sm text-slate-500">
              {subtitle}
            </p>
          )}

        </div>

        <div
          className={`
          w-16
          h-16
          rounded-2xl
          bg-gradient-to-br
          ${gradientMap[color]}
          flex
          items-center
          justify-center
          text-white
          shadow-lg
          group-hover:scale-110
          transition-all
          `}
        >
          {Icon && <Icon size={30} />}
        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-slate-100 px-6 py-4 flex justify-between items-center">

        <span className="text-sm text-slate-500">
          {footer}
        </span>

        {trend && (
          <div
            className={`
            flex
            items-center
            gap-1
            font-medium
            text-sm
            ${
              trend.startsWith("+")
                ? "text-green-600"
                : "text-red-500"
            }
            `}
          >
            {trend.startsWith("+")
              ? <TrendingUp size={16}/>
              : <TrendingDown size={16}/>
            }

            {trend}
          </div>
        )}

      </div>

    </div>
  );
};

export default StatCard;