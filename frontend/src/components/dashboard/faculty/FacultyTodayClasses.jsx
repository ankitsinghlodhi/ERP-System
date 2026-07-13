import SectionCard from "../common/SectionCard";
import { CalendarClock } from "lucide-react";

const lectures = [
  {
    time: "09:00 AM",
    subject: "Database Management",
    room: "Room 205",
    semester: "Sem 5",
    status: "Completed",
  },
  {
    time: "11:00 AM",
    subject: "Computer Networks",
    room: "Room 103",
    semester: "Sem 3",
    status: "Live",
  },
  {
    time: "02:00 PM",
    subject: "Artificial Intelligence",
    room: "Lab 2",
    semester: "Sem 7",
    status: "Upcoming",
  },
];

const badgeColor = {
  Completed: "bg-green-100 text-green-700",
  Live: "bg-blue-100 text-blue-700",
  Upcoming: "bg-orange-100 text-orange-700",
};

const FacultyTodayClasses = () => {
  return (
    <SectionCard
      title="Today's Classes"
      subtitle="Lecture schedule"
      icon={CalendarClock}
    >
      <div className="space-y-4">

        {lectures.map((lecture) => (

          <div
            key={lecture.time}
            className="flex justify-between items-center rounded-2xl border border-slate-100 p-4 hover:bg-slate-50 transition"
          >

            <div>

              <p className="font-semibold text-slate-800">
                {lecture.subject}
              </p>

              <p className="text-sm text-slate-500 mt-1">
                {lecture.time} • {lecture.room} • {lecture.semester}
              </p>

            </div>

            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold ${badgeColor[lecture.status]}`}
            >
              {lecture.status}
            </span>

          </div>

        ))}

      </div>
    </SectionCard>
  );
};

export default FacultyTodayClasses;