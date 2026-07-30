import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import portfolioData from "./portfolioData";
import PortfolioCard from "./PortfolioCard";

export default function Portfolio() {
  const featured = portfolioData.filter((project) => project.featured);

  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-[#080808] py-24 sm:py-32"
    >
      {/* Background Ambient Glows & Grid */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="absolute top-20 left-0 h-96 w-96 rounded-full bg-[#d4af37]/5 blur-[150px]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-[#d4af37]/10 blur-[180px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center sm:mb-20"
        >
          <div className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-[#d4af37]/30 bg-white/5 px-4 py-2 backdrop-blur-md shadow-[0_0_20px_rgba(212,175,55,0.1)]">
            <Sparkles className="text-[#d4af37]" size={16} />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d4af37] sm:text-sm">
              Our Portfolio
            </span>
          </div>

          <h2 className="font-poppins text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Crafting Digital{" "}
            <span className="bg-gradient-to-r from-[#d4af37] via-yellow-300 to-[#d4af37] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(212,175,55,0.2)]">
              Success Stories
            </span>
          </h2>

          <p className="mt-6 text-base leading-relaxed text-gray-400 sm:text-lg sm:leading-8">
            Explore some of our recent projects that demonstrate how we
            transform ideas into modern, scalable, and engaging digital
            experiences.
          </p>
        </motion.div>

        {/* Featured Projects Responsive Grid */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="h-full"
            >
              <PortfolioCard project={project} index={index} />
            </motion.div>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-16 sm:mt-20 flex justify-center">
          <Link
            to="/portfolio"
            className="group inline-flex items-center gap-3 rounded-full border border-[#d4af37]/30 bg-white/[0.03] px-8 py-4 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-[#d4af37] hover:bg-[#d4af37] hover:text-black hover:shadow-[0_0_35px_rgba(212,175,55,0.4)]"
          >
            <span>View Full Portfolio</span>
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