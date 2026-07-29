const {
  getFeesSummary,
} = require("../../services/feesSummaryService");

exports.getFees = async (currentUser) => {
  // Only students have personal fee records
  if (currentUser.role !== "STUDENT") {
    return {
      success: false,
      message: "Fee details are only available for student accounts.",
    };
  }

  try {
    const summary = await getFeesSummary(currentUser._id);

    return {
      success: true,
      student: summary.student,
      fee: summary.fee,
      breakdown: summary.breakdown,
      history: summary.history,
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
};