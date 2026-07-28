import { motion } from "framer-motion";

const PortfolioFilter = ({
  categories,
  activeCategory,
  setActiveCategory,
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-16">

      {categories.map((category) => (
        <motion.button
          key={category}
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
          onClick={() => setActiveCategory(category)}
          className={`relative overflow-hidden rounded-full px-7 py-3 font-semibold transition-all duration-300

          ${
            activeCategory === category
              ? "bg-[#D4AF37] text-black shadow-[0_0_30px_rgba(212,175,55,.35)]"
              : "bg-[#161616] text-white border border-[#2A2A2A] hover:border-[#D4AF37]/60 hover:text-[#D4AF37]"
          }
          `}
        >
          {activeCategory === category && (
            <motion.div
              layoutId="activeFilter"
              className="absolute inset-0 rounded-full bg-[#D4AF37]"
              style={{
                zIndex: -1,
              }}
            />
          )}

          {category}
        </motion.button>
      ))}
    </div>
  );
};

export default PortfolioFilter;