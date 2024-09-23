"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "About",
    path: "#about", // Links to the "About" section
  },
  {
    title: "Education",
    path: "#education", // Links to the "Education" section
  },
  {
    title: "Experience", // Added this for "Experience"
    path: "#work-experience", // This path should match your section ID
  },
  {
    title: "Projects",
    path: "#projects", // Links to the "Projects" section
  },
  {
    title: "Contact",
    path: "#contact", // Links to the "Contact" section
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100 border-b border-[#33353F]">
      <div className="container flex items-center justify-between mx-auto py-4 px-4">
        {/* Name and Logo Section */}
        <Link
          href="/"
          className="text-3xl md:text-5xl text-white font-bold tracking-wide"
          style={{
            fontFamily: "'Montserrat', sans-serif", // Portfolio-style font
            letterSpacing: "0.1em",
            textTransform: "uppercase", // Full caps
            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)", // Shadow effect
          }}
        >
          SRAVAN KUMAR MANGALAGIRI
        </Link>

        {/* Mobile Menu Toggle Button */}
        <div className="block md:hidden">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
          >
            {!navbarOpen ? (
              <Bars3Icon className="h-6 w-6" />
            ) : (
              <XMarkIcon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className={`hidden md:flex md:w-auto`}>
          <ul className="flex space-x-8 text-white">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {navbarOpen && (
        <div className="bg-[#121212] absolute top-0 left-0 right-0 z-10 flex flex-col items-center justify-center min-h-screen space-y-6 md:hidden">
          <ul className="flex flex-col space-y-8 text-white text-2xl">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  href={link.path}
                  title={link.title}
                  onClick={() => setNavbarOpen(false)} // Close on click
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
