const FeatureCard = ({ title, icon }) => (
  <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm">
    <div className="text-3xl text-blue-600">{icon}</div>
    <h3 className="mt-3 text-lg font-semibold text-gray-700">
      {title}
    </h3>
  </div>
);

const Features = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard title="Academics" icon="📘" />
        <FeatureCard title="Events" icon="📅" />
        <FeatureCard title="Admissions" icon="🎓" />
      </div>
    </section>
  );
};

export default Features;
