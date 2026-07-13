import {
  CreditCard,
  CalendarDays,
  ShieldCheck,
  IndianRupee,
} from "lucide-react";
import { useState } from "react";
import PayFeesModal from "../PayFeesModel"

const PayFeesCard = ({ fee, loading = false, onPay }) => {
  const [showModal, setShowModal] = useState(false);

  const percentage =
    fee.total === 0 ? 0 : Math.round((fee.paid / fee.total) * 100);

  return (
    <>
      <div
        className="
        relative
        overflow-hidden
        rounded-3xl
        bg-gradient-to-br
        from-blue-700
        via-indigo-700
        to-purple-700
        text-white
        p-8
        shadow-xl
        h-full
        "
      >
        {/* Background */}
        <div className="absolute -right-16 -top-16 w-52 h-52 rounded-full bg-white/10" />
        <div className="absolute -left-20 -bottom-20 w-72 h-72 rounded-full bg-white/5" />

        <div className="relative">

          {/* Heading */}
          <div className="flex justify-between items-center">
            <div>
              <p className="text-blue-100">Outstanding Amount</p>
              <h2 className="text-5xl font-bold mt-2">
                ₹{fee.due.toLocaleString()}
              </h2>
            </div>
            <div className="bg-white/20 p-4 rounded-2xl">
              <IndianRupee size={34} />
            </div>
          </div>

          {/* Due Date */}
          <div className="mt-8 flex items-center gap-3">
            <CalendarDays size={20} />
            <span>Due : {fee.dueDate}</span>
          </div>

          {/* Progress */}
          <div className="mt-8">
            <div className="flex justify-between text-sm text-blue-100">
              <span>Payment Completed</span>
              <span>{percentage}%</span>
            </div>
            <div className="mt-3 h-3 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-green-400 rounded-full transition-all duration-700"
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>

          {/* Secure */}
          <div className="mt-8 flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3">
            <ShieldCheck className="text-green-300" />
            <div>
              <p className="font-medium">Secure Payments</p>
              <p className="text-sm text-blue-100">Powered by Razorpay</p>
            </div>
          </div>

          {/* Button */}
          <button
            onClick={() => setShowModal(true)}
            disabled={loading || fee.due === 0}
            className="
            mt-8
            w-full
            bg-white
            text-blue-700
            py-4
            rounded-2xl
            font-bold
            text-lg
            flex
            justify-center
            items-center
            gap-3
            transition-all
            duration-300
            hover:scale-[1.02]
            hover:shadow-xl
            disabled:opacity-50
            disabled:cursor-not-allowed
            "
          >
            <CreditCard size={22} />
            {fee.due === 0 ? "Fees Paid" : "Pay Now"}
          </button>

          {/* Footer */}
          <div className="mt-6 text-center text-blue-100 text-sm">
            UPI • Debit Card • Credit Card • Net Banking
          </div>

        </div>
      </div>

      {showModal && (
        <PayFeesModal
          due={fee.due}
          onClose={() => setShowModal(false)}
          onSuccess={onPay}
        />
      )}
    </>
  );
};

export default PayFeesCard;