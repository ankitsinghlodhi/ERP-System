import SectionCard from "../common/SectionCard";
import {
  UserPlus,
  GraduationCap,
  Megaphone,
  IndianRupee,
  Clock3,
} from "lucide-react";

const activities = [
  {
    title: "New Student Registered",
    description: "Rahul Sharma enrolled in IT Department",
    time: "5 min ago",
    icon: UserPlus,
    color: "text-blue-600",
  },
  {
    title: "Faculty Added",
    description: "Dr. Amit Kumar joined Computer Science",
    time: "20 min ago",
    icon: GraduationCap,
    color: "text-green-600",
  },
  {
    title: "Announcement Published",
    description: "Semester examination notice released",
    time: "1 hour ago",
    icon: Megaphone,
    color: "text-purple-600",
  },
  {
    title: "Fee Payment Received",
    description: "₹70,000 received from Student",
    time: "2 hours ago",
    icon: IndianRupee,
    color: "text-orange-600",
  },
];

const AdminRecentActivity = () => {
  return (
    <SectionCard
      title="Recent Activity"
      subtitle="Latest college activities"
      icon={Clock3}
    >
      <div className="space-y-5">

        {activities.map((item) => {

          const Icon = item.icon;

          return (

            <div
              key={item.title}
              className="flex gap-4"
            >

              <div
                className={`
                w-12
                h-12
                rounded-xl
                bg-slate-100
                flex
                items-center
                justify-center
                ${item.color}
                `}
              >
                <Icon size={22}/>
              </div>

              <div className="flex-1">

                <h4 className="font-semibold text-slate-800">
                  {item.title}
                </h4>

                <p className="text-sm text-slate-500 mt-1">
                  {item.description}
                </p>

                <p className="text-xs text-slate-400 mt-2">
                  {item.time}
                </p>

              </div>

            </div>

          );

        })}

      </div>
    </SectionCard>
  );
};

export default AdminRecentActivity;