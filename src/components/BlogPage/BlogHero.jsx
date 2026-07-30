import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Sparkles, TrendingUp, ChevronRight } from "lucide-react";

export default function BlogHero() {
  return (
    <section className="relative overflow-hidden bg-[#080808] pt-36 sm:pt-40 lg:pt-44 pb-20 sm:pb-24 text-white">
      {/* Ambient Background Glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-[#d4af37]/15 blur-[160px]" />
        <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-[#d4af37]/5 blur-[140px]" />
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
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 flex items-center gap-2 text-xs sm:text-sm text-gray-400 font-medium"
        >
          <Link to="/" className="transition hover:text-[#d4af37]">
            Home
          </Link>
          <ChevronRight size={14} className="text-[#d4af37]" />
          <span className="text-[#d4af37]">Blog</span>
        </motion.div>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#d4af37]/30 bg-white/5 px-4 py-2 backdrop-blur-md shadow-[0_0_20px_rgba(212,175,55,0.1)]">
              <Sparkles className="text-[#d4af37]" size={16} />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d4af37] sm:text-sm">
                Riyadvi Insights
              </span>
            </div>

            <h1 className="font-poppins text-4xl font-extrabold leading-tight text-white sm:text-6xl lg:text-6xl 2xl:text-7xl">
              Ideas That{" "}
              <span className="bg-gradient-to-r from-[#d4af37] via-yellow-300 to-[#d4af37] bg-clip-text text-transparent">
                Inspire Innovation
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed">
              Explore in-depth analysis, engineering tutorials, industry trends, and creative insights from our core development team.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#articles"
                className="group inline-flex items-center gap-2.5 rounded-full bg-[#d4af37] px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(212,175,55,0.45)]"
              >
                <span>Explore Articles</span>
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>
          </motion.div>

          {/* Right Feature Highlights Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="rounded-3xl border border-white/15 bg-white/[0.04] p-8 backdrop-blur-2xl shadow-[0_30px_90px_rgba(0,0,0,0.65)] space-y-6">
              {/* Item 1 */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#d4af37]/20 bg-[#d4af37]/10 text-[#d4af37]">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h3 className="font-poppins text-lg font-bold text-white">
                    Practical Guides
                  </h3>
                  <p className="mt-1 text-sm text-gray-400">
                    Actionable tutorials and development tips.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start gap-4 border-t border-white/10 pt-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#d4af37]/20 bg-[#d4af37]/10 text-[#d4af37]">
                  <TrendingUp size={24} />
                </div>
                <div>
                  <h3 className="font-poppins text-lg font-bold text-white">
                    Industry Trends
                  </h3>
                  <p className="mt-1 text-sm text-gray-400">
                    Discover what's shaping the future of technology.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-start gap-4 border-t border-white/10 pt-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#d4af37]/20 bg-[#d4af37]/10 text-[#d4af37]">
                  <Sparkles size={24} />
                </div>
                <div>
                  <h3 className="font-poppins text-lg font-bold text-white">
                    Expert Insights
                  </h3>
                  <p className="mt-1 text-sm text-gray-400">
                    Learn directly from our engineers and designers.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}