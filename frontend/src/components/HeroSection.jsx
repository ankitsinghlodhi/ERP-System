const HeroSection = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

        {/* Left Content */}
        <div>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            Your Integrated Campus <br /> Management Solution
          </h1>

          <p className="mt-4 text-gray-600 text-lg max-w-xl">
            Manage academics, admissions, and campus activities with ease.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="/hero.png"
            alt="Campus Illustration"
            className="max-w-md w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
