import { experience } from "@/utils/experience";

export default function Experience() {
  console.log(experience);

  return (
    <div className="w-full">
      <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-blue-600 dark:text-blue-400 text-center flex items-center justify-center gap-1.5 sm:gap-2">
        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full animate-pulse"></span>
        Experience
      </h2>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-hidden rounded-lg">
        <table className="w-full text-xs sm:text-sm">
          <thead>
            <tr className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 dark:from-blue-400/20 dark:to-purple-400/20 backdrop-blur-sm">
              <th className="py-1.5 sm:py-2 px-2 sm:px-3 border-b border-gray-300 dark:border-gray-600 text-left font-semibold text-gray-700 dark:text-gray-300">
                Company
              </th>
              <th className="py-1.5 sm:py-2 px-2 sm:px-3 border-b border-gray-300 dark:border-gray-600 text-left font-semibold text-gray-700 dark:text-gray-300">
                Role
              </th>
              <th className="py-1.5 sm:py-2 px-2 sm:px-3 border-b border-gray-300 dark:border-gray-600 text-left font-semibold text-gray-700 dark:text-gray-300">
                Period
              </th>
              <th className="py-1.5 sm:py-2 px-2 sm:px-3 border-b border-gray-300 dark:border-gray-600 text-left font-semibold text-gray-700 dark:text-gray-300">
                Location
              </th>
            </tr>
          </thead>
          <tbody>
            {experience?.map((item, index) => (
              <tr
                key={item.id}
                className={`hover:bg-blue-50/50 dark:hover:bg-blue-900/20 transition-colors duration-200 ${
                  index % 2 === 0 ? "bg-white/50 dark:bg-slate-800/50" : ""
                }`}
              >
                <td className="py-1.5 sm:py-2 px-2 sm:px-3 border-b border-gray-200 dark:border-gray-700 font-medium text-gray-800 dark:text-gray-200">
                  {item.companyName}
                </td>
                <td className="py-1.5 sm:py-2 px-2 sm:px-3 border-b border-gray-200 dark:border-gray-700 text-blue-600 dark:text-blue-400 font-semibold">
                  {item.designation}
                </td>
                <td className="py-1.5 sm:py-2 px-2 sm:px-3 border-b border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400">
                  {item.dateline}
                </td>
                <td className="py-1.5 sm:py-2 px-2 sm:px-3 border-b border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 overflow-auto">
                  {item.location}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-2 sm:space-y-3">
        {experience.map((item) => (
          <div
            key={item.id}
            className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-3 sm:p-4 border border-blue-200/50 dark:border-blue-800/50 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
          >
            <div className="space-y-1.5 sm:space-y-2">
              <div className="flex items-start justify-between">
                <span className="font-bold text-gray-800 dark:text-gray-200 text-sm sm:text-base">
                  {item.companyName}
                </span>
                <span className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full">
                  {item.location}
                </span>
              </div>
              <div className="text-blue-600 dark:text-blue-400 font-semibold text-sm sm:text-base">
                {item.designation}
              </div>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                {item.dateline}
              </div>
            </div>
          </div>
        ))}
      </div>

      {(!experience || experience.length === 0) && (
        <div className="text-center py-6 sm:py-8 text-gray-500 dark:text-gray-400 text-sm sm:text-base">
          No experience data available yet.
        </div>
      )}
    </div>
  );
}
