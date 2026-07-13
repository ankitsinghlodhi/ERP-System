const DashboardPanel = ({ title, children }) => {
  return (
    <div
      className="
      bg-white
      rounded-3xl
      shadow-md
      border
      border-gray-100
      p-6
      hover:shadow-xl
      transition-all
      duration-300
      "
    >
      <h2 className="text-xl font-bold text-gray-800 mb-6">
        {title}
      </h2>

      {children}
    </div>
  );
};

export default DashboardPanel;