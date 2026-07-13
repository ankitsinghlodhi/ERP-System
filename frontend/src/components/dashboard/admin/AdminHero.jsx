import DashboardHero from "../common/DashboardHero";

const AdminHero = () => {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <DashboardHero
      title="Welcome Back, Admin 👋"
      subtitle="Monitor your college, students and faculty from one place."
      department="College Administration"
      date={today}
      quote="A well-managed college creates better opportunities for every student."
      gradient="from-slate-700 via-slate-800 to-indigo-900"
    />
  );
};

export default AdminHero;