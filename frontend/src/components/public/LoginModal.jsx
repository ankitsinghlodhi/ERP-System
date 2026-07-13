import Login from "../../pages/public/Login";

const LoginModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/60 z-40"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
        <div className="relative w-full max-w-md">

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute -top-4 -right-4 bg-white h-10 w-10 rounded-full shadow-lg text-2xl hover:bg-gray-100"
          >
            ×
          </button>

          <Login />
        </div>
      </div>
    </>
  );
};

export default LoginModal;