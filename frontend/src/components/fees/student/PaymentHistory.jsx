import {
  BadgeCheck,
  Clock3,
  XCircle,
  CreditCard,
  Download,
} from "lucide-react";

const PaymentHistory = ({
  history = [],
  onReceiptDownload,
}) => {
  const getStatus = (status) => {
    switch (status) {
      case "SUCCESS":
        return {
          bg: "bg-green-100",
          text: "text-green-700",
          icon: BadgeCheck,
          label: "Success",
        };

      case "PENDING":
        return {
          bg: "bg-yellow-100",
          text: "text-yellow-700",
          icon: Clock3,
          label: "Pending",
        };

      default:
        return {
          bg: "bg-red-100",
          text: "text-red-700",
          icon: XCircle,
          label: "Failed",
        };
    }
  };

  return (
    <div
      className="
      bg-white
      rounded-3xl
      border
      shadow-sm
      p-8
      hover:shadow-xl
      transition-all
      duration-300
      "
    >
      {/* Heading */}

      <div className="flex justify-between items-center">

        <div>

          <h2 className="text-xl font-bold text-slate-800">
            Payment History
          </h2>

          <p className="text-slate-500 mt-1">
            Recent Transactions
          </p>

        </div>

        <CreditCard
          size={28}
          className="text-blue-600"
        />

      </div>

      {/* Empty */}

      {history.length === 0 && (
        <div className="py-16 text-center text-slate-500">
          No payment history available.
        </div>
      )}

      {/* List */}

      <div className="mt-8 space-y-5">

        {history.map((payment) => {
          const status = getStatus(payment.status);
          const StatusIcon = status.icon;

          return (
            <div
              key={payment.id}
              className="
              border
              rounded-2xl
              p-5
              hover:bg-slate-50
              transition
              "
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

                {/* Left */}

                <div className="flex gap-4">

                  <div
                    className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-blue-100
                    flex
                    items-center
                    justify-center
                    "
                  >
                    <CreditCard
                      className="text-blue-700"
                    />
                  </div>

                  <div>

                    <h3 className="font-semibold text-slate-800">
                      ₹{payment.amount.toLocaleString()}
                    </h3>

                    <p className="text-sm text-slate-500 mt-1">
                      {payment.method}
                    </p>

                    <p className="text-sm text-slate-400">
                      {payment.date}
                    </p>

                  </div>

                </div>

                {/* Right */}

                <div className="flex flex-wrap items-center gap-3">

                  <span
                    className={`
                    flex
                    items-center
                    gap-2
                    px-4
                    py-2
                    rounded-full
                    text-sm
                    font-medium
                    ${status.bg}
                    ${status.text}
                    `}
                  >
                    <StatusIcon size={16} />

                    {status.label}

                  </span>

                  <button
                    onClick={() =>
                      onReceiptDownload?.(payment)
                    }
                    className="
                    flex
                    items-center
                    gap-2
                    px-4
                    py-2
                    rounded-xl
                    border
                    hover:bg-blue-50
                    transition
                    "
                  >
                    <Download size={18} />

                    Receipt

                  </button>

                </div>

              </div>

            </div>
          );
        })}

      </div>
    </div>
  );
};

export default PaymentHistory;