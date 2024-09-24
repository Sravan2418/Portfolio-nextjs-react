"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"; // Ensure these icons are available
import NavLink from "./NavLink"; // Assuming NavLink is your custom component for handling links

// Sample nav links
const navLinks = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Projects", path: "/projects" },
  { title: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [theme, setTheme] = useState("dark"); // Default theme is 'dark'

  // Optionally: Load theme from localStorage (for persistence across sessions)
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); // Persist the theme in localStorage
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-10 border-b transition-all duration-500 ${
        theme === "dark"
          ? "bg-[#121212] border-[#33353F] text-white"
          : "bg-[#f9f9f9] border-gray-300 text-black"
      }`}
    >
      <div className="container flex items-center justify-between mx-auto py-4 px-4">
        {/* Name and Logo Section */}
        <Link
          href="/"
          className="text-3xl md:text-5xl font-bold tracking-wide"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            textShadow: theme === "dark" ? "2px 2px 5px rgba(0, 0, 0, 0.5)" : "none",
          }}
        >
          SRAVAN KUMAR MANGALAGIRI
        </Link>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className={`ml-4 py-2 px-4 rounded transition-colors duration-300 ${
            theme === "dark" ? "bg-white text-black" : "bg-black text-white"
          }`}
        >
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </button>

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
          <ul className="flex space-x-8">
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
        <div
          className={`${
            theme === "dark" ? "bg-[#121212]" : "bg-white"
          } absolute top-0 left-0 right-0 z-10 flex flex-col items-center justify-center min-h-screen space-y-6 md:hidden transition-colors duration-500`}
        >
          <ul className="flex flex-col space-y-8 text-2xl">
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
