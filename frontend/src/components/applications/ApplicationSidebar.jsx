import {
  FileText,
  Clock3,
  CheckCircle2,
  XCircle,
  TrendingUp,
  Lightbulb,
} from "lucide-react";

const ApplicationSidebar = ({
  applications,
}) => {

  const total = applications.length;

  const pending = applications.filter(
    (a) => a.status === "PENDING"
  ).length;

  const approved = applications.filter(
    (a) => a.status === "APPROVED"
  ).length;

  const rejected = applications.filter(
    (a) => a.status === "REJECTED"
  ).length;

  const stats = [
    {
      title: "Total",
      value: total,
      icon: FileText,
      color: "bg-blue-500",
    },
    {
      title: "Pending",
      value: pending,
      icon: Clock3,
      color: "bg-amber-500",
    },
    {
      title: "Approved",
      value: approved,
      icon: CheckCircle2,
      color: "bg-green-500",
    },
    {
      title: "Rejected",
      value: rejected,
      icon: XCircle,
      color: "bg-red-500",
    },
  ];

  return (

    <aside
      className="
      sticky
      top-6
      space-y-6
      "
    >

      {/* Stats */}

      <div
        className="
        rounded-3xl
        border
        border-slate-200
        bg-white
        shadow-sm
        overflow-hidden
        "
      >

        <div className="px-6 py-5 border-b">

          <h3 className="font-bold text-xl">

            Overview

          </h3>

          <p className="text-slate-500 text-sm mt-1">

            Application Summary

          </p>

        </div>

        <div className="p-5 space-y-4">

          {stats.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className="
                flex
                items-center
                justify-between
                rounded-2xl
                bg-slate-50
                p-4
                "
              >

                <div className="flex items-center gap-3">

                  <div
                    className={`
                    h-11
                    w-11
                    rounded-xl
                    flex
                    items-center
                    justify-center
                    text-white
                    ${item.color}
                    `}
                  >
                    <Icon size={20} />
                  </div>

                  <div>

                    <p className="text-sm text-slate-500">

                      {item.title}

                    </p>

                    <h4 className="font-bold text-lg">

                      {item.value}

                    </h4>

                  </div>

                </div>

              </div>

            );

          })}

        </div>

      </div>

      {/* Tips */}

      <div
        className="
        rounded-3xl
        border
        border-blue-100
        bg-gradient-to-br
        from-blue-50
        to-indigo-50
        p-6
        "
      >

        <div className="flex gap-3">

          <div
            className="
            h-11
            w-11
            rounded-xl
            bg-blue-600
            text-white
            flex
            items-center
            justify-center
            "
          >

            <Lightbulb size={20} />

          </div>

          <div>

            <h3 className="font-bold">

              Quick Tip

            </h3>

            <p className="text-sm text-slate-600 mt-2 leading-6">

              Review pending applications regularly to keep student requests up to date.

            </p>

          </div>

        </div>

      </div>

      {/* Progress */}

      <div
        className="
        rounded-3xl
        bg-gradient-to-r
        from-blue-600
        to-indigo-600
        text-white
        p-6
        "
      >

        <div className="flex items-center gap-3">

          <TrendingUp />

          <h3 className="font-semibold">

            Approval Rate

          </h3>

        </div>

        <h1 className="text-4xl font-bold mt-4">

          {total === 0
            ? 0
            : Math.round(
                (approved / total) * 100
              )}
          %

        </h1>

      </div>

    </aside>

  );
};

export default ApplicationSidebar;