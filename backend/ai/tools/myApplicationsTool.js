const applicationService = require("../../services/applicationService");

exports.getMyApplications = async (currentUser) => {
  const applications =
    await applicationService.getStudentApplications(
      currentUser._id
    );

  return {
    success: true,
    total: applications.length,
    applications: applications.map((app) => ({
      id: app._id,
      category: app.category,
      subject: app.subject,
      receiverRole: app.receiverRole,
      status: app.status,
      createdAt: app.createdAt,
    })),
  };
};