const Student = require("../models/Student");
const Fees = require("../models/Fees");
const Department = require("../models/Department");

const getFeesSummary = async (userId) => {
  // ===========================
  // Student
  // ===========================

  const student = await Student.findOne({ userId }).populate({
    path: "userId",
    select: "name image profileImage avatar email",
  });

  if (!student) {
    throw new Error("Student profile not found");
  }

  // ===========================
  // Department
  // ===========================

  const department = await Department.findById(student.departmentId);

  // ===========================
  // Fees
  // ===========================

  let fees = await Fees.findOne({
    studentId: student._id,
  });

  if (!fees) {
    fees = await Fees.create({
      studentId: student._id,
      departmentId: student.departmentId,
      totalAmount: department?.totalFees || 0,
      paidAmount: 0,
      status: "PENDING",
    });
  }

  // ===========================
  // Calculations and dummy data for temporary ui
  // ===========================

  let total = fees?.totalAmount ?? 0;
  let paid = fees?.paidAmount ?? 0;
  let due = Math.max(0, total - paid);

  total=total*1000;
  paid=paid*1000;
  due=due*1000;

  // ===========================
  // Temporary Fee Breakdown
  // (Until real breakdown exists)
  // ===========================

  const breakdown =
    total > 0
      ? [
          {
            title: "Tuition Fee",
            amount: Math.round(total * 0.75),
          },
          {
            title: "Examination Fee",
            amount: Math.round(total * 0.1),
          },
          {
            title: "Library Fee",
            amount: Math.round(total * 0.05),
          },
          {
            title: "Development Fee",
            amount:
              total -
              (Math.round(total * 0.75) +
                Math.round(total * 0.1) +
                Math.round(total * 0.05)),
          },
        ]
      : [];

  // ===========================
  // Payment History
  // ===========================

  const history = (fees.payments || []).map((payment) => ({
    id: payment._id,
    amount: payment.amount ?? 0,
    method: "Razorpay",
    date: payment.paidAt
      ? payment.paidAt.toLocaleDateString("en-IN")
      : "N/A",
    status: "SUCCESS",
    paymentId: payment.razorpay_payment_id || "",
  }));

  // ===========================
  // Response
  // ===========================

  return {
    student: {
      _id: student._id,

      name:
        student.name ||
        student.userId?.name ||
        "Student",

      profileImage:
        student.userId?.image ||
        student.userId?.profileImage ||
        student.userId?.avatar ||
        "",

      studentId: student.rollNumber || "",

      semester: student.semester ?? 1,

      department:
        department?.name || "Department",
    },

    fee: {
      total,
      paid,
      due,

      // Temporary until you add dueDate field
      dueDate: "Not Assigned",

      status: fees?.status ?? "PENDING",
    },

    breakdown,

    history,
  };
};

module.exports = {
  getFeesSummary,
};