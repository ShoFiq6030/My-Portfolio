import React from "react";
import { webSkills } from "@/utils/skills";
import { systemAdminSkills } from "@/utils/skills";
import Image from "next/image";

export default function SkillsItems() {
  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Web Development Skills */}
      <div>
        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-center bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent animate-gradient">
          Web Development
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
          {webSkills.map((skill, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-slate-800 rounded-xl p-3 sm:p-4 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-2 hover:border-blue-400 dark:hover:border-blue-500"
            >
              <div className="relative w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2 sm:mb-3">
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 640px) 48px, 64px"
                  quality={100}
                />
              </div>
              <h3 className="text-xs sm:text-sm font-semibold text-center text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                {skill.name}
              </h3>
              {/* Hover Effect - Glow */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>

      {/* System Administration Skills */}
      <div>
        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-center bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent animate-gradient">
          System Administration
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
          {systemAdminSkills.map((skill, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-slate-800 rounded-xl p-3 sm:p-4 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-2 hover:border-purple-400 dark:hover:border-purple-500"
            >
              <div className="relative w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2 sm:mb-3">
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 640px) 48px, 64px"
                  quality={100}
                />
              </div>
              <h3 className="text-xs sm:text-sm font-semibold text-center text-gray-800 dark:text-gray-200 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300 leading-tight">
                {skill.name}
              </h3>
              {/* Hover Effect - Glow */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
