"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import { ImCross } from "react-icons/im";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // 👈 Get current path

  // Define nav links
  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/about-me", label: "ABOUT ME" },
    { href: "/skills", label: "SKILLS" },

    { href: "/projects", label: "PROJECTS" },
    { href: "/contact", label: "CONTACT ME" },
    { href: "/more", label: "MORE" },
  ];

  return (
    <div className="container relative flex items-center h-[8vh] justify-between p-4 bg-gray-800">
      <div>
        <Link
          href="/"
          className="flex items-center justify-center w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden"
        >
          <Image src="/logo2.png" alt="Logo" width={100} height={100} />
        </Link>
      </div>

      <ul
        className={`nav transition-all duration-500 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-5 pointer-events-none -top-0"
        } md:opacity-100 md:translate-y-0 md:pointer-events-auto md:flex`}
      >
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`navLink transition-transform duration-300  ${
                pathname === link.href ? "text-yellow-400 font-bold" : ""
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="md:hidden">
        {isOpen ? (
          <ImCross
            onClick={() => setIsOpen(false)}
            className="text-2xl text-white cursor-pointer"
          />
        ) : (
          <IoMenuSharp
            onClick={() => setIsOpen(true)}
            className="text-3xl text-white cursor-pointer"
          />
        )}
      </div>
    </div>
  );
}
