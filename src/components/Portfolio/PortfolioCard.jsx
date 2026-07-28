import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

const PortfolioCard = ({ project }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group overflow-hidden rounded-[28px] border border-white/10 bg-[#111111] shadow-lg transition-all duration-500 hover:border-[#D4AF37]/40 hover:shadow-[0_0_40px_rgba(212,175,55,.18)]"
    >

      {/* Image */}

      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        <span className="absolute left-5 top-5 rounded-full bg-[#D4AF37] px-4 py-2 text-sm font-semibold text-black">
          {project.category}
        </span>
      </div>

      {/* Content */}

      <div className="p-7">
        <h3 className="text-2xl font-bold text-white transition group-hover:text-[#D4AF37]">
          {project.title}
        </h3>

        <p className="mt-4 line-clamp-3 leading-7 text-gray-400">
          {project.description}
        </p>

        {project.tech && (
          <p className="mt-4 text-sm font-medium text-[#D4AF37]">
            {project.tech}
          </p>
        )}

        <div className="mt-8 flex items-center justify-between">

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-[#D4AF37]/40 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37]"
            >
              <FaGithub size={16} />
            </a>
          )}

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="group/link inline-flex items-center gap-2 font-semibold text-[#D4AF37] transition hover:text-white"
            >
              View Project
              <FaArrowRight className="transition-transform duration-300 group-hover/link:translate-x-1" />
            </a>
          )}

          {!project.link && (
            <button className="inline-flex items-center gap-2 font-semibold text-[#D4AF37]">
              Explore
              <FaExternalLinkAlt size={14} />
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;