import React from "react";

export default function SkillsDetails() {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="text-center space-y-3 sm:space-y-4">
        <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
          I have a diverse skill set that includes web development, system
          administration, and networking. My expertise lies in technologies such
          as React, Node.js, and MikroTik.
        </p>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
          I am proficient in creating dynamic and responsive web applications,
          managing Linux systems, and configuring network devices to ensure
          optimal performance.
        </p>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
          I am always eager to learn new technologies and improve my skills to
          stay ahead in the ever-evolving tech landscape.
        </p>
      </div>

      {/* Skill Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mt-4 sm:mt-6">
        <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-400/10 dark:to-purple-400/10 border border-blue-200/50 dark:border-blue-800/50 rounded-xl p-3 sm:p-4">
          <h3 className="font-bold text-blue-600 dark:text-blue-400 mb-1.5 sm:mb-2 text-sm sm:text-base">
            Web Development
          </h3>
          <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            Building modern, responsive web applications with cutting-edge
            technologies
          </p>
        </div>
        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 dark:from-purple-400/10 dark:to-pink-400/10 border border-purple-200/50 dark:border-purple-800/50 rounded-xl p-3 sm:p-4">
          <h3 className="font-bold text-purple-600 dark:text-purple-400 mb-1.5 sm:mb-2 text-sm sm:text-base">
            System Administration
          </h3>
          <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            Managing Linux systems and network infrastructure efficiently
          </p>
        </div>
      </div>
    </div>
  );
}
