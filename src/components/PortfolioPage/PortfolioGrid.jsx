import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import PortfolioCard from "./PortfolioCard";
import { projects } from "./portfolioData";

const filters = [
  "All",
  "Web Development",
  "App Development",
  "UI/UX Design",
  "Digital Marketing",
  "AR/VR",
  "3D Modeling",
];

export default function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [visibleProjects, setVisibleProjects] = useState(6);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  const displayedProjects = filteredProjects.slice(0, visibleProjects);

  const handleFilter = (filter) => {
    setActiveFilter(filter);
    setVisibleProjects(6);
  };

  return (
    <section className="relative overflow-hidden bg-[#050505] py-24 sm:py-32 text-white">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-0 top-0 h-80 w-80 rounded-full bg-[#d4af37]/10 blur-[140px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-80 w-80 rounded-full bg-[#d4af37]/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-14 text-center">
          <div className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-[#d4af37]/30 bg-white/5 px-4 py-2 backdrop-blur-md shadow-[0_0_20px_rgba(212,175,55,0.1)]">
            <Sparkles className="text-[#d4af37]" size={16} />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d4af37] sm:text-sm">
              Featured Work
            </span>
          </div>

          <h2 className="font-poppins text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Explore Our{" "}
            <span className="bg-gradient-to-r from-[#d4af37] via-yellow-300 to-[#d4af37] bg-clip-text text-transparent">
              Latest Projects
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg sm:leading-8">
            Every project represents our passion for creating digital products
            that deliver measurable business value.
          </p>
        </div>

        {/* Category Filters */}
        <div className="mb-16 flex flex-wrap justify-center gap-2.5 sm:gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => handleFilter(filter)}
              className={`rounded-full px-5 py-2.5 text-xs font-semibold sm:text-sm transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-[#d4af37] text-black shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                  : "border border-white/10 bg-white/[0.04] text-gray-300 hover:border-[#d4af37]/40 hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-3"
          >
            {displayedProjects.map((project, index) => (
              <PortfolioCard
                key={project.id || project.slug}
                project={project}
                featured={index === 0 && activeFilter === "All"}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="py-20 text-center">
            <h3 className="font-poppins text-2xl font-bold text-white">
              No projects found in this category.
            </h3>
            <p className="mt-3 text-gray-400">
              Please select another category above.
            </p>
          </div>
        )}

        {/* Load More Button */}
        {visibleProjects < filteredProjects.length && (
          <div className="mt-16 flex justify-center">
            <button
              onClick={() => setVisibleProjects((prev) => prev + 3)}
              className="rounded-full bg-[#d4af37] px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(212,175,55,0.45)]"
            >
              Load More Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
}