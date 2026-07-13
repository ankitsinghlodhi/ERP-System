const SectionCard = ({
  title,
  subtitle,
  icon: Icon,
  action,
  children,
  className = "",
}) => {
  return (
    <div
      className={`
        bg-white
        rounded-3xl
        border
        border-slate-200
        shadow-lg
        hover:shadow-2xl
        transition-all
        duration-300
        overflow-hidden
        ${className}
      `}
    >
      {/* Header */}

      <div className="flex items-center justify-between px-7 py-5 border-b border-slate-100">

        <div className="flex items-center gap-4">

          {Icon && (
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-lg">

              <Icon size={22} />

            </div>
          )}

          <div>

            <h2 className="text-xl font-bold text-slate-800">

              {title}

            </h2>

            {subtitle && (

              <p className="text-sm text-slate-500 mt-1">

                {subtitle}

              </p>

            )}

          </div>

        </div>

        {action}

      </div>

      {/* Body */}

      <div className="p-7">

        {children}

      </div>

    </div>
  );
};

export default SectionCard;