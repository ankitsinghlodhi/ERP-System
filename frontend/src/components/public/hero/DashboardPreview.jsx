// import BrowserMockup from "../dashboardPreview/BrowserMockup";
// import FloatingModules from "../dashboardPreview/FloatingModules";
// import RoleTabs from "./RoleTabs";

// const DashboardPreview = () => {
//   return (
//     <div className="relative w-full max-w-[560px] mx-auto px-8 pt-16 pb-10">

//       {/* Role Tabs */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 z-30">
//         <RoleTabs />
//       </div>

//       {/* Browser */}
//       <div className="relative z-10">
//         <BrowserMockup />
//       </div>

//       {/* Floating Modules */}
//       <FloatingModules />

//     </div>
//   );
// };

// export default DashboardPreview;


import BrowserMockup from "../dashboardPreview/BrowserMockup";
import FloatingModules from "../dashboardPreview/FloatingModules";
import RoleTabs from "../dashboardPreview/RoleTabs";

const DashboardPreview = ({
  role = "admin",
  onRoleChange,
}) => {
  return (
    <div className="relative w-full max-w-[560px] mx-auto px-8 pt-16 pb-10">

      {/* Role Tabs */}

      <div className=" mb-10 absolute top-0 left-1/2 -translate-x-1/2 z-30">
        <RoleTabs
          activeRole={role}
          onChange={onRoleChange}
        />
      </div>

      {/* Browser */}

      <div className="relative z-10">
        <BrowserMockup role={role} />
      </div>

      {/* Floating Cards */}

      <FloatingModules role={role} />

    </div>
  );
};

export default DashboardPreview;