import ServiceCard from "../components/ServiceCard";
import { motion } from "framer-motion";

const services = [
  { title: "Software Development", desc: "Custom web and mobile solutions for all business needs." },
  { title: "Website Development", desc: "Responsive, modern, and SEO-friendly websites." },
  { title: "Application Development", desc: "Cross-platform apps with smooth UI/UX." },
  { title: "Maintenance & Testing", desc: "Reliable maintenance and bug-free applications." },
  { title: "UI/UX Design", desc: "User-centered, intuitive, and modern designs." },
  { title: "Graphic & Logo Design", desc: "Creative branding and identity solutions." },
  { title: "E-Commerce Account Management", desc: "End-to-end Amazon, Flipkart & Meesho seller account management." },
];

const ServicesCard = () => {
  return (
    <section className="py-20 px-6 md:px-16 lg:px-24 bg-gray-50 dark:bg-[#1a1a1a]">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-12 text-[#ff7722]"
      >
        Services
      </motion.h2>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <ServiceCard key={i} title={service.title} desc={service.desc} delay={i * 0.2} />
        ))}
      </div>
    </section>
  );
};

export default ServicesCard;
