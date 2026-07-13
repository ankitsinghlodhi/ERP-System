import {
  BookOpen,
  ClipboardCheck,
  Users,
  Bell,
} from "lucide-react";

import StatCard from "../common/StatCard";

const FacultyOverview = () => {
  return (
    <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-6">

      <StatCard
        title="Today's Classes"
        value="4"
        subtitle="Scheduled"
        footer="2 Remaining"
        color="blue"
        icon={BookOpen}
      />

      <StatCard
        title="Attendance"
        value="2"
        subtitle="Pending"
        footer="Need Action"
        color="orange"
        icon={ClipboardCheck}
      />

      <StatCard
        title="Students"
        value="128"
        subtitle="Assigned"
        footer="IT Department"
        color="green"
        icon={Users}
      />

      <StatCard
        title="Notifications"
        value="3"
        subtitle="Unread"
        footer="Latest Updates"
        color="purple"
        icon={Bell}
      />

    </div>
  );
};

export default FacultyOverview;