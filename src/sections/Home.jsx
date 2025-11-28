import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 md:px-12 bg-white dark:bg-[#0f0f0f] transition-colors duration-500">
      {/* Subtle Gradient Background */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-[#111] dark:via-[#0f0f0f] dark:to-[#090909]" /> */}



{/* Animated Radial Gradient Background  circle new*/}
<motion.div
  className="absolute inset-0 pointer-events-none z-0"
  style={{
    background:
      "radial-gradient(circle at 30% 20%, #ff7722 0%, transparent 60%)",
  }}
  animate={{
    background: [
      "radial-gradient(circle at 30% 20%, #ff7722 0%, transparent 60%)",
      "radial-gradient(circle at 60% 40%, #ff5500 0%, transparent 65%)",
      "radial-gradient(circle at 40% 70%, #ff8844 0%, transparent 55%)",
      "radial-gradient(circle at 35% 30%, #ff7722 0%, transparent 60%)",
    ],
    scale: [1, 1.015, 1],
    opacity: [0.15, 0.2, 0.15],
  }}
  transition={{
    duration: 10,
    ease: [0.4, 0, 0.2, 1],
    repeat: Infinity,
    repeatType: "loop",
  }}
  whileHover={{
    scale: 1.05,
    opacity: 0.3,
    filter: "blur(4px) brightness(1.25)",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  }}
/>


{/* Animated Radial Gradient Background --------------------------------------*/}





      {/* Tagline / Pill */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mb-6"
      >
        <span className="inline-flex items-center gap-2 px-5 py-2 text-sm font-medium bg-gray-100 text-gray-700 dark:bg-[#1b1b1b] dark:text-gray-300 rounded-full shadow-sm border border-gray-200 dark:border-gray-700">
          <Zap className="w-4 h-4 text-[#ff7722]" />
          {/* Building the future of software */}

          <p className="text-sm md:text-2xl text-gray-800 dark:text-gray-200">
            {" "}
            <Typewriter
              words={[
                "Software Development",
                "Web & App Solutions",
                "UI/UX Design",
                "Digital Transformation",
                "Graphic & Logo Design",
                "E-commerce Growth",
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />{" "}
          </p>
        </span>
      </motion.div>

      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-6xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white"
      >
        Connect. Create. <br />
        <span className="text-[#ff7722] dark:text-[#ff7722]">Conquer.</span>
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 mt-6 text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl"
      >
        We create cutting-edge software solutions that drive innovation and
        transform businesses. Fast, secure, and scalable.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4 }}
        className="relative z-10 mt-10 flex flex-col sm:flex-row gap-4"
      >
        <a
          href="#contact"
          className="flex items-center justify-center px-6 py-3 rounded-lg bg-[#ff7722] text-white font-medium text-base hover:bg-[#e66a1f] transition-colors shadow-md"
        >
          Start Your Project <ArrowRight className="ml-2 w-4 h-4" />
        </a>

        <a
          href="e-commerce"
          className="flex items-center justify-center px-6 py-3 rounded-lg bg-gray-100 dark:bg-[#1b1b1b] text-gray-800 dark:text-gray-200 font-medium text-base hover:bg-gray-200 dark:hover:bg-[#2b2b2b] transition-colors shadow-sm border border-gray-200 dark:border-gray-700"
        >
          E-Commerce Services
        </a>
      </motion.div>
    </section>
  );
};

export default Home;
