import Image from "next/image";
import React from "react";
import RotatingText from "../common/RotatingText";

export default function Hero() {
  return (
    <div className="w-full h-[82vh] bg-opacity-90 bg-gray-500">
      <div className=" w-full h-full flex items-center justify-evenly ">
        <div className="border-b-2 border-r-2 border-yellow-400 rounded-e-full overflow-hidden w-6/12 h-auto lg:h-full ">
          <Image
            src="/shofiq-img.png"
            alt="Hero Image"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
            quality={100}
            priority
            loading="eager"
          />
        </div>

        <div className="text-center ">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">
            Hello, Im Shofiq
          </h1>

          <p className="text-lg md:text-xl mb-8">
            A passionate{" "}
            <span>
              <RotatingText
                texts={[
                  "web developer",
                  "React developer",
                  "System Admin",
                  "MikroTik Expert ",
                  "Linux Enthusiast",
                  "Gamer 🫢",
                ]}
                mainClassName="px-2 sm:px-2 md:px-3  text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
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
          <button className="bg-yellow-400 text-gray-800 px-6 py-3 rounded-full hover:bg-yellow-500 transition-colors">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
}
