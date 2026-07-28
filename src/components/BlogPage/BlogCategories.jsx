import { useState } from "react";
import { motion } from "framer-motion";

const categories = [
  "All",
  "Web Development",
  "UI / UX",
  "Mobile Apps",
  "AI",
  "Cloud",
  "Digital Marketing",
];

export default function BlogCategories() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <section
      id="articles"
      className="relative bg-[#050505] py-16"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-black text-white">

            Browse By

            <span className="block text-[#D4AF37]">

              Category

            </span>

          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">

            Explore articles based on your interests and discover
            valuable insights from our team.

          </p>

        </motion.div>

        {/* Categories */}

        <div className="flex flex-wrap justify-center gap-4">

          {categories.map((category, index) => (

            <motion.button
              key={category}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.08,
              }}
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.96,
              }}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[#D4AF37] text-black shadow-[0_0_30px_rgba(212,175,55,.35)]"
                  : "border border-white/10 bg-[#0B0B0B] text-gray-300 hover:border-[#D4AF37]/40 hover:text-[#D4AF37]"
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