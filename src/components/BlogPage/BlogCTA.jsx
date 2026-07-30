import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, Rocket, Sparkles } from "lucide-react";

export default function BlogCTA() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-20 sm:py-28">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d4af37]/10 blur-[220px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden rounded-[32px] sm:rounded-[40px] border border-[#d4af37]/30 bg-gradient-to-br from-[#111111] via-[#0c0c0c] to-black p-8 text-center shadow-[0_0_80px_rgba(212,175,55,.1)] sm:p-14 lg:p-16"
        >
          <div className="mx-auto max-w-4xl text-center">
            {/* Tag Badge */}
            <div className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-[#d4af37]/30 bg-white/5 px-4 py-2 backdrop-blur-md">
              <Sparkles className="text-[#d4af37]" size={16} />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d4af37]">
                Let's Build Together
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-poppins text-3xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              Ready To Turn{" "}
              <span className="block text-[#d4af37]">Ideas Into Reality?</span>
            </h2>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg sm:leading-8">
              Whether you're planning a modern website, scalable web
              application, mobile app, AI solution, branding project, or
              digital marketing campaign, Riyadvi is ready to help you succeed.
            </p>

            {/* Action Buttons */}
            <div className="mt-10 flex flex-wrap justify-center gap-4 sm:gap-5">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-[#d4af37] px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_45px_rgba(212,175,55,0.45)]"
              >
                <span>Start Your Project</span>
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.03] px-8 py-4 font-semibold text-[#d4af37] backdrop-blur-md transition hover:border-[#d4af37] hover:bg-white/10"
              >
                <Rocket size={18} />
                <span>Explore Services</span>
              </Link>
            </div>

            {/* Features Grid */}
            <div className="mt-16 grid grid-cols-1 gap-6 border-t border-white/10 pt-10 text-center sm:grid-cols-3">
              <div>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-[#d4af37]/20 bg-[#d4af37]/10 text-[#d4af37]">
                  <Rocket size={22} />
                </div>
                <h3 className="mt-4 font-poppins text-lg font-bold text-white">
                  Innovative Solutions
                </h3>
                <p className="mt-1 text-sm text-gray-400">
                  Modern technologies that scale with your business.
                </p>
              </div>

              <div>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-[#d4af37]/20 bg-[#d4af37]/10 text-[#d4af37]">
                  <MessageCircle size={22} />
                </div>
                <h3 className="mt-4 font-poppins text-lg font-bold text-white">
                  Free Consultation
                </h3>
                <p className="mt-1 text-sm text-gray-400">
                  Discuss your project with our experienced team.
                </p>
              </div>

              <div>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-[#d4af37]/20 bg-[#d4af37]/10 text-[#d4af37]">
                  <ArrowRight size={22} />
                </div>
                <h3 className="mt-4 font-poppins text-lg font-bold text-white">
                  Fast Delivery
                </h3>
                <p className="mt-1 text-sm text-gray-400">
                  Efficient development with premium quality standards.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}