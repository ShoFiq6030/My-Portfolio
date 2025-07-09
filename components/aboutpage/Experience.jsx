import { getExperienceAPI } from "@/utils/api";
import React from "react";

export default async function Experience() {
  const data = await getExperienceAPI();
  console.log(data);

  return (
    <div>
      <div className="container m-auto text-white ">
        <h1 className="text-xl font-bold mb-4 text-yellow-400 text-center">
          Experience
        </h1>
        <table className="min-w-full bg-gray-700 rounded-lg">
          <thead>
            <tr>
              <th className="py-2 px-1 md:px-4 border border-gray-500 text-left">
                Company Name
              </th>
              <th className="py-2 px-1 md:px-4 border border-gray-500 text-left">
                Designation
              </th>
              <th className="py-2 px-1 md:px-4 border border-gray-500 text-left">
                Dateline
              </th>
              <th className="py-2 px-1 md:px-4 border border-gray-500 text-left">
                Location
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((item, index) => (
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
      </div>
    </div>
  );
}
