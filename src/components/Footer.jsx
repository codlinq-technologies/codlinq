import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logoLight from "../assets/logo_light.png";
import logoDark from "../assets/logo_dark.png";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-white via-blue-50 to-white dark:from-[#1a1a1a] dark:via-[#2c2c2c] dark:to-[#1a1a1a] text-[#2c2c2c] dark:text-gray-200 py-12 overflow-hidden shadow-inner transition-colors duration-500">
      {/* ✨ Animated Grid Background (Replaces footer1 & footer2) */}
      {/* START GRID BACKGROUND */}
      <motion.div
        className="absolute inset-0 opacity-[0.07] dark:opacity-[0.1] pointer-events-none"
        animate={{
          backgroundPosition: ["0px 0px", "40px 40px"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(255,119,34,0.5) 1px, transparent 1px), linear-gradient(rgba(255,119,34,0.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* END GRID BACKGROUND */}

      {/* Main Footer Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-10">
        <div className="flex flex-col md:flex-row justify-between gap-12 text-left">
          {/* Left Section */}
          <div className="md:w-1/2">
            <div className="flex items-center gap-2 mb-4">
              {/* ✅ Show logo based on mode */}
              <img
                src={logoDark}
                alt="Logo Dark"
                className="h-12 block dark:hidden"
              />
              <img
                src={logoLight}
                alt="Logo Light"
                className="h-12 hidden dark:block"
              />
            </div>

            <p className="text-sm dark:text-gray-300">
              At Codlinq, we specialize in Software, Website, and Application
              Development, along with UI/UX Design, Logo Design, and Graphic
              Design. We combine technical expertise and creative design to
              deliver scalable, user-friendly, and visually engaging digital
              solutions.
            </p>

            {/* Social Links */}
            <div className="mt-4">
              <p className="mb-2 font-semibold text-[#ff7722] dark:text-[#ff7722]">
                Connect with us!
              </p>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/codlinq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-100 dark:bg-[#333] rounded-full flex items-center justify-center hover:bg-[#ff7722] dark:hover:bg-[#ff7722] transition transform hover:scale-110"
                >
                  <FaFacebook className="text-xl text-[#2c2c2c] dark:text-white" />
                </a>

                <a
                  href="https://www.instagram.com/codlinq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-100 dark:bg-[#333] rounded-full flex items-center justify-center hover:bg-[#ff7722] dark:hover:bg-[#ff7722] transition transform hover:scale-110"
                >
                  <FaInstagram className="text-xl text-[#2c2c2c] dark:text-white" />
                </a>

                <a
                  href="https://www.linkedin.com/company/codlinq/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-100 dark:bg-[#333] rounded-full flex items-center justify-center hover:bg-[#ff7722] dark:hover:bg-[#ff7722] transition transform hover:scale-110"
                >
                  <FaLinkedinIn className="text-xl text-[#2c2c2c] dark:text-white" />
                </a>

                <a
                  href="https://x.com/codlinq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-100 dark:bg-[#333] rounded-full flex items-center justify-center hover:bg-[#ff7722] dark:hover:bg-[#ff7722] transition transform hover:scale-110"
                >
                  <FaXTwitter className="text-xl text-[#2c2c2c] dark:text-white" />
                </a>
                <a
                  href="https://youtube.com/@codlinq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-100 dark:bg-[#333] rounded-full flex items-center justify-center hover:bg-[#ff7722] dark:hover:bg-[#ff7722] transition transform hover:scale-110"
                >
                  <FaYoutube className="text-xl text-[#2c2c2c] dark:text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="md:w-1/2 flex flex-wrap gap-10 md:justify-end">
            <div>
              <h3 className="font-semibold mb-3 text-[#ff7722] dark:text-[#ff7722]">
                Company
              </h3>
              <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-300">
                <li>
                  <a href="#home" className="hover:text-[#ff7722] transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-[#ff7722] transition">
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-[#ff7722] transition"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="hover:text-[#ff7722] transition"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-[#ff7722] transition"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-[#ff7722] mb-3">Services</h3>
              <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-300">
                <li>
                  <a href="#" className="hover:underline transition">
                    Software Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline transition">
                    Website Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline transition">
                    Application Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline transition">
                    Maintenance & Testing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline transition">
                    UI/UX Design
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline transition">
                    Graphic & Logo Design
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-[#ff7722] mb-3">
                Help & Support
              </h3>
              <ul className="space-y-2 text-sm text-gray-800 dark:text-gray-300">
                <li>
                  <a href="#" className="hover:underline transition">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline transition">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline transition">
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline transition">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-blue-200 dark:border-gray-700 pt-6 text-center text-sm text-[#2C2C2C] dark:text-gray-400">
          <p>&copy; {year} Codlinq. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
