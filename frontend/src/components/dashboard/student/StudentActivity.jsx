import DashboardPanel from "../common/DashboardPanel";
import RecentActivity from "./RecentActivity";

const schedule = [
  {
    subject: "Database Management",
    time: "09:00 AM",
  },
  {
    subject: "Computer Networks",
    time: "11:00 AM",
  },
  {
    subject: "Artificial Intelligence",
    time: "01:00 PM",
  },
];

const notifications = [
  "Fee payment reminder",
  "Quiz scheduled for tomorrow",
  "Operating System notes uploaded",
  "Assignment deadline updated",
];

const StudentActivity = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-6">

      <DashboardPanel title="Today's Schedule">

        <div className="space-y-4">

          {schedule.map((item, index) => (
            <div
              key={index}
              className="
              flex
              justify-between
              items-center
              p-4
              rounded-2xl
              bg-gray-50
              hover:bg-blue-50
              transition-all
              "
            >
              <div>
                <h3 className="font-semibold">
                  {item.subject}
                </h3>

                <p className="text-sm text-gray-500">
                  Lecture
                </p>
              </div>

              <span className="font-medium text-blue-600">
                {item.time}
              </span>

            </div>
          ))}

        </div>

      </DashboardPanel>

      <DashboardPanel title="Recent Notifications">

        <div className="space-y-4">

          {notifications.map((item, index) => (
            <div
              key={index}
              className="
              flex
              gap-4
              items-start
              p-4
              rounded-2xl
              bg-gray-50
              hover:bg-yellow-50
              transition-all
              "
            >
              <div className="w-3 h-3 mt-2 rounded-full bg-blue-500"/>

              <p>{item}</p>

            </div>
          ))}

        </div>

      </DashboardPanel>

    </div>
  );
};

export default StudentActivity;