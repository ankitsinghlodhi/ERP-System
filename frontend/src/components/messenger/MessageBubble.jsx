// import { useState } from "react";
// import { deleteMessage as deleteMessageApi } from "../../services/messengerService";
// import { useAuth } from "../../context/AuthContext";

// const MessageBubble = ({ msg, onDelete }) => {
//   const { user } = useAuth();
//   const [showActions, setShowActions] = useState(false);
//   const [loading, setLoading] = useState(false);

//   if (!msg) return null;

//   // const myId = localStorage.getItem("userId");
//   const myId = user?._id;
//   // const myRole = localStorage.getItem("role"); // make sure role is stored
//   const myRole = user?.role;

//   const isMe = msg?.senderId?._id === myId;
//   const isFaculty = myRole === "FACULTY";

//   const canDelete = isMe || isFaculty;

//   console.log("msg.senderId:", msg.senderId);
// console.log("myId:", myId);


//   const handleDelete = async (e) => {
//     e.stopPropagation();

//     try {
//       setLoading(true);
//       await deleteMessageApi(msg._id);

//       if (onDelete) {
//         onDelete(msg._id); // remove instantly from UI
//       }
//     } catch (error) {
//       console.error("Delete failed:", error);
//     } finally {
//       setLoading(false);
//       setShowActions(false);
//     }
//   };

//   return (
//     <div

       
//       onClick={() => setShowActions((prev) => !prev)}
//       className={`relative max-w-xs p-3 rounded-lg text-sm mb-2 cursor-pointer ${
//         isMe
//           ? "bg-blue-600 text-white ml-auto"
//           : "bg-white border"
//       }`}
//     >
//       {!isMe && (
//         <p className="text-xs font-semibold mb-1">
//           {msg?.senderId?.name}
//         </p>
//       )}
      

//       {msg?.content}

//       {showActions && canDelete && (
//         <button
//           onClick={handleDelete}
//           disabled={loading}
//           className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-md hover:bg-red-600"
//         >
//           {loading ? "..." : "Delete"}
//         </button>
//       )}
//     </div>
//   );
// };

// export default MessageBubble;


import { useState } from "react";
import { deleteMessage as deleteMessageApi } from "../../services/messengerService";
import { useAuth } from "../../context/AuthContext";

const MessageBubble = ({ msg, onDelete }) => {
  const { user } = useAuth();
  const [showActions, setShowActions] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!msg) return null;
console.log("user/Auth:", user);
  const myId = user?.id;
  const myRole = user?.role;

  // Handle senderId being either a populated object or a raw string/ObjectId
  const senderId =
    typeof msg.senderId === "object" && msg.senderId !== null
      ? msg.senderId._id
      : msg.senderId;

      console.log("msg.senderId:", msg.senderId);
      console.log("myId:", myId);

  const isMe = String(senderId) === String(myId);
  const isFaculty = myRole === "FACULTY";

  const canDelete = isMe || isFaculty;

  const handleDelete = async (e) => {
    e.stopPropagation();

    try {
      setLoading(true);
      await deleteMessageApi(msg._id);

      if (onDelete) {
        onDelete(msg._id);
      }
    } catch (error) {
      console.error("Delete failed:", error);
    } finally {
      setLoading(false);
      setShowActions(false);
    }
  };

  const senderName =
    typeof msg.senderId === "object" ? msg.senderId?.name : null;

  return (
    <div
      onClick={() => setShowActions((prev) => !prev)}
      className={`relative max-w-xs p-3 rounded-2xl text-sm mb-2 cursor-pointer shadow-sm ${
        isMe
          ? "bg-blue-600 text-white ml-auto rounded-br-sm"
          : "bg-white border border-slate-200 text-slate-800 mr-auto rounded-bl-sm"
      }`}
    >
      {!isMe && senderName && (
        <p className="text-xs font-semibold mb-1 text-blue-600">
          {senderName}
        </p>
      )}

      {msg?.content}

      {showActions && canDelete && (
        <button
          onClick={handleDelete}
          disabled={loading}
          className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-md hover:bg-red-600"
        >
          {loading ? "..." : "Delete"}
        </button>
      )}
    </div>
  );
};

export default MessageBubble;