import { motion } from "framer-motion";

export default function FeatureCard({ item, index }) {
  const Icon = item.icon;
  const number = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      whileHover={{ x: 6 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-2xl border border-[#2A2A2A] bg-[#141414] p-6 transition-all duration-300 hover:border-[#D4AF37] hover:shadow-[0_0_30px_rgba(212,175,55,.12)] sm:p-7"
    >
      {/* Decorative background number */}
      <span className="pointer-events-none absolute -right-1 -top-5 select-none text-7xl font-extrabold text-white/[0.03] transition-colors duration-300 group-hover:text-[#D4AF37]/[0.08] sm:text-8xl">
        {number}
      </span>

      <div className="relative z-10 flex items-start gap-5">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#D4AF37]/10 transition-all duration-300 group-hover:bg-[#D4AF37] group-hover:shadow-[0_0_20px_rgba(212,175,55,.4)]">
          <Icon
            size={26}
            className="text-[#D4AF37] transition-colors duration-300 group-hover:text-black"
          />
        </div>

        <div>
          <h3 className="mb-2 text-lg font-semibold text-white sm:text-xl">
            {item.title}
          </h3>

          <p className="text-sm leading-6 text-gray-400 sm:text-base sm:leading-7">
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
