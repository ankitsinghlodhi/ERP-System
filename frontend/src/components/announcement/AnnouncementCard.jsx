import { deleteAnnouncement } from "../../services/announcementServices";
import { useAuth } from "../../context/AuthContext";

const AnnouncementCard = ({ data, onRefresh }) => {
  const { user } = useAuth();

  // const role = localStorage.getItem("role");
  const role = user?.role;
  // const userId = localStorage.getItem("userId");
  const userId = user?._id;

  const canDelete =
    role === "ADMIN" ||
    (role === "FACULTY" && data.createdBy?._id === userId);

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h3 className="font-semibold text-lg">{data.title}</h3>

      <p className="text-gray-600 mt-1">{data.message}</p>

      <p className="text-xs text-gray-400 mt-2">
        By {data.createdBy?.name} ({data.role}) ·{" "}
        {new Date(data.createdAt).toLocaleDateString()}
      </p>
      {canDelete && (
  <button
    onClick={async () => {
      if (confirm("Delete this announcement?")) {
        await deleteAnnouncement(data._id);
        onRefresh();
      }
    }}
    className="text-red-500 text-sm"
  >
    Delete
  </button>
)}

    </div>
  );
};

export default AnnouncementCard;
