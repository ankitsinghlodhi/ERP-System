import { Link } from "react-router-dom";

const Navbar = ({ onLoginClick, onSignupClick }) => {
  return (
    <header className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <div className="flex items-center gap-4">
       
        {/* Logo + Name */}
        <div
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
        {/* Menu */}
        <nav className="hidden md:flex gap-8 text-gray-600 font-medium">
          <a href="#" className="hover:text-blue-600">Home</a>
          <a href="#" className="hover:text-blue-600">About Us</a>
          <a href="#" className="hover:text-blue-600">Academics</a>
        </nav>

        {/* Actions */}
        <div className="flex gap-4">
         <button
  onClick={onLoginClick}
  className="px-5 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
>
  Login
</button>

<button
  onClick={onSignupClick}
  className="px-5 py-2 rounded-full bg-green-500 text-white hover:bg-green-600 transition"
>
  Sign Up
</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
