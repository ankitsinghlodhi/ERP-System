// export const dashboardConfig = {
//   ADMIN: {
//     showStats: true,
//     stats: [
//       { icon: "👥", value: "students", label: "Students" },
//       { icon: "✉️", value: "faculty", label: "Faculty" },
//       { icon: "💼", value: "courses", label: "Courses" },
//     ],
//     modules: [
//       {
//         title: "Attendance",
//         description: "Manage student attendance records.",
//         image: "attendance.png",
//         buttonText: "Manage Attendance",
//         path: "/admin/attendance",
//       },
//       {
//         title: "Fees",
//         description: "Track and manage student fees.",
//         image: "fees.png",
//         buttonText: "Manage Fees",
//         path: "/admin/fees",
//       },
//       {
//         title: "Students",
//         description: "Oversee and manage student records ",
//         image: "student.png",
//         buttonText: "Manage Students",
//         path: "/admin/student",
//       },
//       {
//         title: "Faculty",
//         description: "Oversee and manage Faculty records ",
//         image: "faculty.png",
//         buttonText: "Manage Faculty",
//         path: "/admin/faculty",
//       },

//       {
//         title: "Events",
//         description: "Manage college events.",
//         image: "events.png",
//         buttonText: "Manage Events",
//         path: "/events",
//       },
//       {
//         title: "Announcement",
//         description: " create and manage Announcements.",
//         image: "announcement.png",
//         buttonText: "Open Announcement",
//         path: "/announcement",
//       },
//       {
//         title: "Letters & Application",
//         description: "Oversee applications requests ",
//         image: "application.png",
//         buttonText: "Manage Applications",
//         path: "/admin/application",
//       },
//     ],
//   },

//   FACULTY: {
//     showStats: false,
//     modules: [
//       {
//         title: "Attendance",
//         description: "Mark and view attendance .",
//         image: "attendance.png",
//         buttonText: "Open Attendance",
//         path: "/faculty/attendance/*",
//       },
//       {
//         title: "Notes",
//         description: "Upload and manage study notes.",
//         image: "notes.png",
//         buttonText: "Manage Notes",
//         path: "/faculty/notes",
//       },
//       {
//         title: "Assignments",
//         description: "Create and review assignments.",
//         image: "assignments.png",
//         buttonText: "View Assignments",
//         path: "/faculty/assignments",
//       },
//       {
//         title: "Events",
//         description: "Manage college events.",
//         image: "events.png",
//         buttonText: "Manage Events",
//         path: "/events",
//       },
//       {
//         title: "Exams",
//         description: "Manage class tests and exams.",
//         image: "exams.png",
//         buttonText: "Manage Exams",
//         path: "/faculty/exams",
//       },
//       {
//         title: "Announcement",
//         description: " create and manage Announcements.",
//         image: "announcement.png",
//         buttonText: "Open Announcement",
//         path: "/announcement",
//       },
//       {
//         title: "Notifications",
//         description: "View important notifications.",
//         image: "notifications.png",
//         buttonText: "View Notifications",
//         path: "/faculty/notifications",
//       },
//        {
//         title: "Messenger",
//         description: " send and read messages.",
//         image: "messenger.png",
//         buttonText: "open messenger",
//         path: "/messenger",
//       },
//       {
//         title: "Letters & Application",
//         description: "Oversee Applications requests ",
//         image: "application.png",
//         buttonText: "Manage Applications",
//         path: "/faculty/application",
//       },
//     ],
//   },

//   STUDENT: {
//     showStats: false,
//     modules: [
//       {
//         title: "Attendance",
//         description: "View your attendance records.",
//         image: "attendance.png",
//         buttonText: "View Attendance",
//         path: "/student/attendance",
//       },
     
//       {
//         title: "Fees",
//         description: "View and pay your fees.",
//         image: "fees.png",
//         buttonText: "View Fees",
//         path: "/student/fees",
//       },
     
//       {
//         title: "Online Test",
//         description: "access and complete class test.",
//         image: "class-test.png",
//         buttonText: "Quiz",
//         path: "/student/class-test",
//       },
//        {
//         title: "Assignments",
//         description: "Access and Submit assignments.",
//         image: "assignments.png",
//         buttonText: "View Assignments",
//         path: "/student/assignments",
//       },
//        {
//         title: "Notes",
//         description: "Access subject-wise notes.",
//         image: "notes.png",
//         buttonText: "View Notes",
//         path: "/student/notes",
//       },
//       {
//         title: "Events",
//         description: "view college events.",
//         image: "events.png",
//         buttonText: "view Events",
//         path: "/events",
//       },
       
//       {
//         title: "Announcement",
//         description: " create and manage Announcements.",
//         image: "announcement.png",
//         buttonText: "Open Announcement",
//         path: "/announcement",
//       },
//       {
//         title: "Letters & Application",
//         description: "Send Applications/Letters ",
//         image: "application.png",
//         buttonText: " Applications",
//         path: "/student/application",
//       },
//       {
//         title: "Time Table",
//         description: "Check exams schedule.",
//         image: "timeTable.png",
//         buttonText: "View Time Table",
//         path: "/student/time-table",
//       },
//       {
//         title: "Messenger",
//         description: " send and read messages.",
//         image: "messenger.png",
//         buttonText: "open messenger",
//         path: "/messenger",
//       },
//     ],
//   },
// };










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
} from "lucide-react";





export const dashboardConfig = {
  ADMIN: {
    showStats: true,
    stats: [
      { icon: "👥", value: "students", label: "Students" },
      { icon: "✉️", value: "faculty", label: "Faculty" },
      { icon: "💼", value: "courses", label: "Courses" },
    ],
    modules: [
      {
        title: "Attendance",
        description: "Manage student attendance records.",
        image: "attendance.png",
        buttonText: "Manage Attendance",
        path: "/admin/attendance",
      },
      {
        title: "Fees",
        description: "Track and manage student fees.",
        image: "fees.png",
        buttonText: "Manage Fees",
        path: "/admin/fees",
      },
      {
        title: "Students",
        description: "Oversee and manage student records ",
        image: "student.png",
        buttonText: "Manage Students",
        path: "/admin/student",
      },
      {
        title: "Faculty",
        description: "Oversee and manage Faculty records ",
        image: "faculty.png",
        buttonText: "Manage Faculty",
        path: "/admin/faculty",
      },

      {
        title: "Events",
        description: "Manage college events.",
        image: "events.png",
        buttonText: "Manage Events",
        path: "/events",
      },
      {
        title: "Announcement",
        description: " create and manage Announcements.",
        image: "announcement.png",
        buttonText: "Open Announcement",
        path: "/announcement",
      },
      {
        title: "Letters & Application",
        description: "Oversee applications requests ",
        image: "application.png",
        buttonText: "Manage Applications",
        path: "/admin/application",
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

