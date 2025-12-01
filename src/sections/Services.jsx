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
