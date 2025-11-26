// import { motion } from "framer-motion";
// import { Code, Briefcase, GraduationCap } from "lucide-react";

// const About = () => {
//   const skills = [
//     { icon: <Code />, title: "Frontend Development", desc: "React, Tailwind, Redux" },
//     { icon: <Briefcase />, title: "UI/UX Design", desc: "Figma, Adobe XD" },
//     { icon: <GraduationCap />, title: "Continuous Learning", desc: "Motion UI, Modern JS" },
//   ];

//   return (
//     <section className="py-20 px-6 md:px-16 lg:px-24 bg-gray-100 dark:bg-[#1a1a1a]">
//       <motion.h2
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         className="text-4xl font-bold text-center mb-12 text-[#ff7722]"
//       >
//         About Us
//       </motion.h2>

//       <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {skills.map((skill, i) => (
//           <motion.div
//             key={i}
//             whileHover={{ scale: 1.05 }}
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: i * 0.2 }}
//             viewport={{ once: true }}
//             className="bg-white dark:bg-[#2c2c2c] p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 text-center"
//           >
//             <div className="text-[#ff7722] mb-3">{skill.icon}</div>
//             <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
//             <p className="text-gray-700 dark:text-gray-300">{skill.desc}</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default About;






// import { motion } from "framer-motion";
// import { Code, Briefcase, GraduationCap, Target, Users, Sparkles } from "lucide-react";

// const About = () => {
//   const highlights = [
//     {
//       icon: <Code size={28} />,
//       title: "Innovation in Tech",
//       desc: "We craft high-performing, user-friendly digital experiences using React, Tailwind, and modern web technologies.",
//     },
//     {
//       icon: <Briefcase size={28} />,
//       title: "Creative Design Thinking",
//       desc: "Our designs are human-centered, blending functionality and aesthetics through tools like Figma and Adobe XD.",
//     },
//     {
//       icon: <GraduationCap size={28} />,
//       title: "Continuous Growth",
//       desc: "We embrace learning and innovation — staying ahead with new tools, frameworks, and motion-driven design trends.",
//     },
//   ];

//   const values = [
//     { icon: <Target />, title: "Our Vision", desc: "To empower businesses with digital solutions that transform ideas into impactful user experiences." },
//     { icon: <Sparkles />, title: "Our Mission", desc: "Deliver excellence through innovation, creativity, and collaboration while maintaining quality and trust." },
//     { icon: <Users />, title: "Core Values", desc: "Integrity, Innovation, and Impact — the foundation of every project we deliver." },
//   ];

//   return (
//     <section className="py-24 px-6 md:px-16 lg:px-24 bg-gray-50 dark:bg-[#111] text-gray-900 dark:text-gray-100">
//       {/* Section Heading */}
//       <motion.h2
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         className="text-5xl font-bold text-center mb-6 text-[#ff7722]"
//       >
//         About Us
//       </motion.h2>
//       <motion.p
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//         transition={{ delay: 0.3 }}
//         className="text-center max-w-3xl mx-auto text-gray-600 dark:text-gray-300 mb-16 leading-relaxed"
//       >
//         We’re a team of innovators, designers, and developers passionate about turning ideas into seamless digital experiences. 
//         Our mission is to blend technology and creativity to help brands thrive in the digital era.
//       </motion.p>

//       {/* Highlights */}
//       <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
//         {highlights.map((item, i) => (
//           <motion.div
//             key={i}
//             whileHover={{ scale: 1.05, y: -5 }}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: i * 0.2 }}
//             viewport={{ once: true }}
//             className="bg-white dark:bg-[#1c1c1c] p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 hover:shadow-[#ff7722]/30 transition-all duration-300"
//           >
//             <div className="text-[#ff7722] mb-4 flex justify-center">{item.icon}</div>
//             <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
//             <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
//           </motion.div>
//         ))}
//       </div>

//       {/* Vision, Mission, Values */}
//       <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
//         {values.map((val, i) => (
//           <motion.div
//             key={i}
//             whileHover={{ scale: 1.05 }}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: i * 0.2 }}
//             viewport={{ once: true }}
//             className="p-8 bg-gradient-to-b from-white/90 to-gray-100 dark:from-[#1c1c1c] dark:to-[#2a2a2a] rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:border-[#ff7722]/60"
//           >
//             <div className="flex justify-center mb-3 text-[#ff7722]">{val.icon}</div>
//             <h4 className="text-xl font-semibold mb-2">{val.title}</h4>
//             <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{val.desc}</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default About;








// import { motion } from "framer-motion";
// import {
//   Code,
//   Briefcase,
//   GraduationCap,
//   Target,
//   Users,
//   Sparkles,
//   ShieldCheck,
// } from "lucide-react";

// const About = () => {
//   const highlights = [
//     {
//       icon: <Code size={30} />,
//       title: "Innovative Development",
//       desc: "Building robust, scalable, and modern web applications using React, Tailwind CSS, and cutting-edge JavaScript frameworks.",
//     },
//     {
//       icon: <Briefcase size={30} />,
//       title: "Human-Centered Design",
//       desc: "We craft intuitive and meaningful user experiences with precision-driven design systems using Figma and Adobe XD.",
//     },
//     {
//       icon: <GraduationCap size={30} />,
//       title: "Continuous Evolution",
//       desc: "We learn, adapt, and innovate continuously — ensuring every solution stays ahead of market trends.",
//     },
//   ];

//   const values = [
//     {
//       icon: <Target />,
//       title: "Our Vision",
//       desc: "To become a trusted digital transformation partner by empowering brands through meaningful design and innovative technology.",
//     },
//     {
//       icon: <Sparkles />,
//       title: "Our Mission",
//       desc: "To deliver value-driven digital experiences that combine creativity, functionality, and trust, helping businesses grow sustainably.",
//     },
//     {
//       icon: <Users />,
//       title: "Our Values",
//       desc: "Integrity, Innovation, and Impact — we uphold these principles in every partnership, ensuring transparency and excellence.",
//     },
//   ];

//   return (
//     <section className="relative py-24 px-6 md:px-16 lg:px-24 bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-[#0e0e0e] dark:via-[#141414] dark:to-[#1b1b1b]">

// <div className="absolute right-0 top-0 w-1 bg-[#ff7722] h-full hidden md:block rounded-r-lg" />

//       {/* Background Accent */}
//       <div className="absolute inset-0 pointer-events-none opacity-10 bg-[radial-gradient(circle_at_30%_20%,#ff7722_0%,transparent_60%)]" />

//       {/* Header Section */}
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         className="text-center relative z-10"
//       >
//         <h2 className="text-5xl md:text-5xl font-bold text-[#ff7722] mb-4">About Us</h2>
//         <p className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300 leading-relaxed">
//           We are a forward-thinking team of designers and developers dedicated
//           to crafting impactful digital experiences. With a balance of
//           creativity and technical precision, we help businesses build
//           meaningful online identities and long-term trust.
//         </p>
//       </motion.div>

//       {/* Vision / Mission / Values */}
//       <div className="max-w-6xl mx-auto mt-20 grid md:grid-cols-3 gap-8">
//         {values.map((val, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: i * 0.2 }}
//             viewport={{ once: true }}
//             whileHover={{ scale: 1.03 }}
//             className="relative bg-white/90 dark:bg-[#1f1f1f]/90 backdrop-blur-xl p-10 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-[0_8px_24px_rgba(255,119,34,0.25)] transition-all duration-300"
//           >
//             <div className="text-[#ff7722] mb-4 flex justify-center">{val.icon}</div>
//             <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
//               {val.title}
//             </h3>
//             <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{val.desc}</p>
//           </motion.div>
//         ))}
//       </div>

//       {/* Expertise Section */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//         className="text-center mt-24 mb-12"
//       >
//         <h3 className="text-4xl font-bold text-[#ff7722] mb-6">
//           What We Excel At
//         </h3>
//         <p className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
//           From intuitive UI/UX to scalable software architecture, our expertise
//           lies in delivering reliability, efficiency, and innovation — ensuring
//           every digital product feels trustworthy and performs flawlessly.
//         </p>
//       </motion.div>

//       <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
//         {highlights.map((item, i) => (
//           <motion.div
//             key={i}
//             whileHover={{ y: -8, scale: 1.04 }}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: i * 0.2 }}
//             viewport={{ once: true }}
//             className="bg-white dark:bg-[#1c1c1c] p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 hover:border-[#ff7722]/50 hover:shadow-[0_6px_20px_rgba(255,119,34,0.25)] transition-all duration-300"
//           >
//             <div className="text-[#ff7722] mb-4 flex justify-center">{item.icon}</div>
//             <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
//               {item.title}
//             </h4>
//             <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
//               {item.desc}
//             </p>
//           </motion.div>
//         ))}
//       </div>

//       {/* Trust Badge */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         viewport={{ once: true }}
//         className="mt-20 flex flex-col items-center"
//       >
//         <div className="flex items-center gap-3 text-[#ff7722] mb-3">
//           <ShieldCheck size={28} />
//           <span className="font-semibold text-lg">Trusted by businesses nationwide</span>
//         </div>
//         <p className="text-gray-600 dark:text-gray-400 text-center max-w-xl">
//           Our work reflects consistency, ethics, and trust — the pillars that
//           make us a reliable digital partner for startups and enterprises alike.
//         </p>
//       </motion.div>
//     </section>
//   );
// };

// export default About;







import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Code,
  Briefcase,
  GraduationCap,
  Target,
  Users,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Code size={30} />,
      title: "Innovative Development",
      desc: "Building robust, scalable, and modern web applications using React, Tailwind CSS, and cutting-edge JavaScript frameworks.",
    },
    {
      icon: <Briefcase size={30} />,
      title: "Human-Centered Design",
      desc: "We craft intuitive and meaningful user experiences with precision-driven design systems using Figma and Adobe XD.",
    },
    {
      icon: <GraduationCap size={30} />,
      title: "Continuous Evolution",
      desc: "We learn, adapt, and innovate continuously — ensuring every solution stays ahead of market trends.",
    },
  ];

  const values = [
    {
      icon: <Target />,
      title: "Our Vision",
      desc: "To become a trusted digital transformation partner by empowering brands through meaningful design and innovative technology.",
    },
    {
      icon: <Sparkles />,
      title: "Our Mission",
      desc: "To deliver value-driven digital experiences that combine creativity, functionality, and trust, helping businesses grow sustainably.",
    },
    {
      icon: <Users />,
      title: "Our Values",
      desc: "Integrity, Innovation, and Impact — we uphold these principles in every partnership, ensuring transparency and excellence.",
    },
  ];

  return (
    <section className="relative py-24 px-6 md:px-16 lg:px-24 bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-[#0e0e0e] dark:via-[#141414] dark:to-[#1b1b1b]">

      <div className="absolute right-0 top-0 w-1 bg-[#ff7722] h-full hidden md:block rounded-r-lg" />

      {/* Background Accent */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[radial-gradient(circle_at_30%_20%,#ff7722_0%,transparent_60%)]" />

      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center relative z-10"
      >
        <h2 className="text-5xl md:text-5xl font-bold text-[#ff7722] mb-4">
          About Us
        </h2>
        <p className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300 leading-relaxed">
          We are a forward-thinking team of designers and developers dedicated
          to crafting impactful digital experiences. With a balance of
          creativity and technical precision, we help businesses build
          meaningful online identities and long-term trust.
        </p>
      </motion.div>

      {/* Vision / Mission / Values */}
      <div className="max-w-6xl mx-auto mt-20 grid md:grid-cols-3 gap-8">
        {values.map((val, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="relative bg-white/90 dark:bg-[#1f1f1f]/90 backdrop-blur-xl p-10 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-[0_8px_24px_rgba(255,119,34,0.25)] transition-all duration-300"
          >
            <div className="text-[#ff7722] mb-4 flex justify-center">
              {val.icon}
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
              {val.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {val.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Expertise Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-24 mb-12"
      >
        <h3 className="text-4xl font-bold text-[#ff7722] mb-6">
          What We Excel At
        </h3>
        <p className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
          From intuitive UI/UX to scalable software architecture, our expertise
          lies in delivering reliability, efficiency, and innovation — ensuring
          every digital product feels trustworthy and performs flawlessly.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
        {highlights.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -8, scale: 1.04 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-[#1c1c1c] p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 hover:border-[#ff7722]/50 hover:shadow-[0_6px_20px_rgba(255,119,34,0.25)] transition-all duration-300"
          >
            <div className="text-[#ff7722] mb-4 flex justify-center">
              {item.icon}
            </div>
            <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
              {item.title}
            </h4>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* 🧮 Analytics / Stats Section */}
      <AnalyticsStats />

      {/* Trust Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="mt-20 flex flex-col items-center"
      >
        <div className="flex items-center gap-3 text-[#ff7722] mb-3">
          <ShieldCheck size={28} />
          <span className="font-semibold text-lg">
            Trusted by businesses nationwide
          </span>
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-center max-w-xl">
          Our work reflects consistency, ethics, and trust — the pillars that
          make us a reliable digital partner for startups and enterprises alike.
        </p>
      </motion.div>
    </section>
  );
};

// 🔢 Animated Analytics Component
const AnalyticsStats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [projects, setProjects] = useState(0);
  const [years, setYears] = useState(0);
  const [support, setSupport] = useState(0);

  useEffect(() => {
    if (isInView) {
      const animateValue = (setValue, target, duration = 1500) => {
        let start = Math.floor(Math.random() * target);
        const increment = (target - start) / (duration / 16);
        const timer = setInterval(() => {
          start += increment;
          if (start >= target) {
            start = target;
            clearInterval(timer);
          }
          setValue(Math.floor(start));
        }, 16);
      };

      animateValue(setProjects, 150);
      animateValue(setYears, 5);
      animateValue(setSupport, 24);
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="max-w-5xl mx-auto mt-24 flex flex-col sm:flex-row justify-center items-center text-center text-gray-900 dark:text-white"
    >
      <div className="flex flex-col items-center px-6">
        <h4 className="text-5xl font-bold text-[#ff7722] mb-2">{projects}+</h4>
        <p className="text-gray-700 dark:text-gray-300 font-medium">
          Projects Completed
        </p>
      </div>

      {/* Divider (responsive) */}
      <div className="sm:block hidden w-px h-14 bg-gray-300 dark:bg-gray-600 mx-6"></div>
      <div className="block sm:hidden w-2/3 h-px bg-gray-300 dark:bg-gray-600 my-6"></div>

      <div className="flex flex-col items-center px-6">
        <h4 className="text-5xl font-bold text-[#ff7722] mb-2">{years}+</h4>
        <p className="text-gray-700 dark:text-gray-300 font-medium">
          Years of Experience
        </p>
      </div>

      {/* Divider (responsive) */}
      <div className="sm:block hidden w-px h-14 bg-gray-300 dark:bg-gray-600 mx-6"></div>
      <div className="block sm:hidden w-2/3 h-px bg-gray-300 dark:bg-gray-600 my-6"></div>

      <div className="flex flex-col items-center px-6">
        <h4 className="text-5xl font-bold text-[#ff7722] mb-2">{support}/7</h4>
        <p className="text-gray-700 dark:text-gray-300 font-medium">
          Customer Support
        </p>
      </div>
    </motion.div>
  );
};

export default About;



