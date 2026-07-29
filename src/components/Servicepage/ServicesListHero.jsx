import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function ServicesListHero() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-32 h-[420px] w-[420px] rounded-full bg-[#D4AF37]/20 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-[#D4AF37]/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 pt-32 pb-20 text-center lg:px-8 lg:pt-40 lg:pb-28">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          <span className="inline-flex items-center gap-3 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-2 text-[#D4AF37]">
            <span className="font-medium">What We Do</span>
          </span>

          <h1 className="mt-8 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            Digital Solutions Built to
            <span className="block text-[#D4AF37]">Grow Your Business</span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-300">
            From websites to immersive AR/VR experiences, we bring
            engineering, design and strategy together under one roof — so
            you deal with one partner instead of five vendors.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <Link
              to="/contact"
              className="group inline-flex items-center rounded-xl bg-[#D4AF37] px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(212,175,55,0.45)]"
            >
              Book a Free Consultation
              <ArrowRight
                className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                size={18}
              />
            </Link>

            <Link
              to="/portfolio"
              className="inline-flex items-center rounded-xl border border-white/20 px-8 py-4 transition-all duration-300 hover:border-[#D4AF37] hover:text-[#D4AF37]"
            >
              View Our Work
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
