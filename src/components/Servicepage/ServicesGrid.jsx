import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { servicesList } from "./ServiceData";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 35 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ServicesGrid() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-24 sm:py-32 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#d4af37]/10 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#d4af37]/10 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center sm:mb-20"
        >
          <div className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-[#d4af37]/30 bg-white/5 px-4 py-2 backdrop-blur-md shadow-[0_0_20px_rgba(212,175,55,0.1)]">
            <Sparkles className="text-[#d4af37]" size={16} />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d4af37] sm:text-sm">
              Our Expertise
            </span>
          </div>

          <h2 className="font-poppins text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Six Disciplines.{" "}
            <span className="bg-gradient-to-r from-[#d4af37] via-yellow-300 to-[#d4af37] bg-clip-text text-transparent">
              One Partner.
            </span>
          </h2>

          <p className="mt-6 text-base leading-relaxed text-gray-400 sm:text-lg sm:leading-8">
            Explore each service to see the problems we solve, the tools we
            use, and the industries we've delivered results for.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
        >
          {servicesList.map((service) => {
            const Icon = service.icon;

            return (
              <motion.div key={service.slug} variants={item} className="h-full">
                <Link
                  to={`/services/${service.slug}`}
                  className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 sm:p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#d4af37]/50 hover:bg-white/[0.07] hover:shadow-[0_20px_60px_rgba(212,175,55,0.15)]"
                >
                  <div className="absolute left-0 top-0 h-[3px] w-full origin-left bg-gradient-to-r from-transparent via-[#d4af37] to-transparent scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100" />
                  <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#d4af37]/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

                  <div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#d4af37]/20 bg-[#d4af37]/10 text-[#d4af37] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                      <Icon size={28} />
                    </div>

                    <h3 className="mt-6 font-poppins text-2xl font-bold text-white transition-colors group-hover:text-[#d4af37]">
                      {service.title}
                    </h3>

                    <p className="mt-4 leading-relaxed text-gray-400 transition-colors group-hover:text-gray-300">
                      {service.subtitle}
                    </p>
                  </div>

                  <div className="mt-8 pt-4">
                    <div className="flex items-center gap-2 font-semibold text-[#d4af37] transition-all duration-300 group-hover:gap-4 group-hover:text-yellow-300">
                      <span>Explore Service</span>
                      <ArrowRight size={18} />
                    </div>

                    <div className="mt-6 h-[2px] w-12 bg-[#d4af37] transition-all duration-500 group-hover:w-full" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}