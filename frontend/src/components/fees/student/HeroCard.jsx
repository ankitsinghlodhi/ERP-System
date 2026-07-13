import Avatar from "../../common/Avatar";
import { GraduationCap, IdCard, CircleDollarSign } from "lucide-react";

const HeroCard = ({ student, fee }) => {
  const total = fee?.total || 0;
  const paid = fee?.paid || 0;

  const percentage =
    total === 0 ? 0 : Math.round((paid / total) * 100);

  const getStatusStyle = (status) => {
    switch (status) {
      case "PAID":
        return "bg-green-100 text-green-700 border-green-200";

      case "PARTIAL":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";

      case "PENDING":
        return "bg-red-100 text-red-700 border-red-200";

      default:
        return "bg-slate-100 text-slate-700 border-slate-200";
    }
  };

  return (
    <div
      className="
      relative
      overflow-hidden
      rounded-3xl
      bg-gradient-to-r
      from-blue-700
      via-indigo-700
      to-purple-700
      px-7
      py-1
      shadow-xl
      text-white
      "
    >
      {/* Decorative Circles */}

      <div className="absolute -top-12 -right-12 w-44 h-44 bg-white/10 rounded-full" />

      <div className="absolute -bottom-20 -left-16 w-60 h-60 bg-white/5 rounded-full" />

      <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

        {/* Left */}

        <div className="flex items-center gap-5">

          <Avatar
            name={student?.name}
            image={student?.profileImage}
            size="xl"
            className="ring-4 ring-white/30"
          />

          <div>

            <h2 className="text-2xl font-bold">
              {student?.name}
            </h2>

            <p className="mt-1 text-blue-100 text-lg">
              {student?.department}
            </p>

            <div className="mt-4 flex flex-wrap gap-3">

              <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-full">

                <IdCard size={16} />

                <span className="text-sm">
                  {student?.studentId}
                </span>

              </div>

              <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-full">

                <GraduationCap size={16} />

                <span className="text-sm">
                  Semester {student?.semester}
                </span>

              </div>

            </div>

          </div>

        </div>

        {/* Right */}

        <div className="lg:w-72">

          <div className="flex justify-end">

            {/* <span
              className={`
              border
              px-4
              py-2
              rounded-full
              font-semibold
              text-sm
              bg-white
              ${getStatusStyle(fee?.status)}
              `}
            >
              {fee?.status}
            </span> */}

          </div>

          <div className="mt-6">

            <div className="flex justify-between text-sm text-blue-100">

              <span>Payment Progress</span>

              <span>{percentage}%</span>

            </div>

            <div className="mt-2 h-2.5 rounded-full bg-white/20 overflow-hidden">

              <div
                className="h-full rounded-full bg-green-400 transition-all duration-700"
                style={{
                  width: `${percentage}%`,
                }}
              />

            </div>

            <div className="mt-4 flex justify-between">

              <div>

                <p className="text-blue-100 text-sm">
                  Paid
                </p>

                <h3 className="font-bold text-lg">
                  ₹{paid.toLocaleString()}
                </h3>

              </div>

              <div className="text-right">

                <p className="text-blue-100 text-sm">
                  Remaining
                </p>

                <h3 className="font-bold text-lg">
                  ₹{fee?.due.toLocaleString()}
                </h3>

              </div>

            </div>

            <div className="mt-5 flex items-center gap-2 text-sm text-blue-100">

              <CircleDollarSign size={16} />

              Keep your fee up-to-date to avoid late charges.

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default HeroCard;