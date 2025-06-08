import Footer from "@/components/common/Footer";
import NavBar from "@/components/common/NavBar";
import SkillsDetails from "@/components/skillspage/SkillsDetails";
import SkillsItems from "@/components/skillspage/SkillsItems";
import React from "react";

export default function SkillsPage() {
  return (
    <div className="container m-auto text-white">
      <NavBar />
      <div className="w-full h-auto  bg-gray-900 bg-opacity-50  items-center justify-center">
        <SkillsDetails />
        <SkillsItems />
      </div>

      <Footer />
    </div>
  );
}
