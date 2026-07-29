// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import TopNavbar from "../../components/navbar/TopNavbar";
// //import ModulesSlider from "./ModulesSlider";
// import AttendancePopup from "../../components/attendance/AttendancePopup";
// import { dashboardConfig } from "../../config/dashboardConfig";
// import { getAdminDashboardStats } from "../../services/dashboardService";
// import Sidebar from "../../components/dashboard/Sidebar";
// import StudentDashboard from "../../components/dashboard/student/StudentDashboard";
// import FacultyQuickActions from "../../components/dashboard/faculty/FacultyQuickActions";
// import AdminDashboard from "../../components/dashboard/admin/AdminDashboard";
// import FacultyDashboard from "../../components/dashboard/faculty/FacultyDashboard";

// const DashboardLayout = ({ role }) => {
//   const config = dashboardConfig[role];
//   const navigate = useNavigate();

  
  
 
//   /* ================= ATTENDANCE POPUP ================= */
//   const [showAttendancePopup, setShowAttendancePopup] = useState(false);
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const handleModuleClick = (module) => {
//    // ? Faculty Attendance ? Popup
//     if (role === "FACULTY" && module.title === "Attendance") {
//       setShowAttendancePopup(true);
//       return;
//     }
//     // ? Default navigation
//     if (module.path) {
//       navigate(module.path);
//     }
//   };

//   return (
//   <div className="h-screen overflow-hidden bg-gray-50">
//     {/* Top Navbar */}
    
//   <TopNavbar
//     role={role}
//     onToggleSidebar={() =>
//       setSidebarOpen((prev) => !prev)
//     }
//   />
//   <br />
//   <br />
   
//     {/* Layout Body */}
//      <div className="flex h-[calc(100vh-64px)] relative">

//     {/* Sidebar (Overlay Mode) */}
//     <div
//       className={`fixed top-16 left-0 h-[calc(100vh-64px)] z-40 transition-transform duration-300 ${
//         sidebarOpen
//           ? "translate-x-0"
//           : "-translate-x-full"
//       }`}
//     >
//       <Sidebar role={role} />
//     </div>

//     {/* Dark Overlay */}
//     {sidebarOpen && (
//       <div
//         className="fixed inset-0 bg-black/30 z-30"
//         onClick={() => setSidebarOpen(false)}
//       />
//     )}

//       {/* Main Content */}
//       <div className="flex-1 overflow-y-auto p-6">

       

        
//        {role === "STUDENT" && <StudentDashboard />}

//         {role === "FACULTY" && <FacultyDashboard />}

//        {role === "ADMIN" && <AdminDashboard />}
//       </div>
//     </div>

//     {/* Faculty Attendance Popup */}
  
//     {showAttendancePopup && (
//       <AttendancePopup
//         onClose={() => setShowAttendancePopup(false)}
//       />
//     )}
//   </div>
// );

// };

// export default DashboardLayout;



import { useState } from "react";
import { useNavigate } from "react-router-dom";

import TopNavbar from "../../components/navbar/TopNavbar";
import Sidebar from "../../components/dashboard/Sidebar";
import AttendancePopup from "../../components/attendance/AttendancePopup";

import StudentDashboard from "../../components/dashboard/student/StudentDashboard";
import FacultyDashboard from "../../components/dashboard/faculty/FacultyDashboard";
import AdminDashboard from "../../components/dashboard/admin/AdminDashboard";

import AiPanel from "../../components/ai/AiPanel";
// import { AiProvider } from "../../context/AiContext";
import { useAi } from "../../context/AiContext";

const DashboardLayout = ({ role }) => {
  const navigate = useNavigate();

  /* ================= STATES ================= */

  const [showAttendancePopup, setShowAttendancePopup] =
    useState(false);

  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  const {
    isOpen,
    openPanel,
    closePanel,
} = useAi();


  /* ================= SIDEBAR ================= */

  const handleSidebarToggle = () => {
    if (isOpen) {
      closePanel();
    }

    setSidebarOpen((prev) => !prev);
  };

  /* ================= AI ================= */

  // const handleOpenAi = () => {
  //   setSidebarOpen(false);
  //   openPanel();
  // };

  const handleCloseAi = () => {
    closePanel();
  };

  return (
    <div className="h-screen overflow-hidden bg-gray-50">

      {/* ================= NAVBAR ================= */}

      <TopNavbar
        role={role}
        onToggleSidebar={handleSidebarToggle}
       // onOpenAi={handleOpenAi}
      />

      <br />
      <br />

      {/* ================= AI PANEL ================= */}

      <AiPanel
        isOpen={isOpen}
        onClose={handleCloseAi}
      />

      {/* ================= BODY ================= */}

      <div className="flex h-[calc(100vh-64px)] relative">

        {/* ================= SIDEBAR ================= */}

        <div
          className={`fixed top-16 left-0 h-[calc(100vh-64px)] z-40 transition-transform duration-300 ${
            sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }`}
        >
          <Sidebar role={role} />
        </div>

        {/* ================= SIDEBAR OVERLAY ================= */}

        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/30 z-30"
            onClick={() =>
              setSidebarOpen(false)
            }
          />
        )}

        {/* ================= MAIN CONTENT ================= */}

        <div className="flex-1 overflow-y-auto p-6">

          {role === "STUDENT" && (
            <StudentDashboard />
          )}

          {role === "FACULTY" && (
            <FacultyDashboard />
          )}

          {role === "ADMIN" && (
            <AdminDashboard />
          )}

        </div>

      </div>

      {/* ================= ATTENDANCE POPUP ================= */}

      {showAttendancePopup && (
        <AttendancePopup
          onClose={() =>
            setShowAttendancePopup(false)
          }
        />
      )}

    </div>
  );
};

export default DashboardLayout;