const colors = {
  blue:
    "from-blue-600 to-indigo-600 text-white shadow-blue-300",

  green:
    "from-emerald-500 to-green-600 text-white shadow-green-300",

  orange:
    "from-orange-500 to-amber-500 text-white shadow-orange-300",

  purple:
    "from-purple-500 to-violet-600 text-white shadow-purple-300",

  pink:
    "from-pink-500 to-rose-500 text-white shadow-pink-300",

  indigo:
    "from-indigo-500 to-blue-600 text-white shadow-indigo-300",
};

const FeatureTabs = ({
  features,
  active,
  onChange,
}) => {
  return (
    <div
      className="
      flex
      flex-wrap
      justify-center
      gap-4
      "
    >
      {features.map((feature) => {
        const Icon = feature.icon;

        const activeStyle =
          colors[feature.color];

        const isActive =
          active.id === feature.id;

        return (
          <button
            key={feature.id}
            onClick={() =>
              onChange(feature)
            }
            className={`
              group
              flex
              items-center
              gap-3
              rounded-2xl
              border
              px-6
              py-4
              transition-all
              duration-300
              ${
                isActive
                  ? `bg-gradient-to-r ${activeStyle} shadow-xl scale-105`
                  : "bg-white border-slate-200 hover:border-blue-200 hover:shadow-lg hover:-translate-y-1"
              }
            `}
          >
            <Icon
              size={22}
              className={
                isActive
                  ? "text-white"
                  : "text-blue-600 group-hover:scale-110 transition-transform"
              }
            />

            <div className="text-left">

              <h4
                className={`font-semibold ${
                  isActive
                    ? "text-white"
                    : "text-slate-800"
                }`}
              >
                {feature.title}
              </h4>

              <p
                className={`text-xs ${
                  isActive
                    ? "text-blue-100"
                    : "text-slate-500"
                }`}
              >
                {feature.short}
              </p>

            </div>

          </button>
        );
      })}
    </div>
  );
};

export default FeatureTabs;