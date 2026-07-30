import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop";

export default function PortfolioCard({ project, featured = false }) {
  if (!project) return null;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -8 }}
      className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl transition-all duration-500 hover:border-[#d4af37]/40 hover:bg-white/[0.07] hover:shadow-[0_20px_60px_rgba(212,175,55,0.15)] ${
        featured ? "md:col-span-2 md:row-span-2" : ""
      }`}
    >
      {/* Top Media Container */}
      <div className="relative overflow-hidden">
        <img
          src={project.image || FALLBACK_IMAGE}
          alt={`${project.title || "Portfolio"} Project`}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = FALLBACK_IMAGE;
          }}
          className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
            featured ? "h-[380px] sm:h-[480px]" : "h-[240px] sm:h-[280px]"
          }`}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent" />

        {/* Category Pill */}
        <div className="absolute left-5 top-5">
          <span className="rounded-full border border-[#d4af37]/30 bg-black/60 px-3.5 py-1.5 font-mono text-xs font-semibold tracking-wider text-[#d4af37] backdrop-blur-md">
            {project.category || "Project"}
          </span>
        </div>

        {/* Client Pill */}
        <div className="absolute bottom-4 left-5">
          <span className="rounded-full border border-white/10 bg-white/10 px-3.5 py-1 text-xs text-white backdrop-blur-md font-medium">
            Client: {project.client || "Confidential"}
          </span>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
        <div>
          <h3 className="font-poppins text-2xl font-bold text-white transition-colors duration-300 group-hover:text-[#d4af37]">
            {project.title || "Untitled Project"}
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-gray-400 transition-colors group-hover:text-gray-300 line-clamp-3">
            {project.problem || project.description}
          </p>

          {/* Result Highlight Box */}
          <div className="mt-6 rounded-2xl border border-[#d4af37]/20 bg-[#d4af37]/10 p-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#d4af37]">
              Key Result
            </span>
            <p className="mt-1 font-poppins text-sm font-semibold text-white">
              {project.result || "Successfully delivered business value."}
            </p>
          </div>

          {/* Tools Used Pills */}
          <div className="mt-6 flex flex-wrap gap-2">
            {(project.technologies || project.tech || []).slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Card Footer Actions */}
        <div className="mt-8 flex items-center justify-between pt-4 border-t border-white/10">
          <Link
            to={`/portfolio/${project.slug || project._id}`}
            className="group/link inline-flex items-center gap-2 font-semibold text-[#d4af37] transition-all duration-300 hover:gap-3 hover:text-yellow-300"
          >
            <span>View Case Study</span>
            <ArrowRight
              size={16}
              className="transition-transform group-hover/link:translate-x-1"
            />
          </Link>

          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition hover:border-[#d4af37] hover:bg-[#d4af37] hover:text-black"
            >
              <ExternalLink size={16} />
            </a>
          ) : (
            <button
              type="button"
              disabled
              className="flex h-10 w-10 cursor-not-allowed items-center justify-center rounded-full border border-white/10 opacity-40 text-gray-500"
            >
              <ExternalLink size={16} />
            </button>
          )}
        </div>
      </div>
    </motion.article>
  );
}