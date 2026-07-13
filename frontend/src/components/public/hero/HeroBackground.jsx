const HeroBackground = () => {
  return (
    <>
      {/* Main Gradient */}

      <div
        className="
        absolute
        inset-0
        bg-gradient-to-br
        from-blue-50
        via-white
        to-indigo-50
        "
      />

      {/* Left Blur */}

      <div
        className="
        absolute
        -top-32
        -left-28
        w-[420px]
        h-[420px]
        rounded-full
        bg-blue-200/30
        blur-[120px]
        "
      />

      {/* Right Blur */}

      <div
        className="
        absolute
        top-20
        right-0
        w-[350px]
        h-[350px]
        rounded-full
        bg-indigo-200/25
        blur-[120px]
        "
      />

      {/* Bottom */}

      <div
        className="
        absolute
        bottom-0
        left-1/2
        -translate-x-1/2
        w-[650px]
        h-[250px]
        rounded-full
        bg-cyan-100/25
        blur-[140px]
        "
      />

      {/* Grid */}

      <div
        className="
        absolute
        inset-0
        opacity-[0.03]
        "
        style={{
          backgroundImage: `
            linear-gradient(#2563eb 1px, transparent 1px),
            linear-gradient(90deg,#2563eb 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
    </>
  );
};

export default HeroBackground;