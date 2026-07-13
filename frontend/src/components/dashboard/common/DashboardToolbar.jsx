import {
  Search,
  Download,
  RefreshCcw,
} from "lucide-react";

const DashboardToolbar = ({
  title,
  subtitle,
  search,
  setSearch,
  children,
}) => {
  return (
    <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-6">

      {/* Top */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

        <div>

          <h2 className="text-2xl font-bold text-slate-800">
            {title}
          </h2>

          <p className="text-slate-500 mt-1">
            {subtitle}
          </p>

        </div>

        <div className="flex flex-wrap items-center gap-3">

          {/* Search */}

          <div className="relative">

            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
              className="
              w-72
              pl-11
              pr-4
              py-3
              rounded-xl
              border
              border-slate-200
              bg-slate-50
              focus:bg-white
              focus:ring-2
              focus:ring-blue-500
              outline-none
              "
            />

          </div>

          {/* Custom Filters */}

          {children}

          <button
            className="
            flex
            items-center
            gap-2
            px-5
            py-3
            rounded-xl
            border
            border-slate-200
            hover:bg-slate-100
            transition
            "
          >
            <RefreshCcw size={18}/>
            Refresh
          </button>

         <button
  className="
  flex
  items-center
  gap-2
  px-5
  py-3
  rounded-xl
  bg-gradient-to-r
  from-blue-600
  to-indigo-600
  text-white
  shadow-lg
  hover:scale-105
  transition
  "
>
  <Download size={18}/>
  Export Report
</button>

        </div>

      </div>

    </div>
  );
};

export default DashboardToolbar;