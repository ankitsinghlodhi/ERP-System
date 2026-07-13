import { useState, useEffect } from "react";
import Login from "../../pages/public/Login";
import Signup from "../../pages/public/Signup";

const AuthModal = ({ isOpen, onClose, initialMode = "login" }) => {
  const [mode, setMode] = useState(initialMode);

useEffect(() => {
  if (isOpen) {
    setMode(initialMode);
  }
}, [initialMode, isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/60 z-40"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
        <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">

          <button
            onClick={onClose}
           className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-black"
          >
            ×
          </button>

          {mode === "login" ? (
            <Login
              switchToSignup={() => setMode("signup")}
            />
          ) : (
            <Signup
              switchToLogin={() => setMode("login")}
            />
          )}

        </div>
      </div>
    </>
  );
};

export default AuthModal;