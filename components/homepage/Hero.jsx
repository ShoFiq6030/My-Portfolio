import Image from "next/image";
import React from "react";
import RotatingText from "../common/RotatingText";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";

export default function Hero() {
  return (
    <div className="w-full min-h-screen bg-gray-900 bg-opacity-50 flex flex-col-reverse md:flex-row items-center justify-center md:justify-evenly gap-8 px-6 overflow-hidden">
      <Image
        src="/shofiq-transparent.png"
        alt="Portrait of Shofiq"
        width={1000}
        height={1000}
        sizes="(max-width: 640px) 160px, (max-width: 768px) 224px, (max-width: 1024px) 288px, 448px"
        className="rounded-full border-b-2 border-r-2 border-yellow-400 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-[448px] lg:h-[448px] object-cover"
        quality={80}
        priority
        loading="eager"
      />

      <div className="text-center md:text-left max-w-xl">
        <p className="text-xl md:text-3xl font-bold text-center md:text-left">
          {" "}
          Hello,
        </p>
        <h1 className="text-2xl md:text-4xl font-bold mb-4">I am Shofiq</h1>
        <p className="text-lg  md:text-xl mb-8">
          A passionate
          <span className="">
            <RotatingText
              texts={[
                "Web developer",
                "React developer",
                "System Admin",
                "MikroTik Expert ",
                "Linux Enthusiast",
                "Gamer 🫢",
              ]}
              mainClassName=" text-yellow-400 text-left overflow-hidden rounded-lg"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={3000}
            />
          </span>
        </p>
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <Link
            href="/contact"
            className="bg-yellow-400 text-gray-800 px-6 py-3 rounded-full hover:bg-yellow-500 transition-colors"
          >
            Contact Me
          </Link>
          <a
            href="/Md_Shofikul_Islam_CV.pdf"
            download="Md_Shofikul_Islam_CV.pdf"
            className="flex gap-1 items-center bg-yellow-400 text-gray-800 px-6 py-3 rounded-full hover:bg-yellow-500 transition-colors"
          >
            <span>Download CV</span>
            <FiDownload size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}
