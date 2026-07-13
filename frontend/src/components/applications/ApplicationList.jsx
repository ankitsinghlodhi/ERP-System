

import { FileText, Sparkles } from "lucide-react";
import ApplicationCard from "./ApplicationCard";

const ApplicationList = ({ applications, role }) => {

  if (!applications || applications.length === 0) {
    return (
      <div
        className="
        bg-white
        rounded-3xl
        border
        border-slate-200
        shadow-sm
        py-20
        flex
        flex-col
        items-center
        justify-center
        "
      >
        <div className="h-20 w-20 rounded-3xl bg-blue-50 flex items-center justify-center">
          <FileText className="text-blue-600" size={36} />
        </div>

        <h3 className="mt-6 text-2xl font-bold text-slate-800">
          No Applications Yet
        </h3>

        <p className="mt-3 text-slate-500 max-w-md text-center leading-7">
          Once applications are submitted, they'll appear here for tracking
          and review.
        </p>
      </div>
    );
  }

  return (
    <section className="w-full max-w-5xl rounded-[32px] border border-slate-200 bg-white shadow-xl overflow-hidden">

      {/* Header */}
      <div className="flex items-center justify-between px-8 py-6 bg-gradient-to-r from-blue-600 to-indigo-600">

        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center border border-white/20">
            <FileText className="text-white" size={22} />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">
              Recent Applications
            </h2>
            <p className="text-blue-100 mt-1 text-sm">
              Track the progress of all submitted requests
            </p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/20">
          <Sparkles className="text-white" size={18} />
          <span className="font-semibold text-white">
            {applications.length} Applications
          </span>
        </div>

      </div>

      {/* Cards — sit on a distinct tinted surface, not white-on-white */}
      <div className="p-6 space-y-4 bg-slate-100">
        {applications.map((application) => (
          <ApplicationCard
            key={application._id}
            application={application}
            role={role}
          />
        ))}
      </div>

    </section>
  );
};

export default ApplicationList;