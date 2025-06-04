import FuzzyText from "@/components/common/FuzzyText";
import React from "react";

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <FuzzyText
        baseIntensity={0.2}
        // hoverIntensity={hoverIntensity}
        // enableHover={enableHover}
        fontSize={150}
        fontWeight={500}
      >
        404
      </FuzzyText>

      <FuzzyText
        baseIntensity={0.2}
        // hoverIntensity={hoverIntensity}
        // enableHover={enableHover}
        fontSize={40}
        fontWeight={200}
      >
        page not found
      </FuzzyText>
    </div>
  );
}
