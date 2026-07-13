import {
  GraduationCap,
  Users,
  Building2,
  BookOpen,
} from "lucide-react";

const statsData = [
  {
    id: 1,
    title: "Institutions",
    value: 20,
    suffix: "+",
    icon: Building2,
    color: "blue",
    description: "Schools & Colleges",
  },

  {
    id: 2,
    title: "Students",
    value: 5000,
    suffix: "+",
    icon: GraduationCap,
    color: "green",
    description: "Managed Efficiently",
  },

  {
    id: 3,
    title: "Faculty",
    value: 100,
    suffix: "+",
    icon: Users,
    color: "purple",
    description: "Teaching Staff",
  },

  {
    id: 4,
    title: "Departments",
    value: 50,
    suffix: "+",
    icon: BookOpen,
    color: "orange",
    description: "Academic Units",
  },
];

export default statsData;