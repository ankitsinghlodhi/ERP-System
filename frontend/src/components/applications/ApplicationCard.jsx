import { useState } from "react";
import {
  CalendarDays,
  ArrowRight,
  Clock3,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import ViewApplicationModal from "./ViewApplicationModal";

const statusConfig = {
  APPROVED: {
    badge: "bg-green-100 text-green-700",
    border: "bg-green-500",
    icon: CheckCircle2,
  },
  REJECTED: {
    badge: "bg-red-100 text-red-700",
    border: "bg-red-500",
    icon: XCircle,
  },
  PENDING: {
    badge: "bg-amber-100 text-amber-700",
    border: "bg-amber-500",
    icon: Clock3,
  },
};

const categoryStyles = {
  Leave: "bg-orange-100 text-orange-700",
  Scholarship: "bg-purple-100 text-purple-700",
  Bonafide: "bg-blue-100 text-blue-700",
  Certificate: "bg-emerald-100 text-emerald-700",
};

const ApplicationCard = ({ application, role }) => {
  const [open, setOpen] = useState(false);

  const formattedDate = new Date(
    application.createdAt
  ).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const status = statusConfig[application.status];

  return (
    <>
      <div
        className="
          group
          relative
          overflow-hidden
          bg-white
          rounded-2xl
          border
          border-slate-100
          shadow-md
          hover:shadow-lg
          hover:-translate-y-1
          transition-all
          duration-300
        "
      >
        {/* Left Accent */}

        <div
          className={`absolute left-0 top-0 h-full w-1 ${status.border}`}
        />

        <div className="px-6 py-3.5">
          {/* Header */}

          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-base font-semibold text-slate-800">
                {role === "STUDENT"
                  ? `Sent to ${application.receiverRole}`
                  : application.studentId?.name || "Student"}
              </h3>

              {role !== "STUDENT" &&
                application.studentId?.departmentId && (
                  <p className="text-xs text-slate-500">
                    {application.studentId.departmentId.name}

                    {application.studentId.semester &&
                      ` • Sem ${application.studentId.semester}`}
                  </p>
                )}
            </div>

            {(role === "ADMIN" || role === "FACULTY") &&
            application.status === "PENDING" ? (
              <button
                onClick={() => setOpen(true)}
                className="
                  px-3.5
                  py-1.5
                  rounded-lg
                  bg-blue-600
                  text-white
                  text-sm
                  font-medium
                  hover:bg-blue-700
                  transition
                "
              >
                Review 
              </button>
            ) : (
              <StatusBadge status={application.status} />
            )}
          </div>

          {/* Footer */}

          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center gap-3 flex-wrap">
              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <CalendarDays size={14} />

                {formattedDate}
              </div>

              <span
                className={`
                  px-2.5
                  py-0.5
                  rounded-full
                  text-[11px]
                  font-semibold
                  ${
                    categoryStyles[application.category] ||
                    "bg-slate-100 text-slate-700"
                  }
                `}
              >
                {application.category}
              </span>
            </div>

            {role === "STUDENT" && (
              <button
                onClick={() => setOpen(true)}
                className="
                  flex
                  items-center
                  gap-1
                  text-blue-600
                  text-sm
                  font-semibold
                  hover:text-blue-700
                  transition
                "
              >
                View

                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition"
                />
              </button>
            )}
          </div>
        </div>
      </div>

      {open && (
        <ViewApplicationModal
          application={application}
          close={() => setOpen(false)}
          role={role}
        />
      )}
    </>
  );
};

const StatusBadge = ({ status }) => {
  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <div
      className={`
        flex
        items-center
        gap-1.5
        px-3
        py-1.5
        rounded-full
        text-xs
        font-semibold
        ${config.badge}
      `}
    >
      <Icon size={14} />

      {status}
    </div>
  );
};

export default ApplicationCard;
