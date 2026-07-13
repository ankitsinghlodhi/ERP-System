const User = require("../models/User");
const Student = require("../models/Student");
const Department = require("../models/Department");

const {
  getAttendanceSummary,
} = require("../services/attendanceSummaryService");

const {
  getFeesSummary,
} = require("../services/feesSummaryService");

exports.getDashboardSummary = async (req, res) => {
  try {
    const userId = req.user.userId;
    const collegeId = req.user.collegeId;

    // User
    const user = await User.findById(userId);

    // Student
    const student = await Student.findOne({
      userId,
    });

    if (!student) {
      return res.status(404).json({
        message: "Student not found",
      });
    }

    // Department
    const department =
      await Department.findById(
        student.departmentId
      );

    // Attendance
    const attendance =
      await getAttendanceSummary(
        student._id,
        collegeId
      );

    // Fees
    const fees =
      await getFeesSummary(userId);

    res.status(200).json({
      hero: {
        name: user.name,
        department: department?.name,
        semester: student.semester,
      },

      overview: {
        attendance,
        fees,

        notifications: 0,
        assignments: 0,
      },

      schedule: [],

      activities: [],
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message:
        "Failed to fetch dashboard summary",
    });
  }
};