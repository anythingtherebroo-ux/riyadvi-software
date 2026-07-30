import { motion } from "framer-motion";
import { stats } from "./heroData";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

function HeroStats() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
    >
      {stats.map((stat) => (
        <motion.div
          key={stat.id}
          variants={item}
          whileHover={{
            y: -6,
            scale: 1.02,
          }}
          transition={{
            type: "spring",
            stiffness: 280,
            damping: 20,
          }}
          className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition-colors hover:border-[#d4af37]/40 hover:bg-white/[0.07]"
        >
          {/* Hover Gradient Glow */}
          <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/15 via-transparent to-[#d4af37]/5" />
          </div>

          {/* Top Line Indicator */}
          <div className="mb-6 h-[2px] w-12 rounded-full bg-[#d4af37] transition-all duration-500 group-hover:w-24 group-hover:shadow-[0_0_12px_#d4af37]" />

          {/* Stat Icon */}
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#d4af37]/20 bg-[#d4af37]/10 text-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.05)] transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-[#d4af37]/20">
            <stat.icon size={28} />
          </div>

          {/* Stat Number */}
          <h2 className="font-poppins text-4xl font-extrabold tracking-tight text-[#d4af37] drop-shadow-[0_2px_10px_rgba(212,175,55,0.15)] lg:text-5xl">
            {stat.number}
          </h2>

          {/* Stat Title */}
          <p className="mt-2 text-sm font-medium leading-6 text-gray-400 transition-colors group-hover:text-gray-200">
            {stat.title}
          </p>

          {/* Bottom Accent Border Animation */}
          <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#d4af37] transition-all duration-500 group-hover:w-full" />
        </motion.div>
      ))}
    </motion.div>
  );
}

export default HeroStats;