import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-[#080808] py-20 sm:py-28 text-white">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-[32px] sm:rounded-[40px] border border-[#d4af37]/30 bg-gradient-to-br from-[#111111] via-[#0c0c0c] to-black p-8 text-center shadow-[0_0_80px_rgba(212,175,55,.1)] sm:p-14 lg:p-16"
        >
          <span className="inline-flex rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#d4af37] sm:text-sm">
            Ready To Start?
          </span>

          <h2 className="mx-auto mt-6 max-w-3xl font-poppins text-3xl font-extrabold leading-tight text-white sm:text-5xl">
            Let's Build Your{" "}
            <span className="text-[#d4af37]">Next Digital Success</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg sm:leading-8">
            Whether you need a modern website, scalable web application, mobile
            app, AI solution, branding, or digital marketing, our team is ready
            to transform your ideas into powerful digital experiences.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-5">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[#d4af37] px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(212,175,55,0.45)]"
            >
              <span>Start Your Project</span>
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <a
              href="#booking"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.03] px-8 py-4 font-semibold text-white backdrop-blur-md transition hover:border-[#d4af37] hover:text-[#d4af37]"
            >
              <CalendarDays size={18} className="text-[#d4af37]" />
              <span>Book Free Consultation</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}