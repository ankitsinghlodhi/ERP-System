import {
  FileText,
  Clock3,
  CheckCircle2,
  XCircle,
} from "lucide-react";

const stats = [
  {
    title: "Total",
    value: 18,
    color: "blue",
    icon: FileText,
  },
  {
    title: "Pending",
    value: 6,
    color: "amber",
    icon: Clock3,
  },
  {
    title: "Approved",
    value: 10,
    color: "green",
    icon: CheckCircle2,
  },
  {
    title: "Rejected",
    value: 2,
    color: "red",
    icon: XCircle,
  },
];

const colors = {
  blue: {
    bg: "bg-blue-50",
    icon: "bg-blue-600",
    text: "text-blue-600",
  },
  amber: {
    bg: "bg-amber-50",
    icon: "bg-amber-500",
    text: "text-amber-600",
  },
  green: {
    bg: "bg-green-50",
    icon: "bg-green-600",
    text: "text-green-600",
  },
  red: {
    bg: "bg-red-50",
    icon: "bg-red-600",
    text: "text-red-600",
  },
};

const ApplicationStats = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
      {stats.map((item) => {
        const Icon = item.icon;
        const style = colors[item.color];

        return (
          <div
            key={item.title}
            className="
              bg-white
              rounded-2xl
              border
              border-slate-200
              p-5
              shadow-sm
              hover:shadow-lg
              transition-all
              duration-300
            "
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-slate-500 text-sm">
                  {item.title}
                </p>

                <h2 className="text-3xl font-bold mt-2">
                  {item.value}
                </h2>
              </div>

              <div
                className={`
                  h-12
                  w-12
                  rounded-xl
                  flex
                  items-center
                  justify-center
                  ${style.icon}
                `}
              >
                <Icon
                  className="text-white"
                  size={22}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ApplicationStats;