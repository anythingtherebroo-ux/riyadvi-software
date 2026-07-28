import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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

    return projects.filter(
      (project) => project.category === activeFilter
    );
  }, [activeFilter]);

  const displayedProjects = filteredProjects.slice(0, visibleProjects);

  const handleFilter = (filter) => {
    setActiveFilter(filter);
    setVisibleProjects(6);
  };

  return (
    <section className="relative overflow-hidden bg-black py-24">

      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-[#D4AF37]/10 blur-[140px]" />

      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-[#D4AF37]/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-16 text-center">

          <span className="rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-[#D4AF37]">
            Featured Work
          </span>

          <h2 className="mt-8 text-5xl font-black text-white">

            Explore Our

            <span className="text-[#D4AF37]">
              {" "}Latest Projects
            </span>

          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">

            Every project represents our passion for creating
            digital products that deliver measurable business value.

          </p>

        </div>

        {/* Filters */}

        <div className="mb-16 flex flex-wrap justify-center gap-4">

          {filters.map((filter) => (

            <button
              key={filter}
              onClick={() => handleFilter(filter)}
              className={`rounded-full px-6 py-3 transition-all duration-300

              ${
                activeFilter === filter
                  ? "bg-[#D4AF37] text-black shadow-lg"
                  : "border border-white/10 bg-white/5 text-white hover:border-[#D4AF37] hover:text-[#D4AF37]"
              }`}
            >
              {filter}
            </button>

          ))}

        </div>

        {/* Grid */}

        <AnimatePresence mode="wait">

          <motion.div
            key={activeFilter}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: .4,
            }}
            className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
          >

            {displayedProjects.map((project, index) => (

              <PortfolioCard
                key={project.id}
                project={project}
                featured={index === 0}
              />

            ))}

          </motion.div>

        </AnimatePresence>

        {/* Empty State */}

        {filteredProjects.length === 0 && (

          <div className="py-24 text-center">

            <h3 className="text-3xl font-bold text-white">
              No projects found.
            </h3>

            <p className="mt-4 text-gray-400">
              Please choose another category.
            </p>

          </div>

        )}

        {/* Load More */}

        {visibleProjects < filteredProjects.length && (

          <div className="mt-20 flex justify-center">

            <button
              onClick={() =>
                setVisibleProjects((prev) => prev + 3)
              }
              className="rounded-xl bg-[#D4AF37] px-10 py-4 font-semibold text-black transition hover:scale-105 hover:shadow-[0_0_35px_rgba(212,175,55,.45)]"
            >
              Load More Projects
            </button>

          </div>

        )}

      </div>

    </section>
  );
}