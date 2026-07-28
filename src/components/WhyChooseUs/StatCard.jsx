import { motion } from "framer-motion";
import CountUpModule from "react-countup";

// react-countup's bundled CJS output is double-wrapped under this build
// setup, so a plain default import returns the whole module object rather
// than the component itself — unwrap it explicitly either way.
const CountUp = CountUpModule.default ?? CountUpModule;

export default function StatCard({ stat }) {
  const Icon = stat.icon;

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-2xl border border-[#2A2A2A] bg-[#141414] p-5 transition-colors duration-300 hover:border-[#D4AF37]/60 sm:p-6"
    >
      {/* Corner glow on hover */}
      <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[#D4AF37]/0 blur-2xl transition-all duration-500 group-hover:bg-[#D4AF37]/20" />

      <div className="relative z-10 mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-[#D4AF37]/10">
        <Icon size={20} className="text-[#D4AF37]" />
      </div>

      <h3 className="relative z-10 text-3xl font-bold text-[#D4AF37] sm:text-4xl">
        <CountUp
          end={stat.value}
          duration={2.5}
          enableScrollSpy
          scrollSpyOnce
        />
        {stat.suffix}
      </h3>

      <p className="relative z-10 mt-2 text-sm text-gray-400 sm:text-base">
        {stat.label}
      </p>
    </motion.div>
  );
}
