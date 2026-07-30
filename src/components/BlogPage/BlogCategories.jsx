import { useState } from "react";
import { motion } from "framer-motion";
import { blogCategories } from "./blogData";

export default function BlogCategories({ activeCategory: externalCategory, onSelectCategory }) {
  const [internalCategory, setInternalCategory] = useState("All");

  const activeCategory = externalCategory !== undefined ? externalCategory : internalCategory;

  const handleCategoryClick = (category) => {
    if (onSelectCategory) {
      onSelectCategory(category);
    } else {
      setInternalCategory(category);
    }
  };

  return (
    <section id="articles" className="relative bg-[#080808] py-16 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10 text-center"
        >
          <h2 className="font-poppins text-3xl font-extrabold text-white sm:text-4xl">
            Browse By <span className="text-[#d4af37]">Category</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-gray-400">
            Explore articles based on your interests and discover valuable
            insights from our team.
          </p>
        </motion.div>

        {/* Categories Bar */}
        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
          {blogCategories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleCategoryClick(category)}
              className={`rounded-full px-6 py-3 font-poppins text-xs font-semibold sm:text-sm transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[#d4af37] text-black shadow-[0_0_25px_rgba(212,175,55,0.35)]"
                  : "border border-white/10 bg-white/[0.04] text-gray-300 hover:border-[#d4af37]/40 hover:text-white"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}