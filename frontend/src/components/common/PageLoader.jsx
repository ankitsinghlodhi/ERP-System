// import { InfinitySpin } from "react-loader-spinner";

// const PageLoader = ({ message = "Loading..." }) => {
//   return (
//     <div
//       className="
//       fixed
//       inset-0
//       z-50
//       flex
//       flex-col
//       items-center
//       justify-center
//       bg-white/40
//       backdrop-blur-sm
//       "
//     >
//       <InfinitySpin
//         width="180"
//         color="#2563eb"
//       />

//       <p className="mt-4 text-slate-700 font-medium text-lg">
//         {message}
//       </p>
//     </div>
//   );
// };

// export default PageLoader;


import AppLoader from "./AppLoader";

const PageLoader = ({
  message = "Loading...",
}) => {
  return (
    <div
      className="
      fixed
      inset-0
      z-50
      bg-white/55
      backdrop-blur-sm
      flex
      justify-center
      items-center
      "
    >
      <div
        className="scale-[0.55]"
        style={{
          transformOrigin: "center",
        }}
      >
        <AppLoader
          embedded
          message={message}
        />
      </div>
    </div>
  );
};

export default PageLoader;