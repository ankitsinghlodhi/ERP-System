import attendance from "../../../assets/public/attendance.png";
import fees from "../../../assets/public/fees.png";
import students from "../../../assets/public/students.png";
import announcement from "../../../assets/public/announcement.png";
import messenger from "../../../assets/public/messenger.png";
import dashboard from "../../../assets/public/dashboard.png";

import {
  LayoutDashboard,
  ClipboardCheck,
  IndianRupee,
  Users,
  Megaphone,
  MessageCircle,
} from "lucide-react";

const featureData = [
  {
    id: "dashboard",

    title: "Admin Dashboard",

    short: "Everything at one place",

    description:
      "Monitor admissions, faculty, fees, departments, announcements and college performance from one intelligent dashboard.",

    image: dashboard,

    icon: LayoutDashboard,

    color: "blue",
  },

  {
    id: "attendance",

    title: "Attendance",

    short: "Real-time tracking",

    description:
      "Track attendance department-wise with detailed analytics, reports and daily summaries.",

    image: attendance,

    icon: ClipboardCheck,

    color: "green",
  },

  {
    id: "fees",

    title: "Fees",

    short: "Digital Payments",

    description:
      "Collect fees online, monitor pending payments and generate invoices with complete transparency.",

    image: fees,

    icon: IndianRupee,

    color: "orange",
  },

  {
    id: "students",

    title: "Students",

    short: "Complete Student Records",

    description:
      "Manage admissions, profiles, departments, academic records and student lifecycle from one place.",

    image: students,

    icon: Users,

    color: "purple",
  },

  {
    id: "announcement",

    title: "Announcements",

    short: "Campus Notifications",

    description:
      "Create announcements, target departments and instantly notify students and faculty.",

    image: announcement,

    icon: Megaphone,

    color: "pink",
  },

  {
    id: "messenger",

    title: "Messenger",

    short: "Instant Communication",

    description:
      "Enable secure communication between administrators, faculty and students through one platform.",

    image: messenger,

    icon: MessageCircle,

    color: "indigo",
  },
];

export default featureData;