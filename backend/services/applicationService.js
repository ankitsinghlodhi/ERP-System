const Application = require("../models/Application");
const Student = require("../models/Student");

// ==============================
// Send Application
// ==============================

exports.sendApplication = async ({
  userId,
  collegeId,
  receiverRole,
  subject,
  message,
  category,
}) => {
  const student = await Student.findOne({ userId });

  if (!student) {
    throw new Error("Student not found");
  }

  const application = await Application.create({
    studentId: student._id,
    collegeId,
    receiverRole,
    subject,
    message,
    category,
  });

  return application;
};

// ==============================
// Student Applications
// ==============================

exports.getStudentApplications = async (userId) => {
  const student = await Student.findOne({ userId });

  if (!student) {
    throw new Error("Student not found");
  }

  return await Application.find({
    studentId: student._id,
  }).sort({ createdAt: -1 });
};

// ==============================
// Inbox Applications
// ==============================

exports.getInboxApplications = async ({
  role,
  collegeId,
}) => {
  return await Application.find({
    receiverRole: role,
    collegeId,
  })
    .populate({
      path: "studentId",
      select: "name semester departmentId",
      populate: {
        path: "departmentId",
        select: "name",
      },
    })
    .sort({ createdAt: -1 });
};

// ==============================
// Update Status
// ==============================

exports.updateApplicationStatus = async ({
  applicationId,
  status,
}) => {
  return await Application.findByIdAndUpdate(
    applicationId,
    { status },
    { new: true }
  );
};