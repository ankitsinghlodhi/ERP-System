// import dashboard from "../../../assets/public/admin-dashboard.png";

// const BrowserMockup = () => {
//   return (
//     <div
//       className="
//       relative
//       rounded-[24px]
//       overflow-hidden
//       bg-white
//       border
//       border-slate-200
//       shadow-[0_35px_90px_rgba(37,99,235,0.18)]
//       transition-all
//       duration-500
//       hover:-translate-y-3
//       hover:scale-[1.02]
//       "
//     >
//       {/* Glow behind card */}
//       <div
//         className="
//         absolute
//         -z-10
//         inset-0
//         bg-blue-400/10
//         blur-[100px]
//         scale-110
//         "
//       />

//       {/* Browser Top */}
//       <div
//         className="
//         h-12
//         px-5
//         flex
//         items-center
//         justify-between
//         border-b
//         border-slate-100
//         bg-white
//         "
//       >
//         <div className="flex items-center gap-2">
//           <div className="w-3 h-3 rounded-full bg-red-400" />
//           <div className="w-3 h-3 rounded-full bg-yellow-400" />
//           <div className="w-3 h-3 rounded-full bg-green-400" />
//         </div>

//         <div
//           className="
//           bg-slate-100
//           rounded-full
//           px-4
//           py-1.5
//           text-xs
//           text-slate-500
//           "
//         >
//           app.collegecube.in
//         </div>

//         <div className="w-14" />
//       </div>

//       {/* Dashboard */}
//       <img
//         src={dashboard}
//         alt="College Cube Dashboard"
//         className="w-full object-cover"
//       />

//       {/* Top light reflection — overlays whole card, placed last so it sits above content */}
//       <div
//         className="
//         pointer-events-none
//         absolute
//         inset-0
//         bg-gradient-to-br
//         from-white/20
//         via-transparent
//         to-transparent
//         "
//       />
//     </div>
//   );
// };

// export default BrowserMockup;


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