

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  FaCalendarAlt,
  FaCheckCircle,
  FaTimesCircle,
  FaClock,
  FaChartLine,
} from "react-icons/fa";
import AttendanceProgress from "./AttendanceProgress";
import AttendanceStats from "./AttendanceStats";
import {
  getFacultyAttendanceSummary,
  getStudentAttendanceSummary,
} from "../../services/attendanceService";
import AppLoader from "../common/AppLoader";



const AttendanceDetail = ({ role }) => {
  const { studentId } = useParams();
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAttendanceSummary();
  }, [studentId]);

  const fetchAttendanceSummary = async () => {
    try {
      const res =
        role === "FACULTY"
          ? await getFacultyAttendanceSummary(studentId)
          : await getStudentAttendanceSummary();

      setSummary(res.data);
    } catch (error) {
      console.error("❌ Failed to fetch attendance summary");
    }
  };

  if (!summary) {
  return (
    <appLoader message="Loading Attendance Summary..." />
  );
}

  return (
<div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 p-8">

{/* ================= HEADER ================= */}

<div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 shadow-2xl text-white p-6">

   <div className="absolute top-0 right-0 w-60 h-60 bg-white/10 rounded-full blur-3xl"></div>

   <div className="relative flex flex-col lg:flex-row justify-between items-center">

     <div>

       <h1 className="text-4xl font-bold">
         Attendance Dashboard
       </h1>

       <p className="mt-3 text-indigo-100 text-lg">
         Track attendance performance and statistics.
       </p>

     </div>

     <div className="mt-8 lg:mt-0">

     <div className="bg-white/20 backdrop-blur-lg rounded-3xl px-8 py-6 shadow-lg">

      <p className="text-sm uppercase tracking-widest">
        Overall Attendance
      </p>

     <h2 className="text-5xl font-bold mt-2">
       {summary.presentPercentage}%
     </h2>

     </div>

  </div>

</div>

</div>

{/* ================= MAIN CONTENT ================= */}

<div className="grid lg:grid-cols-3 gap-8 mt-10">

  {/* ================= PROGRESS CARD ================= */}

  <div className="lg:col-span-1">

    <div
      className="
      bg-white/70
      backdrop-blur-xl
      rounded-3xl
      shadow-2xl
      p-8
      border border-white
      hover:shadow-indigo-300
      hover:-translate-y-2
      transition-all
      duration-500
      "
    >

      <div className="flex items-center gap-3 mb-6">

        <div className="w-12 h-12 rounded-xl bg-indigo-100 flex justify-center items-center">

          <FaChartLine className="text-indigo-600 text-xl"/>

        </div>

        <div>

          <h2 className="font-bold text-xl">
            Attendance Progress
          </h2>

          <p className="text-gray-500 text-sm">
            Current semester performance
          </p>

        </div>

      </div>

      <div className="flex justify-center py-4">

        <AttendanceProgress role={role} />

      </div>

      <div className="mt-6 rounded-2xl bg-indigo-50 p-5">

        <p className="text-gray-500 text-sm">
          Current Attendance
        </p>

        <h2 className="text-3xl font-bold text-indigo-700 mt-2">
          {summary.presentPercentage}%
        </h2>

      </div>

    </div>

  </div>



  {/* ================= RIGHT SIDE ================= */}

 {/* ================= RIGHT SIDE ================= */}

<div className="lg:col-span-2">
  <div className="grid grid-cols-2 gap-5 h-full">

    {/* Total Sessions */}
    <div
      className="
      bg-gradient-to-br
      from-blue-500
      to-indigo-600
      text-white
      rounded-3xl
      shadow-xl
      p-5
      flex
      justify-between
      items-center
      hover:scale-[1.02]
      transition-all
      duration-300"
    >
      <div>
        <p className="text-blue-100 text-sm">Total Sessions</p>

        <h2 className="text-4xl font-bold mt-3">
          {summary.totalDays}
        </h2>
      </div>

      <FaCalendarAlt className="text-4xl opacity-70" />
    </div>

    {/* Present */}
    <div
      className="
      bg-gradient-to-br
      from-green-400
      to-emerald-600
      text-white
      rounded-3xl
      shadow-xl
      p-5
      flex
      justify-between
      items-center
      hover:scale-[1.02]
      transition-all
      duration-300"
    >
      <div>
        <p className="text-green-100 text-sm">Present</p>

        <h2 className="text-4xl font-bold mt-3">
          {summary.presentDays}
        </h2>
      </div>

      <FaCheckCircle className="text-4xl opacity-80" />
    </div>

    {/* Absent */}
    <div
      className="
      bg-gradient-to-br
      from-red-400
      to-red-600
      text-white
      rounded-3xl
      shadow-xl
      p-5
      flex
      justify-between
      items-center
      hover:scale-[1.02]
      transition-all
      duration-300"
    >
      <div>
        <p className="text-red-100 text-sm">Absent</p>

        <h2 className="text-4xl font-bold mt-3">
          {summary.absentDays}
        </h2>
      </div>

      <FaTimesCircle className="text-4xl opacity-80" />
    </div>

    {/* Pending */}
    <div
      className="
      bg-gradient-to-br
      from-yellow-400
      to-orange-500
      text-white
      rounded-3xl
      shadow-xl
      p-5
      flex
      justify-between
      items-center
      hover:scale-[1.02]
      transition-all
      duration-300"
    >
      <div>
        <p className="text-yellow-100 text-sm">Pending</p>

        <h2 className="text-4xl font-bold mt-3">
          {summary.pendingDays}
        </h2>
      </div>

      <FaClock className="text-4xl opacity-80" />
    </div>

  </div>
</div>


<div
className="
mt-8
bg-white/80
backdrop-blur-xl
rounded-3xl
shadow-xl
p-8
">

<h2 className="text-2xl font-bold text-gray-700 mb-4">
Attendance Insight
</h2>

<p className="text-gray-600 leading-8">

Maintain at least
<span className="font-bold text-indigo-600">
 75%
</span>
attendance to remain eligible for examinations.

Your current attendance is

<span className="font-bold text-green-600">
 {" "}
{summary.presentPercentage}%.
</span>

Keep attending classes regularly to improve your academic performance.

</p>

</div>

</div>

<div className="mt-12">
  <div className="bg-white rounded-3xl shadow-2xl p-8">
    <h2 className="text-2xl font-bold text-gray-700 mb-8">
      Attendance Statistics
    </h2>

    <AttendanceStats
      present={summary.presentPercentage}
      absent={summary.absentPercentage}
      pending={summary.pendingPercentage}
    />
  </div>
</div>

</div>






  );
};

export default AttendanceDetail;