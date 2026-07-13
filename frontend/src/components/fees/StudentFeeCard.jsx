import Avatar from "../common/Avatar";
import StatusBadge from "../dashboard/common/StatusBadge";
import { Eye, Pencil, IndianRupee } from "lucide-react";

const StudentFeeCard = ({ student }) => {
  const percentage =
    student.totalFee === 0
      ? 0
      : Math.round((student.paid / student.totalFee) * 100);

  let progressColor = "bg-red-500";
  if (percentage === 100) progressColor = "bg-green-500";
  else if (percentage >= 50) progressColor = "bg-yellow-500";

  return (
    <div
      className="
      group
      relative
      overflow-hidden
      bg-white
      border
      border-slate-200
      rounded-2xl
      shadow-sm
      hover:shadow-lg
      hover:border-blue-300
      hover:bg-slate-50/60
      transition-all
      duration-300
      px-5
      py-4
      "
    >
      {/* Left Accent */}
      <div
        className={`absolute left-0 top-0 h-full w-1.5 rounded-r-full transition-all duration-300 group-hover:w-2 ${
          student.status === "PAID" ? "bg-green-500" : ""
        }`}
      />

      <div className="flex items-center gap-5 pl-1">

        {/* ================= Student ================= */}
        <div className="flex items-center gap-3 min-w-[240px]">
          <Avatar name={student.name} size="md" />
          <div>
            <h2 className="text-base font-bold text-slate-900 leading-none">
              {student.name}
            </h2>
            <p className="text-xs text-slate-600 mt-1 font-medium">
              {student.department}
            </p>
            <div className="flex items-center gap-2 mt-1 text-xs text-slate-400">
              <span>
                Roll <span className="font-semibold text-slate-600">{student.rollNumber || "--"}</span>
              </span>
              <span>•</span>
              <span>
                Sem <span className="font-semibold text-slate-600">{student.semester || "--"}</span>
              </span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden lg:block w-px h-10 bg-slate-200" />

        {/* ================= Fee Chips ================= */}
        <div className="flex flex-wrap items-center gap-2 flex-1">

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-100 whitespace-nowrap">
            <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
            <span className="text-[10px] uppercase tracking-wide text-slate-500">Paid</span>
            <span className="text-sm font-bold text-green-600 tabular-nums">
              ₹{student.paid.toLocaleString()*1000}
            </span>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 border border-red-100 whitespace-nowrap">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
            <span className="text-[10px] uppercase tracking-wide text-slate-500">Due</span>
            <span className="text-sm font-bold text-red-500 tabular-nums">
              ₹{student.remaining.toLocaleString()*1000}
            </span>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 whitespace-nowrap">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
            <span className="text-[10px] uppercase tracking-wide text-slate-500">Total</span>
            <span className="text-sm font-bold text-blue-600 tabular-nums">
              ₹{student.totalFee.toLocaleString()*1000}
            </span>
          </div>

        </div>

        {/* ================= Right Side ================= */}
        <div className="flex items-center gap-5 shrink-0">

          {/* Progress */}
          <div className="w-36">
            <div className="flex justify-between text-xs mb-1">
              <span className="text-slate-400">Progress</span>
              <span className="font-semibold text-slate-700 tabular-nums">{percentage}%</span>
            </div>
            <div className="h-2 rounded-full bg-slate-200 overflow-hidden">
              <div
                className={`h-full rounded-full ${progressColor} transition-all duration-700`}
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>

          <StatusBadge status={student.status} />

          {/* Actions */}
          <div className="flex gap-2">
            <button className="group/btn w-9 h-9 rounded-xl bg-blue-50 hover:bg-blue-600 transition flex items-center justify-center">
              <Eye size={16} className="text-blue-600 group-hover/btn:text-white transition" />
            </button>

            <button className="group/btn w-9 h-9 rounded-xl bg-orange-50 hover:bg-orange-500 transition flex items-center justify-center">
              <Pencil size={16} className="text-orange-600 group-hover/btn:text-white transition" />
            </button>

            <button className="group/btn w-9 h-9 rounded-xl bg-green-50 hover:bg-green-500 transition flex items-center justify-center">
              <IndianRupee size={16} className="text-green-600 group-hover/btn:text-white transition" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default StudentFeeCard;