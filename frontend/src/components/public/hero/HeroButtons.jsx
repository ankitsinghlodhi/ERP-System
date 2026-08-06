import {
  ArrowRight,
  PlayCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { demoLogin } from "../../../services/authService";
import {useAuth} from "../../../context/AuthContext";
import AppLoader from "../../common/AppLoader";

const HeroButtons = () => {
  const navigate = useNavigate();
  const { setUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleExplore = () => {
    const section = document.getElementById("feature-showcase");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

   const handleSubmit = async (e) => {
    e.preventDefault();
  
      try {
        const response = await demoLogin("STUDENT");
  
        const { user } = response;
        setUser(user);
  
  
        if (user.role === "ADMIN") {
          navigate("/admin/dashboard");
        } else if (user.role === "FACULTY") {
          navigate("/faculty/dashboard");
        } else if (user.role === "STUDENT") {
          navigate("/student/dashboard");
        } else {
          setError("Invalid user role.");
        }
      } catch (err) {
        setError(
          err.response?.data?.message ||
            "Invalid email or password."
        );
      } finally {
        setLoading(false);
      }
    };

  return (
    <div className="flex flex-wrap items-center gap-4">
      {loading && <AppLoader />}

      {/* Primary */}

      <button
        className="
        group
        px-7
        py-4
        rounded-2xl
        bg-gradient-to-r
        from-blue-600
        to-indigo-600
        text-white
        font-semibold
        shadow-lg
        shadow-blue-200
        hover:shadow-blue-300
        hover:-translate-y-1
        transition-all
        duration-300
        flex
        items-center
        gap-3
        "
        onClick={handleSubmit}
      >
        Launch Demo

        <ArrowRight
          size={20}
          className="
          transition-transform
          duration-300
          group-hover:translate-x-1
          "
        />
      </button>

      {/* Secondary */}

      <button
        onClick={handleExplore}
        className="
        group
        px-7
        py-4
        rounded-2xl
        border
        border-slate-200
        bg-white
        text-slate-700
        font-semibold
        shadow-sm
        hover:shadow-lg
        hover:-translate-y-1
        transition-all
        duration-300
        flex
        items-center
        gap-3
        "
      >
        <PlayCircle
          size={22}
          className="text-blue-600"
        />

        Explore Platform

      </button>

    </div>
  );
};

export default HeroButtons;