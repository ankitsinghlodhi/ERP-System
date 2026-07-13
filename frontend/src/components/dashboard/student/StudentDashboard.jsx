import DashboardContainer from "../common/DashboardContainer";
import DashboardHero from "../common/DashboardHero";
import StudentOverview from "./StudentOverview";
import StudentActivity from "./StudentActivity";
import StudentQuickActions from "./StudentQuickActions";
import { useEffect, useState } from "react";
import { getDashboardSummary } from "../../../services/studentService";
import AppLoader from "../../common/AppLoader";
const StudentDashboard = () => {
  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
 useEffect(() => {
  fetchDashboard();
}, []);

const fetchDashboard = async () => {
  try {
    const res = await getDashboardSummary();
    setDashboard(res.data);
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};

  if (loading) {
  return (
    // <div className="flex justify-center items-center h-[80vh]">
    //   Loading Dashboard...
    // </div>
    <AppLoader
  message="Loading Dashboard..."
/>

  );
}

if (!dashboard) return null;

  return (
    <DashboardContainer>

      <DashboardHero
        title={`Good Morning, ${dashboard.hero.name} 👋`}
        subtitle="Welcome back! Here's everything happening today."
         date={today}
        department={dashboard.hero.department}
        semester={dashboard.hero.semester}
      />

      <StudentOverview overview={dashboard.overview} />

<StudentQuickActions />

<StudentActivity />

      {/* Overview Grid */}

      {/* Quick Actions */}

      {/* Recent Activity */}

      {/* Upcoming */}

    </DashboardContainer>
  );
};

export default StudentDashboard;