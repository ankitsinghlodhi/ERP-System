import SectionCard from "../common/SectionCard";
import { ClipboardCheck } from "lucide-react";

const pending = [
  {
    course: "DBMS",
    semester: "Sem 5",
    students: 18,
  },
  {
    course: "Computer Networks",
    semester: "Sem 3",
    students: 22,
  },
  {
    course: "Artificial Intelligence",
    semester: "Sem 7",
    students: 15,
  },
];

const FacultyPendingAttendance = () => {
  return (
    <SectionCard
      title="Pending Attendance"
      subtitle="Classes requiring attendance"
      icon={ClipboardCheck}
    >
      <div className="space-y-4">

        {pending.map((item) => (

          <div
            key={item.course}
            className="rounded-2xl border border-slate-100 p-4 hover:bg-slate-50 transition"
          >

            <div className="flex justify-between items-center">

              <div>

                <h3 className="font-semibold text-slate-800">
                  {item.course}
                </h3>

                <p className="text-sm text-slate-500 mt-1">
                  {item.semester}
                </p>

              </div>

              <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-sm font-semibold">
                {item.students} Students
              </span>

            </div>

            <button
              className="
              mt-4
              w-full
              rounded-xl
              bg-gradient-to-r
              from-blue-600
              to-indigo-600
              py-2.5
              text-white
              font-medium
              hover:shadow-lg
              transition
              "
            >
              Mark Attendance
            </button>

          </div>

        ))}

      </div>
    </SectionCard>
  );
};

export default FacultyPendingAttendance;