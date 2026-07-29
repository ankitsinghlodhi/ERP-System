const applicationService = require("../../services/applicationService");

const pendingActionManager = require("../pendingActionManager");

// =======================================
// Continue collecting information
// =======================================

exports.collectApplication = async (
  currentUser,
  args
) => {

  const existing =
    pendingActionManager.getPendingAction(
      currentUser._id
    ) || {};

  const { question, tool, ...data } = args;

const updatedPending = {
  ...existing,
  ...data,
};

  pendingActionManager.setPendingAction(
    currentUser._id,
    updatedPending
  );

  return question;
};
// =======================================
// Actually send application
// =======================================

exports.sendApplication = async (
  currentUser,
  args
) => {

    const requiredFields = [
  "receiverRole",
  "category",
  "subject",
  "message",
];

const missing = requiredFields.filter(
  (field) => !args[field]
);

if (missing.length > 0) {
  pendingActionManager.setPendingAction(
    currentUser._id,
    args
  );

  return `I still need some information before I can submit the application. Missing: ${missing.join(
    ", "
  )}.`;
}
  const application =
    await applicationService.sendApplication({
      userId: currentUser._id,

      collegeId: currentUser.collegeId,

      receiverRole: args.receiverRole,

      category: args.category,

      subject: args.subject,

      message: args.message,
    });

  pendingActionManager.clearPendingAction(
    currentUser._id
  );

  return {
    success: true,

    applicationId: application._id,

    receiver: application.receiverRole,

    category: application.category,

    subject: application.subject,

    message:
      "Application submitted successfully.",
  };
};