import { useEffect, useState } from "react";
import { getStudentApplications } from "../../services/applicationService";
import ApplicationList from "../../components/applications/ApplicationList";
import ApplicationToolbar from "../../components/applications/ApplicationToolbar";
import ApplicationSidebar from "../../components/applications/ApplicationSidebar";
import SendApplicationModal from "../../components/applications/SendApplicationModal";
import AppLoader from "../../components/common/AppLoader";
import { Plus } from "lucide-react";

const ApplicationsPage = () => {
  const [applications, setApplications] = useState([]);
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    fetchApps();
  }, []);

  const fetchApps = async () => {
    try {
      setLoading(true);
      const res = await getStudentApplications();
      setApplications(res.data.applications);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <AppLoader message="Loading Applications..." />;
  }

  const filteredApplications = applications.filter((app) => {
    const matchesFilter =
      activeFilter === "All" ||
      app.status?.toLowerCase() === activeFilter.toLowerCase();

    const matchesSearch =
      !search.trim() ||
      app.subject?.toLowerCase().includes(search.toLowerCase()) ||
      app.category?.toLowerCase().includes(search.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="p-1 space-y-6">

      {/* Search + Filters */}

      <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">

        <div className="flex-1">
          <ApplicationToolbar
            search={search}
            setSearch={setSearch}
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
          />
        </div>

        <button
          onClick={() => setModal(true)}
          className="shrink-0 flex items-center justify-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-2xl font-semibold text-sm shadow-sm shadow-blue-200 hover:bg-blue-700 transition"
        >
          <Plus size={16} />
          Send Application
        </button>

      </div>

      {/* Main Layout */}

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">

        {/* Left */}

        <div className="xl:col-span-8">
          <ApplicationList
            applications={filteredApplications}
            role="STUDENT"
          />
        </div>

        {/* Right */}

        <div className="xl:col-span-4">
          <ApplicationSidebar applications={applications} />
        </div>

      </div>

      {modal && (
        <SendApplicationModal
          close={() => setModal(false)}
          refresh={fetchApps}
        />
      )}

    </div>
  );
};

export default ApplicationsPage;