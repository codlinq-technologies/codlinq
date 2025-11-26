// import { motion } from "framer-motion";

// const services = [
//   { title: "Software Development", desc: "Custom web and app solutions." },
//   { title: "Website Development", desc: "Responsive, modern websites." },
//   { title: "Application Development", desc: "Cross-platform apps." },
//   { title: "Maintenance & Testing", desc: "Reliable support and QA." },
//   { title: "UI/UX Design", desc: "Intuitive and user-centered designs." },
//   { title: "Graphic & Logo Design", desc: "Brand identity creation." },
// ];

// const Services = () => {
//   return (
//     <section className="py-20 px-6 md:px-16 lg:px-24 bg-gray-50 dark:bg-[#1a1a1a]">
//       <motion.h2
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         className="text-4xl font-bold text-center mb-12 text-[#ff7722]"
//       >
//         Services
//       </motion.h2>

//       <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {services.map((service, i) => (
//           <motion.div
//             key={i}
//             whileHover={{ scale: 1.05 }}
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: i * 0.2 }}
//             viewport={{ once: true }}
//             className="bg-white dark:bg-[#2c2c2c] p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 text-center"
//           >
//             <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
//             <p className="text-gray-700 dark:text-gray-300">{service.desc}</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Services;

// import { motion } from "framer-motion";
// import { Laptop, Globe, Smartphone, Wrench, PenTool, Palette } from "lucide-react";

// const services = [
//   {
//     icon: <Laptop size={28} />,
//     title: "Software Development",
//     desc: "Tailored digital solutions that combine innovation, scalability, and efficiency — built to empower your business growth.",
//   },
//   {
//     icon: <Globe size={28} />,
//     title: "Website Development",
//     desc: "Responsive, high-performing, and SEO-optimized websites designed to elevate your online presence and brand impact.",
//   },
//   {
//     icon: <Smartphone size={28} />,
//     title: "Application Development",
//     desc: "Cross-platform mobile applications that deliver smooth, engaging, and consistent user experiences on every device.",
//   },
//   {
//     icon: <Wrench size={28} />,
//     title: "Maintenance & Testing",
//     desc: "Comprehensive testing, bug fixes, and continuous performance monitoring to ensure seamless operation at all times.",
//   },
//   {
//     icon: <PenTool size={28} />,
//     title: "UI/UX Design",
//     desc: "Creating user-centered interfaces that balance aesthetics and functionality for delightful and intuitive user journeys.",
//   },
//   {
//     icon: <Palette size={28} />,
//     title: "Graphic & Logo Design",
//     desc: "Building distinctive visual identities through strategic branding, custom graphics, and logo design that resonate.",
//   },
// ];

// const Services = () => {
//   return (
//     <section className="relative py-24 px-6 md:px-16 lg:px-24 bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-[#0e0e0e] dark:via-[#141414] dark:to-[#1b1b1b] overflow-hidden">
//       {/* Subtle radial background accent */}
//       <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_30%,#ff7722_0%,transparent_70%)] opacity-10" />

//       {/* Section Header */}
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         className="text-center relative z-10"
//       >
//         <h2 className="text-5xl font-bold text-[#ff7722] mb-4">Our Services</h2>
//         <p className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300 leading-relaxed">
//           We deliver end-to-end digital solutions tailored to your business needs — from design to deployment, ensuring performance, scalability, and trust.
//         </p>
//       </motion.div>

//       {/* Service Cards */}
//       <div className="max-w-6xl mx-auto mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
//         {services.map((service, i) => (
//           <motion.div
//             key={i}
//             whileHover={{ y: -8, scale: 1.04 }}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: i * 0.15 }}
//             viewport={{ once: true }}
//             className="group bg-white/90 dark:bg-[#1f1f1f]/90 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 hover:shadow-[0_8px_24px_rgba(255,119,34,0.25)] hover:border-[#ff7722]/50 transition-all duration-300"
//           >
//             <div className="flex justify-center mb-5 text-[#ff7722]">{service.icon}</div>
//             <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
//               {service.title}
//             </h3>
//             <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
//               {service.desc}
//             </p>

//             {/* Hover accent line */}
//             <motion.div
//               initial={{ width: 0 }}
//               whileHover={{ width: "100%" }}
//               transition={{ duration: 0.4 }}
//               className="h-[3px] bg-[#ff7722] mt-6 mx-auto rounded-full"
//             />
//           </motion.div>
//         ))}
//       </div>

//       {/* Bottom Statement */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         className="text-center mt-20"
//       >
//         <h3 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
//           Turning Ideas into Impactful Experiences
//         </h3>
//         <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
//           Our team blends creativity, technology, and strategy to deliver digital solutions that inspire trust and drive measurable results.
//         </p>
//       </motion.div>
//     </section>
//   );
// };

// export default Services;

// import { motion } from "framer-motion";
// import { Laptop, Globe, Smartphone, Wrench, PenTool, Palette } from "lucide-react";

// const services = [
//   {
//     icon: <Laptop size={36} />,
//     title: "Software Development",
//     desc: "Robust software solutions engineered to transform your vision into reliable, scalable, and future-ready applications.",
//   },
//   {
//     icon: <Globe size={36} />,
//     title: "Website Development",
//     desc: "Modern, fast, and responsive websites that reflect your brand’s identity and enhance digital presence.",
//   },
//   {
//     icon: <Smartphone size={36} />,
//     title: "Application Development",
//     desc: "Cross-platform mobile apps that provide seamless performance and unmatched user experiences.",
//   },
//   {
//     icon: <Wrench size={36} />,
//     title: "Maintenance & Testing",
//     desc: "Proactive monitoring, testing, and optimization to ensure your digital platforms never miss a beat.",
//   },
//   {
//     icon: <PenTool size={36} />,
//     title: "UI/UX Design",
//     desc: "Designing experiences that engage, convert, and inspire — blending creativity with usability.",
//   },
//   {
//     icon: <Palette size={36} />,
//     title: "Graphic & Logo Design",
//     desc: "Shaping brands through timeless visual storytelling, distinctive logos, and aesthetic precision.",
//   },
// ];

// const Services = () => {
//   return (
//     <section className="relative py-24 px-6 md:px-16 lg:px-24 bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-[#0e0e0e] dark:via-[#121212] dark:to-[#1a1a1a] overflow-hidden">
//       {/* Decorative gradient ribbons */}
//       <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-[#ff7722]/10 blur-3xl rounded-full -z-10 animate-pulse"></div>
//       <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-[#ff7722]/10 blur-3xl rounded-full -z-10 animate-pulse"></div>

//       {/* Section Heading */}
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         className="text-center max-w-3xl mx-auto mb-16"
//       >
//         <h2 className="text-5xl font-bold text-[#ff7722] mb-4">Our Expertise</h2>
//         <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
//           We craft solutions that merge design, technology, and strategy — ensuring that every product we build delivers measurable impact and enduring trust.
//         </p>
//       </motion.div>

//       {/* Alternating Layout Services */}
//       <div className="space-y-20 max-w-6xl mx-auto">
//         {services.map((service, i) => (
//           <motion.div
//             key={i}
//             className={`flex flex-col ${i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-10`}
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: i * 0.15 }}
//             viewport={{ once: true }}
//           >
//             {/* Animated Icon */}
//             <motion.div
//               className="flex items-center justify-center min-w-[130px] min-h-[130px] rounded-full bg-gradient-to-br from-[#ff7722] to-orange-600 text-white shadow-lg relative overflow-hidden"
//               whileHover={{ rotate: 10, scale: 1.05 }}
//               transition={{ type: "spring", stiffness: 200 }}
//             >
//               {service.icon}
//               <motion.div
//                 className="absolute inset-0 bg-white/20 blur-md opacity-0"
//                 whileHover={{ opacity: 1 }}
//               ></motion.div>
//             </motion.div>

//             {/* Text Content */}
//             <div className="flex-1">
//               <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-gray-100 relative inline-block">
//                 {service.title}
//                 <motion.span
//                   className="absolute -bottom-1 left-0 w-0 h-[3px] bg-[#ff7722]"
//                   whileInView={{ width: "100%" }}
//                   transition={{ duration: 0.8, delay: 0.2 }}
//                 />
//               </h3>
//               <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
//                 {service.desc}
//               </p>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Closing Statement */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         className="text-center mt-28 max-w-3xl mx-auto"
//       >
//         <h3 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
//           Your Vision, Our Commitment
//         </h3>
//         <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
//           At Codlinq, we partner with businesses to turn bold ideas into transformative digital realities — with precision, integrity, and passion.
//         </p>
//       </motion.div>
//     </section>
//   );
// };

// export default Services;

import { motion } from "framer-motion";


import {
  Code,
  Layout,
  Smartphone,
  Wrench,
  Palette,
  PenTool,
  ChartSpline,
} from "lucide-react";

const services = [
  {
    icon: <Code className="w-8 h-8 text-[#ff7722]" />,
    title: "Software Development",
    desc: "End-to-end software solutions built with precision, scalability, and performance in mind.",
  },
  {
    icon: <Layout className="w-8 h-8 text-[#ff7722]" />,
    title: "Website Development",
    desc: "Crafting responsive, fast, and engaging websites that deliver your brand’s message effectively.",
  },
  {
    icon: <Smartphone className="w-8 h-8 text-[#ff7722]" />,
    title: "Application Development",
    desc: "Developing cross-platform mobile applications that ensure seamless user experiences.",
  },
  {
    icon: <Wrench className="w-8 h-8 text-[#ff7722]" />,
    title: "Maintenance & Testing",
    desc: "Continuous support, optimization, and quality assurance to keep your systems running flawlessly.",
  },
  {
    icon: <Palette className="w-8 h-8 text-[#ff7722]" />,
    title: "UI/UX Design",
    desc: "Designing intuitive interfaces backed by research, usability testing, and design systems.",
  },
  {
    icon: <PenTool className="w-8 h-8 text-[#ff7722]" />,
    title: "Graphic & Logo Design",
    desc: "Creating strong visual identities that resonate with your audience and stand out from competitors.",
  },
  {
    icon: <PenTool className="w-8 h-8 text-[#ff7722]" />,
    title: "E-commerce Account Setup & Management",
    desc: "Unlock your brand’s full potential with expert Amazon, Flipkart & Meesho account management.",
  },
];

const Services = () => {
  return (
    <section className="relative py-24 px-6 md:px-16 lg:px-24 bg-gradient-to-b from-gray-50 to-white dark:from-[#121212] dark:to-[#1a1a1a]">
      <div className="absolute left-0 top-0 w-1 bg-[#ff7722] h-full hidden md:block rounded-r-lg" />

      {/* Background Accent */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[radial-gradient(circle_at_80%_20%,#ff7722_0%,transparent_60%)]" />

      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl md:text-5xl font-bold text-center mb-6 text-[#ff7722]"
        >
          Our Services
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-16"
        >
          Empowering businesses through innovative design and technology. We
          provide tailored digital solutions that enhance your brand’s reach and
          impact.
        </motion.p>

        <div className="relative">
          <div className="grid md:grid-cols-2 gap-12">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-start gap-6 group"
              >
                <div className="flex-shrink-0 bg-[#ff772214] p-4 rounded-2xl group-hover:bg-[#ff772230] transition-all duration-300">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-[#ff7722] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>


{/* Trust Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="mt-20 flex flex-col items-center"
      >
        <div className="flex items-center gap-3 text-[#ff7722] mb-3">
          <ChartSpline size={28} />
          <span className="font-semibold text-lg">
            Your Vision, Our Commitment
          </span>
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-center max-w-xl">
          At Codlinq, we partner with businesses to turn bold ideas into
          transformative digital realities — with precision, integrity, and
          passion.
        </p>
      </motion.div>


    </section>
  );
};

export default Services;
