import Footer from "@/components/common/Footer";
import NavBar from "@/components/common/NavBar";
import React from "react";

export default function MorePage() {
  return (
    <div className="container m-auto text-white ">
      <NavBar />
      <div className="container m-auto h-[82vh] text-center bg-gray-900 bg-opacity-50">
        <div className="w-full h-auto p-4">
          <h1 className="text-3xl">More content coming soon.....</h1>
        </div>
        <div className="w-full h-auto p-4">
          <p className="text-lg">Stay tuned for updates!</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
