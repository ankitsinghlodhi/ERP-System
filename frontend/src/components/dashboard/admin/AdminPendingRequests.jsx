import {
  FileText,
  Wallet,
  CalendarClock,
  UserCheck,
} from "lucide-react";

import SectionCard from "../common/SectionCard";

const requests = [
  {
    title: "Student Applications",
    count: 8,
    icon: FileText,
  },
  {
    title: "Leave Requests",
    count: 4,
    icon: CalendarClock,
  },
  {
    title: "Fee Verification",
    count: 3,
    icon: Wallet,
  },
  {
    title: "New Admissions",
    count: 2,
    icon: UserCheck,
  },
];

const AdminPendingRequests = () => {
  return (
    <SectionCard
      title="Pending Requests"
      subtitle="Needs your attention"
    >
      <div className="space-y-4">

        {requests.map((item) => {

          const Icon = item.icon;

          return (

            <div
              key={item.title}
              className="
              flex
              justify-between
              items-center
              rounded-xl
              border
              border-slate-100
              p-4
              hover:bg-slate-50
              transition
              "
            >

              <div className="flex items-center gap-4">

                <Icon
                  size={22}
                  className="text-indigo-600"
                />

                <span className="font-medium">

                  {item.title}

                </span>

              </div>

              <span
                className="
                bg-red-500
                text-white
                rounded-full
                w-8
                h-8
                flex
                items-center
                justify-center
                text-sm
                "
              >

                {item.count}

              </span>

            </div>

          );

        })}

      </div>
    </SectionCard>
  );
};

export default AdminPendingRequests;