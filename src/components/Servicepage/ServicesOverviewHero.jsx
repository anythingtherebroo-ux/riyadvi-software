import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function ServicesOverviewHero() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-[#1a1a1a]" />
        <div className="absolute -top-40 -left-32 h-[420px] w-[420px] rounded-full bg-[#D4AF37]/20 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-[#D4AF37]/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-16 text-center sm:pt-32 sm:pb-20 lg:px-8">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex items-center justify-center gap-2 text-sm text-gray-400"
        >
          <Link to="/" className="transition hover:text-[#D4AF37]">
            Home
          </Link>
          <ChevronRight size={16} />
          <span className="text-[#D4AF37]">Services</span>
        </motion.div>

        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-[#D4AF37] sm:text-sm"
        >
          What We Do
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-4xl text-4xl font-black leading-tight sm:mt-8 sm:text-5xl lg:text-7xl"
        >
          Full-Spectrum
          <span className="block text-[#D4AF37]">Digital Solutions</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-6 max-w-2xl px-2 text-base leading-7 text-gray-300 sm:mt-8 sm:text-lg sm:leading-8"
        >
          From websites and apps to immersive AR/VR and 3D experiences, we
          build every piece of technology your business needs to grow —
          under one roof.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-5 sm:mt-12"
        >
          <Link
            to="/contact"
            className="group inline-flex items-center rounded-xl bg-[#D4AF37] px-6 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(212,175,55,.45)] sm:px-8 sm:py-4 sm:text-base"
          >
            Book a Free Consultation
          </Link>
        </motion.div>
      </div>
    </section>
  );
}