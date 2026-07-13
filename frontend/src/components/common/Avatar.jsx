// const colors = [
//   "bg-blue-500",
//   "bg-green-500",
//   "bg-purple-500",
//   "bg-orange-500",
//   "bg-pink-500",
//   "bg-cyan-500",
// ];

// const Avatar = ({ name, size = "md" }) => {
//   const initials = name
//     ?.split(" ")
//     .map((word) => word[0])
//     .join("")
//     .slice(0, 2)
//     .toUpperCase();

//   const color =
//     colors[name.length % colors.length];

//   const sizes = {
//     sm: "w-10 h-10 text-sm",
//     md: "w-12 h-12 text-base",
//     lg: "w-14 h-14 text-lg",
//   };

//   return (
//     <div
//       className={`
//       ${sizes[size]}
//       ${color}
//       rounded-full
//       flex
//       items-center
//       justify-center
//       text-white
//       font-bold
//       shadow-md
//       `}
//     >
//       {initials}
//     </div>
//   );
// };

// export default Avatar;




const colors = [
  "bg-blue-500",
  "bg-green-500",
  "bg-purple-500",
  "bg-orange-500",
  "bg-pink-500",
  "bg-cyan-500",
];

const Avatar = ({
  name = "User",
  image = "",
  size = "md",
  className = "",
}) => {
  const initials = name
    ?.trim()
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const color = colors[name.length % colors.length];

  const sizes = {
    sm: "w-10 h-10 text-sm",
    md: "w-12 h-12 text-base",
    lg: "w-16 h-16 text-xl",
    xl: "w-20 h-20 text-2xl",
    "2xl": "w-24 h-24 text-3xl",
  };

  return (
    <div
      className={`
        ${sizes[size]}
        rounded-full
        overflow-hidden
        flex
        items-center
        justify-center
        font-bold
        shadow-md
        shrink-0
        ${className}
      `}
    >
      {image ? (
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = "none";
            e.currentTarget.parentElement.classList.add(
              color,
              "text-white",
              "flex",
              "items-center",
              "justify-center"
            );
            e.currentTarget.parentElement.innerHTML = initials;
          }}
        />
      ) : (
        <div
          className={`
            w-full
            h-full
            ${color}
            flex
            items-center
            justify-center
            text-white
          `}
        >
          {initials}
        </div>
      )}
    </div>
  );
};

export default Avatar;