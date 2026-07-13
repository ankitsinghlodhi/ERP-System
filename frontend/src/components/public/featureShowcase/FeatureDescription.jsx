import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const featuresList = {
  dashboard: [
    "College Overview",
    "Analytics & Reports",
    "Quick Actions",
    "Department Insights",
  ],

  attendance: [
    "Real-time Attendance",
    "Department Reports",
    "Monthly Analytics",
    "Attendance History",
  ],

  fees: [
    "Online Payments",
    "Payment Tracking",
    "Invoices & Receipts",
    "Revenue Analytics",
  ],

  students: [
    "Student Profiles",
    "Admission Records",
    "Department Management",
    "Academic Details",
  ],

  announcement: [
    "Campus Notifications",
    "Scheduled Publishing",
    "Priority Notices",
    "Department Targeting",
  ],

  messenger: [
    "Instant Messaging",
    "Group Chats",
    "File Sharing",
    "Faculty Communication",
  ],
};

const FeatureDescription = ({ feature }) => {
  return (
    <div
      className="
      mt-12
      text-center
      max-w-4xl
      mx-auto
      "
    >
      <h2
        className="
        text-4xl
        font-bold
        text-slate-900
        "
      >
        {feature.title}
      </h2>

      <p
        className="
        mt-5
        text-lg
        leading-8
        text-slate-600
        "
      >
        {feature.description}
      </p>

      {/* Features */}

      <div
        className="
        mt-10
        grid
        sm:grid-cols-2
        lg:grid-cols-4
        gap-5
        "
      >
        {featuresList[feature.id].map((item) => (
          <div
            key={item}
            className="
            rounded-2xl
            border
            border-slate-200
            bg-white
            p-5
            shadow-sm
            hover:shadow-lg
            hover:-translate-y-1
            transition-all
            duration-300
            "
          >
            <CheckCircle2
              size={24}
              className="mx-auto text-blue-600"
            />

            <p
              className="
              mt-4
              font-medium
              text-slate-700
              "
            >
              {item}
            </p>
          </div>
        ))}
      </div>

      {/* CTA */}

      <button
        className="
        mt-12
        inline-flex
        items-center
        gap-3
        rounded-full
        bg-gradient-to-r
        from-blue-600
        to-indigo-600
        px-8
        py-4
        text-white
        font-semibold
        shadow-xl
        hover:scale-105
        transition-all
        duration-300
        "
      >
        Explore Module

        <ArrowRight size={20} />
      </button>
    </div>
  );
};

export default FeatureDescription;