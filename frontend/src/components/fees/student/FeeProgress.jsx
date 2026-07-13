import {
  CircularProgressbar,
  buildStyles,
} from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";

import {
  CheckCircle2,
  Wallet,
  Sparkles,
} from "lucide-react";

const FeeProgress = ({ fee }) => {
  const total = fee?.total || 0;
  const paid = fee?.paid || 0;
  const due = fee?.due || 0;

  const percentage =
    total === 0 ? 0 : Math.round((paid / total) * 100);

  return (
    <div
      className="
        bg-white
        rounded-3xl
        shadow-sm
        border
        p-6
        hover:shadow-xl
        transition-all
        duration-300
        h-full
      "
    >
      {/* Heading */}

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-lg font-bold text-slate-800">
            Fee Progress
          </h2>

          <p className="text-slate-500 mt-1">
            Payment overview
          </p>

        </div>

        <Sparkles
          className="text-yellow-500"
          size={22}
        />

      </div>

      {/* Progress Circle */}

      <div className="mt-6 flex justify-center">

        <div className="w-44 h-44">

          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            strokeWidth={10}
            styles={buildStyles({
              textColor: "#0f172a",
              textSize: "18px",
              pathColor: "#2563eb",
              trailColor: "#e5e7eb",
              pathTransitionDuration: 1.2,
            })}
          />

        </div>

      </div>

      {/* Stats */}

      <div className="grid grid-cols-2 gap-4 mt-6">

        <div
          className="
            bg-green-50
            rounded-2xl
            p-4
          "
        >
          <div className="flex items-center gap-2">

            <CheckCircle2
              size={18}
              className="text-green-600"
            />

            <span className="text-slate-600 text-sm">
              Paid
            </span>

          </div>

          <h3 className="mt-2 text-xl font-bold text-green-700">
            ₹{paid.toLocaleString()}
          </h3>

        </div>

        <div
          className="
            bg-red-50
            rounded-2xl
            p-4
          "
        >
          <div className="flex items-center gap-2">

            <Wallet
              size={18}
              className="text-red-600"
            />

            <span className="text-slate-600 text-sm">
              Remaining
            </span>

          </div>

          <h3 className="mt-2 text-xl font-bold text-red-600">
            ₹{due.toLocaleString()}
          </h3>

        </div>

      </div>

      {/* Message */}

      <div
        className="
          mt-6
          rounded-2xl
          bg-gradient-to-r
          from-blue-50
          to-indigo-50
          border
          border-blue-100
          p-4
        "
      >
        <p className="text-sm text-slate-600 leading-6">

          {percentage === 100
            ? "🎉 Congratulations! Your fees have been fully paid."
            : `You've completed ${percentage}% of your fee payment. Pay the remaining amount before the due date to avoid late charges.`}

        </p>
      </div>

    </div>
  );
};

export default FeeProgress;