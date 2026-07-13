// const tabs = ["Admin", "Faculty", "Student"];

// const RoleTabs = () => {
//   return (
//     <div
//       className="
//       bg-white
//       rounded-2xl
//       shadow-lg
//       border
//       border-slate-200
//       p-2
//       flex
//       gap-2
//       "
//     >
//       {tabs.map((tab, index) => (
//         <button
//           key={tab}
//           className={`
//           px-5
//           py-2
//           rounded-xl
//           text-sm
//           font-semibold
//           transition-all
//           ${
//             index === 0
//               ? "bg-blue-600 text-white shadow"
//               : "text-slate-600 hover:bg-slate-100"
//           }
//           `}
//         >
//           {tab}
//         </button>
//       ))}
//     </div>
//   );
// };

// export default RoleTabs;

const tabs = [
  {
    id: "admin",
    label: "Admin",
  },
  {
    id: "faculty",
    label: "Faculty",
  },
  {
    id: "student",
    label: "Student",
  },
];

const RoleTabs = ({
  activeRole = "admin",
  onChange,
}) => {
  return (
    <div
      className="
      mb-8
      bg-white
      rounded-2xl
      shadow-lg
      border
      border-slate-200
      p-2
      flex
      gap-2
      "
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={`
            px-5
            py-2
            rounded-xl
            text-sm
            font-semibold
            transition-all
            duration-300
            ${
              activeRole === tab.id
                ? "bg-blue-600 text-white shadow"
                : "text-slate-600 hover:bg-slate-100"
            }
          `}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default RoleTabs;