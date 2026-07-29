const Student = require("../../models/Student");
const {
  getAttendanceSummary,
} = require("../../services/attendanceSummaryService");

exports.getAttendance = async (currentUser) => {
  // Find student linked to logged-in user
  const student = await Student.findOne({
    userId: currentUser._id,
  });

  if (!student) {
    return {
      success: false,
      message: "Student record not found.",
    };
  }

  // Reuse existing attendance business logic
  const summary = await getAttendanceSummary(
    student._id,
    student.collegeId
  );

  return {
    success: true,
    studentName: student.name,
    rollNumber: student.rollNumber,
    semester: student.semester,
    ...summary,
  };
};