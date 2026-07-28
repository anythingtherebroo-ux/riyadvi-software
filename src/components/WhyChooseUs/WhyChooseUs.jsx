import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import FeatureCard from "./FeatureCard";
import StatCard from "./StatCard";
import { WhyChooseData } from "./WhyChooseData";
import { statsData } from "./statsData";

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-[#080808] py-24 sm:py-28"
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[300px] w-[300px] rounded-full bg-[#D4AF37]/10 blur-[120px] sm:h-[400px] sm:w-[400px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[300px] w-[300px] rounded-full bg-[#D4AF37]/5 blur-[120px] sm:h-[400px] sm:w-[400px]" />

      {/* Dot-grid texture, faded toward the edges */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #D4AF37 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage:
            "radial-gradient(ellipse 60% 50% at 50% 50%, black, transparent)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 50% at 50% 50%, black, transparent)",
        }}
      />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-4 py-2 text-sm font-medium text-[#D4AF37]">
            <Sparkles size={16} />
            WHY RIYADVI
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl">
            Why Businesses
            <span className="text-[#D4AF37]"> Choose Riyadvi</span>
          </h2>

          <p className="mt-6 text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
            We create digital experiences
            that help businesses grow faster, improve efficiency and deliver
            exceptional value to customers.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-5 sm:gap-6">
            {statsData.map((stat) => (
              <StatCard key={stat.id} stat={stat} />
            ))}
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative grid gap-5 sm:gap-6"
        >
          {/* Timeline connector, roughly aligned to the icon chips */}
          <div className="pointer-events-none absolute bottom-6 top-6 left-[52px] hidden w-px bg-gradient-to-b from-[#D4AF37]/40 via-[#D4AF37]/10 to-transparent sm:block sm:left-[58px]" />

          {WhyChooseData.map((item, index) => (
            <FeatureCard key={item.id} item={item} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
