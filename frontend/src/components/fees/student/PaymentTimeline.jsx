import {
  CheckCircle2,
  Clock3,
  IndianRupee,
} from "lucide-react";

const PaymentTimeline = ({
  history = [],
  fee,
}) => {
  const timeline = [
    {
      title: "Fee Generated",
      description: "Semester fee has been generated.",
      date: fee?.dueDate,
      completed: true,
    },

    ...history.map((payment) => ({
      title: `Paid ₹${payment.amount.toLocaleString()}`,
      description: payment.method,
      date: payment.date,
      completed: payment.status === "SUCCESS",
    })),

    {
      title:
        fee?.due === 0
          ? "Payment Completed"
          : `Remaining ₹${fee?.due.toLocaleString()}`,
      description:
        fee?.due === 0
          ? "All dues have been cleared."
          : "Outstanding balance.",
      date: fee?.dueDate,
      completed: fee?.due === 0,
    },
  ];

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
      h-full
      "
    >
      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-xl font-bold text-slate-800">
            Payment Timeline
          </h2>

          <p className="text-slate-500 mt-1">
            Your payment journey
          </p>

        </div>

        <IndianRupee
          size={28}
          className="text-blue-600"
        />

      </div>

      {/* Timeline */}

      <div className="mt-10">

        {timeline.map((item, index) => {
          const isLast =
            index === timeline.length - 1;

          return (
            <div
              key={index}
              className="flex gap-5"
            >
              {/* Left */}

              <div className="flex flex-col items-center">

                <div
                  className={`
                  w-11
                  h-11
                  rounded-full
                  flex
                  items-center
                  justify-center
                  ${
                    item.completed
                      ? "bg-green-100"
                      : "bg-yellow-100"
                  }
                  `}
                >
                  {item.completed ? (
                    <CheckCircle2
                      size={22}
                      className="text-green-600"
                    />
                  ) : (
                    <Clock3
                      size={20}
                      className="text-yellow-600"
                    />
                  )}
                </div>

                {!isLast && (
                  <div
                    className="
                    w-[2px]
                    flex-1
                    bg-slate-200
                    my-2
                    "
                  />
                )}

              </div>

              {/* Right */}

              <div className="pb-10 flex-1">

                <h3 className="font-semibold text-slate-800">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-500 mt-1">
                  {item.description}
                </p>

                <span className="text-xs text-slate-400 mt-2 block">
                  {item.date}
                </span>

              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
};

export default PaymentTimeline;