import { motion } from "framer-motion";
import { timeline } from "./aboutData";

export default function Timeline() {
  return (
    <section className="relative bg-[#080808] py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-0 h-80 w-80 rounded-full bg-[#D4AF37]/10 blur-[140px]" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#D4AF37]/5 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
            <span className="h-px w-12 bg-[#D4AF37]" />
            Company Journey
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Our <span className="text-[#D4AF37]">Timeline</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Every milestone represents our passion for innovation,
            quality engineering and building lasting relationships.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">

          <div className="absolute left-5 top-0 h-full w-px bg-[#2A2A2A] md:left-1/2 md:-translate-x-1/2" />

          {timeline.map((item, index) => {
            const Icon = item.icon;
            const left = index % 2 === 0;

            return (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: .5, delay: index * .1 }}
                viewport={{ once: true }}
                className={`relative mb-16 flex w-full ${
                  left ? "md:justify-start" : "md:justify-end"
                }`}
              >
                <div className="w-full pl-16 md:w-[46%] md:pl-0">

                  <div className="rounded-3xl border border-[#2A2A2A] bg-[#141414]/90 backdrop-blur-xl p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#D4AF37]/50 hover:shadow-[0_20px_60px_rgba(212,175,55,.15)]">

                    <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                      {item.year}
                    </span>

                    <div className="mt-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37]">
                      <Icon size={26} />
                    </div>

                    <h3 className="mt-6 text-2xl font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-4 leading-8 text-gray-400">
                      {item.description}
                    </p>

                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-5 top-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-4 border-[#080808] bg-[#D4AF37] md:left-1/2">
                  <div className="h-3 w-3 rounded-full bg-black" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}