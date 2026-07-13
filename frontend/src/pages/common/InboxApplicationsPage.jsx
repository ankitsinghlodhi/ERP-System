// import { useEffect, useState } from "react";
// import { getInboxApplications } from "../../services/applicationService";
// import ApplicationTable from "../../components/applications/ApplicationList";
// import { useAuth } from "../../context/AuthContext";
// import ApplicationToolbar from "../../components/applications/ApplicationToolbar";
// import ApplicationHeader from "../../components/applications/ApplicationHeader";
// const InboxApplicationsPage = () => {
//   const { user } = useAuth();

//   const [applications, setApplications] = useState([]);
//   const [search, setSearch] = useState("");
//   const [activeFilter, setActiveFilter] = useState("All");

//   useEffect(() => {
//     fetchInbox();
//   }, []);

//   const fetchInbox = async () => {
//     const res = await getInboxApplications();
//     setApplications(res.data.applications);
//   };

//   // const role = localStorage.getItem("role");
//   const role = user?.role;

//   return (
//     <div className="p-6">

//       <ApplicationHeader
//     role={role}
//     stats={{
//         total: applications.length,
//         pending: applications.filter(
//             a => a.status === "PENDING"
//         ).length,
//         approved: applications.filter(
//             a => a.status === "APPROVED"
//         ).length,
//     }}
//     onCreate={() => setOpen(true)}
// />

//       <ApplicationToolbar
//   search={search}
//   setSearch={setSearch}
//   activeFilter={activeFilter}
//   setActiveFilter={setActiveFilter}
// />

//       <ApplicationTable
//         applications={applications}
//         role={role}
//       />

//     </div>
//   );
// };

// export default InboxApplicationsPage;


import { useEffect, useState } from "react";
import { getInboxApplications } from "../../services/applicationService";
import ApplicationList from "../../components/applications/ApplicationList";
import ApplicationToolbar from "../../components/applications/ApplicationToolbar";
import ApplicationSidebar from "../../components/applications/ApplicationSidebar";
import { useAuth } from "../../context/AuthContext";

const InboxApplicationsPage = () => {
  const { user } = useAuth();

  const [applications, setApplications] = useState([]);
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    fetchInbox();
  }, []);

  const fetchInbox = async () => {
    const res = await getInboxApplications();
    setApplications(res.data.applications);
  };

  const role = user?.role;

  return (
    <div className="p-1 space-y-6">

      {/* Search + Filters */}

      <ApplicationToolbar
        search={search}
        setSearch={setSearch}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />

      {/* Main Layout */}

      <div
        className="
        grid
        grid-cols-1
        xl:grid-cols-12
        gap-8
        items-start
        "
      >

        {/* Left */}

        <div className="xl:col-span-8">

          <ApplicationList
            applications={applications}
            role={role}
          />

        </div>

        {/* Right */}

        <div className="xl:col-span-4">

          <ApplicationSidebar
            applications={applications}
          />

        </div>

      </div>

    </div>
  );
};

export default InboxApplicationsPage;