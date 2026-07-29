import dashboard from "../../../assets/public/dashboard.png";
import facultyDashboard from "../../../assets/public/faculty-dashboard.png";
import studentDashboard from "../../../assets/public/student-dashboard.png";

const imageMap = {
  admin: dashboard,
  faculty: facultyDashboard,
  student: studentDashboard,
};

const BrowserMockup = ({
  role = "admin",
}) => {
  return (
    <div
      className="
      overflow-hidden
      rounded-[32px]
      border
      border-slate-200
      bg-white
      shadow-2xl
      mt-10
      "
    >
      {/* Browser Header */}

      <div
        className="
        flex
        items-center
        justify-between
        px-6
        py-4
        border-b
        bg-white
        "
      >
        <div className="flex gap-2">

          <span className="w-3 h-3 rounded-full bg-red-400"></span>

          <span className="w-3 h-3 rounded-full bg-yellow-400"></span>

          <span className="w-3 h-3 rounded-full bg-green-400"></span>

        </div>

        <div
          className="
          bg-slate-100
          rounded-full
          px-8
          py-2
          text-sm
          text-slate-500
          "
        >
          app.collegecube.in
        </div>

        <div className="w-14"></div>
      </div>

      {/* Dashboard Image */}

      <img
        key={role}
        src={imageMap[role]}
        alt={role}
        className="
        w-full
        transition-all
        duration-500
        "
      />
    </div>
  );
};

export default BrowserMockup;