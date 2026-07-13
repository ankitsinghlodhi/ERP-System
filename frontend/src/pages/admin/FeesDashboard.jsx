import { useEffect, useState } from "react";
import { getAdminFeesDashboard } from "../../services/feesService";
// import FeesDashStats from "../../components/fees/FeesDashStats";
// import FeesStudentsTable from "../../components/fees/FeesStudentsTable";
import FeeHero from "../../components/fees/FeeHero";
import FeesDashStats from "../../components/fees/FeesDashStats";
import FeesStudentsTable from "../../components/fees/FeesStudentsTable";
const FeesDashboard = () => {

  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");

  const [stats, setStats] = useState({
    totalFee: 0,
    collected: 0,
    pending: 0,
  });

  useEffect(() => {
    fetchFeesDashboard();
  }, []);

  const fetchFeesDashboard = async () => {
    try {

      const res = await getAdminFeesDashboard();

      setStudents(res.data.students);
      setStats(res.data.stats);

    } catch (error) {

      console.log("Using dummy data");

      const dummy = [
        {
          id: 1,
          name: "Rahul Sharma",
          department: "Computer Science",
          totalFee: 50000,
          paid: 30000,
        },
        {
          id: 2,
          name: "Aman Verma",
          department: "Mechanical",
          totalFee: 50000,
          paid: 50000,
        },
        {
          id: 3,
          name: "Neha Singh",
          department: "IT",
          totalFee: 50000,
          paid: 20000,
        },
      ];

      setStudents(dummy);

      const totalFee = dummy.reduce((sum, s) => sum + s.totalFee, 0);
      const collected = dummy.reduce((sum, s) => sum + s.paid, 0);

      setStats({
        totalFee,
        collected,
        pending: totalFee - collected,
      });

    }
  };

  const filteredStudents = students.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase()) ||
    s.department.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8">

      {/* ===== STATS ===== */}

      <FeeHero stats={stats} />

      <div className="grid grid-cols-3 gap-6 mb-8">

        <FeesDashStats
          title="Total Fee"
          value={`₹${stats.totalFee*1000}`}
          type="total"
        />

        <FeesDashStats
          title="Collected"
          value={`₹${stats.collected*1000}`}
          type="collected"
        />

        <FeesDashStats
          title="Pending"
          value={`₹${stats.pending*1000}`}
          type="pending"
        />

      </div>

      {/* ===== STUDENTS TABLE ===== */}

      <FeesStudentsTable
        students={filteredStudents}
        search={search}
        setSearch={setSearch}
      />

    </div>
  );
};

export default FeesDashboard;