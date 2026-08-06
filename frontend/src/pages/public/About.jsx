import React from "react";
import {
  ShieldCheck,
  Users,
  LayoutDashboard,
  MessageSquare,
  Atom,
  Palette,
  Server,
  Boxes,
  Database,
  Radio,
  KeyRound,
  Cloud,
  CreditCard,
  Sparkles,
  Code2,
  Mail,
  Github,
  Linkedin,
  Globe,
  ArrowUpRight,
} from "lucide-react";

import Navbar from "../../components/navbar/PublicNavbar";

const techStack = [
  { name: "React", icon: Atom, color: "text-blue-600 bg-blue-50" },
  { name: "Tailwind CSS", icon: Palette, color: "text-cyan-600 bg-cyan-50" },
  { name: "Node.js", icon: Server, color: "text-green-600 bg-green-50" },
  { name: "Express.js", icon: Boxes, color: "text-slate-700 bg-slate-100" },
  { name: "MongoDB", icon: Database, color: "text-emerald-600 bg-emerald-50" },
  { name: "Socket.io", icon: Radio, color: "text-purple-600 bg-purple-50" },
  { name: "JWT", icon: KeyRound, color: "text-amber-600 bg-amber-50" },
  { name: "Cloudinary", icon: Cloud, color: "text-sky-600 bg-sky-50" },
  { name: "Razorpay", icon: CreditCard, color: "text-indigo-600 bg-indigo-50" },
];

const features = [
  {
    icon: ShieldCheck,
    title: "Secure Authentication",
    description:
      "JWT-based authentication with role-based authorization for Admin, Faculty and Students.",
  },
  {
    icon: Users,
    title: "Role Based Access",
    description:
      "Different dashboards and permissions ensure every user sees only what they need.",
  },
  {
    icon: LayoutDashboard,
    title: "Modern ERP Dashboard",
    description:
      "Interactive dashboards to manage attendance, academics, notices, fees and more.",
  },
  {
    icon: MessageSquare,
    title: "Real-Time Communication",
    description:
      "Built-in messaging and announcements keep everyone connected instantly.",
  },
];

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "ankitsinghlodhi01@gmail.com",
    href: "mailto:ankitsinghlodhi01@gmail.com",
    color: "text-red-600 bg-red-50",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Ankitsinghlodhi",
    href: "https://github.com/Ankitsinghlodhi",
    color: "text-slate-800 bg-slate-100",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "ankit-singh-lodhi",
    href: "https://www.linkedin.com/in/ankit-singh-lodhi-0906b0290",
    color: "text-blue-600 bg-blue-50",
  },
  {
    icon: Globe,
    label: "Portfolio",
    value: "View live portfolio",
    href: "https://ankit-singh-portfolio-three-xi-52.vercel.app",
    color: "text-indigo-600 bg-indigo-50",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-white border-b">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />
        <div className="absolute -top-32 -left-20 w-[420px] h-[420px] rounded-full bg-blue-200/30 blur-[120px]" />
        <div className="absolute top-10 -right-20 w-[350px] h-[350px] rounded-full bg-indigo-200/25 blur-[120px]" />

        <div className="relative max-w-6xl mx-auto px-6 py-12 text-center">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-100 bg-blue-50 text-blue-700 text-sm font-semibold">
            <Sparkles size={16} />
            Modern College ERP Platform
          </div>

          <h2 className="mt-8 text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
              CollegeCube
            </span>
          </h2>

          <p className="mt-8 text-lg text-slate-600 max-w-3xl mx-auto leading-8">
            CollegeCube is a modern ERP platform designed to simplify and
            digitalize everyday college operations. It provides a centralized
            system where students, faculty members, and administrators can
            manage academic activities, communication, attendance, courses,
            assignments, notices, and much more through a single platform.
          </p>

          {/* <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg mx-auto">
            <div>
              <p className="text-3xl font-extrabold text-slate-900">3</p>
              <p className="text-sm text-slate-500 mt-1">User Roles</p>
            </div>
            <div className="border-x border-slate-200">
              <p className="text-3xl font-extrabold text-slate-900">9+</p>
              <p className="text-sm text-slate-500 mt-1">Technologies</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-slate-900">100%</p>
              <p className="text-sm text-slate-500 mt-1">Cloud Based</p>
            </div>
          </div> */}

        </div>
      </section>

      <br />
      <br />

      

      {/* Developer */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="relative overflow-hidden bg-white rounded-3xl shadow-sm border border-slate-200 p-10">

          <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-blue-50" />
           <div className="mb-8">
    <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
      <Code2 size={16} />
      Developed By
    </span>
    </div>

          <div className="relative flex flex-col md:flex-row gap-8 items-start">

            <div className="shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white text-2xl font-extrabold shadow-lg">
              AS
            </div>

            <div>
              <div className="flex items-center gap-3 flex-wrap">
                <h2 className="text-3xl font-bold text-slate-900">
                  Ankit Singh Lodhi
                </h2>
                <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold flex items-center gap-1.5">
                  {/* <Code2 size={14} /> */}
                  Full Stack Developer
                </span>
              </div>

              <div className="mt-6 space-y-5 text-slate-600 leading-8">
               
                <p>
                  <span className="font-semibold text-slate-800">
                    Ankit Singh Lodhi
                  </span>{" "}
                  is a Full Stack MERN Developer passionate about building
                  scalable web applications that solve real-world problems.
                </p>

                <p>
                  CollegeCube is being developed as a complete ERP solution
                  using modern web technologies with a strong focus on clean
                  architecture, security, performance, and user experience.
                </p>

                <p>
                  The goal of this project is to provide colleges with a
                  reliable and centralized platform that simplifies academic
                  management while giving students and faculty an intuitive
                  digital experience.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-10">

          <div className="flex items-center gap-3 mb-8">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-md">
              <Boxes className="text-white" size={20} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Tech Stack
              </h2>
              <p className="text-sm text-slate-500">
                Technologies powering CollegeCube
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {techStack.map((tech) => {
              const Icon = tech.icon;
              return (
                <div
                  key={tech.name}
                  className="group flex flex-col items-center text-center gap-3 rounded-2xl border border-slate-200 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${tech.color} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon size={22} />
                  </div>
                  <span className="text-sm font-semibold text-slate-700">
                    {tech.name}
                  </span>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Contact */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl shadow-xl p-10 text-white">

          <h2 className="text-2xl font-bold mb-1">Get In Touch</h2>
          <p className="text-blue-100 mb-8">
            Reach out for collaboration, feedback, or opportunities.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {contactLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-2xl border border-white/20 px-5 py-4 transition"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${item.color}`}>
                      <Icon size={20} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-blue-100">{item.label}</p>
                      <p className="font-medium truncate">{item.value}</p>
                    </div>
                  </div>

                  <ArrowUpRight
                    size={18}
                    className="shrink-0 text-blue-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </a>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}