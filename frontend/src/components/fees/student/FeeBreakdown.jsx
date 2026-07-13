import {
  GraduationCap,
  BookOpen,
  FileText,
  Building2,
  IndianRupee,
} from "lucide-react";

const FeeBreakdown = ({ breakdown = [] }) => {
  const getMeta = (title) => {
    const text = title.toLowerCase();

    if (text.includes("tuition")) {
      return {
        icon: GraduationCap,
        bg: "bg-blue-100",
        iconColor: "text-blue-600",
        bar: "bg-blue-500",
      };
    }

    if (text.includes("library")) {
      return {
        icon: BookOpen,
        bg: "bg-green-100",
        iconColor: "text-green-600",
        bar: "bg-green-500",
      };
    }

    if (text.includes("exam")) {
      return {
        icon: FileText,
        bg: "bg-orange-100",
        iconColor: "text-orange-600",
        bar: "bg-orange-500",
      };
    }

    return {
      icon: Building2,
      bg: "bg-purple-100",
      iconColor: "text-purple-600",
      bar: "bg-purple-500",
    };
  };

  const total = breakdown.reduce(
    (sum, item) => sum + item.amount,
    0
  );

  return (
    <div className="bg-white rounded-3xl border shadow-sm hover:shadow-xl transition-all duration-300 p-8">

      {/* Header */}

      <div className="flex justify-between items-center">

        <div>

          <h2 className="text-xl font-bold text-slate-800">
            Fee Breakdown
          </h2>

          <p className="text-slate-500 mt-1">
            Semester Fee Distribution
          </p>

        </div>

        <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">

          <IndianRupee
            className="text-blue-600"
            size={30}
          />

        </div>

      </div>

      {/* Items */}

      <div className="mt-8 space-y-6">

        {breakdown.map((item, index) => {
          const meta = getMeta(item.title);
          const Icon = meta.icon;

          const percentage =
            total === 0
              ? 0
              : Math.round((item.amount / total) * 100);

          return (
            <div key={index}>

              <div className="flex justify-between items-center">

                <div className="flex items-center gap-4">

                  <div
                    className={`
                    w-12
                    h-12
                    rounded-xl
                    ${meta.bg}
                    flex
                    items-center
                    justify-center
                    `}
                  >
                    <Icon
                      className={meta.iconColor}
                      size={22}
                    />

                  </div>

                  <div>

                    <h3 className="font-semibold text-slate-800">
                      {item.title}
                    </h3>

                    <p className="text-sm text-slate-500">
                      {percentage}% of Total Fee
                    </p>

                  </div>

                </div>

                <div className="text-right">

                  <h3 className="font-bold text-lg">
                    ₹{item.amount.toLocaleString()}
                  </h3>

                </div>

              </div>

              {/* Progress */}

              <div className="mt-4">

                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">

                  <div
                    className={`h-full rounded-full ${meta.bar}`}
                    style={{
                      width: `${percentage}%`,
                    }}
                  />

                </div>

              </div>

            </div>
          );
        })}

      </div>

      {/* Total */}

      <div
        className="
        mt-10
        rounded-2xl
        bg-gradient-to-r
        from-blue-600
        to-indigo-700
        text-white
        p-6
        "
      >
        <div className="flex justify-between items-center">

          <div>

            <p className="text-blue-100">
              Total Semester Fee
            </p>

            <h2 className="text-4xl font-bold mt-2">
              ₹{total.toLocaleString()}
            </h2>

          </div>

          <div className="text-right">

            <p className="text-blue-100">
              Categories
            </p>

            <h3 className="text-2xl font-bold">
              {breakdown.length}
            </h3>

          </div>

        </div>

      </div>

    </div>
  );
};

export default FeeBreakdown;