import SectionCard from "../common/SectionCard";
import {
  TrendingUp,
  Users,
  GraduationCap,
  Wallet,
} from "lucide-react";

const stats = [
  {
    label: "Attendance Rate",
    value: "91%",
    icon: TrendingUp,
    color: "text-green-600",
  },
  {
    label: "Student Strength",
    value: "1268",
    icon: Users,
    color: "text-blue-600",
  },
  {
    label: "Faculty Strength",
    value: "84",
    icon: GraduationCap,
    color: "text-purple-600",
  },
  {
    label: "Fee Collection",
    value: "94%",
    icon: Wallet,
    color: "text-orange-600",
  },
];

const AdminCollegeInsights = () => {
  return (
    <SectionCard
      title="College Insights"
      subtitle="Overall performance"
    >
      <div className="grid grid-cols-2 gap-5">

        {stats.map((item) => {

          const Icon = item.icon;

          return (

            <div
              key={item.label}
              className="rounded-2xl bg-slate-50 p-5"
            >

              <Icon
                className={item.color}
                size={28}
              />

              <h2 className="mt-4 text-3xl font-bold">
                {item.value}
              </h2>

              <p className="mt-1 text-slate-500 text-sm">
                {item.label}
              </p>

            </div>

          );

        })}

      </div>
    </SectionCard>
  );
};

export default AdminCollegeInsights;