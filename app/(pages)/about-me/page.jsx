import Footer from "@/components/common/Footer";
import NavBar from "@/components/common/NavBar";
import React from "react";

export default function AboutPage() {
  return (
    <div className="container m-auto text-white">
      <NavBar />

      <div className="w-full h-[82vh] bg-gray-500 bg-opacity-90 flex items-center justify-center">
        <div className="container m-auto text-white">
          <h1 className="text-4xl font-bold mb-4 text-yellow-400 ">About Me</h1>
          <p className="text-lg mb-4">
            Hello! Im Shofiq, a passionate web developer with a keen interest in
            creating dynamic and responsive web applications. I have experience
            in various technologies including React, Node.js, and more.
          </p>
          <p className="text-lg mb-4">
            In addition to web development, I am also a System Admin and
            MikroTik Expert, with a strong background in Linux systems. I love
            exploring new technologies and continuously improving my skills.
          </p>
          <p className="text-lg mb-4">
            When Im not coding, you can find me gaming or exploring the latest
            tech trends.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
