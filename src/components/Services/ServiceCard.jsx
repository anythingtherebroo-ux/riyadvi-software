import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-2xl border border-[#2A2A2A] bg-[#141414] p-7 transition-all duration-500 hover:border-[#D4AF37]"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

      <div className="relative z-10">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-[#D4AF37]/10 transition group-hover:bg-[#D4AF37]">
          <Icon
            size={30}
            className="text-[#D4AF37] transition group-hover:text-black"
          />
        </div>

        <h3 className="mb-4 text-2xl font-semibold text-white">
          {service.title}
        </h3>

        <p className="mb-6 leading-7 text-gray-400">
          {service.description}
        </p>

        <button className="flex items-center gap-2 font-medium text-[#D4AF37] transition-all group-hover:gap-4">
          Learn More
          <ArrowRight size={18} />
        </button>
      </div>
    </motion.div>
  );
}