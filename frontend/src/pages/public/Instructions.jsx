import React from "react";
import {
  ShieldCheck,
  Users,
  GraduationCap,
  UserCog,
  Bot,
  MessageSquare,
  BadgeInfo,
  CheckCircle2,
} from "lucide-react";

import Navbar from "../../components/navbar/PublicNavbar";


const roleCards = [
  {
    title: "Administrator",
    icon: <UserCog className="text-blue-600" size={28} />,
    points: [
      "Create faculty accounts",
      "Create student accounts",
      "Manage departments",
      "Monitor fee records",
      "Publish announcements",
      "Manage institution data",
    ],
  },
  {
    title: "Faculty",
    icon: <GraduationCap className="text-green-600" size={28} />,
    points: [
      "Mark attendance",
      "Upload notes",
      "View attendance history",
      "Use AI Assistant",
      "Receive announcements",
      "Communicate with students",
    ],
  },
  {
    title: "Student",
    icon: <Users className="text-purple-600" size={28} />,
    points: [
      "View attendance",
      "Track fee status",
      "Access study notes",
      "Apply for requests",
      "Use AI Assistant",
      "Chat with faculty",
    ],
  },
];

export default function Instructions() {
  return (
    <div className="bg-slate-50 min-h-screen">

        <Navbar />

      {/* Hero */}
     

      {/* Getting Started */}
      <section className="max-w-6xl mx-auto px-6 ">

        <div className="mt-8 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6 text-center shadow-lg">

          <h2 className="text-3xl font-bold">
            Welcome to CollegeCube
          </h2>

          <p className="mt-4 max-w-3xl mx-auto leading-8 text-blue-100">
            This guide explains how the platform works, who can create accounts, 
            and how administrators, faculty members, and students use different features.
          </p>

        </div>
<br /><br />

        <div className="rounded-3xl border border-blue-200 bg-blue-50 p-10">

          <div className="flex items-center gap-3 mb-6">
            <ShieldCheck className="text-blue-600" size={32} />

            <h2 className="text-3xl font-bold text-slate-900">
              Getting Started
            </h2>
          </div>

          <div className="space-y-6 text-slate-700 leading-8">

            <div className="rounded-xl bg-white border border-blue-200 p-6">
              <p className="font-semibold text-blue-700">
                Important
              </p>

              <p className="mt-2">
                Only <strong>College Administrators</strong> can register
                using the Sign Up page. Each administrator account
                represents one educational institution.
              </p>
            </div>

            <div className="space-y-4">

              <div className="flex gap-4">
                <CheckCircle2 className="text-green-600 mt-1 shrink-0" size={20} />
                <p>
                  Create an administrator account to register your
                  college on CollegeCube.
                </p>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="text-green-600 mt-1 shrink-0" size={20} />
                <p>
                  After signing in, the administrator can create
                  departments, faculty accounts, and student accounts.
                </p>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="text-green-600 mt-1 shrink-0" size={20} />
                <p>
                  Students and faculty members do not register
                  themselves. Their login credentials are created
                  by the college administrator.
                </p>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="text-green-600 mt-1 shrink-0" size={20} />
                <p>
                  After logging in, every user automatically sees
                  the dashboard and features based on their assigned
                  role.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

            {/* Platform Roles */}
      <section className="max-w-6xl mx-auto px-6 pb-16">

        <div className="mb-10">

          <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700">
            <Users size={16} />
            Platform Roles
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Role-Based Access
          </h2>

          <p className="mt-3 max-w-3xl text-slate-600 leading-8">
            CollegeCube provides different dashboards and permissions
            for every type of user. Each role has access only to the
            features required for its responsibilities, ensuring a
            secure and organized experience.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-3">

          {roleCards.map((role) => (

            <div
              key={role.title}
              className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 hover:shadow-lg transition-all duration-300"
            >

              <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center mb-6">
                {role.icon}
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-5">
                {role.title}
              </h3>

              <ul className="space-y-4">

                {role.points.map((point) => (

                  <li
                    key={point}
                    className="flex items-start gap-3 text-slate-600"
                  >
                    <CheckCircle2
                      size={18}
                      className="text-green-600 mt-1 shrink-0"
                    />

                    <span>{point}</span>

                  </li>

                ))}

              </ul>

            </div>

          ))}

        </div>

      </section>


            {/* Platform Highlights */}
      <section className="max-w-6xl mx-auto px-6 pb-16">

        <div className="mb-10">

          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
            <Bot size={16} />
            Platform Highlights
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Powerful Tools for Everyday Tasks
          </h2>

          <p className="mt-3 max-w-3xl text-slate-600 leading-8">
            CollegeCube provides several built-in tools that simplify
            communication, academic management, and day-to-day activities
            across your institution.
          </p>

        </div>

        <div className="grid gap-8">

          {/* AI Assistant */}

          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8">

            <div className="flex items-center gap-4 mb-6">

              <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">
                <Bot className="text-blue-600" size={28} />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900">
                  AI Assistant
                </h3>

                <p className="text-slate-500">
                  Instant help whenever you need it.
                </p>
              </div>

            </div>

            <p className="text-slate-600 leading-8">
              CollegeCube includes an integrated AI Assistant to help users
              understand platform features, navigate dashboards, answer
              common questions, and provide quick guidance. Instead of
              searching through menus, users can simply ask the assistant
              for help.
            </p>

          </div>

          {/* Messenger */}

          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8">

            <div className="flex items-center gap-4 mb-6">

              <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center">
                <MessageSquare className="text-green-600" size={28} />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Messenger
                </h3>

                <p className="text-slate-500">
                  Secure communication within your college.
                </p>
              </div>

            </div>

            <p className="text-slate-600 leading-8">
              The built-in Messenger enables students and faculty members
              to communicate directly without relying on external messaging
              applications. Conversations remain organized and accessible
              only within the same institution.
            </p>

          </div>

          {/* Attendance & Fee Dashboard */}

          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8">

            <div className="flex items-center gap-4 mb-6">

              <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center">
                <GraduationCap className="text-purple-600" size={28} />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Attendance & Fee Dashboard
                </h3>

                <p className="text-slate-500">
                  Monitor important academic information at a glance.
                </p>
              </div>

            </div>

            <p className="text-slate-600 leading-8 mb-6">
              Every user receives a personalized dashboard based on their
              assigned role. Students can quickly monitor attendance,
              fee status, announcements, and academic updates, while
              faculty members and administrators receive tools relevant
              to their daily responsibilities.
            </p>

            <div className="grid md:grid-cols-2 gap-5">

              <div className="rounded-xl bg-slate-50 border border-slate-200 p-5">
                <h4 className="font-semibold text-slate-900 mb-3">
                  Student Dashboard
                </h4>

                <ul className="space-y-2 text-slate-600">
                  <li>• Attendance Overview</li>
                  <li>• Fee Status</li>
                  <li>• Recent Announcements</li>
                  <li>• Notes & Resources</li>
                  <li>• Upcoming Events</li>
                </ul>
              </div>

              <div className="rounded-xl bg-slate-50 border border-slate-200 p-5">
                <h4 className="font-semibold text-slate-900 mb-3">
                  Faculty & Admin Dashboard
                </h4>

                <ul className="space-y-2 text-slate-600">
                  <li>• Attendance Management</li>
                  <li>• User & Department Management</li>
                  <li>• Fee Administration</li>
                  <li>• Announcements</li>
                  <li>• Institution Overview</li>
                </ul>
              </div>

            </div>

          </div>

        </div>

      </section>


            {/* Important Notes */}
      <section className="max-w-6xl mx-auto px-6 pb-20">

        <div className="mb-10">

          <span className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-700">
            <BadgeInfo size={16} />
            Important Notes
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Before You Start
          </h2>

          <p className="mt-3 max-w-3xl text-slate-600 leading-8">
            Please keep the following information in mind while using
            CollegeCube. These guidelines help ensure secure access and a
            smooth experience for everyone.
          </p>

        </div>

        <div className="rounded-3xl border border-amber-200 bg-amber-50 p-8">

          <div className="flex items-center gap-3 mb-6">
            <ShieldCheck className="text-amber-600" size={30} />

            <h3 className="text-2xl font-bold text-slate-900">
              Platform Guidelines
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="space-y-4">

              <div className="flex gap-3">
                <CheckCircle2 className="text-green-600 mt-1 shrink-0" size={18} />
                <p className="text-slate-700">
                  Each administrator manages only their own college.
                </p>
              </div>

              <div className="flex gap-3">
                <CheckCircle2 className="text-green-600 mt-1 shrink-0" size={18} />
                <p className="text-slate-700">
                  Student and faculty accounts are created only by the
                  college administrator.
                </p>
              </div>

              <div className="flex gap-3">
                <CheckCircle2 className="text-green-600 mt-1 shrink-0" size={18} />
                <p className="text-slate-700">
                  Every user has access only to the features assigned
                  to their role.
                </p>
              </div>

            </div>

            <div className="space-y-4">

              <div className="flex gap-3">
                <CheckCircle2 className="text-green-600 mt-1 shrink-0" size={18} />
                <p className="text-slate-700">
                  Data from different colleges is completely isolated
                  and securely managed.
                </p>
              </div>

              <div className="flex gap-3">
                <CheckCircle2 className="text-green-600 mt-1 shrink-0" size={18} />
                <p className="text-slate-700">
                  Never share your login credentials with anyone.
                </p>
              </div>

              <div className="flex gap-3">
                <CheckCircle2 className="text-green-600 mt-1 shrink-0" size={18} />
                <p className="text-slate-700">
                  Contact your college administrator if you experience
                  any login or account-related issues.
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* Closing Card */}

        
      </section>

    </div>
  );
}