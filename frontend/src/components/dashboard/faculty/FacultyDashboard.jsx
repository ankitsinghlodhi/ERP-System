import DashboardHero from "../common/DashboardHero";
import FacultyOverview from "./FacultyOverview";
import FacultyQuickActions from "./FacultyQuickActions";
import FacultyTodayClasses from "./FacultyTodayClasses";
import FacultyPendingAttendance from "./FacultyPendingAttendance";
const FacultyDashboard = () => {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="space-y-8">

      <DashboardHero
        title="Good Morning, Parul 👋"
        subtitle="Manage your lectures, attendance and student activities."
        department="Computer Science Department"
        date={today}
        quote="Teaching is not about answering questions, it's about inspiring curiosity."
        gradient="from-indigo-600 via-blue-600 to-cyan-600"
      />
      <FacultyOverview />
      <FacultyQuickActions />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <FacultyTodayClasses />
        <FacultyPendingAttendance />
      </div>
    </div>
  );
};

export default FacultyDashboard;