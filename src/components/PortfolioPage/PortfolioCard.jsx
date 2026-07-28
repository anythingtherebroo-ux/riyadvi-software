import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop";

export default function PortfolioCard({
  project,
  featured = false,
}) {
  if (!project) return null;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -10 }}
      className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0A0A0A] transition-all duration-500 hover:border-[#D4AF37]/40 hover:shadow-[0_0_50px_rgba(212,175,55,0.15)]
      ${featured ? "md:col-span-2 md:row-span-2" : ""}`}
    >
      {/* Image */}

      <div className="relative overflow-hidden">
        <img
          src={project.image || FALLBACK_IMAGE}
          alt={`${project.title || "Portfolio"} Project`}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = FALLBACK_IMAGE;
          }}
          className={`w-full object-cover transition duration-700 group-hover:scale-110
          ${featured ? "h-[480px]" : "h-[320px]"}`}
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

        {/* Category */}

        <div className="absolute left-6 top-6">
          <span className="rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-4 py-2 text-sm font-medium text-[#D4AF37] backdrop-blur-xl">
            {project.category || "Project"}
          </span>
        </div>

        {/* Client */}

        <div className="absolute bottom-6 left-6">
          <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-lg">
            {project.client || "Confidential Client"}
          </span>
        </div>
      </div>

      {/* Content */}

      <div className="p-8">
        <h3 className="text-3xl font-bold text-white transition group-hover:text-[#D4AF37]">
          {project.title || "Untitled Project"}
        </h3>

        <p className="mt-5 leading-7 text-gray-400">
          {project.problem ||
            project.description ||
            "A premium digital solution delivered for the client."}
        </p>

        {/* Result */}

        <div className="mt-8 rounded-2xl border border-[#D4AF37]/15 bg-[#D4AF37]/5 p-5">
          <span className="text-sm uppercase tracking-widest text-[#D4AF37]">
            Result
          </span>

          <p className="mt-3 text-white">
            {project.result ||
              "Successfully delivered measurable business value."}
          </p>
        </div>

        {/* Technologies */}

        <div className="mt-8 flex flex-wrap gap-3">
          {(project.tech || project.technologies || []).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 transition hover:border-[#D4AF37]/40 hover:text-[#D4AF37]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Footer */}

        <div className="mt-10 flex items-center justify-between">
          <Link
            to={`/portfolio/${project._id || project.slug}`}
            className="group/link inline-flex items-center font-semibold text-[#D4AF37]"
            aria-label={`View case study for ${project.title}`}
          >
            View Case Study

            <ArrowRight
              size={18}
              className="ml-2 transition-transform duration-300 group-hover/link:translate-x-2"
            />
          </Link>

          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit live project"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 transition hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black"
            >
              <ExternalLink size={18} />
            </a>
          ) : (
            <button
              type="button"
              disabled
              className="flex h-12 w-12 cursor-not-allowed items-center justify-center rounded-full border border-white/10 opacity-50"
              aria-label="No live project available"
            >
              <ExternalLink size={18} />
            </button>
          )}
        </div>
      </div>

      {/* Hover Glow */}

      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#D4AF37]/10 blur-[120px]" />
      </div>
    </motion.article>
  );
}