import React from "react";
import { webSkills } from "@/utils/skills";
import { systemAdminSkills } from "@/utils/skills";
import Image from "next/image";

export default function SkillsItems() {
  return (
    <div>
      <h1 className="text-center  text-2xl font-bold">Web Development</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
        {webSkills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <Image
              src={skill.icon}
              alt={skill.name}
              className="w-16 h-16 mb-2"
              width={64}
              height={64}
              quality={100}
            />
            <h3 className="text-lg font-semibold text-yellow-400">
              {skill.name}
            </h3>
          </div>
        ))}
      </div>
      <h1 className="text-center  text-2xl font-bold">System Administration</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
        {systemAdminSkills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <Image
              src={skill.icon}
              alt={skill.name}
              className="  "
              width={64}
              height={64}
              quality={100}
            />
            <h3 className="text-lg font-semibold text-yellow-400">
              {skill.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
