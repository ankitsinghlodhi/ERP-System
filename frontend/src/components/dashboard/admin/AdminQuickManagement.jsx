import {
  Users,
  GraduationCap,
  Building2,
  IndianRupee,
  BookOpen,
  Megaphone,
  FileSignature,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import SectionCard from "../common/SectionCard";

const actions = [
  {
    title: "Students",
    path: "/admin/student",
    icon: Users,
    color: "bg-blue-500",
  },
  {
    title: "Faculty",
    path: "/admin/faculty",
    icon: GraduationCap,
    color: "bg-green-500",
  },
  {
    title: "Departments",
    path: "/admin/departments",
    icon: Building2,
    color: "bg-purple-500",
  },
  {
    title: "Fees",
    path: "/admin/fees",
    icon: IndianRupee,
    color: "bg-orange-500",
  },
  {
    title: "Courses",
    path: "/admin/course",
    icon: BookOpen,
    color: "bg-pink-500",
  },
  {
    title: "Announcements",
    path: "/announcement",
    icon: Megaphone,
    color: "bg-red-500",
  },
  {
      title: "Applications",
       path: "/admin/application",
      icon: FileSignature,
      color: "indigo",
     
    },
];

const AdminQuickManagement = () => {
  const navigate = useNavigate();

  return (
    <SectionCard
      title="Quick Management"
      subtitle="Frequently used modules"
    >
      <div className="grid grid-cols-2 gap-4">

        {actions.map((item) => {

          const Icon = item.icon;

          return (

            <button
              key={item.title}
              onClick={() => navigate(item.path)}
              className="
              flex
              items-center
              gap-4
              rounded-2xl
              border
              border-slate-200
              hover:border-blue-400
              hover:shadow-lg
              transition-all
              p-4
              "
            >

              <div
                className={`
                w-12
                h-12
                rounded-xl
                ${item.color}
                flex
                items-center
                justify-center
                text-white
                `}
              >

                <Icon size={22}/>

              </div>

              <span className="font-semibold">

                {item.title}

              </span>

            </button>

          );

        })}

      </div>
    </SectionCard>
  );
};

export default AdminQuickManagement;