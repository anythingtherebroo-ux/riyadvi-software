import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function Features({ service }) {
  return (
    <section className="relative bg-[#080808] py-24 sm:py-32 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[#d4af37]">
            Key Features
          </span>
          <h2 className="mt-6 font-poppins text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            Everything You Need To <span className="text-[#d4af37]">Succeed</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {service.features.map((feature, index) => (
            <motion.div
              key={feature}
              whileHover={{ y: -5 }}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 sm:p-8"
            >
              <div className="mb-6 font-mono text-3xl font-bold text-[#d4af37]">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="font-poppins text-xl font-bold text-white">{feature}</h3>
              <p className="mt-3 text-sm text-gray-400">
                Engineered for scalability, security, and exceptional user experience.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}