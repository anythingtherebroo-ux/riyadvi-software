import { ArrowUpRight } from "lucide-react";

export default function PortfolioCard({ project, index }) {
  const code = String(index + 1).padStart(2, "0");

  return (
    <article
      className="
      group
      overflow-hidden
      rounded-3xl
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      transition-all
      duration-500
      hover:-translate-y-3
      hover:border-[#d4af37]/40
      hover:shadow-[0_25px_60px_rgba(212,175,55,.18)]
      "
    >
      <div className="relative overflow-hidden">

        <img
          src={project.image}
          alt={project.title}
          className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <span className="absolute left-5 top-5 rounded-full bg-[#d4af37] px-4 py-2 text-xs font-semibold text-black">
          {project.category}
        </span>

        <span className="absolute right-5 top-5 rounded-full border border-white/20 bg-black/60 px-3 py-2 text-xs font-bold text-white backdrop-blur">
          {code}
        </span>

      </div>

      <div className="p-8">

        <h3 className="mb-4 text-2xl font-bold text-white">
          {project.title}
        </h3>

        <p className="mb-6 leading-8 text-gray-400">
          {project.description}
        </p>

        {project.technologies && (
          <div className="mb-8 flex flex-wrap gap-3">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 px-4 py-2 text-sm text-[#d4af37]"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noreferrer"
            className="group/link inline-flex items-center gap-2 font-semibold text-[#d4af37]"
          >
            View Project

            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
            />
          </a>
        )}

      </div>
    </article>
  );
}