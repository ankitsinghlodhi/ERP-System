import {
  CalendarCheck2,
  IndianRupee,
  Bell,
  BookOpen,
} from "lucide-react";

import SummaryCard from "../common/SummaryCard";

const StudentOverview = ({ overview }) => {
  const attendancePercent = overview.attendance.presentPercentage;

  const feePercent =
    overview.fees.totalAmount === 0
      ? 0
      : Math.round((overview.fees.dueAmount / overview.fees.totalAmount) * 100);

  // Adjust these two once you have real totals/max values for notifications & assignments
  const notificationsPercent = Math.min((5 / 10) * 100, 100);
  const assignmentsPercent = Math.min((2 / 5) * 100, 100);

  console.log("StudentOverview - overview:", overview);

  return (
    <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-6">

      <SummaryCard
        title="Attendance"
        value={`${attendancePercent}%`}
        progress={attendancePercent}
        description="Excellent"
        footer="30 Classes • 15 Present"
        icon={CalendarCheck2}
        color="blue"
      />

      <SummaryCard
        title="Fee Status"
        value={`₹${overview.fees.fee.due}`}
        progress={feePercent}
        description="Remaining Amount"
        footer="Due Date • 20 July"
        icon={IndianRupee}
        color="green"
      />

      <SummaryCard
        title="Notifications"
        value="5"
        progress={notificationsPercent}
        description="Unread Messages"
        footer="Latest • Quiz Tomorrow"
        icon={Bell}
        color="yellow"
      />

      <SummaryCard
        title="Assignments"
        value="2"
        progress={assignmentsPercent}
        description="Pending Submission"
        footer="DBMS • AI"
        icon={BookOpen}
        color="red"
      />

    </div>
  );
};

export default StudentOverview;