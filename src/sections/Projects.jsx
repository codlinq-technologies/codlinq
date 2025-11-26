// import { motion } from "framer-motion";
// import { ExternalLink } from "lucide-react";

// const projects = [
//   {
//     title: "Zuppp! Share Simply",
//     desc: "File sharing platform with drag-and-drop upload.",
//     tech: ["React", "Tailwind", "Node.js"],
//     link: "#",
//     image: "https://via.placeholder.com/500x300?text=Zuppp+Project",
//   },
//   {
//     title: "Online Examination System",
//     desc: "Reduces exam completion time by 15 minutes.",
//     tech: ["React", "MySQL", "Bootstrap"],
//     link: "#",
//     image: "https://via.placeholder.com/500x300?text=Exam+System",
//   },
//   {
//     title: "Voltrify App UI",
//     desc: "Cross-platform app UI using React Native.",
//     tech: ["React Native", "Figma", "Motion"],
//     link: "#",
//     image: "https://via.placeholder.com/500x300?text=Voltrify+UI",
//   },
// ];

// const Projects = () => {
//   return (
//     <section className="py-20 px-6 md:px-16 lg:px-24 bg-gray-100 dark:bg-[#1a1a1a]">
//       <motion.h2
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         className="text-4xl font-bold text-center mb-12 text-[#ff7722]"
//       >
//         Our Projects
//       </motion.h2>

//       <div className="max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {projects.map((project, i) => (
//           <motion.div
//             key={i}
//             whileHover={{ scale: 1.03 }}
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: i * 0.2 }}
//             viewport={{ once: true }}
//             className="bg-white dark:bg-[#2c2c2c] rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-lg"
//           >
//             <img src={project.image} alt={project.title} className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500" />
//             <div className="p-6">
//               <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
//               <p className="text-gray-700 dark:text-gray-300 mb-3">{project.desc}</p>
//               <div className="flex flex-wrap gap-2 mb-3">
//                 {project.tech.map((t, j) => (
//                   <span key={j} className="text-xs px-3 py-1 rounded-full bg-[#ff7722]/10 border border-[#ff7722]/20 text-[#ff7722]">{t}</span>
//                 ))}
//               </div>
//               <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[#ff7722] hover:text-[#ff7722]/80 transition">
//                 View Project <ExternalLink size={16} />
//               </a>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;








// import { motion } from "framer-motion";
// import { ExternalLink } from "lucide-react";

// const projects = [
//   {
//     title: "Zuppp! Share Simply",
//     desc: "A seamless file-sharing platform featuring drag-and-drop uploads and secure transfers.",
//     tech: ["React", "Tailwind", "Node.js"],
//     link: "#",
//     image: "https://via.placeholder.com/700x450?text=Zuppp+Project",
//   },
//   {
//     title: "Online Examination System",
//     desc: "Smart exam system that reduces completion time and enhances real-time monitoring.",
//     tech: ["React", "MySQL", "Bootstrap"],
//     link: "#",
//     image: "https://via.placeholder.com/700x450?text=Exam+System",
//   },
//   {
//     title: "Voltrify App UI",
//     desc: "Cross-platform mobile app UI designed for an electrifying user experience.",
//     tech: ["React Native", "Figma", "Motion"],
//     link: "#",
//     image: "https://via.placeholder.com/700x450?text=Voltrify+UI",
//   },
// ];

// const Projects = () => {
//   return (
//     <section className="relative py-24 px-6 md:px-16 lg:px-24 bg-gradient-to-b from-gray-50 to-white dark:from-[#111] dark:to-[#1a1a1a]">
//       {/* Background Accent */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,119,34,0.05),transparent_70%)] pointer-events-none"></div>

//       {/* Heading */}
//       <motion.h2
//         initial={{ opacity: 0, y: -30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//         className="text-4xl md:text-5xl font-bold text-center mb-6 text-[#ff7722]"
//       >
//         Our Projects
//       </motion.h2>

//       <motion.p
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ delay: 0.3 }}
//         viewport={{ once: true }}
//         className="text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-16"
//       >
//         Showcasing some of our impactful projects that combine innovation, performance, and user experience to drive business success.
//       </motion.p>

//       {/* Projects Grid */}
//       <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
//         {projects.map((project, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: i * 0.2, duration: 0.6 }}
//             viewport={{ once: true }}
//             className="relative group rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-[#2b2b2b] border border-gray-200 dark:border-gray-700"
//           >
//             {/* Image */}
//             <div className="relative overflow-hidden">
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-700"
//               />
//               {/* Overlay */}
//               <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
//                 <a
//                   href={project.link}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="flex items-center gap-2 text-white bg-[#ff7722] px-4 py-2 rounded-full hover:bg-[#e9691d] transition"
//                 >
//                   View Project <ExternalLink size={16} />
//                 </a>
//               </div>
//             </div>

//             {/* Content */}
//             <div className="p-6">
//               <h3 className="text-xl font-semibold mb-2 group-hover:text-[#ff7722] transition-colors duration-300">
//                 {project.title}
//               </h3>
//               <p className="text-gray-600 dark:text-gray-300 mb-4">{project.desc}</p>
//               <div className="flex flex-wrap gap-2">
//                 {project.tech.map((t, j) => (
//                   <span
//                     key={j}
//                     className="text-xs px-3 py-1 rounded-full bg-[#ff7722]/10 border border-[#ff7722]/20 text-[#ff7722]"
//                   >
//                     {t}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Decorative Accent */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 0.2 }}
//         transition={{ delay: 0.5 }}
//         className="absolute bottom-0 right-10 w-40 h-40 bg-[#ff7722] blur-[120px] rounded-full opacity-20"
//       ></motion.div>
//     </section>
//   );
// };

// export default Projects;











// import { motion } from "framer-motion";
// import { ExternalLink } from "lucide-react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const projects = [
//   {
//     title: "Zuppp! Share Simply",
//     desc: "A seamless file sharing platform with drag-and-drop uploads and instant sharing links.",
//     tech: ["React", "Tailwind CSS", "Node.js"],
//     link: "#",
//     image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1000&q=80",
//   },
//   {
//     title: "Online Examination System",
//     desc: "An online exam portal improving efficiency by reducing exam completion time by 15 minutes.",
//     tech: ["React", "MySQL", "Bootstrap"],
//     link: "#",
//     image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1000&q=80",
//   },
//   {
//     title: "Voltrify App UI",
//     desc: "A modern cross-platform EV charging app UI built with React Native and Motion.",
//     tech: ["React Native", "Figma", "Framer Motion"],
//     link: "#",
//     image: "https://images.unsplash.com/photo-1612831662375-295c1003d3ca?w=1000&q=80",
//   },
//   {
//     title: "Earthfirm App UI",
//     desc: "A modern cross-platform EV charging app UI built with React Native and Motion.",
//     tech: ["React Native", "Figma", "Framer Motion"],
//     link: "#",
//     image: "https://images.unsplash.com/photo-1612831662375-295c1003d3ca?w=1000&q=80",
//   },
//   {
//     title: "prosperity App UI",
//     desc: "A modern cross-platform EV charging app UI built with React Native and Motion.",
//     tech: ["React Native", "Figma", "Framer Motion"],
//     link: "#",
//     image: "https://images.unsplash.com/photo-1612831662375-295c1003d3ca?w=1000&q=80",
//   },
// ];

// const Projects = () => {
//   return (
//     <section className="relative py-20 px-6 md:px-16 lg:px-24 bg-gray-50 dark:bg-[#0a0a0a] overflow-hidden">
//       {/* Animated Gradient Background */}
//       {/* <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#ff7722]/10 via-[#5227FF]/10 to-transparent animate-gradientMove" /> */}

//       {/* Background Accent */}
//       <div className="absolute inset-0 pointer-events-none opacity-10 bg-[radial-gradient(circle_at_30%_20%,#ff7722_0%,transparent_60%)]" />
      
//       <div className="absolute right-0 top-0 w-1 bg-[#ff7722] h-full hidden md:block rounded-r-lg" />

//       {/* Animated Heading */}
//       <motion.h2
//         initial={{ opacity: 0, y: -30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         viewport={{ once: true }}
//         className="text-4xl md:text-5xl font-bold text-center mb-6 text-[#ff7722]"
//       >
//         Our Projects
//       </motion.h2>

//       <motion.p
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ delay: 0.3 }}
//         viewport={{ once: true }}
//         className="text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-16"
//       >
//         Showcasing some of our impactful projects that combine innovation, performance, and user experience to drive business success.
//       </motion.p>

//       {/* Swiper Carousel */}
//       <Swiper
//         modules={[Navigation, Pagination, Autoplay]}
//         spaceBetween={40}
//         slidesPerView={1}
//         loop={true}
//         pagination={{ clickable: true }}
//         autoplay={{ delay: 4500, disableOnInteraction: false }}
//         speed={900}
//         breakpoints={{
//           768: { slidesPerView: 2 },
//           1024: { slidesPerView: 3 },
//         }}
//         className="max-w-7xl mx-auto"
//       >
//         {projects.map((project, i) => (
//           <SwiperSlide key={i}>
//             <motion.div
//               whileHover={{ scale: 1.02, y: -5 }}
//               transition={{ type: "spring", stiffness: 120, damping: 18 }}
//               className="relative rounded-2xl shadow-xl overflow-hidden border border-gray-300/20 dark:border-gray-700/30 group transition-all duration-700"
//             >
//               {/* Image Wrapper to preserve border radius */}
//               <div className="overflow-hidden rounded-2xl">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-72 object-cover transition-transform duration-[1500ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
//                 />
//               </div>

//               {/* Overlay with smooth darkening effect */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent group-hover:from-black/85 group-hover:via-black/65 transition-all duration-700 ease-out rounded-2xl" />

//               {/* Text Content */}
//               <div className="absolute bottom-0 p-6 text-white transition-all duration-500">
//                 <motion.h3
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.1, duration: 0.6 }}
//                   className="text-2xl font-semibold mb-2"
//                 >
//                   {project.title}
//                 </motion.h3>
//                 <p className="text-gray-200 text-sm mb-4 leading-relaxed">
//                   {project.desc}
//                 </p>

//                 <div className="flex flex-wrap gap-2 mb-3">
//                   {project.tech.map((t, j) => (
//                     <span
//                       key={j}
//                       className="text-xs px-3 py-1 rounded-full bg-[#ff7722]/20 border border-[#ff7722]/30 text-[#ff7722]"
//                     >
//                       {t}
//                     </span>
//                   ))}
//                 </div>

//                 <a
//                   href={project.link}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="inline-flex items-center gap-2 text-sm font-medium text-[#ff7722] hover:text-white transition-all duration-300 group-hover:translate-x-1"
//                 >
//                   View Project <ExternalLink size={16} />
//                 </a>
//               </div>
//             </motion.div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// };

// export default Projects;






// import { useState, useEffect } from "react";
// import { motion, useMotionValue, useTransform } from "framer-motion";
// import { ExternalLink } from "lucide-react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const projects = [
//   {
//     title: "Zuppp! Share Simply",
//     desc: "A seamless file sharing platform with drag-and-drop uploads and instant sharing links.",
//     tech: ["React", "Tailwind CSS", "Node.js"],
//     category: "Full Stack",
//     link: "#",
//     image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1000&q=80",
//   },
//   {
//     title: "Online Examination System",
//     desc: "An online exam portal improving efficiency by reducing exam completion time by 15 minutes.",
//     tech: ["React", "MySQL", "Bootstrap"],
//     category: "Frontend",
//     link: "#",
//     image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1000&q=80",
//   },
//   {
//     title: "Voltrify App UI",
//     desc: "A modern cross-platform EV charging app UI built with React Native and Motion.",
//     tech: ["React Native", "Figma", "Framer Motion"],
//     category: "UI/UX",
//     link: "#",
//     image: "https://images.unsplash.com/photo-1612831662375-295c1003d3ca?w=1000&q=80",
//   },
//   {
//     title: "FinSync Dashboard",
//     desc: "A responsive admin dashboard for financial analytics and management.",
//     tech: ["Next.js", "Tailwind", "Chart.js"],
//     category: "Full Stack",
//     link: "#",
//     image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?w=1000&q=80",
//   },
// ];

// const categories = ["All", "UI/UX", "Frontend", "Full Stack"];

// const Projects = () => {
//   const [activeCategory, setActiveCategory] = useState("All");

//   const filteredProjects =
//     activeCategory === "All"
//       ? projects
//       : projects.filter((p) => p.category === activeCategory);

//   // ----------------------- Dynamic Gradient Background (Parallax Effect) -----------------------
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);
//   const gradientX = useTransform(mouseX, [0, window.innerWidth], ["0%", "100%"]);
//   const gradientY = useTransform(mouseY, [0, window.innerHeight], ["0%", "100%"]);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       mouseX.set(e.clientX);
//       mouseY.set(e.clientY);
//     };
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, [mouseX, mouseY]);
//   // ----------------------- End Dynamic Gradient Background -----------------------

//   return (
//     <section className="relative py-20 px-6 md:px-16 lg:px-24 bg-gray-50 dark:bg-[#0a0a0a] overflow-hidden">
//       {/* ----------------------- Dynamic Gradient Background Element ----------------------- */}
//       <motion.div
//         className="absolute inset-0 -z-10"
//         style={{
//           background: `radial-gradient(
//             circle at ${gradientX.get()} ${gradientY.get()},
//             rgba(255,119,34,0.15),
//             rgba(82,39,255,0.1),
//             transparent
//           )`,
//         }}
//         transition={{ type: "spring", stiffness: 40, damping: 20 }}
//       />
//       {/* ----------------------- End Dynamic Gradient Background Element ----------------------- */}

//       {/* Heading */}
//       <motion.h2
//         initial={{ opacity: 0, y: -30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         viewport={{ once: true }}
//         className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#ff7722]"
//       >
//         Our Projects
//       </motion.h2>

//       {/* Category Filters */}
//       <div className="flex flex-wrap justify-center gap-4 mb-16">
//         {categories.map((cat, i) => (
//           <motion.button
//             key={i}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => setActiveCategory(cat)}
//             className={`px-6 py-2 rounded-full text-sm font-medium transition-all border ${
//               activeCategory === cat
//                 ? "bg-[#ff7722] text-white border-[#ff7722]"
//                 : "bg-transparent border-[#ff7722]/40 text-[#ff7722] hover:bg-[#ff7722]/10"
//             }`}
//           >
//             {cat}
//           </motion.button>
//         ))}
//       </div>

//       {/* Project Slider */}
//       <Swiper
//         modules={[Navigation, Pagination, Autoplay]}
//         spaceBetween={40}
//         slidesPerView={1}
//         loop={true}
//         pagination={{ clickable: true }}
//         autoplay={{ delay: 4500, disableOnInteraction: false }}
//         speed={900}
//         breakpoints={{
//           768: { slidesPerView: 2 },
//           1024: { slidesPerView: 3 },
//         }}
//         className="max-w-7xl mx-auto"
//       >
//         {filteredProjects.map((project, i) => (
//           <SwiperSlide key={i}>
//             <motion.div
//               whileHover={{ scale: 1.02, y: -5 }}
//               transition={{ type: "spring", stiffness: 120, damping: 18 }}
//               className="relative rounded-2xl shadow-xl overflow-hidden border border-gray-300/20 dark:border-gray-700/30 group transition-all duration-700"
//             >
//               <div className="overflow-hidden rounded-2xl">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-72 object-cover transition-transform duration-[1500ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
//                 />
//               </div>

//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent group-hover:from-black/85 group-hover:via-black/65 transition-all duration-700 ease-out rounded-2xl" />

//               <div className="absolute bottom-0 p-6 text-white transition-all duration-500">
//                 <motion.h3
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.1, duration: 0.6 }}
//                   className="text-2xl font-semibold mb-2"
//                 >
//                   {project.title}
//                 </motion.h3>
//                 <p className="text-gray-200 text-sm mb-4 leading-relaxed">
//                   {project.desc}
//                 </p>

//                 <div className="flex flex-wrap gap-2 mb-3">
//                   {project.tech.map((t, j) => (
//                     <span
//                       key={j}
//                       className="text-xs px-3 py-1 rounded-full bg-[#ff7722]/20 border border-[#ff7722]/30 text-[#ff7722]"
//                     >
//                       {t}
//                     </span>
//                   ))}
//                 </div>

//                 <a
//                   href={project.link}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="inline-flex items-center gap-2 text-sm font-medium text-[#ff7722] hover:text-white transition-all duration-300 group-hover:translate-x-1"
//                 >
//                   View Project <ExternalLink size={16} />
//                 </a>
//               </div>
//             </motion.div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// };

// export default Projects;










import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projects = [
  {
    title: "Zuppp! Share Simply",
    desc: "A seamless file sharing platform with drag-and-drop uploads and instant sharing links.",
    tech: ["React", "Tailwind CSS", "Node.js"],
    category: "Full Stack",
    link: "#",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1000&q=80",
  },
  {
    title: "Online Examination System",
    desc: "An online exam portal improving efficiency by reducing exam completion time by 15 minutes.",
    tech: ["React", "MySQL", "Bootstrap"],
    category: "Frontend",
    link: "#",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1000&q=80",
  },
  {
    title: "Voltrify App UI",
    desc: "A modern cross-platform EV charging app UI built with React Native and Motion.",
    tech: ["React Native", "Figma", "Framer Motion"],
    category: "UI/UX",
    link: "#",
    image: "https://images.unsplash.com/photo-1612831662375-295c1003d3ca?w=1000&q=80",
  },
  {
    title: "FinSync Dashboard",
    desc: "A responsive admin dashboard for financial analytics and management.",
    tech: ["Next.js", "Tailwind", "Chart.js"],
    category: "Full Stack",
    link: "#",
    image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?w=1000&q=80",
  },
];

const categories = ["All", "UI/UX", "Frontend", "Full Stack"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);


  return (
    <section className="relative py-20 px-6 md:px-16 lg:px-24 bg-gray-50 dark:bg-[#0a0a0a] overflow-hidden">

<div className="absolute right-0 top-0 w-1 bg-[#ff7722] h-full hidden md:block rounded-r-lg" />

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-5xl md:text-5xl font-bold text-center mb-6 text-[#ff7722]"
      >
        Our Projects
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8"
      >
        Showcasing some of our impactful projects that combine innovation, performance, and user experience to drive business success.
      </motion.p>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {categories.map((cat, i) => (
          <motion.button
            key={i}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all border ${
              activeCategory === cat
                ? "bg-[#ff7722] text-white border-[#ff7722]"
                : "bg-transparent border-[#ff7722]/40 text-[#ff7722] hover:bg-[#ff7722]/10"
            }`}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      {/* Animated Swiper Wrapper */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory} // <-- ensures animation on category change
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Project Slider */}
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={40}
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            speed={900}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="max-w-7xl py-2 px-2"
          >
            {filteredProjects.map((project, i) => (
              <SwiperSlide key={i}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 120, damping: 18 }}
                  className="relative rounded-2xl overflow-hidden border border-gray-300/20 dark:border-gray-700/30 group transition-all duration-700"
                >
                  <div className="overflow-hidden rounded-2xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-72 object-cover transition-transform duration-[1500ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent group-hover:from-black/85 group-hover:via-black/65 transition-all duration-700 ease-out rounded-2xl" />

                  <div className="absolute bottom-0 p-6 text-white transition-all duration-500">
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.6 }}
                      className="text-2xl font-semibold mb-2"
                    >
                      {project.title}
                    </motion.h3>
                    <p className="text-gray-200 text-sm mb-4 leading-relaxed">
                      {project.desc}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tech.map((t, j) => (
                        <span
                          key={j}
                          className="text-xs px-3 py-1 rounded-full bg-[#ff7722]/20 border border-[#ff7722]/30 text-[#ff7722]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-[#ff7722] hover:text-white transition-all duration-300 group-hover:translate-x-1"
                    >
                      View Project <ExternalLink size={16} />
                    </a>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Projects;
