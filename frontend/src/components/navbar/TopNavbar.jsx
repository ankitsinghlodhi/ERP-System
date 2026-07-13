import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const TopNavbar = ({ role, onToggleSidebar }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const currentRole = role || user?.role;

  const handleLogout = async () => {
    // localStorage.clear();
    await logout();
    navigate("/");
  };

  const handleLogoClick = () => {
    if (currentRole === "ADMIN") navigate("/admin/dashboard");
    else if (currentRole === "FACULTY") navigate("/faculty/dashboard");
    else if (currentRole === "STUDENT") navigate("/student/dashboard");
    else navigate("/");
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full h-16 bg-gradient-to-r from-slate-800 to-slate-700 flex items-center px-6 text-white">
      {/* Left */}
      <div className="flex items-center gap-4">
         <button
           onClick={onToggleSidebar}
          className="text-2xl"
         >
            ☰
         </button>

        <div
          onClick={handleLogoClick}
          className="flex items-center gap-2 font-semibold text-lg cursor-pointer"
        >
          <img
            src={"/navLogo.png"}
            alt="College Cube Logo"
            className="h-12 w-8 object-cover"
          />
          <span>College Cube</span>
        </div>
      </div>

      {/* Center */}
      <div className="flex-1 flex justify-center gap-10 text-sm font-medium">
        <Link
          to={`/${currentRole?.toLowerCase()}/dashboard`}
          className="border-b-2 border-blue-400 pb-1"
        >
          Home
        </Link>

        <Link to={`/${currentRole?.toLowerCase()}/attendance`}>
          Attendance
        </Link>

        <Link to={"/messenger"}>
          Messenger
        </Link>

        <Link to={`/${currentRole?.toLowerCase()}/notifications`}>
          Notifications
        </Link>
      </div>

      {/* Right */}
      <button
        onClick={handleLogout}
        className="bg-blue-600 px-4 py-1.5 rounded-md flex items-center gap-2"
      >
        ⏻ Logout
      </button>
    </nav>
  );
};

export default TopNavbar;
