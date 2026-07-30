import { motion } from "framer-motion";
import { awards } from "./aboutData";

export default function AwardsSection() {
  return (
    <section className="bg-[#050505] py-24 text-white relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d4af37]/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center mb-16"
        >
          <span className="inline-flex items-center gap-3 uppercase tracking-[4px] text-sm font-semibold text-[#D4AF37]">
            <span className="h-px w-10 bg-[#D4AF37]" />
            Recognition & Excellence
          </span>

          <h2 className="mt-6 font-poppins text-4xl sm:text-5xl font-extrabold text-white">
            Awards & <span className="text-[#D4AF37]">Certifications</span>
          </h2>

          <p className="mt-6 text-gray-400 text-lg leading-8">
            Recognized for technology excellence, client satisfaction, and
            enterprise data security standards.
          </p>
        </motion.div>

        {/* Awards Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {awards.map((award, index) => {
            const Icon = award.icon;

            return (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className="group relative rounded-3xl border border-[#d4af37]/30 bg-white/[0.04] p-8 backdrop-blur-xl transition-all duration-500 hover:border-[#d4af37] hover:bg-white/[0.07] hover:shadow-[0_0_50px_rgba(212,175,55,0.15)]"
              >
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#d4af37]/30 bg-[#d4af37]/15 text-[#d4af37]">
                    <Icon size={26} />
                  </div>
                  <span className="rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10 px-4 py-1 text-xs font-semibold text-[#d4af37]">
                    {award.year}
                  </span>
                </div>

                <h3 className="font-poppins text-2xl font-bold text-white group-hover:text-[#d4af37] transition">
                  {award.title}
                </h3>

                <p className="mt-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Issued by: {award.issuer}
                </p>

                <p className="mt-4 text-sm text-gray-300 leading-relaxed">
                  {award.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}