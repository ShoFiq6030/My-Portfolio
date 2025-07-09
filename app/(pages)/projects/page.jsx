import React from "react";
import NavBar from "@/components/common/NavBar";
import Footer from "@/components/common/Footer";
import ProjectItems from "@/components/projectpage/ProjectItems";

export default function projectPage() {
  return (
    <div className="container m-auto text-white bg-gray-900 bg-opacity-50">
      <NavBar />
      <div className="w-full min-h-[82vh] p-4 ">
        <h1 className="text-4xl font-bold mb-4 text-yellow-400">my projects</h1>

        <ProjectItems />
      </div>
      <Footer />
    </div>
  );
}
