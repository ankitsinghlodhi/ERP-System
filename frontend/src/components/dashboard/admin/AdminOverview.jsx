import {
  Users,
  GraduationCap,
  BookOpen,
  IndianRupee,
} from "lucide-react";

import StatCard from "../common/StatCard";

const AdminOverview = () => {
  return (
    <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-6">

      <StatCard
        title="Students"
        value="1268"
        subtitle="Total Enrolled"
        footer="+18 this month"
        trend="+5%"
        icon={Users}
        color="blue"
      />

      <StatCard
        title="Faculty"
        value="84"
        subtitle="Active Faculty"
        footer="3 New"
        trend="+3%"
        icon={GraduationCap}
        color="green"
      />

      <StatCard
        title="Courses"
        value="24"
        subtitle="Running"
        footer="2 Added"
        trend="+2%"
        icon={BookOpen}
        color="purple"
      />

      <StatCard
        title="Fee Collection"
        value="₹48L"
        subtitle="Current Semester"
        footer="Pending ₹3.2L"
        icon={IndianRupee}
        color="orange"
      />

    </div>
  );
};

export default AdminOverview;