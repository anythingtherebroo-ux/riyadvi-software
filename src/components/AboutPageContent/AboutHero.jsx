import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, Sparkles, Target, Users, Award } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#080808] pt-36 sm:pt-40 lg:pt-44 pb-20 sm:pb-28 text-white">
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
          <ChevronRight size={14} className="text-gray-600" />
          <span className="text-[#d4af37]">About Us</span>
        </motion.div>

        {/* Content Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#d4af37]/30 bg-white/5 px-4 py-2 backdrop-blur-md shadow-[0_0_20px_rgba(212,175,55,0.1)]">
            <Sparkles className="text-[#d4af37]" size={16} />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d4af37] sm:text-sm">
              Empowering Digital Transformation
            </span>
          </div>

          <h1 className="font-poppins text-4xl font-extrabold leading-tight text-white sm:text-6xl lg:text-6xl">
            Architecting the Future of{" "}
            <span className="bg-gradient-to-r from-[#d4af37] via-yellow-300 to-[#d4af37] bg-clip-text text-transparent">
              Digital Innovation
            </span>
          </h1>

          <p className="mt-6 text-base leading-relaxed text-gray-300 sm:text-lg sm:leading-8">
            At Riyadvi Software Technologies, we combine cutting-edge software engineering, high-impact design, and strategic vision to build products that scale.
          </p>
        </motion.div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3 lg:gap-8"
        >
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#d4af37]/20 bg-[#d4af37]/10 text-[#d4af37]">
              <Target size={28} />
            </div>
            <h3 className="font-poppins text-xl font-bold text-white">Mission-Driven</h3>
            <p className="mt-2 text-sm text-gray-400">Delivering world-class tech products engineered for growth.</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#d4af37]/20 bg-[#d4af37]/10 text-[#d4af37]">
              <Users size={28} />
            </div>
            <h3 className="font-poppins text-xl font-bold text-white">Expert Team</h3>
            <p className="mt-2 text-sm text-gray-400">Engineers, designers, and strategists with deep domain skills.</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#d4af37]/20 bg-[#d4af37]/10 text-[#d4af37]">
              <Award size={28} />
            </div>
            <h3 className="font-poppins text-xl font-bold text-white">Excellence Focused</h3>
            <p className="mt-2 text-sm text-gray-400">Trusted by startups and enterprises across the globe.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}