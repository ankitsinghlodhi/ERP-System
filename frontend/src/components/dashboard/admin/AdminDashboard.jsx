import AdminHero from "./AdminHero";
import AdminOverview from "./AdminOverview";
import AdminQuickManagement from "./AdminQuickManagement";
import AdminPendingRequests from "./AdminPendingRequests";
import AdminRecentActivity from "./AdminRecentActivity";
import AdminCollegeInsights from "./AdminCollegeInsights";
import { getAdminDashboardStats } from "../../../services/dashboardService";
import { useEffect, useState } from "react";
import AppLoader from "../../common/AppLoader";

const AdminDashboard = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

   useEffect(() => {
    

    const fetchStats = async () => {
      try {
        console.log(" Fetching admin dashboard stats");
        const res = await getAdminDashboardStats();
        setStats(res);
      } catch (error) {
        console.error(" Failed to load dashboard stats", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  });

  if (loading) {
    return <AppLoader message="Loading admin dashboard..." />;
  }


  return (
    <div className="space-y-8">

      <AdminHero />

      <AdminOverview />

      <div className="grid xl:grid-cols-2 gap-8">

         <AdminQuickManagement />

         <AdminPendingRequests />

     </div>
     <div className="grid xl:grid-cols-2 gap-8">

         <AdminRecentActivity />

         <AdminCollegeInsights />

     </div>

    </div>
  );
};

export default AdminDashboard;