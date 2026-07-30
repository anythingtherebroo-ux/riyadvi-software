import { motion } from "framer-motion";

const PortfolioFilter = ({
  categories,
  activeCategory,
  setActiveCategory,
}) => {
  return (
    <div className="mb-14 flex flex-wrap justify-center gap-2.5 sm:gap-3">
      {categories.map((category) => (
        <motion.button
          key={category}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => setActiveCategory(category)}
          className={`relative overflow-hidden rounded-full px-6 py-2.5 font-poppins text-xs font-semibold sm:text-sm transition-all duration-300 ${
            activeCategory === category
              ? "bg-[#d4af37] text-black shadow-[0_0_25px_rgba(212,175,55,0.35)]"
              : "border border-white/10 bg-white/[0.04] text-white hover:border-[#d4af37]/60 hover:text-[#d4af37]"
          }`}
        >
          {activeCategory === category && (
            <motion.div
              layoutId="activeFilter"
              className="absolute inset-0 rounded-full bg-[#d4af37]"
              style={{ zIndex: -1 }}
            />
          )}
          {category}
        </motion.button>
      ))}
    </div>
  );
};

export default PortfolioFilter;