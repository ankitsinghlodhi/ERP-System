import statsData from "./statsData";
import StatCard from "./StatCard";
import illustration from "../../../assets/public/stats-illustration.png";

const StatsSection = () => {
  return (
    <section
      className="
      relative
      overflow-hidden
      py-32
      bg-white
      "
    >
      {/* Background Blur */}

      <div
        className="
        absolute
        -left-40
        top-20
        w-80
        h-80
        rounded-full
        bg-blue-100/40
        blur-[120px]
        "
      />

      <div
        className="
        absolute
        right-0
        bottom-0
        w-96
        h-96
        rounded-full
        bg-indigo-100/40
        blur-[140px]
        "
      />

      <div
        className="
        relative
        max-w-7xl
        mx-auto
        px-6
        lg:px-8
        "
      >
        <div
          className="
          grid
          lg:grid-cols-2
          gap-20
          items-center
          "
        >
          {/* LEFT */}

          <div>

            <span
              className="
              inline-flex
              items-center
              rounded-full
              bg-blue-50
              border
              border-blue-100
              px-4
              py-2
              text-sm
              font-semibold
              text-blue-600
              "
            >
              Trusted Platform
            </span>

            <h2
              className="
              mt-6
              text-5xl
              font-bold
              leading-tight
              text-slate-900
              "
            >
              Powering Modern
              <span className="block">
                Educational Institutions
              </span>
            </h2>

            <p
              className="
              mt-8
              max-w-lg
              text-lg
              leading-8
              text-slate-600
              "
            >
              College Cube brings every academic
              operation into one intelligent platform.
              From admissions to placements,
              everything is connected, organized
              and easy to manage.
            </p>

            {/* Feature List */}

           {/* Illustration */}

<div className="mt-12">

  <div className="relative mt-12 flex justify-center">

  {/* Background Glow */}

  <div
    className="
    absolute
    inset-0
    bg-gradient-to-r
    from-blue-100/30
    via-indigo-100/20
    to-purple-100/30
    blur-3xl
    rounded-full
    scale-90
    "
  />

  {/* Floating Card */}

  <div
    className="
    relative
    rounded-[32px]
    bg-white/80
    backdrop-blur-xl
    border
    border-white
    shadow-2xl
    p-5
    hover:-translate-y-2
    transition-all
    duration-500
    "
  >
    <img
      src={illustration}
      alt="College Cube ERP"
      className="
      w-full
      max-w-lg
      rounded-2xl
      "
    />
  </div>

</div>

</div>

          </div>

          {/* RIGHT */}

          <div
            className="
            grid
            grid-cols-2
            gap-7
            "
          >
            {statsData.map((stat) => (
              <StatCard
                key={stat.id}
                {...stat}
              />
            ))}
          </div>

        </div>

      </div>

    </section>
  );
};

export default StatsSection;