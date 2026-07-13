// import HeroButtons from "./HeroButtons";
// import {
//   GraduationCap,
//   School,
//   Building2,
// } from "lucide-react";

// const HeroContent = () => {
//   return (
//     <div className="max-w-xl">

//       {/* Badge */}

//       <div
//         className="
//         inline-flex
//         items-center
//         gap-2
//         px-4
//         py-2
//         rounded-full
//         border
//         border-blue-100
//         bg-blue-50
//         text-blue-700
//         text-sm
//         font-semibold
//         "
//       >
//         <School size={16} />

//         Modern ERP Platform for Educational Institutions

//       </div>

//       {/* Heading */}

//       <h1
//         className="
//         mt-8
//         text-5xl
//         lg:text-6xl
//         font-extrabold
//         leading-tight
//         tracking-tight
//         text-slate-900
//         "
//       >
//         Manage Your Entire

//         <span className="block">

//           College From One

//         </span>

//       <span
//   className="
//   block
//   pb-2
//   leading-[1.15]
//   text-transparent
//   bg-clip-text
//   bg-gradient-to-r
//   from-blue-600
//   via-indigo-600
//   to-purple-600
//   "
// >
//   Intelligent Platform
// </span>

//       </h1>

//       {/* Description */}

//       <p
//         className="
//         mt-8
//         text-lg
//         leading-8
//         text-slate-600
//         "
//       >
//         College Cube is an all-in-one ERP platform that simplifies admissions,
//         academics, attendance, examinations, finance, placements and campus
//         management through one intelligent cloud-based solution.
//       </p>

//       {/* Small Highlights */}

//       <div
//         className="
//         mt-8
//         flex
//         flex-wrap
//         gap-5
//         "
//       >

//         <div className="flex items-center gap-2">

//           <GraduationCap
//             size={20}
//             className="text-blue-600"
//           />

//           <span className="font-medium text-slate-700">

//             Student Portal

//           </span>

//         </div>

//         <div className="flex items-center gap-2">

//           <Building2
//             size={20}
//             className="text-blue-600"
//           />

//           <span className="font-medium text-slate-700">

//             Multi-College Support

//           </span>

//         </div>

//       </div>

//       {/* Buttons */}

//       <div className="mt-10">

//         <HeroButtons />

//       </div>

//     </div>
//   );
// };

// export default HeroContent;

import HeroButtons from "./HeroButtons";
import {
  GraduationCap,
  School,
  Building2,
} from "lucide-react";

import heroContentData from "./heroContentData";

const HeroContent = ({
  role = "admin",
}) => {
  const data =
    heroContentData[role];

  return (
    <div className="max-w-xl">

      {/* Badge */}

      <div
        className="
        inline-flex
        items-center
        gap-2
        px-4
        py-2
        rounded-full
        border
        border-blue-100
        bg-blue-50
        text-blue-700
        text-sm
        font-semibold
        "
      >
        <School size={16} />

        {data.badge}

      </div>

      {/* Heading */}

      <h1
        className="
        mt-8
        text-5xl
        lg:text-6xl
        font-extrabold
        leading-tight
        tracking-tight
        text-slate-900
        "
      >
        {data.title[0]}

        <span className="block">

          {data.title[1]}

        </span>

        <span
          className="
          block
          pb-2
          leading-[1.15]
          text-transparent
          bg-clip-text
          bg-gradient-to-r
          from-blue-600
          via-indigo-600
          to-purple-600
          "
        >
          {data.title[2]}
        </span>

      </h1>

      {/* Description */}

      <p
        className="
        mt-8
        text-lg
        leading-8
        text-slate-600
        "
      >
        {data.description}
      </p>

      {/* Highlights */}

      <div
        className="
        mt-8
        flex
        flex-wrap
        gap-5
        "
      >

        <div className="flex items-center gap-2">

          <GraduationCap
            size={20}
            className="text-blue-600"
          />

          <span className="font-medium text-slate-700">

            {data.highlights[0]}

          </span>

        </div>

        <div className="flex items-center gap-2">

          <Building2
            size={20}
            className="text-blue-600"
          />

          <span className="font-medium text-slate-700">

            {data.highlights[1]}

          </span>

        </div>

      </div>

      {/* Buttons */}

      <div className="mt-10">

        <HeroButtons />

      </div>

    </div>
  );
};

export default HeroContent;