import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const ProjectCard = ({ title, desc, tech, link, image, delay = 0 }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      viewport={{ once: true }}
      className="bg-white dark:bg-[#2c2c2c] rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-lg"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-3">{desc}</p>
        <div className="flex flex-wrap gap-2 mb-3">
          {tech.map((t, i) => (
            <span
              key={i}
              className="text-xs px-3 py-1 rounded-full bg-[#ff7722]/10 border border-[#ff7722]/20 text-[#ff7722]"
            >
              {t}
            </span>
          ))}
        </div>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-[#ff7722] hover:text-[#ff7722]/80 transition"
        >
          View Project <ExternalLink size={16} />
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
