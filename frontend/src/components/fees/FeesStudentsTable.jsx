import StudentFeeCard from "./StudentFeeCard";
import DashboardToolbar from "../dashboard/common/DashboardToolbar";

const FeesStudentsTable = ({
  students,
  search,
  setSearch,
}) => {
  return (
    <div className="space-y-6">

      {/* Toolbar */}

      <DashboardToolbar
        title="Students Fee Records"
        subtitle={`${students.length} Students`}
        search={search}
        setSearch={setSearch}
      />

      {/* Empty State */}
 {students.length === 0 && (
        <div className="bg-white rounded-3xl shadow-lg border border-slate-200 py-20 text-center">
          <h2 className="text-2xl font-semibold text-slate-700">
            No Students Found
          </h2>
          <p className="text-slate-500 mt-2">
            Try changing the search keyword.
          </p>
        </div>
      )}

      {/* Student Cards */}
      <div className="space-y-4">
        {students.map((student) => (
          <StudentFeeCard
            key={student.studentId}
            student={student}
          />
        ))}
      </div>

    </div>
  );
};

export default FeesStudentsTable;