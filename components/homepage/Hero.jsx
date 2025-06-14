import Image from "next/image";
import React from "react";
import RotatingText from "../common/RotatingText";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="w-full h-[82vh] bg-gray-900 bg-opacity-50">
      <div className=" w-full h-full flex items-center justify-evenly overflow-hidden ">
        <div className="border-b-2 border-r-2 border-yellow-400 rounded-e-full overflow-hidden w-6/12 h-auto ">
          <Image
            src="/shofiq-transparent.png"
            alt="Hero Image"
            width={1920}
            height={1080}
            className="w-auto h-auto  "
            quality={100}
            priority
            loading="eager"
          />
        </div>

        <div className=" ">
          <p className="text-xl md:text-3xl font-bold text-left"> Hello,</p>
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
          <Link
            href="/contact"
            className="bg-yellow-400 text-gray-800 px-6 py-3 rounded-full hover:bg-yellow-500 transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
}
