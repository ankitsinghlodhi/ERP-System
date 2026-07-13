// import { ArrowUpRight } from "lucide-react";

// const SummaryCard = ({
//   title,
//   value,
//   description,
//   icon: Icon,
//   color = "blue",
//   footer,
// }) => {
//   const colors = {
//     blue: {
//       bg: "from-blue-500 to-indigo-600",
//       light: "bg-blue-100",
//       text: "text-blue-600",
//     },

//     green: {
//       bg: "from-emerald-500 to-green-600",
//       light: "bg-green-100",
//       text: "text-green-600",
//     },

//     yellow: {
//       bg: "from-amber-400 to-orange-500",
//       light: "bg-yellow-100",
//       text: "text-yellow-600",
//     },

//     red: {
//       bg: "from-red-500 to-pink-500",
//       light: "bg-red-100",
//       text: "text-red-600",
//     },
//   };

//   const theme = colors[color];

//   return (
//     <div
//       className="
//       bg-white
//       rounded-3xl
//       shadow-md
//       hover:shadow-xl
//       transition-all
//       duration-300
//       p-6
//       border
//       border-gray-100
//       hover:-translate-y-1
//       "
//     >
//       <div className="flex justify-between">

//         <div>

//           <p className="text-gray-500 text-sm">
//             {title}
//           </p>

//           <h2 className="text-3xl font-bold mt-3">
//             {value}
//           </h2>

//         </div>

//         <div
//           className={`
//           h-12
//           w-12
//           rounded-2xl
//           bg-gradient-to-br
//           ${theme.bg}
//           flex
//           items-center
//           justify-center
//           text-white
//           `}
//         >
//           <Icon size={22} />
//         </div>

//       </div>

//       <div className="mt-6">

//         <div className="w-full h-2 rounded-full bg-gray-100">

//           <div
//             className={`
//             h-2
//             rounded-full
//             bg-gradient-to-r
//             ${theme.bg}
//             `}
//             style={{ width: "84%" }}
//           />

//         </div>

//       </div>

//       <div className="flex justify-between items-center mt-5">

//         <p className="text-sm text-gray-500">
//           {description}
//         </p>

//         <ArrowUpRight
//           className={`${theme.text}`}
//           size={18}
//         />

//       </div>

//       {footer && (
//         <div className="mt-5 text-sm font-medium text-gray-700">
//           {footer}
//         </div>
//       )}

//     </div>
//   );
// };

// export default SummaryCard;


import { ArrowUpRight } from "lucide-react";

const SummaryCard = ({
  title,
  value,
  description,
  icon: Icon,
  color = "blue",
  footer,
  progress = 0,
}) => {
  const colors = {
    blue: {
      bg: "from-blue-500 to-indigo-600",
      light: "bg-blue-100",
      text: "text-blue-600",
    },

    green: {
      bg: "from-emerald-500 to-green-600",
      light: "bg-green-100",
      text: "text-green-600",
    },

    yellow: {
      bg: "from-amber-400 to-orange-500",
      light: "bg-yellow-100",
      text: "text-yellow-600",
    },

    red: {
      bg: "from-red-500 to-pink-500",
      light: "bg-red-100",
      text: "text-red-600",
    },
  };

  const theme = colors[color];
  const clampedProgress = Math.min(Math.max(progress, 0), 100);

  return (
    <div
      className="
      bg-white
      rounded-3xl
      shadow-md
      hover:shadow-xl
      transition-all
      duration-300
      p-6
      border
      border-gray-100
      hover:-translate-y-1
      "
    >
      <div className="flex justify-between">

        <div>

          <p className="text-gray-500 text-sm">
            {title}
          </p>

          <h2 className="text-3xl font-bold mt-3">
            {value}
          </h2>

        </div>

        <div
          className={`
          h-12
          w-12
          rounded-2xl
          bg-gradient-to-br
          ${theme.bg}
          flex
          items-center
          justify-center
          text-white
          `}
        >
          <Icon size={22} />
        </div>

      </div>

      <div className="mt-6">

        <div className="w-full h-2 rounded-full bg-gray-100">

          <div
            className={`
            h-2
            rounded-full
            bg-gradient-to-r
            ${theme.bg}
            transition-all
            duration-700
            `}
            style={{ width: `${clampedProgress}%` }}
          />

        </div>

      </div>

      <div className="flex justify-between items-center mt-5">

        <p className="text-sm text-gray-500">
          {description}
        </p>

        <ArrowUpRight
          className={`${theme.text}`}
          size={18}
        />

      </div>

      {footer && (
        <div className="mt-5 text-sm font-medium text-gray-700">
          {footer}
        </div>
      )}

    </div>
  );
};

export default SummaryCard;