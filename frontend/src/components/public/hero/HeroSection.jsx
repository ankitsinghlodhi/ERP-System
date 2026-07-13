// import HeroBackground from "./HeroBackground";
// import HeroContent from "./HeroContent";
// import DashboardPreview from "./DashboardPreview";

// const HeroSection = () => {
//   return (
//     <section className="relative overflow-hidden">
//       <HeroBackground />

//       <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-12 pb-24 w-full">
//         <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
//           <HeroContent />
//           <DashboardPreview />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

import { useState } from "react";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import DashboardPreview from "./DashboardPreview";

const HeroSection = () => {
  const [role, setRole] = useState("admin");

  return (
    <section className="relative overflow-hidden">
      <HeroBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-12 pb-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left */}

          <HeroContent
  role={role}
/>

          {/* Right */}

          <DashboardPreview
            role={role}
            onRoleChange={setRole}
          />

        </div>
      </div>
    </section>
  );
};

export default HeroSection;