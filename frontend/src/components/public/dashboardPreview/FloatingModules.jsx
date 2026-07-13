// import FeatureCard from "./FeatureCard";
// import { modules } from "./moduleData";

// const animations = [
//   "animate-float",
//   "animate-float-delay-1",
//   "animate-float-delay-2",
//   "animate-float-delay-3",
//   "animate-float-delay-4",
//   "animate-float-delay-5",
// ];

// const FloatingModules = () => {
//   return (
//     <>
//       {modules.map((item, index) => (
//         <div
//           key={item.title}
//           className={`
//             absolute
//             ${item.position}
//             ${animations[index]}
//             z-20
//           `}
//         >
//           <FeatureCard
//             icon={item.icon}
//             title={item.title}
//             subtitle={item.subtitle}
//           />
//         </div>
//       ))}
//     </>
//   );
// };

// export default FloatingModules;


import FeatureCard from "./FeatureCard";
import moduleData from "./moduleData";

const FloatingModules = ({
  role = "admin",
}) => {
  const modules =
    moduleData[role] || moduleData.admin;

  return (
    <>
      {modules.map((module, index) => (
        <div
          key={`${role}-${module.title}`}
          className={`
            absolute
            ${module.className}
            animate-float
            z-20
          `}
          style={{
            animationDelay: `${index * 0.25}s`,
          }}
        >
          <FeatureCard
            icon={module.icon}
            title={module.title}
            subtitle={module.subtitle}
          />
        </div>
      ))}
    </>
  );
};

export default FloatingModules;