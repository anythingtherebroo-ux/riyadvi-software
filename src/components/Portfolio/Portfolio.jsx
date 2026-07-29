import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import portfolioData from "./portfolioData";
import PortfolioCard from "./PortfolioCard";

export default function Portfolio() {
  const featured = portfolioData.filter((project) => project.featured);

  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-[#080808] py-24"
    >
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-0 h-96 w-96 rounded-full bg-[#d4af37]/5 blur-[150px]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-[#d4af37]/10 blur-[180px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af37]">
            <span className="h-[2px] w-10 bg-[#d4af37]" />
            Our Portfolio
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white lg:text-5xl">
            Crafting Digital
            <span className="text-[#d4af37]"> Success Stories</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Explore some of our recent projects that demonstrate how we transform ideas into modern, scalable, and engaging digital experiences.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {featured.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .5,
                delay: index * .15,
              }}
              viewport={{ once: true }}
            >
              <PortfolioCard
                project={project}
                index={index}
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <Link
            to="/portfolio"
            className="group inline-flex items-center gap-3 rounded-full border border-[#d4af37]/30 px-8 py-4 font-semibold text-white transition-all duration-300 hover:border-[#d4af37] hover:bg-[#d4af37] hover:text-black"
          >
            View Full Portfolio
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

      </div>
    </section>
  );
}