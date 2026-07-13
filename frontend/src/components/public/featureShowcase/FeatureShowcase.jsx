import { useState } from "react";

import featureData from "./featureData";
import FeatureTabs from "./FeatureTabs";
import PreviewWindow from "./PreviewWindow";
import FeatureDescription from "./FeatureDescription";

const FeatureShowcase = () => {
  const [activeFeature, setActiveFeature] =
    useState(featureData[0]);

  return (
    <section
      className="
      relative
      overflow-hidden
      py-32
      bg-gradient-to-b
      from-white
      via-slate-50/40
      to-white
      "
    >
      {/* Background Blur */}

      <div
        className="
        absolute
        -left-40
        top-20
        h-96
        w-96
        rounded-full
        bg-blue-100/40
        blur-[140px]
        "
      />

      <div
        className="
        absolute
        right-0
        bottom-0
        h-[420px]
        w-[420px]
        rounded-full
        bg-indigo-100/40
        blur-[160px]
        "
      />

      <div
        className="
        relative
        max-w-7xl
        mx-auto
        px-6
        lg:px-8
        "
      >
        {/* Heading */}

        <div className="text-center">

          <span
            className="
            inline-flex
            rounded-full
            border
            border-blue-200
            bg-blue-50
            px-5
            py-2
            text-sm
            font-semibold
            text-blue-600
            "
          >
            Product Showcase
          </span>

          <h2
            className="
            mt-6
            text-5xl
            font-bold
            text-slate-900
            "
          >
            Explore College Cube
          </h2>

          <p
            className="
            mt-6
            max-w-3xl
            mx-auto
            text-lg
            leading-8
            text-slate-600
            "
          >
            Every module is designed to make
            college administration faster,
            smarter and easier.
            Click on any module below
            to explore the interface.
          </p>

        </div>

        {/* Tabs */}

        <div className="mt-16">

          <FeatureTabs
            features={featureData}
            active={activeFeature}
            onChange={setActiveFeature}
          />

        </div>

        {/* Browser */}

        <div
          className="
          mt-16
          max-w-6xl
          mx-auto
          "
        >

          <PreviewWindow
            feature={activeFeature}
          />

        </div>

        {/* Description */}

        <FeatureDescription
          feature={activeFeature}
        />

      </div>

    </section>
  );
};

export default FeatureShowcase;