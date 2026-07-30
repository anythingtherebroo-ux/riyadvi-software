import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

export default function PortfolioCard({ project, index }) {
  const code = String(index + 1).padStart(2, "0");

  return (
    <article
      className="
      group
      relative
      flex
      h-full
      flex-col
      justify-between
      overflow-hidden
      rounded-3xl
      border
      border-white/10
      bg-white/[0.04]
      backdrop-blur-xl
      transition-all
      duration-500
      hover:-translate-y-2
      hover:border-[#d4af37]/50
      hover:bg-white/[0.07]
      hover:shadow-[0_25px_60px_rgba(212,175,55,0.18)]
      "
    >
      {/* Top Gold Highlight Bar on Hover */}
      <div className="absolute left-0 top-0 z-20 h-[3px] w-full origin-left bg-gradient-to-r from-transparent via-[#d4af37] to-transparent scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100" />

      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-60 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-64"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent" />

        {/* Category Pill */}
        <span className="absolute left-5 top-5 rounded-full bg-[#d4af37] px-3.5 py-1.5 font-mono text-xs font-semibold text-black shadow-[0_0_15px_rgba(212,175,55,0.3)]">
          {project.category}
        </span>

        {/* Index Code Badge */}
        <span className="absolute right-5 top-5 rounded-full border border-white/20 bg-black/60 px-3 py-1.5 font-mono text-xs font-bold text-white backdrop-blur-md">
          {code}
        </span>
      </div>

      {/* Card Content Body */}
      <div className="flex flex-1 flex-col justify-between p-7 sm:p-8">
        <div>
          <h3 className="mb-3 font-poppins text-2xl font-bold text-white transition-colors duration-300 group-hover:text-[#d4af37]">
            {project.title}
          </h3>

          <p className="mb-6 text-sm leading-relaxed text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
            {project.description}
          </p>

          {/* Tech Tags */}
          {project.technologies && (
            <div className="mb-8 flex flex-wrap gap-2">
              {project.technologies.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 px-3.5 py-1 text-xs font-medium text-[#d4af37]"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Footer Actions: View Case Study & Live Site Link */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <Link
            to={`/portfolio/${project.slug || project.id}`}
            className="group/link inline-flex items-center gap-2 font-semibold text-[#d4af37] transition-all duration-300 hover:gap-3.5 hover:text-yellow-300"
          >
            <span>View Case Study</span>
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover/link:translate-x-1"
            />
          </Link>

          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noreferrer"
              title="Visit Live Site"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition hover:border-[#d4af37] hover:bg-[#d4af37] hover:text-black"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}