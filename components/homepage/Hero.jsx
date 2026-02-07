import Image from "next/image";
import React from "react";
import RotatingText from "../common/RotatingText";
import { FiDownload } from "react-icons/fi";
import { useTheme } from "../common/ThemeProvider";

export default function Hero() {
  const { theme } = useTheme();

  const handleContactScroll = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="w-full h-screen  flex items-center justify-center px-2 sm:px-4 md:px-6 lg:px-8 overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-4 sm:top-6 md:top-10 left-4 sm:left-6 md:left-10 w-40 sm:w-56 md:w-72 h-40 sm:h-56 md:h-72 bg-blue-500/10 dark:bg-blue-400/10 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-4 sm:bottom-6 md:bottom-10 right-4 sm:right-6 md:right-10 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-purple-500/10 dark:bg-purple-400/10 rounded-full blur-2xl sm:blur-3xl animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-pink-500/10 dark:bg-pink-400/10 rounded-full blur-2xl sm:blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto relative z-10 px-2 sm:px-4">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20">
          {/* Text Content */}
          <div className="text-center md:text-left max-w-2xl px-2 sm:px-0 slide-in-left">
            <div className="mb-4 sm:mb-6">
              <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-500/10 dark:bg-blue-400/10 text-blue-600 dark:text-blue-400 rounded-full text-xs sm:text-sm font-semibold mb-2 sm:mb-3 animate-bounce">
                👋 Hello,
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 leading-tight">
                <span className="text-black dark:text-white">I am </span>
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent animate-gradient">
                  Shofiq
                </span>
              </h1>
            </div>

            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-700 dark:text-gray-300 leading-relaxed">
              A passionate{" "}
              <span className="relative inline-block">
                <RotatingText
                  texts={[
                    "Web developer",
                    "React developer",
                    "System Admin",
                    "MikroTik Expert",
                    "Linux Enthusiast",
                    "Gamer 🫢",
                  ]}
                  mainClassName="text-blue-600 dark:text-blue-400 font-bold whitespace-nowrap"
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

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center md:justify-start">
              <button
                onClick={handleContactScroll}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 text-sm sm:text-base"
              >
                <span>Contact Me</span>
                <span className="animate-bounce">→</span>
              </button>

              <a
                href="/Resume_Md_Shofikul_Islam.pdf"
                download="Resume_Md_Shofikul_Islam.pdf"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg border-2 border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 rounded-full font-semibold hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 text-sm sm:text-base"
              >
                <FiDownload className=" animate-bounce" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative slide-in-right">
            <div className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-[448px] xl:h-[448px]">
              {/* Animated Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-blue-500/30 dark:border-blue-400/30 animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute inset-2 rounded-full border-2 border-purple-500/30 dark:border-purple-400/30 animate-[spin_15s_linear_infinite_reverse]"></div>
              <div className="absolute inset-4 rounded-full border-2 border-pink-500/30 dark:border-pink-400/30 animate-[spin_20s_linear_infinite]"></div>

              {/* Main Image */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 sm:border-3 lg:border-4 border-white dark:border-slate-800 shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105">
                <Image
                  src="/shofiq-transparent.png"
                  alt="Portrait of Shofiq"
                  fill
                  sizes="(max-width: 640px) 144px, (max-width: 768px) 192px, (max-width: 1024px) 256px, (max-width: 1280px) 352px, 448px"
                  className="object-cover transition-transform duration-500"
                  priority
                  loading="eager"
                />
              </div>

              {/* Floating Badge */}
              {/* <div className="absolute -bottom-2 sm:-bottom-3 md:-bottom-4 -right-2 sm:-right-3 md:-right-4 bg-gradient-to-r from-green-500 to-blue-600 text-white px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full text-xs sm:text-sm md:text-sm font-bold shadow-lg animate-bounce">
                Available 💼
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 sm:w-8 h-10 sm:h-12 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center p-1">
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-600 dark:bg-gray-400 rounded-full animate-[bounce_1.5s_infinite]"></div>
        </div>
      </div>
    </section>
  );
}
