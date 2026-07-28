import { stats } from "./heroData";
import { motion } from "framer-motion";

function HeroStats() {
  return (
    <div className="mt-12 grid grid-cols-3 gap-3 sm:gap-6">

      {stats.map((item) => (
        <motion.div
          key={item.id}
          whileHover={{ scale: 1.05 }}
          className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-3 text-center backdrop-blur-lg sm:p-6"
        >
          <h2 className="text-2xl font-bold text-[#D4AF37] sm:text-3xl lg:text-4xl">
            {item.number}
          </h2>

          <p className="mt-2 text-xs text-gray-400 sm:text-sm lg:text-base">
            {item.title}
          </p>
        </motion.div>
      ))}

    </div>
  );
}

export default HeroStats;