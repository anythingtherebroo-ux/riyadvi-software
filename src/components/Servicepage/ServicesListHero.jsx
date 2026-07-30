import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function ServicesListHero() {
  return (
    <section className="relative overflow-hidden bg-[#080808] text-white pt-36 sm:pt-40 lg:pt-44 pb-20 lg:pb-28">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-32 h-[420px] w-[420px] rounded-full bg-[#d4af37]/20 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-[#d4af37]/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 text-center lg:px-8">
        <motion.div variants={fadeUp} initial="hidden" animate="show">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/30 bg-white/5 px-4 py-2 backdrop-blur-md shadow-[0_0_20px_rgba(212,175,55,0.1)]">
            <Sparkles className="text-[#d4af37]" size={16} />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d4af37] sm:text-sm">
              What We Do
            </span>
          </div>

          <h1 className="font-poppins text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Digital Solutions Built to{" "}
            <span className="bg-gradient-to-r from-[#d4af37] via-yellow-300 to-[#d4af37] bg-clip-text text-transparent">
              Grow Your Business
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg sm:leading-8">
            From websites to immersive AR/VR experiences, we bring engineering,
            design and strategy together under one roof — so you deal with one
            partner instead of five vendors.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4 sm:gap-5">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[#d4af37] px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(212,175,55,0.45)]"
            >
              <span>Book a Free Consultation</span>
              <ArrowRight
                className="transition-transform duration-300 group-hover:translate-x-1"
                size={18}
              />
            </Link>

            <Link
              to="/portfolio"
              className="inline-flex items-center rounded-full border border-white/20 bg-white/[0.03] px-8 py-4 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-[#d4af37] hover:text-[#d4af37]"
            >
              View Our Work
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}