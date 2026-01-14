import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { useTheme } from "./ThemeProvider";

export default function Footer() {
  const { theme } = useTheme();

  const socialLinks = [
    {
      icon: <FaLinkedin size={24} />,
      href: "https://www.linkedin.com/in/shofiq-it/",
      label: "LinkedIn",
    },
    {
      icon: <FaGithub size={24} />,
      href: "https://github.com/ShoFiq6030",
      label: "GitHub",
    },
    {
      icon: <FaFacebookF size={24} />,
      href: "https://www.facebook.com/shofiq6030",
      label: "Facebook",
    },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900 dark:from-slate-900 dark:via-slate-800 dark:to-gray-900 text-white py-8 sm:py-10 md:py-12 mt-8 sm:mt-10 md:mt-12">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-blue-500/5 rounded-full blur-2xl sm:blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-40 sm:w-64 md:w-80 h-40 sm:h-64 md:h-80 bg-purple-500/5 rounded-full blur-2xl sm:blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8">
          {/* Brand & Copyright */}
          <div className="text-center md:text-left space-y-1 sm:space-y-2 px-2 sm:px-0">
            <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Shofiq
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm">
              © 2024 Shofiq. All rights reserved.
            </p>
            <p className="text-gray-500 text-[10px] sm:text-xs">
              Built with Next.js, Tailwind CSS & Modern Design
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3 sm:gap-6 px-2 sm:px-0">
            <span className="text-xs sm:text-sm text-gray-400 font-medium hidden md:block">
              Follow me:
            </span>
            <div className="flex gap-2 sm:gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="group relative p-2 sm:p-3 rounded-full bg-white/5 dark:bg-white/10 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20"
                >
                  <div className="text-gray-400 group-hover:text-blue-400 transition-colors duration-300">
                    {React.cloneElement(social.icon, {
                      size: social.icon.props.size === 24 ? 18 : 20,
                    })}
                  </div>
                  {/* Tooltip */}
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[10px] sm:text-xs whitespace-nowrap bg-gray-800 dark:bg-gray-700 px-2 py-1 rounded">
                    {social.label}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 md:pt-8 border-t border-white/10 text-center text-gray-500 text-[10px] sm:text-xs">
          <p>
            Made with ❤️ and lots of ☕ | Current theme:{" "}
            <span className="font-semibold text-blue-400 capitalize">
              {theme}
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
