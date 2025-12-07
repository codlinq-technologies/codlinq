import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import TestimonialCard from "../components/TestimonialCard";

const testimonials = [
  {
    name: "Jane D",
    role: "CEO",
    photo: "https://via.placeholder.com/100x100?text=Jane",
    message:
      "The user interface of this site is so intuitive, I was able to start using it without any guidance.",
  },
  {
    name: "Harsh P.",
    role: "Product Design",
    photo: "https://via.placeholder.com/100x100?text=Harsh",
    message:
      "I used to dread doing my tasks every year, but Codlinq made the process so much simpler.",
  },
  {
    name: "Sofia L.",
    role: "Marketing Head",
    photo: "https://via.placeholder.com/100x100?text=Sofia",
    message:
      "Highly recommend! Their professionalism and creativity brought our vision to life beautifully.",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  // 🔄 Auto-slide with pause on hover
  useEffect(() => {
    if (isPaused) return; // Don't auto-slide when paused
    const timer = setInterval(() => {
      nextSlide();
    }, 4000); // every 4 seconds
    return () => clearInterval(timer);
  }, [isPaused, index]);

  return (
    <section
      id="testimonials"
      className="py-20 px-6 md:px-16 lg:px-24 bg-[#ff7722] dark:bg-[#ff7722]"
    >
      {/* Section Heading */}
      <h2 className="text-5xl md:text-5xl font-bold text-center mb-12 text-[#ffffff]">
        Testimonials
      </h2>

      {/* Main Layout */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-4 text-center md:text-left">
          <h3 className="text-4xl font-bold text-gray-100 dark:text-white leading-snug">
            100+ Customers gave their{" "}
            <span className="text-[#1a1a1a] dark:text-[#1a1a1a]">Feedback</span>
          </h3>

          {/* Buttons (hidden on small screens, visible on md+) */}
          <div className="hidden md:flex justify-center md:justify-start gap-4 mt-6">
            <button
              onClick={prevSlide}
              className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-100 text-white hover:bg-white hover:text-[#ff7722] transition"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-100 text-white hover:bg-white hover:text-[#ff7722] transition"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Right Testimonial Cards */}
        <div
          className="md:w-1/2 flex flex-col justify-center items-center relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)} // ⏸ Pause on hover
          onMouseLeave={() => setIsPaused(false)} // ▶️ Resume on leave
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="flex gap-6"
            >
              <TestimonialCard {...testimonials[index]} />
              {testimonials[(index + 1) % testimonials.length] && (
                <TestimonialCard
                  {...testimonials[(index + 1) % testimonials.length]}
                />
              )}
            </motion.div>
          </AnimatePresence>

          {/* Buttons (visible on small screens, below cards) */}
          <div className="flex md:hidden justify-center gap-4 mt-6">
            <button
              onClick={prevSlide}
              className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-100 text-white hover:bg-white hover:text-[#ff7722] transition"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-100 text-white hover:bg-white hover:text-[#ff7722] transition"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
