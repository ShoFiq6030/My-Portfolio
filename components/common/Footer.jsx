import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="bg-gray-800 flex items-center justify-between h-[10vh]">
      <div className="container   ">
        <p className="text-sm">© 2024 Shofiq. All rights reserved.</p>
        <p className="text-sm">Built with Next.js and Tailwind CSS</p>
      </div>
      <div className="   ">
        <span className="mr-4 mb-4 text-nowrap">Follow me: </span>
        <p className="flex  ">
          <a
            href="https://www.linkedin.com/in/shofiq-it/"
            target="_blank"
            className="hover:text-yellow-400 cursor-pointer"
          >
            <FaLinkedin className="text-2xl ml-1" />
          </a>
          <a
            href="https://github.com/ShoFiq6030"
            target="_blank"
            className="hover:text-yellow-400  cursor-pointer"
          >
            <FaGithub className="text-2xl ml-1" />
          </a>
          <a
            href="https://www.facebook.com/shofiq6030"
            target="_blank"
            className="hover:text-yellow-400  cursor-pointer"
          >
            <FaFacebookF className="text-2xl ml-1" />
          </a>
        </p>
      </div>
    </div>
  );
}
