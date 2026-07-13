import {
  BookOpen,
  ClipboardCheck,
  IndianRupee,
  GraduationCap,
  Briefcase,
  ClipboardList,
  CalendarDays,
  Users,
} from "lucide-react";

const moduleData = {
  admin: [
    {
      title: "Admissions",
      subtitle: "Online Registration",
      icon: GraduationCap,
      className: "top-20 -left-6",
    },
    {
      title: "Placements",
      subtitle: "Campus Drives",
      icon: ClipboardCheck,
      className: "top-48 -left-16",
    },
    {
      title: "Fees",
      subtitle: "Online Payments",
      icon: IndianRupee,
      className: "bottom-8 -left-10",
    },
    {
      title: "Academics",
      subtitle: "Courses & Results",
      icon: BookOpen,
      className: "top-72 -right-10",
    },
    {
      title: "Attendance",
      subtitle: "Real-time Tracking",
      icon: Briefcase,
      className: "bottom-2 -right-10",
    },
  ],

  faculty: [
    {
      title: "Today's Classes",
      subtitle: "Lecture Schedule",
      icon: CalendarDays,
      className: "top-6 -left-12",
    },
    {
      title: "Attendance",
      subtitle: "Mark Attendance",
      icon: ClipboardCheck,
      className: "top-40 -left-20",
    },
    {
      title: "Students",
      subtitle: "Performance",
      icon: Users,
      className: "bottom-10 -left-8",
    },
    {
      title: "Assignments",
      subtitle: "Create & Review",
      icon: ClipboardList,
      className: "top-14 -right-12",
    },
    {
      title: "Exams",
      subtitle: "Marks Upload",
      icon: BookOpen,
      className: "bottom-16 -right-16",
    },
  ],

  student: [
    {
      title: "Attendance",
      subtitle: "92% Present",
      icon: ClipboardCheck,
      className: "top-30 -left-10",
    },
    {
      title: "Fees",
      subtitle: "Paid",
      icon: IndianRupee,
      className: "top-56 -left-14",
    },
    {
      title: "Assignments",
      subtitle: "3 Pending",
      icon: ClipboardList,
      className: "bottom-10 -left-6",
    },
    {
      title: "Placements",
      subtitle: "New Drives",
      icon: Briefcase,
      className: "top-32 -right-16",
    },
    {
      title: "Results",
      subtitle: "Latest Semester",
      icon: BookOpen,
      className: "bottom-2 -right-8",
    },
  ],
};

export default moduleData;