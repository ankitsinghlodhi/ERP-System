import { useEffect, useState } from "react";

const PreviewWindow = ({ feature }) => {
  const [image, setImage] = useState(feature.image);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(false);

    const timer = setTimeout(() => {
      setImage(feature.image);
      setVisible(true);
    }, 180);

    return () => clearTimeout(timer);
  }, [feature]);

  return (
    <div
      className="
      relative
      rounded-[32px]
      bg-white
      border
      border-slate-200
      shadow-2xl
      overflow-hidden
      "
    >
      {/* Browser Top */}

      <div
        className="
        h-14
        border-b
        bg-white
        flex
        items-center
        justify-between
        px-5
        "
      >
        {/* Browser Buttons */}

        <div className="flex gap-2">

          <span className="w-3 h-3 rounded-full bg-red-400"></span>

          <span className="w-3 h-3 rounded-full bg-yellow-400"></span>

          <span className="w-3 h-3 rounded-full bg-green-400"></span>

        </div>

        {/* Address */}

        <div
          className="
          bg-slate-100
          rounded-full
          px-8
          py-2
          text-sm
          text-slate-500
          "
        >
          app.collegecube.in
        </div>

        <div className="w-14"></div>
      </div>

      {/* Screenshot */}

      <div className="relative bg-slate-50">

        <img
          src={image}
          alt={feature.title}
          className={`
            w-full
            transition-all
            duration-500
            ${
              visible
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95"
            }
          `}
        />

      </div>

      {/* Reflection */}

      <div
        className="
        absolute
        inset-0
        pointer-events-none
        bg-gradient-to-br
        from-white/20
        via-transparent
        to-transparent
        "
      />
    </div>
  );
};

export default PreviewWindow;