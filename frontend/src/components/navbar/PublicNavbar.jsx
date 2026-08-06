import { Link, useLocation } from "react-router-dom";

const Navbar = ({ onLoginClick, onSignupClick }) => {
  const location = useLocation();

  const navItem =
    "px-4 py-2 rounded-full transition-all duration-200";

  const active =
    "bg-blue-50 text-blue-600 font-semibold";

  const inactive =
    "text-gray-600 hover:text-blue-600 hover:bg-gray-100";

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 font-semibold text-lg"
        >
          <img
            src="/navLogo.png"
            alt="College Cube Logo"
            className="h-12 w-8 object-cover"
          />

          <span className="text-gray-900">
            College Cube
          </span>
        </Link>

        {/* Navigation */}

        <nav className="hidden md:flex items-center gap-3">

          <Link
            to="/"
            className={`${navItem} ${
              location.pathname === "/" ? active : inactive
            }`}
          >
            Home
          </Link>

          <Link
            to="/about"
            className={`${navItem} ${
              location.pathname === "/about"
                ? active
                : inactive
            }`}
          >
            About Us
          </Link>

          <Link
            to="/instructions"
            className={`${navItem} ${
              location.pathname === "/instructions"
                ? active
                : inactive
            }`}
          >
            Instructions
          </Link>

        </nav>

        {/* Buttons */}

        <div className="flex gap-4">

          <button
            onClick={onLoginClick}
            className="px-5 py-2 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition duration-200 shadow-sm"
          >
            Login
          </button>

          <button
            onClick={onSignupClick}
            className="px-5 py-2 rounded-full bg-green-500 text-white font-medium hover:bg-green-600 transition duration-200 shadow-sm"
          >
            Sign Up
          </button>

        </div>

      </div>
    </header>
  );
};

export default Navbar;