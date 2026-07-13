import {
  ReceiptText,
  CircleAlert,
} from "lucide-react";

const EmptyFeeState = () => {
  return (
    <div
      className="
      bg-white
      rounded-3xl
      border
      shadow-sm
      p-12
      flex
      flex-col
      items-center
      justify-center
      text-center
      "
    >
      <div
        className="
        w-28
        h-28
        rounded-full
        bg-blue-100
        flex
        items-center
        justify-center
        "
      >
        <ReceiptText
          size={52}
          className="text-blue-600"
        />
      </div>

      <h2 className="mt-8 text-2xl font-bold text-slate-800">
        No Fee Record Available
      </h2>

      <p className="mt-3 text-slate-500 max-w-lg leading-7">
        Your semester fee has not been generated yet.
        Please wait for your college administration to
        generate the fee or contact the accounts office.
      </p>

      <div
        className="
        mt-8
        rounded-2xl
        bg-yellow-50
        border
        border-yellow-200
        px-6
        py-5
        flex
        items-start
        gap-4
        "
      >
        <CircleAlert
          className="text-yellow-600 shrink-0 mt-1"
          size={22}
        />

        <div className="text-left">

          <p className="font-semibold text-yellow-800">
            What should you do?
          </p>

          <ul className="mt-2 space-y-1 text-sm text-yellow-700 list-disc pl-5">
            <li>Wait until your fee is generated.</li>
            <li>Contact your department if it's delayed.</li>
            <li>Refresh this page later.</li>
          </ul>

        </div>

      </div>
    </div>
  );
};

export default EmptyFeeState;