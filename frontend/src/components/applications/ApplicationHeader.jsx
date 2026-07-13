import {
  FileText,
  Send,
  Clock3,
  CheckCircle2,
} from "lucide-react";

const ApplicationHeader = ({
  role,
  onCreate,
  stats,
}) => {
  return (
    <div
      className="
      relative
      overflow-hidden
      rounded-[32px]
      bg-gradient-to-r
      from-blue-700
      via-indigo-700
      to-purple-700
      p-8
      text-white
      shadow-xl
      "
    >
      {/* Decorative */}

      <div className="absolute -top-24 -right-20 w-72 h-72 rounded-full bg-white/10" />

      <div className="absolute -bottom-28 -left-24 w-80 h-80 rounded-full bg-white/5" />

      <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

        {/* Left */}

        <div>

          <div className="flex items-center gap-3">

            <div
              className="
              h-14
              w-14
              rounded-2xl
              bg-white/15
              flex
              items-center
              justify-center
              backdrop-blur
              "
            >
              <FileText size={28} />
            </div>

            <div>

              <h1 className="text-4xl font-bold">

                {role === "STUDENT"
                  ? "My Applications"
                  : "Student Applications"}

              </h1>

              <p className="text-blue-100 mt-2 text-lg">

                {role === "STUDENT"
                  ? "Track every request you've submitted."
                  : "Review and manage student requests efficiently."}

              </p>

            </div>

          </div>

          {/* Quick Stats */}

          <div className="flex flex-wrap gap-8 mt-8">

            <div>

              <p className="text-blue-100 text-sm">

                Total

              </p>

              <h3 className="text-2xl font-bold">

                {stats.total}

              </h3>

            </div>

            <div>

              <p className="text-blue-100 text-sm">

                Pending

              </p>

              <h3 className="text-2xl font-bold">

                {stats.pending}

              </h3>

            </div>

            <div>

              <p className="text-blue-100 text-sm">

                Approved

              </p>

              <h3 className="text-2xl font-bold">

                {stats.approved}

              </h3>

            </div>

          </div>

        </div>

        {/* Right */}

        {role === "STUDENT" && (

          <button
            onClick={onCreate}
            className="
            inline-flex
            items-center
            gap-3
            rounded-2xl
            bg-white
            px-6
            py-4
            text-blue-700
            font-semibold
            shadow-lg
            hover:scale-105
            transition-all
            "
          >
            <Send size={20} />

            New Application

          </button>

        )}

      </div>

    </div>
  );
};

export default ApplicationHeader;