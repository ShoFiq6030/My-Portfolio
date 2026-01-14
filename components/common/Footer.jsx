import React from "react";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaHeart,
  FaCode,
  FaPalette,
  FaRocket,
} from "react-icons/fa";
import { useTheme } from "./ThemeProvider";

export default function Footer() {
  const { theme } = useTheme();

  // Theme-specific styling data
  const themeStyles = {
    light: {
      bg: "bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200",
      text: "text-gray-800",
      textSecondary: "text-gray-600",
      border: "border-gray-300/50",
      card: "bg-white/80 backdrop-blur-sm border-gray-200/50",
      cardHover: "hover:bg-white hover:border-blue-400/50",
      accent: "text-blue-600",
      accentBg: "bg-blue-600",
      glow: "bg-blue-400/20",
      shadow: "shadow-lg shadow-gray-200/50",
    },
    dark: {
      bg: "bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900",
      text: "text-white",
      textSecondary: "text-gray-400",
      border: "border-slate-700/50",
      card: "bg-slate-800/50 backdrop-blur-sm border-slate-700/50",
      cardHover: "hover:bg-slate-700/80 hover:border-blue-500/50",
      accent: "text-blue-400",
      accentBg: "bg-blue-500",
      glow: "bg-blue-500/20",
      shadow: "shadow-lg shadow-slate-900/50",
    },
  };

  const styles = themeStyles[theme];

  const socialLinks = [
    {
      icon: <FaLinkedin size={20} />,
      href: "https://www.linkedin.com/in/shofiq-it/",
      label: "LinkedIn",
      color: "text-blue-500",
      hoverColor: "hover:text-blue-400",
    },
    {
      icon: <FaGithub size={20} />,
      href: "https://github.com/ShoFiq6030",
      label: "GitHub",
      color: theme === "dark" ? "text-gray-300" : "text-gray-700",
      hoverColor: "hover:text-gray-600",
    },
    {
      icon: <FaFacebookF size={20} />,
      href: "https://www.facebook.com/shofiq6030",
      label: "Facebook",
      color: "text-blue-600",
      hoverColor: "hover:text-blue-500",
    },
    {
      icon: <FaTwitter size={20} />,
      href: "https://twitter.com/shofiq6030",
      label: "Twitter",
      color: "text-blue-400",
      hoverColor: "hover:text-blue-300",
    },
  ];

  const quickLinks = [
    { name: "About", href: "#about", icon: "👤" },
    { name: "Skills", href: "#skills", icon: "⚡" },
    { name: "Projects", href: "#projects", icon: "💼" },
    { name: "Contact", href: "#contact", icon: "✉️" },
  ];

  const techStack = [
    { name: "Next.js", icon: <FaCode size={12} /> },
    { name: "Tailwind", icon: <FaPalette size={12} /> },
    { name: "React", icon: <FaRocket size={12} /> },
  ];

  return (
    <footer
      className={`relative overflow-hidden transition-all duration-500 ${styles.bg} ${styles.text} py-16 sm:py-18 md:py-20 mt-16 sm:mt-18 md:mt-20 border-t ${styles.border}`}
    >
      {/* Enhanced Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Theme-aware glow orbs */}
        <div
          className={`absolute top-[-80px] left-[-80px] w-64 h-64 ${styles.glow} rounded-full blur-3xl animate-pulse transition-all duration-700`}
        ></div>
        <div
          className={`absolute bottom-[-80px] right-[-80px] w-72 h-72 ${
            theme === "dark" ? "bg-purple-500/10" : "bg-purple-400/20"
          } rounded-full blur-3xl animate-pulse transition-all duration-700`}
          style={{ animationDelay: "0.3s" }}
        ></div>

        {/* Dynamic particles effect */}
        <div
          className={`absolute inset-0 opacity-[0.05] ${
            theme === "dark"
              ? "bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_1px,transparent_1px)]"
              : "bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.6)_1px,transparent_1px)]"
          } [background-size:25px_25px]`}
        ></div>

        {/* Subtle wave pattern */}
        <div
          className={`absolute bottom-0 left-0 right-0 h-32 ${
            theme === "dark"
              ? "bg-gradient-to-t from-slate-900 to-transparent"
              : "bg-gradient-to-t from-gray-900 to-transparent"
          } opacity-50`}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section with Theme-Aware Branding */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl mb-4 transition-all duration-300 hover:scale-105">
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-xl ${styles.accentBg} text-white shadow-lg transform transition-all duration-300 hover:rotate-12 hover:scale-110`}
            >
              S
            </div>
            <div className="text-left">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Shofiq
              </h2>
              <p className={`text-xs ${styles.textSecondary}`}>
                Web Developer & Designer
              </p>
            </div>
          </div>

          {/* Theme Indicator Badge */}
          {/* <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${styles.card} ${styles.border} transition-all duration-300 hover:scale-105`}
          >
            <span
              className={`w-2 h-2 rounded-full ${styles.accentBg} animate-pulse`}
            ></span>
            <span className={styles.textSecondary}>
              Currently in {theme.toUpperCase()} mode
            </span>
          </div> */}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-10">
          {/* About & Description */}
          <div className="space-y-4">
            <h4
              className={`text-lg font-semibold ${styles.accent} flex items-center gap-2`}
            >
              <FaPalette className="inline" /> About Me
            </h4>
            <p className={`${styles.textSecondary} text-sm leading-relaxed`}>
              Passionate web developer crafting beautiful, functional digital
              experiences. I turn ideas into interactive realities with modern
              technologies.
            </p>
            <div className="flex gap-2 pt-2">
              {["Web", "UI/UX", "React"].map((tag) => (
                <span
                  key={tag}
                  className={`text-xs px-2 py-1 rounded-md ${styles.card} ${styles.border}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-4">
            <h4
              className={`text-lg font-semibold ${styles.accent} flex items-center gap-2`}
            >
              <FaRocket className="inline" /> Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`group flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 ${styles.card} ${styles.border} ${styles.cardHover}`}
                  >
                    <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                      {link.icon}
                    </span>
                    <span className={`font-medium ${styles.text}`}>
                      {link.name}
                    </span>
                    <span
                      className={`ml-auto text-xs ${styles.accent} opacity-0 group-hover:opacity-100 transform translate-x-[-4px] group-hover:translate-x-0 transition-all duration-300`}
                    >
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4
              className={`text-lg font-semibold ${styles.accent} flex items-center gap-2`}
            >
              <FaCode className="inline" /> Get In Touch
            </h4>
            <div className="space-y-3">
              <div
                className={`flex items-start gap-3 px-3 py-2 rounded-lg ${styles.card} ${styles.border} transition-all duration-300 hover:scale-[1.02]`}
              >
                <span className="text-lg">📧</span>
                <div>
                  <div className={`text-sm font-medium ${styles.text}`}>
                    Email
                  </div>
                  <div className={`text-xs ${styles.textSecondary}`}>
                    shofiq6030@gmail.com
                  </div>
                </div>
              </div>
              <div
                className={`flex items-start gap-3 px-3 py-2 rounded-lg ${styles.card} ${styles.border} transition-all duration-300 hover:scale-[1.02]`}
              >
                <span className="text-lg">📍</span>
                <div>
                  <div className={`text-sm font-medium ${styles.text}`}>
                    Location
                  </div>
                  <div className={`text-xs ${styles.textSecondary}`}>
                    Dhaka, Bangladesh
                  </div>
                </div>
              </div>
              <div
                className={`flex items-start gap-3 px-3 py-2 rounded-lg ${styles.card} ${styles.border} transition-all duration-300 hover:scale-[1.02]`}
              >
                <span className="text-lg">💼</span>
                <div>
                  <div className={`text-sm font-medium ${styles.text}`}>
                    Status
                  </div>
                  <div className={`text-xs ${styles.textSecondary}`}>
                    Available for freelance
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Connect */}
          <div className="space-y-4">
            <h4
              className={`text-lg font-semibold ${styles.accent} flex items-center gap-2`}
            >
              <FaHeart className="inline" /> Connect
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`group relative flex flex-col items-center justify-center gap-2 p-4 rounded-xl transition-all duration-300 ${styles.card} ${styles.border} ${styles.cardHover} hover:-translate-y-1 hover:shadow-xl`}
                >
                  <div
                    className={`${social.color} ${social.hoverColor} transition-all duration-300 group-hover:scale-125 group-hover:rotate-6 transform`}
                  >
                    {social.icon}
                  </div>
                  <span
                    className={`text-xs font-medium ${styles.text} transition-colors duration-300 group-hover:${styles.accent}`}
                  >
                    {social.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Tech Stack & Bottom Bar */}
        <div
          className={`border-t ${styles.border} pt-6 mt-6 rounded-t-2xl ${styles.card} px-6 py-4`}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div
              className={`flex items-center gap-2 ${styles.textSecondary} text-sm`}
            >
              <span>© 2024</span>
              <span className={`font-semibold ${styles.text}`}>Shofiq</span>
              <span>All rights reserved.</span>
            </div>

            {/* Tech Stack */}
            <div className="flex items-center gap-3">
              <span
                className={`text-xs ${styles.textSecondary} hidden sm:inline`}
              >
                Built with:
              </span>
              <div className="flex items-center gap-2">
                {techStack.map((tech, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-1 px-2 py-1 rounded-md text-xs ${styles.card} ${styles.border} transition-all duration-300 hover:scale-105`}
                  >
                    <span className={styles.accent}>{tech.icon}</span>
                    <span className={styles.text}>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Passion Indicator */}
            <div
              className={`flex items-center gap-2 ${styles.accent} text-sm font-medium transition-all duration-300 hover:scale-105`}
            >
              <FaHeart className="animate-pulse" size={14} />
              <span>Made with passion</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
