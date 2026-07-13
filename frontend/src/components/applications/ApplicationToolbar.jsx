import { Search } from "lucide-react";

const filters = [
  "All",
  "Pending",
  "Approved",
  "Rejected",
];

const ApplicationToolbar = ({
  search,
  setSearch,
  activeFilter,
  setActiveFilter,
}) => {
  return (
    <div
      className="
      bg-white
      rounded-2xl
      border
      border-slate-200
      shadow-sm
      p-4
      flex
      flex-col
      lg:flex-row
      lg:items-center
      lg:justify-between
      gap-5
      "
    >
      {/* Search */}

      <div className="relative w-full lg:max-w-md">

        <Search
          size={18}
          className="
          absolute
          left-4
          top-1/2
          -translate-y-1/2
          text-slate-400
          "
        />

        <input
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          placeholder="Search applications..."
          className="
          w-full
          rounded-xl
          border
          border-slate-200
          bg-slate-50
          pl-11
          pr-4
          py-3
          outline-none
          transition
          focus:border-blue-500
          focus:bg-white
          focus:ring-4
          focus:ring-blue-100
          "
        />

      </div>

      {/* Filter Pills */}

      <div className="flex flex-wrap gap-3">

        {filters.map((filter) => (

          <button
            key={filter}
            onClick={() =>
              setActiveFilter(filter)
            }
            className={`
              px-5
              py-2.5
              rounded-full
              font-medium
              transition-all
              duration-300
              ${
                activeFilter === filter
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }
            `}
          >
            {filter}
          </button>

        ))}

      </div>

    </div>
  );
};

export default ApplicationToolbar;