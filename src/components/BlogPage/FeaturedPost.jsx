import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Clock3, ArrowRight, User, Sparkles } from "lucide-react";

export default function FeaturedPost() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-20 sm:py-28 text-white">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-[#d4af37]/10 blur-[180px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-[#d4af37]/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-[#d4af37]/30 bg-white/5 px-4 py-2 backdrop-blur-md shadow-[0_0_20px_rgba(212,175,55,0.1)]">
            <Sparkles className="text-[#d4af37]" size={16} />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d4af37] sm:text-sm">
              Featured Article
            </span>
          </div>

          <h2 className="font-poppins text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Editor's{" "}
            <span className="bg-gradient-to-r from-[#d4af37] via-yellow-300 to-[#d4af37] bg-clip-text text-transparent">
              Pick
            </span>
          </h2>
        </motion.div>

        {/* Featured Card */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ y: -6 }}
          className="group overflow-hidden rounded-[32px] sm:rounded-[40px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl shadow-[0_30px_90px_rgba(0,0,0,0.6)]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop"
                alt="Featured Blog"
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-105 sm:h-96 lg:h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-14">
              <span className="w-fit rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 px-4 py-1.5 font-mono text-xs font-semibold text-[#d4af37]">
                Web Development
              </span>

              <h3 className="mt-6 font-poppins text-2xl font-extrabold leading-tight text-white transition group-hover:text-[#d4af37] sm:text-3xl lg:text-4xl">
                10 Modern Web Development Trends Every Business Should Know in
                2026
              </h3>

              <p className="mt-5 text-base leading-relaxed text-gray-300">
                Discover the latest technologies, frameworks and design
                practices shaping modern web applications. Learn how AI, cloud
                computing and performance optimisation are transforming digital
                experiences.
              </p>

              {/* Meta */}
              <div className="mt-8 flex flex-wrap gap-6 text-xs sm:text-sm text-gray-400 font-medium">
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-[#d4af37]" />
                  <span>July 20, 2026</span>
                </div>

                <div className="flex items-center gap-2">
                  <Clock3 size={16} className="text-[#d4af37]" />
                  <span>8 min read</span>
                </div>

                <div className="flex items-center gap-2">
                  <User size={16} className="text-[#d4af37]" />
                  <span>Riyadvi Team</span>
                </div>
              </div>

              <div className="mt-10">
                <Link
                  to="/blog/modern-web-development-trends-2026"
                  className="group/link inline-flex items-center gap-2.5 rounded-full bg-[#d4af37] px-7 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(212,175,55,0.35)]"
                >
                  <span>Read Full Article</span>
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover/link:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}