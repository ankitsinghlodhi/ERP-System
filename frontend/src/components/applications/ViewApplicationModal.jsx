import { useState } from "react";
import { X, Check, XCircle } from "lucide-react";
import { updateApplicationStatus } from "../../services/applicationService";

const categoryStyles = {
  Leave: "bg-blue-50 text-blue-700",
  Scholarship: "bg-purple-50 text-purple-700",
  "Fee Extension": "bg-orange-50 text-orange-700",
  Bonafide: "bg-teal-50 text-teal-700",
  Other: "bg-slate-100 text-slate-700",
};

const statusStyles = {
  APPROVED: "bg-green-50 text-green-700",
  REJECTED: "bg-red-50 text-red-700",
  PENDING: "bg-yellow-50 text-yellow-700",
};

const ViewApplicationModal = ({ application, close, role }) => {
  const [loading, setLoading] = useState(false);

  const formattedDate = new Date(application.createdAt).toLocaleDateString(
    "en-IN",
    { day: "numeric", month: "short", year: "numeric" }
  );

  const handleAction = async (status) => {
    try {
      setLoading(true);
      await updateApplicationStatus({
        applicationId: application._id,
        status,
      });
      close();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-[2px] flex items-center justify-center px-4"
      onClick={close}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl ring-1 ring-slate-200 w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start px-6 py-5 border-b border-slate-200">
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              Application
            </h2>
            <p className="text-xs text-slate-500 font-medium mt-0.5">
              {formattedDate}
            </p>
          </div>
          <button
            onClick={close}
            className="w-8 h-8 rounded-lg hover:bg-slate-100 flex items-center justify-center transition"
          >
            <X size={18} className="text-slate-600" />
          </button>
        </div>

        <div className="px-6 pt-5">

          <div className="flex items-center gap-2 mb-5">
            <span
              className={`text-xs font-semibold px-3 py-1 rounded-full ${
                categoryStyles[application.category] || categoryStyles.Other
              }`}
            >
              {application.category}
            </span>
            <span
              className={`text-xs font-semibold px-3 py-1 rounded-full ${
                statusStyles[application.status]
              }`}
            >
              {application.status}
            </span>
          </div>

          <div className="mb-4">
            <p className="text-xs font-semibold text-slate-500 mb-1">
              Subject
            </p>
            <p className="text-sm font-semibold text-slate-900">
              {application.subject}
            </p>
          </div>

          <div className="mb-2">
            <p className="text-xs font-semibold text-slate-500 mb-1">
              Message
            </p>
            <div className="bg-slate-100 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 leading-relaxed">
              {application.message}
            </div>
          </div>

        </div>

        {(role === "ADMIN" || role === "FACULTY") &&
          application.status === "PENDING" && (
            <div className="flex justify-end gap-3 px-6 py-5 mt-2">
              <button
                onClick={() => handleAction("REJECTED")}
                disabled={loading}
                className="px-4 py-2.5 rounded-xl border border-red-300 text-red-700 text-sm font-semibold hover:bg-red-50 disabled:opacity-60 transition flex items-center gap-2"
              >
                <XCircle size={15} />
                Reject
              </button>

              <button
                onClick={() => handleAction("APPROVED")}
                disabled={loading}
                className="px-4 py-2.5 rounded-xl bg-green-600 text-white text-sm font-semibold hover:bg-green-700 disabled:opacity-60 transition flex items-center gap-2 shadow-sm shadow-green-200"
              >
                <Check size={15} />
                Approve
              </button>
            </div>
          )}

        {!(role === "ADMIN" || role === "FACULTY") ||
        application.status !== "PENDING" ? (
          <div className="h-5" />
        ) : null}

      </div>
    </div>
  );
};

export default ViewApplicationModal;