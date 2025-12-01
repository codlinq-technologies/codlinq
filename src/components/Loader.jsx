import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logoLight from "../assets/logo_light.png";
import logoDark from "../assets/logo_dark.png";

const Loader = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    document.documentElement.classList.contains("dark")
  );

  // Watch for theme changes (Tailwind dark mode)
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center z-50 transition-colors duration-500 ${
        isDarkMode ? "bg-[#1a1a1a] text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Animated Logo */}
      {/* <motion.img
        src="src\assets\logo_dark.png" // 🔁 Replace with your actual logo path
        alt="Codlinq Logo"
        className="w-28 h-auto object-contain"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: [0.8, 1, 0.95, 1], opacity: 1 }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      /> */}



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


      {/* Subtext */}
      <p
        className={`mt-2 text-sm ${
          isDarkMode ? "text-gray-400" : "text-gray-600"
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        Connect. Create. Conquer.
      </p>

      {/* Loader Animation */}
      <motion.div
        className="mt-6 flex space-x-2"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: "#ff7722" }}
            variants={{
              hidden: { scale: 0 },
              visible: {
                scale: [1, 1.5, 1],
                transition: {
                  duration: 0.8,
                  repeat: Infinity,
                  delay: i * 0.2,
                },
              },
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Loader;
