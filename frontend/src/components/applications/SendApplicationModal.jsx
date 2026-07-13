

import { useState } from "react";
import { X, Send } from "lucide-react";
import { sendApplication } from "../../services/applicationService";

const categoryOptions = [
  { value: "Leave", label: "Leave" },
  { value: "Scholarship", label: "Scholarship" },
  { value: "Fee Extension", label: "Fee Extension" },
  { value: "Bonafide", label: "Bonafide Certificate" },
  { value: "Other", label: "Other" },
];

const SendApplicationModal = ({ close, refresh }) => {
  const [form, setForm] = useState({
    receiverRole: "ADMIN",
    category: "Leave",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!form.subject.trim() || !form.message.trim()) {
      setError("Please fill in both subject and message.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      await sendApplication(form);

      refresh();
      close();
    } catch (err) {
      console.error("Send Application Error:", err.response?.data);
      setError(err.response?.data?.message || "Failed to send application");
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
        <div className="flex justify-between items-center px-6 py-5 border-b border-slate-200">
          <h2 className="text-lg font-bold text-slate-900">
            Send Application
          </h2>
          <button
            onClick={close}
            className="w-8 h-8 rounded-lg hover:bg-slate-100 flex items-center justify-center transition"
          >
            <X size={18} className="text-slate-600" />
          </button>
        </div>

        <div className="px-6 pt-5">
          {error && (
            <div className="mb-4 px-3 py-2 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm font-medium">
              {error}
            </div>
          )}

          <div className="space-y-4">

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                To
              </label>
              <select
                value={form.receiverRole}
                className="w-full border border-slate-300 rounded-xl px-3 py-2.5 text-sm text-slate-900 font-medium bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                onChange={(e) =>
                  setForm({ ...form, receiverRole: e.target.value })
                }
              >
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                Category
              </label>
              <select
                value={form.category}
                className="w-full border border-slate-300 rounded-xl px-3 py-2.5 text-sm text-slate-900 font-medium bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                onChange={(e) =>
                  setForm({ ...form, category: e.target.value })
                }
              >
                {categoryOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                Subject
              </label>
              <input
                type="text"
                placeholder="Brief subject line"
                value={form.subject}
                className="w-full border border-slate-300 rounded-xl px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                onChange={(e) =>
                  setForm({ ...form, subject: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Describe your request in detail"
                value={form.message}
                className="w-full border border-slate-300 rounded-xl px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
              />
            </div>

          </div>
        </div>

        <div className="flex justify-end gap-3 px-6 py-5 mt-2">
          <button
            onClick={close}
            className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-sm font-semibold hover:bg-slate-50 transition"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="px-4 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 disabled:opacity-60 transition flex items-center gap-2 shadow-sm shadow-blue-200"
          >
            {loading ? (
              "Sending..."
            ) : (
              <>
                <Send size={15} />
                Send
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
};

export default SendApplicationModal;