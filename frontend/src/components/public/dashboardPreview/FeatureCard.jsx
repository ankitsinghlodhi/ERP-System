const FeatureCard = ({
  icon: Icon,
  title,
  subtitle,
  className = "",
}) => {
  return (
    <div
      className={`
      bg-white/95
      backdrop-blur-md
      rounded-2xl
      border
      border-slate-200
      shadow-xl
      px-4
      py-3
      w-44
      hover:-translate-y-1
      transition-all
      duration-300
      ${className}
      `}
    >
      <div className="flex items-center gap-3">

        <div
          className="
          w-10
          h-10
          shrink-0
          rounded-xl
          bg-blue-50
          flex
          items-center
          justify-center
          "
        >
          <Icon size={20} className="text-blue-600" />
        </div>

        <div className="min-w-0">
          <h4 className="font-semibold text-slate-800 text-sm truncate">
            {title}
          </h4>
          <p className="text-xs text-slate-500 truncate">
            {subtitle}
          </p>
        </div>

      </div>
    </div>
  );
};

export default FeatureCard;