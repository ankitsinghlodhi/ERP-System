import {
  Bell,
  ClipboardCheck,
  IndianRupee,
  CalendarCheck2,
} from "lucide-react";

const activities = [
  {
    title: "Attendance Updated",
    description: "Database Management lecture marked present.",
    time: "10 mins ago",
    icon: CalendarCheck2,
    color: "bg-blue-500",
  },
  {
    title: "Fee Reminder",
    description: "Semester fee due in 5 days.",
    time: "1 hour ago",
    icon: IndianRupee,
    color: "bg-green-500",
  },
  {
    title: "Assignment Uploaded",
    description: "AI Assignment has been published.",
    time: "Yesterday",
    icon: ClipboardCheck,
    color: "bg-purple-500",
  },
  {
    title: "New Notification",
    description: "Quiz schedule has been updated.",
    time: "2 days ago",
    icon: Bell,
    color: "bg-orange-500",
  },
];

const RecentActivity = () => {
  return (
    <div className="bg-white rounded-3xl shadow-md border border-gray-100 p-7">

      <h2 className="text-2xl font-bold text-gray-800 mb-8">
        Recent Activity
      </h2>

      <div className="relative">

        <div className="absolute left-6 top-2 bottom-2 w-[2px] bg-gray-200"/>

        <div className="space-y-8">

          {activities.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="relative flex gap-5"
              >

                <div
                  className={`
                  w-12
                  h-12
                  rounded-full
                  ${item.color}
                  flex
                  items-center
                  justify-center
                  text-white
                  z-10
                  shadow-lg
                  `}
                >
                  <Icon size={20}/>
                </div>

                <div className="flex-1">

                  <div className="flex justify-between items-center">

                    <h3 className="font-semibold text-gray-800">
                      {item.title}
                    </h3>

                    <span className="text-xs text-gray-400">
                      {item.time}
                    </span>

                  </div>

                  <p className="text-sm text-gray-500 mt-1">
                    {item.description}
                  </p>

                </div>

              </div>
            );
          })}

        </div>

      </div>

    </div>
  );
};

export default RecentActivity;