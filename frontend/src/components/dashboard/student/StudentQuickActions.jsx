
import { dashboardConfig } from "../../../config/dashboardConfig";
import { useNavigate } from "react-router-dom";

const StudentQuickActions = () => {
    const navigate = useNavigate();
  const actions = dashboardConfig.STUDENT.quickActions;

  const colorMap = {
  blue: "from-blue-500 to-indigo-600",
  green: "from-green-500 to-emerald-600",
  orange: "from-orange-500 to-red-500",
  purple: "from-purple-500 to-violet-600",
  cyan: "from-cyan-500 to-blue-500",
  pink: "from-pink-500 to-rose-500",
  yellow: "from-yellow-400 to-orange-500",
  red: "from-red-500 to-pink-600",
  indigo: "from-indigo-500 to-blue-700",
  slate: "from-slate-600 to-slate-800",
  emerald: "from-emerald-500 to-teal-600",
};

  return (
    <div>

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-2xl font-bold text-gray-800">
          Quick Actions
        </h2>

      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        {actions.map((item) => {
          const Icon = item.icon;

          return (
            <button
  key={item.title}
  onClick={() => navigate(item.path)}
  className="
    group
    relative
    overflow-hidden
    rounded-3xl
    bg-white
    border
    border-gray-200
    p-6
    shadow-sm
    hover:shadow-2xl
    hover:-translate-y-2
    transition-all
    duration-300
  "
>
              <div
                className={`
                w-16
                h-16
                rounded-2xl
                bg-gradient-to-br
                ${colorMap[item.color]}
                flex
                items-center
                justify-center
                text-white
                shadow-lg
                group-hover:rotate-6
                transition-all
                duration-300
                `}
              >
                <Icon size={30} />
              </div>

              <h3 className="mt-6 text-lg font-semibold text-gray-800">
                {item.title}
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                {item.description}
              </p>

              <div
                className="
                absolute
                bottom-0
                left-0
                h-1
                w-0
                bg-gradient-to-r
                from-blue-500
                to-indigo-600
                group-hover:w-full
                transition-all
                duration-500
                "
              />
            </button>
          );
        })}

      </div>

    </div>
  );
};

export default StudentQuickActions;