const colors = {
  PAID: "bg-green-100 text-green-700",
  PENDING: "bg-yellow-100 text-yellow-700",
  PARTIAL: "bg-blue-100 text-blue-700",

  ACTIVE: "bg-green-100 text-green-700",
  INACTIVE: "bg-red-100 text-red-700",

  APPROVED: "bg-green-100 text-green-700",
  REJECTED: "bg-red-100 text-red-700",

  PRESENT: "bg-green-100 text-green-700",
  ABSENT: "bg-red-100 text-red-700",
};

const StatusBadge = ({ status }) => {
  return (
    <span
      className={`
      inline-flex
      items-center
      justify-center
      px-3
      py-1
      rounded-full
      text-xs
      font-semibold
      ${colors[status] || "bg-slate-100 text-slate-700"}
      `}
    >
      {status}
    </span>
  );
};

export default StatusBadge;