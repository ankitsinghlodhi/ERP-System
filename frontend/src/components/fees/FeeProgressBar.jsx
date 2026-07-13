const FeeProgressBar = ({
  totalAmount,
  paidAmount,
}) => {
  const percentage =
    totalAmount === 0
      ? 0
      : Math.round((paidAmount / totalAmount) * 100);

  let color = "bg-red-500";

  if (percentage >= 100) color = "bg-green-500";
  else if (percentage >= 70) color = "bg-blue-500";
  else if (percentage >= 40) color = "bg-yellow-500";

  return (
    <div>

      <div className="flex justify-between mb-3">

        <span className="text-sm font-medium text-slate-600">
          Fee Progress
        </span>

        <span className="font-semibold text-slate-700">
          {percentage}%
        </span>

      </div>

      <div className="h-3 bg-slate-200 rounded-full overflow-hidden">

        <div
          className={`${color} h-full rounded-full transition-all duration-700`}
          style={{
            width: `${percentage}%`,
          }}
        />

      </div>

      <div className="flex justify-between mt-3 text-sm">

        <span className="text-green-600 font-medium">
          Paid ₹{paidAmount.toLocaleString()}
        </span>

        <span className="text-red-500 font-medium">
          Due ₹{(totalAmount - paidAmount).toLocaleString()}
        </span>

      </div>

    </div>
  );
};

export default FeeProgressBar;