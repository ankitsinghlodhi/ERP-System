import { Link, useNavigate } from "react-router-dom";
import { Sparkles } from "lucide-react";

import { useAuth } from "../../context/AuthContext";
import { useAi } from "../../context/AiContext";

const TopNavbar = ({ role, onToggleSidebar }) => {
  const { user, logout } = useAuth();
  const { openPanel } = useAi();

  const navigate = useNavigate();

  const currentRole = role || user?.role;

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  const handleLogoClick = () => {
    if (currentRole === "ADMIN") {
      navigate("/admin/dashboard");
    } else if (currentRole === "FACULTY") {
      navigate("/faculty/dashboard");
    } else if (currentRole === "STUDENT") {
      navigate("/student/dashboard");
    } else {
      navigate("/");
    }
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full h-16 bg-gradient-to-r from-slate-800 to-slate-700 text-white shadow-md">

      <div className="h-full px-5 flex items-center">

        {/* ================= LEFT ================= */}

        <div className="flex items-center gap-4 shrink-0">

          <button
            onClick={onToggleSidebar}
            className="text-2xl hover:text-blue-300 transition"
          >
            ☰
          </button>

          <div
            onClick={handleLogoClick}
            className="flex items-center gap-2 cursor-pointer shrink-0"
          >
            <img
              src="/navLogo.png"
              alt="College Cube Logo"
              className="h-11 w-8 object-cover"
            />

            <span className="font-semibold text-xl whitespace-nowrap">
              College Cube
            </span>
          </div>

        </div>

        {/* ================= CENTER ================= */}

        <div className="flex-1 flex justify-center px-8">

          <div className="hidden lg:flex items-center gap-8 text-sm font-medium whitespace-nowrap">

            <Link
              to={`/${currentRole?.toLowerCase()}/dashboard`}
              className="hover:text-blue-300 border-b-2 border-blue-400 pb-1"
            >
              Home
            </Link>

            <Link
              to={`/${currentRole?.toLowerCase()}/attendance`}
              className="hover:text-blue-300 transition"
            >
              Attendance
            </Link>

            <Link
              to="/messenger"
              className="hover:text-blue-300 transition"
            >
              Messenger
            </Link>

            <Link
              to={`/${currentRole?.toLowerCase()}/notifications`}
              className="hover:text-blue-300 transition"
            >
              Notifications
            </Link>

          </div>

        </div>

        {/* ================= RIGHT ================= */}

        <div className="flex items-center gap-3 shrink-0">

          {/* AI Assistant */}

          <button
            onClick={openPanel}
            className="
              flex
              items-center
              gap-2
              bg-gradient-to-r
              from-pink-600
              to-violet-600
              hover:from-pink-700
              hover:to-violet-700
              transition
              px-4
              py-2
              rounded-lg
              shadow-md
            "
          >
            <Sparkles size={18} />

            <span className="hidden xl:inline">
              AI Assistant
            </span>
          </button>

          {/* Logout */}

          <button
            onClick={handleLogout}
            className="
              bg-blue-600
              hover:bg-blue-700
              transition
              px-4
              py-2
              rounded-lg
              flex
              items-center
              gap-2
            "
          >
            ⏻

            <span className="hidden sm:inline">
              Logout
            </span>

          </button>

        </div>

      </div>

    </nav>
  );
};

export default TopNavbar;