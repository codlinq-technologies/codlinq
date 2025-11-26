import React from "react";
import { motion } from "framer-motion";

const AnimatedBgTest = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated Radial Gradient Background */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 30% 20%, #ff7722 0%, transparent 60%)",
          opacity: 0.2,
        }}
        animate={{
          background: [
            "radial-gradient(circle at 30% 20%, #ff7722 0%, transparent 60%)",
            "radial-gradient(circle at 70% 30%, #ff7722 0%, transparent 60%)",
            "radial-gradient(circle at 50% 80%, #ff7722 0%, transparent 60%)",
            "radial-gradient(circle at 30% 20%, #ff7722 0%, transparent 60%)",
          ],
          opacity: [0.2, 0.3, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        }}
      />

      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-4xl font-bold">Hello, test content</h1>
      </div>
    </div>
  );
};

export default AnimatedBgTest;
