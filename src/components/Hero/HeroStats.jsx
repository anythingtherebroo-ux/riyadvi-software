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
    },
  },
};

function HeroStats() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
    >
      {stats.map((stat) => (
        <motion.div
          key={stat.id}
          variants={item}
          whileHover={{
            y: -8,
            scale: 1.03,
          }}
          transition={{
            type: "spring",
            stiffness: 250,
          }}
          className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
        >
          {/* Hover Glow */}

          <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
            <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/10 via-transparent to-[#d4af37]/5" />
          </div>

          {/* Top Line */}

          <div className="mb-6 h-[2px] w-12 rounded-full bg-[#d4af37] transition-all duration-500 group-hover:w-24" />

          {/* Number */}

         <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#d4af37]/10 text-[#d4af37] transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
  <stat.icon size={28} />
</div>

<h2 className="font-poppins text-4xl font-bold text-[#d4af37] lg:text-5xl">
  {stat.number}
</h2>

<p className="mt-3 text-sm leading-6 text-gray-400">
  {stat.title}
</p>

          {/* Bottom Border */}

          <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#d4af37] transition-all duration-500 group-hover:w-full" />
        </motion.div>
      ))}
    </motion.div>
  );
}

export default HeroStats;