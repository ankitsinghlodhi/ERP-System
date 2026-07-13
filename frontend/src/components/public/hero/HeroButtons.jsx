import {
  ArrowRight,
  PlayCircle,
} from "lucide-react";

const HeroButtons = () => {
  return (
    <div className="flex flex-wrap items-center gap-4">

      {/* Primary */}

      <button
        className="
        group
        px-7
        py-4
        rounded-2xl
        bg-gradient-to-r
        from-blue-600
        to-indigo-600
        text-white
        font-semibold
        shadow-lg
        shadow-blue-200
        hover:shadow-blue-300
        hover:-translate-y-1
        transition-all
        duration-300
        flex
        items-center
        gap-3
        "
      >
        Launch Demo

        <ArrowRight
          size={20}
          className="
          transition-transform
          duration-300
          group-hover:translate-x-1
          "
        />

      </button>

      {/* Secondary */}

      <button
        className="
        group
        px-7
        py-4
        rounded-2xl
        border
        border-slate-200
        bg-white
        text-slate-700
        font-semibold
        shadow-sm
        hover:shadow-lg
        hover:-translate-y-1
        transition-all
        duration-300
        flex
        items-center
        gap-3
        "
      >
        <PlayCircle
          size={22}
          className="text-blue-600"
        />

        Explore Platform

      </button>

    </div>
  );
};

export default HeroButtons;