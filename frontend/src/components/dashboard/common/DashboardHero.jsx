import {
  Sparkles,
  GraduationCap,
  CalendarDays,
} from "lucide-react";

const DashboardHero = ({
  title,
  subtitle,
  department,
  semester,
  date,
  quote,
  gradient = "from-blue-600 via-indigo-600 to-violet-600",
}) => {
  return (
    <div
      className={`
      relative
      overflow-hidden
      rounded-3xl
      bg-gradient-to-r
      ${gradient}
      text-white
      shadow-2xl
      p-6
      `}
    >
      {/* Background Glow */}

      <div className="absolute -top-24 -right-24 w-72 h-72 bg-white/10 rounded-full blur-3xl" />

      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-white/5 rounded-full blur-3xl" />

      <div className="relative flex flex-col lg:flex-row justify-between gap-10">

        {/* LEFT */}

        <div>

          <div className="flex items-center gap-3">

            <Sparkles size={30} />

            <h1 className="text-5xl font-bold">
              {title}
            </h1>

          </div>

          <p className="mt-5 text-lg text-white/90">
            {subtitle}
          </p>

          <div className="flex flex-wrap gap-8 mt-8 text-white/90">

            {department && (
              <div className="flex items-center gap-2">

                <GraduationCap size={20} />

                {department}

              </div>
            )}

            {semester && (
              <div>

                Semester {semester}

              </div>
            )}

          </div>

        </div>

        {/* RIGHT */}

        <div className="flex flex-col items-end justify-between">

          <div className="flex items-center gap-2 text-white/90">

            <CalendarDays size={22} />

            <span>{date}</span>

          </div>

          <p className="mt-12 text-right text-lg max-w-sm text-white/90 leading-8">
            {quote}
          </p>

        </div>

      </div>

    </div>
  );
};

export default DashboardHero;