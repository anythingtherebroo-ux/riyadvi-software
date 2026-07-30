import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { services } from "./ServiceData";
import ServiceCard from "./ServiceCard";

export default function Service() {
  return (
    <section id="services" className="relative overflow-hidden bg-[#080808] py-20 sm:py-28 lg:py-32">
      {/* Background Ambient Glows & Grid */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="absolute top-1/3 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d4af37]/10 blur-[160px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[#d4af37]/5 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center sm:mb-20"
        >
          <div className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-[#d4af37]/30 bg-white/5 px-4 py-2 backdrop-blur-md shadow-[0_0_20px_rgba(212,175,55,0.1)]">
            <Sparkles className="text-[#d4af37]" size={16} />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d4af37] sm:text-sm">
              Our Services
            </span>
          </div>

          <h2 className="font-poppins text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Transforming Ideas Into{" "}
            <span className="bg-gradient-to-r from-[#d4af37] via-yellow-300 to-[#d4af37] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(212,175,55,0.2)]">
              Digital Solutions
            </span>
          </h2>

          <p className="mt-6 text-base leading-relaxed text-gray-400 sm:text-lg sm:leading-8">
            We deliver cutting-edge software solutions that help businesses
            innovate, scale and succeed in today's digital world.
          </p>
        </motion.div>

        {/* Services Responsive Grid */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="h-full"
            >
              <ServiceCard service={service} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}