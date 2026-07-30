import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { missionVision } from "./aboutData";

export default function MissionVision() {
  return (
    <section className="relative py-24 bg-[#080808] overflow-hidden text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,.08),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(212,175,55,.05),transparent_40%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 uppercase tracking-[.25em] text-[#D4AF37] text-sm font-semibold">
            <span className="w-12 h-[2px] bg-[#D4AF37]" />
            Mission & Vision
          </div>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white leading-tight font-poppins">
            Building Technology
            <span className="text-[#D4AF37]"> With Purpose</span>
          </h2>

          <p className="mt-6 text-gray-400 leading-8 text-lg">
            Every project we undertake is guided by a clear mission, bold
            vision, and an unwavering commitment to quality and innovation.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {missionVision.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-3xl border border-[#2A2A2A] bg-[#121212]/90 backdrop-blur-xl p-10 transition-all duration-500 hover:border-[#D4AF37]/60 hover:shadow-[0_0_60px_rgba(212,175,55,.08)]"
              >
                <div className="absolute -right-24 -top-24 w-56 h-56 rounded-full bg-[#D4AF37]/5 blur-3xl group-hover:bg-[#D4AF37]/10 transition-all duration-500" />

                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] mb-8">
                    <Icon size={30} />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-5 font-poppins">
                    {card.title}
                  </h3>

                  <p className="text-gray-400 leading-8 text-base">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mt-16"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-3 rounded-full border border-[#D4AF37] px-8 py-4 text-[#D4AF37] font-semibold transition-all duration-300 hover:bg-[#D4AF37] hover:text-black"
          >
            Explore Our Services
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}