
import {
  CalendarCheck2,
  IndianRupee,
  ClipboardList,
  BookOpen,
  FileText,
  MessageSquare,
  Bell,
  CalendarDays,
  Megaphone,
  Calendar,
  Users,
  GraduationCap,
  FileSignature,
  NotebookPen,
  School,
  Building2,
} from "lucide-react";





export const dashboardConfig = {
  ADMIN: {
    showStats: true,
    quickActions: [
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
      color: "bg-yellow-500",
     
    },
],
  },

  FACULTY: {
  showStats: false,

  quickActions: [
    {
      title: "Attendance",
      description: "Mark and manage attendance",
      icon: CalendarCheck2,
      color: "blue",
      badge: 2,
      path: "/faculty/attendance",
    },

    {
      title: "Notes",
      description: "Upload study material",
      icon: NotebookPen,
      color: "green",
      badge: 0,
      path: "/faculty/notes",
    },

    {
      title: "Assignments",
      description: "Review submissions",
      icon: ClipboardList,
      color: "orange",
      badge: 6,
      path: "/faculty/assignments",
    },

    {
      title: "Exams",
      description: "Manage examinations",
      icon: GraduationCap,
      color: "purple",
      badge: 0,
      path: "/faculty/exams",
    },

    {
      title: "Events",
      description: "College events",
      icon: CalendarDays,
      color: "cyan",
      badge: 1,
      path: "/events",
    },

    {
      title: "Announcements",
      description: "Publish announcements",
      icon: Megaphone,
      color: "red",
      badge: 0,
      path: "/announcement",
    },

    {
      title: "Notifications",
      description: "Latest updates",
      icon: Bell,
      color: "yellow",
      badge: 4,
      path: "/faculty/notifications",
    },

    {
      title: "Messenger",
      description: "Messages & chats",
      icon: MessageSquare,
      color: "pink",
      badge: 3,
      path: "/messenger",
    },

    {
      title: "Applications",
      description: "Student requests",
      icon: FileSignature,
      color: "indigo",
      badge: 5,
      path: "/faculty/application",
    },
  ],
},

  STUDENT: {
    showStats: false,
    quickActions: [
  {
    title: "Attendance",
    description: "View attendance records",
    icon: CalendarCheck2,
    color: "blue",
    badge: 0,
    path: "/student/attendance",
  },

  {
    title: "Fees",
    description: "Pay semester fees",
    icon: IndianRupee,
    color: "green",
    badge: 0,
    path: "/student/fees",
  },

  {
    title: "Assignments",
    description: "Pending submissions",
    icon: ClipboardList,
    color: "orange",
    badge: 2,
    path: "/student/assignments",
  },

  {
    title: "Online Test",
    description: "Attempt quizzes",
    icon: BookOpen,
    color: "purple",
    badge: 1,
    path: "/student/class-test",
  },

  {
    title: "Notes",
    description: "Study material",
    icon: FileText,
    color: "cyan",
    badge: 0,
    path: "/student/notes",
  },

  {
    title: "Messenger",
    description: "Chat with faculty",
    icon: MessageSquare,
    color: "pink",
    badge: 3,
    path: "/messenger",
  },

  {
    title: "Notifications",
    description: "Latest updates",
    icon: Bell,
    color: "yellow",
    badge: 5,
    path: "/student/notifications",
  },

  {
    title: "Announcements",
    description: "College announcements",
    icon: Megaphone,
    color: "red",
    badge: 1,
    path: "/announcement",
  },

  {
    title: "Applications",
    description: "Letters & requests",
    icon: FileSignature,
    color: "indigo",
    badge: 0,
    path: "/student/application",
  },

  {
    title: "Timetable",
    description: "Class schedule",
    icon: Calendar,
    color: "slate",
    badge: 0,
    path: "/student/time-table",
  },

  {
    title: "Events",
    description: "College events",
    icon: CalendarDays,
    color: "emerald",
    badge: 2,
    path: "/events",
  },
],
  },
};

