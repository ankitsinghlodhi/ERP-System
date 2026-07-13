import { Outlet, Navigate } from "react-router-dom";
import TopNavbar from "../../components/navbar/TopNavbar";
import BreadcrumbBar from "../../components/common/BreadcrumbBar";
import { useAuth } from "../../context/AuthContext";

const AppLayout = () => {
  const { user, loading } = useAuth();
  // const token = localStorage.getItem("token");
  const token = user;

  // ?? Protect all private routes
  if (loading) {
    return null;
  }

  if (!token) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="h-screen overflow-hidden bg-gray-50 pt-16">
      <TopNavbar />
      <BreadcrumbBar />
      <main className="mt-[52px] h-[calc(100vh-64px-52px)] overflow-y-auto p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
