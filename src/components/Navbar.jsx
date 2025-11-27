import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FiSun, FiMoon } from "react-icons/fi";
import logoLight from "../assets/logo_light.png";
import logoDark from "../assets/logo_dark.png";
import { useDarkTheme } from "@/utils/hooks/useDarkTheme";
import { getCurrentPath } from "../utils/hooks/commonfunction";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useDarkTheme();
  const toggleNav = () => setNavOpen(!navOpen);
  
  let links = [];

  if (getCurrentPath() === "/e-commerce") {
    links.push(
      { name: "Home", href: "/" },
      { name: "About", href: "/#about" },
      {
        name: "Services",
        href: "/#service",
        nestedLinks: [
          {
            name: "E-commerce",
            href: "",
          },
        ],
      },
      { name: "Projects", href: "/#projects" },
      { name: "Contact", href: "/#contact" }
    );
  } else {
    links.push(
      { name: "Home", href: "#home" },
      { name: "About", href: "#about" },
      {
        name: "Services",
        href: "#services",
        nestedLinks: [
          {
            name: "E-commerce",
            href: "/e-commerce",
          },
        ],
      },
      { name: "Projects", href: "#projects" },
      { name: "Contact", href: "#contact" }
    );
  }

  return (
    <nav className="fixed w-full z-50 bg-white dark:bg-[#2c2c2c] shadow-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* ✅ Logo Switcher */}
        <a href="#home" className="flex items-center cursor-pointer">
          {/* Light mode logo */}
          <img
            src={logoDark}
            alt="Logo Dark"
            className="h-10 w-auto block dark:hidden transition-all duration-300"
          />
          {/* Dark mode logo */}
          <img
            src={logoLight}
            alt="Logo Light"
            className="h-10 w-auto hidden dark:block transition-all duration-300"
          />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center text-gray-800 dark:text-gray-200 font-medium">
          {links.map((link) => (
            <li key={link.name} className="relative group">
              <a href={link.href} className="hover:text-[#ff7722] transition">
                {link.name}
              </a>
              {link.nestedLinks && (
                <ul className="absolute left-0 mt-2 bg-white shadow-lg rounded-md invisible dark:bg-[#2c2c2d] group-hover:opacity-100 group-hover:visible transition-all duration-300 dark:text-gray-200">
                  {link.nestedLinks.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="block whitespace-nowrap px-4 py-2 hover:text-[#ff7722] transition"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <li>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>
          </li>
        </ul>

        {/* Mobile Hamburger */}
<div className="md:hidden flex items-center gap-3 text-gray-800 dark:text-gray-200">
  <button
    onClick={toggleDarkMode}
    className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition flex items-center justify-center"
  >
    {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
  </button>

  <button
    onClick={toggleNav}
    className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition flex items-center justify-center"
  >
    {navOpen ? <HiX size={28} /> : <HiMenu size={28} />}
  </button>
</div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white dark:bg-[#2c2c2c] transition-all duration-300 ${
          navOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col gap-4 px-6 py-4 text-gray-800 dark:text-gray-200 font-medium text-center">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="block py-2 hover:text-[#ff7722] transition"
                onClick={() => setNavOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
