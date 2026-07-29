const attendanceTool = require("./tools/attendanceTool");
const feesTool = require("./tools/feesTool");
const applicationTool = require("./tools/applicationTool");
const myApplicationsTool = require("./tools/myApplicationsTool");
const tools = {
  attendance: {
    description:
      "Get logged in student's attendance",

    handler:
      attendanceTool.getAttendance,
  },

  fees: {
    description:
      "Get logged in student's fees",

    handler: feesTool.getFees,
  },

  collectApplication: {
    description:
      "Collect missing application information",

    handler:
      applicationTool.collectApplication,
  },

  sendApplication: {
    description:
      "Submit application",

    handler:
      applicationTool.sendApplication,
  },

  myApplications: {
  description:
    "Get logged in student's submitted applications",

  handler:
    myApplicationsTool.getMyApplications,
},
};

exports.getTool = (toolName) =>
  tools[toolName];

exports.getAllTools = () => tools;