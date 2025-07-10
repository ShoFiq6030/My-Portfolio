import { getExperienceAPI } from "@/utils/api";
import React from "react";

export default async function Experience() {
  const data = await getExperienceAPI();

  return (
    <div>
      <div className="container m-auto text-white px-2">
        <h1 className="text-xl font-bold mb-4 text-yellow-400 text-center">
          Experience
        </h1>

        {/* Desktop Table */}
        <table className="hidden md:table min-w-full bg-gray-700 rounded-lg text-center text-wrap">
          <thead>
            <tr className="bg-gray-800">
              <th className="py-2 px-1 md:px-4 border border-gray-500">
                Company Name
              </th>
              <th className="py-2 px-1 md:px-4 border border-gray-500">
                Designation
              </th>
              <th className="py-2 px-1 md:px-4 border border-gray-500">
                Dateline
              </th>
              <th className="py-2 px-1 md:px-4 border border-gray-500">
                Location
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((item) => (
              <tr key={item._id} className="hover:bg-gray-600">
                <td className="py-2 px-1 md:px-4 border border-gray-500">
                  {item.companyName}
                </td>
                <td className="py-2 px-1 md:px-4 border border-gray-500">
                  {item.designation}
                </td>
                <td className="py-2 px-1 md:px-4 border border-gray-500">
                  {item.dateline}
                </td>
                <td className="py-2 px-1 md:px-4 border border-gray-500">
                  {item.location}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Mobile Grid */}
        <div className="block md:hidden space-y-4">
          {data?.data?.map((item) => (
            <div
              key={item._id}
              className="bg-gray-700 p-4 rounded-lg shadow text-white"
            >
              <p>
                <span className="font-semibold text-yellow-400">Company:</span>{" "}
                {item.companyName}
              </p>
              <p>
                <span className="font-semibold text-yellow-400">
                  Designation:
                </span>{" "}
                {item.designation}
              </p>
              <p>
                <span className="font-semibold text-yellow-400">Dateline:</span>{" "}
                {item.dateline}
              </p>
              <p>
                <span className="font-semibold text-yellow-400">Location:</span>{" "}
                {item.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
