import FuzzyText from "@/components/common/FuzzyText";
import Link from "next/link";
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
      <button className="mt-8 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
        <Link href="/">Go to Home</Link>
      </button>
    </div>
  );
}
