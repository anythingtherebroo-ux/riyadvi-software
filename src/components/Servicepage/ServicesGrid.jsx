import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { servicesList } from "./ServiceData";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function ServicesGrid() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-24 text-white">
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-[#D4AF37]">
            Our Expertise
          </span>

          <h2 className="mt-8 text-4xl font-black lg:text-5xl">
            Six Disciplines.
            <span className="text-[#D4AF37]"> One Partner.</span>
          </h2>

          <p className="mt-6 text-lg text-gray-400">
            Explore each service to see the problems we solve, the tools we
            use, and the industries we've delivered results for.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
        >
          {servicesList.map((service) => {
            const Icon = service.icon;

            return (
              <motion.div key={service.slug} variants={item}>
                <Link
                  to={`/services/${service.slug}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#D4AF37]/40 hover:bg-white/10 hover:shadow-[0_0_50px_rgba(212,175,55,0.15)]"
                >
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#D4AF37]/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37] transition group-hover:scale-110">
                    <Icon size={28} />
                  </div>

                  <h3 className="mt-8 text-2xl font-bold">
                    {service.title}
                  </h3>

                  <p className="mt-4 flex-1 leading-7 text-gray-400">
                    {service.subtitle}
                  </p>

                  <div className="mt-8 flex items-center gap-2 font-semibold text-[#D4AF37] transition group-hover:gap-4">
                    Explore Service
                    <ArrowRight size={18} />
                  </div>

                  <div className="mt-6 h-[2px] w-16 bg-[#D4AF37] transition-all duration-500 group-hover:w-full" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
