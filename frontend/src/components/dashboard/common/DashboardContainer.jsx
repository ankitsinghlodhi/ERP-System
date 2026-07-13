const DashboardContainer = ({ children }) => {
  return (
    <div
      className="
      max-w-[1600px]
      mx-auto
      space-y-8
      pb-10
      "
    >
      {children}
    </div>
  );
};

export default DashboardContainer;