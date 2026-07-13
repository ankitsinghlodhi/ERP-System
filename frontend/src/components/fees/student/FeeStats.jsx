import {
  Wallet,
  BadgeCheck,
  IndianRupee,
  CalendarDays,
} from "lucide-react";

import FeeStatCard from "./FeeStatCard";

const FeeStats = ({ fee }) => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">

      <FeeStatCard
        title="Total Fee"
        value={`₹${fee.total.toLocaleString()}`}
        icon={Wallet}
        color="blue"
      />

      <FeeStatCard
        title="Paid"
        value={`₹${fee.paid.toLocaleString()}`}
        subtitle="Amount Paid"
        icon={BadgeCheck}
        color="green"
      />

      <FeeStatCard
        title="Outstanding"
        value={`₹${fee.due.toLocaleString()}`}
        subtitle="Remaining"
        icon={IndianRupee}
        color="red"
      />

      <FeeStatCard
        title="Due Date"
        value={fee.dueDate}
        subtitle="Last Payment Date"
        icon={CalendarDays}
        color="orange"
      />

    </div>
  );
};

export default FeeStats;