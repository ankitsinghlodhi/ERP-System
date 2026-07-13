const Attendance = require("../models/Attendance");

const getAttendanceSummary = async (studentId, collegeId) => {
  const attendance = await Attendance.findOne({
    studentId,
    collegeId,
  });

  if (!attendance) {
    return {
      totalDays: 30,
      presentDays: 0,
      absentDays: 0,
      pendingDays: 30,
      presentPercentage: 0,
      absentPercentage: 0,
      pendingPercentage: 100,
    };
  }

  const { presentDays, absentDays, totalDays } = attendance;

  const updatedDays = presentDays + absentDays;
  const pendingDays = totalDays - updatedDays;

  const pendingPercentage = Math.round(
    (pendingDays / totalDays) * 100
  );

  if (updatedDays < 1) {
    return {
      totalDays,
      presentDays,
      absentDays,
      pendingDays,
      presentPercentage: 0,
      absentPercentage: 0,
      pendingPercentage,
    };
  }

  return {
    totalDays,
    presentDays,
    absentDays,
    pendingDays,
    presentPercentage: Math.round(
      (presentDays / updatedDays) * 100
    ),
    absentPercentage: Math.round(
      (absentDays / updatedDays) * 100
    ),
    pendingPercentage,
  };
};

module.exports = { getAttendanceSummary };