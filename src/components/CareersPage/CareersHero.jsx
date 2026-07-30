import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Briefcase, Sparkles, ChevronRight } from "lucide-react";

export default function CareersHero() {
  return (
    <section className="relative overflow-hidden bg-[#080808] pt-36 sm:pt-40 lg:pt-44 pb-20 sm:pb-24 text-white">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-36 left-1/2 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-[#d4af37]/15 blur-[160px]" />
        <div className="absolute right-0 bottom-0 h-[350px] w-[350px] rounded-full bg-[#d4af37]/5 blur-[130px]" />
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
          <ChevronRight size={14} className="text-gray-600" />
          <span className="text-[#d4af37]">Careers</span>
        </motion.div>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#d4af37]/30 bg-white/5 px-4 py-2 backdrop-blur-md shadow-[0_0_20px_rgba(212,175,55,0.1)]">
              <Sparkles className="text-[#d4af37]" size={16} />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d4af37] sm:text-sm">
                Join Our Team
              </span>
            </div>

            <h1 className="font-poppins text-4xl font-extrabold leading-tight text-white sm:text-6xl lg:text-6xl 2xl:text-7xl">
              Build The{" "}
              <span className="bg-gradient-to-r from-[#d4af37] via-yellow-300 to-[#d4af37] bg-clip-text text-transparent">
                Future With Riyadvi
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-300 sm:text-lg sm:leading-8">
              We're looking for passionate designers, developers, marketers and
              innovators who want to create exceptional digital products and shape
              the future of technology.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4 sm:gap-5">
              <a
                href="#jobs"
                className="group inline-flex items-center gap-2.5 rounded-full bg-[#d4af37] px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(212,175,55,0.45)]"
              >
                <span>View Open Roles</span>
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.03] px-8 py-4 font-semibold text-white backdrop-blur-md transition hover:border-[#d4af37] hover:text-[#d4af37]"
              >
                Contact HR
              </Link>
            </div>
          </motion.div>

          {/* Right Highlights & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="rounded-3xl border border-white/15 bg-white/[0.04] p-8 backdrop-blur-2xl shadow-[0_30px_90px_rgba(0,0,0,0.65)] space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#d4af37]/20 bg-[#d4af37]/10 text-[#d4af37]">
                  <Users size={24} />
                </div>
                <div>
                  <h3 className="font-poppins text-lg font-bold text-white">
                    Collaborative Culture
                  </h3>
                  <p className="mt-1 text-sm text-gray-400">
                    Work alongside professionals who value creativity & teamwork.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 border-t border-white/10 pt-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#d4af37]/20 bg-[#d4af37]/10 text-[#d4af37]">
                  <Briefcase size={24} />
                </div>
                <div>
                  <h3 className="font-poppins text-lg font-bold text-white">
                    Exciting Projects
                  </h3>
                  <p className="mt-1 text-sm text-gray-400">
                    Build modern websites, AI products, and enterprise software.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 border-t border-white/10 pt-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#d4af37]/20 bg-[#d4af37]/10 text-[#d4af37]">
                  <Sparkles size={24} />
                </div>
                <div>
                  <h3 className="font-poppins text-lg font-bold text-white">
                    Continuous Growth
                  </h3>
                  <p className="mt-1 text-sm text-gray-400">
                    Learn new technologies and grow your career with us.
                  </p>
                </div>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6 text-center">
                <div>
                  <h4 className="font-poppins text-2xl font-extrabold text-[#d4af37]">
                    10+
                  </h4>
                  <p className="text-xs text-gray-400 mt-0.5">Open Roles</p>
                </div>
                <div>
                  <h4 className="font-poppins text-2xl font-extrabold text-[#d4af37]">
                    50+
                  </h4>
                  <p className="text-xs text-gray-400 mt-0.5">Team Members</p>
                </div>
                <div>
                  <h4 className="font-poppins text-2xl font-extrabold text-[#d4af37]">
                    100+
                  </h4>
                  <p className="text-xs text-gray-400 mt-0.5">Projects</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}