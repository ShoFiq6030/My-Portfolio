"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { IoMenuSharp, IoMoon, IoSunny } from "react-icons/io5";
import { ImCross } from "react-icons/im";
import { useTheme } from "./ThemeProvider";

export default function NavBar({ activeSection, scrollToSection }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { section: "hero", label: "HOME" },
    { section: "about", label: "ABOUT ME" },
    { section: "skills", label: "SKILLS" },
    { section: "projects", label: "PROJECTS" },
    { section: "contact", label: "CONTACT ME" },
    // { section: "more", label: "MORE" },
  ];

  const handleNavClick = (section) => {
    scrollToSection(section);
    setIsOpen(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-lg"
          : "bg-white/90 dark:bg-slate-900/90"
      } border-b border-gray-200 dark:border-gray-700`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className="cursor-pointer transform hover:scale-110 transition-transform duration-300"
            onClick={() => handleNavClick("hero")}
          >
            <div
              className={`relative w-12  md:w-16 md:h-16 overflow-hidden rounded-full  transition-all duration-300 ${
                theme === "light" ? "ring-gray-800" : "ring-blue-500"
              }`}
            >
              <Image
                src="/logo2.png"
                alt="Logo"
                className={`object-cover hover:scale-110 transition-transform duration-300 ${
                  theme === "light" ? "filter brightness-0" : ""
                }`}
                fill
                sizes="(max-width: 768px) 48px, 64px"
                priority
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2 lg:gap-4">
            {navLinks.map((link) => (
              <button
                key={link.section}
                onClick={() => handleNavClick(link.section)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeSection === link.section
                    ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-105"
                }`}
              >
                {link.label}
              </button>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="ml-4 p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-600 transition-all duration-300 transform hover:rotate-12 hover:scale-110"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <IoMoon size={20} /> : <IoSunny size={20} />}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-3 md:hidden">
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-600 transition-all duration-300"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <IoMoon size={18} /> : <IoSunny size={18} />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-600 transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <ImCross size={20} /> : <IoMenuSharp size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden mt-3 overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-2 py-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700">
            {navLinks.map((link) => (
              <button
                key={link.section}
                onClick={() => handleNavClick(link.section)}
                className={`px-4 py-3 text-left text-sm font-medium transition-all duration-300 rounded-lg mx-2 ${
                  activeSection === link.section
                    ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-[1.02]"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
