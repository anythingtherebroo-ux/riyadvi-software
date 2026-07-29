import { motion } from "framer-motion";
import { Briefcase, Users, Smile, Globe } from "lucide-react";

const stats = [
  { icon: Briefcase, number: "50+", label: "Projects Delivered" },
  { icon: Users, number: "30+", label: "Happy Clients" },
  { icon: Smile, number: "98%", label: "Client Satisfaction" },
  { icon: Globe, number: "10+", label: "Industries Served" },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-[#080808] py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-5 inline-flex items-center gap-3 uppercase tracking-[0.25em] text-sm font-semibold text-[#D4AF37]">
            <span className="h-[2px] w-10 bg-[#D4AF37]" />
            Our Impact
          </span>

          <h2 className="font-poppins text-4xl font-bold text-white md:text-5xl">
            Numbers That{" "}
            <span className="text-[#D4AF37]">
              Speak for Themselves
            </span>
          </h2>
        </motion.div>

        {/* Stats Panel */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-3xl border border-[#2A2A2A] bg-[#121212]/90 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,.45)]"
        >

          {/* Header */}
          <div className="flex items-center justify-between border-b border-[#2A2A2A] px-8 py-5">
            <span className="font-mono text-sm text-gray-400">
              riyadvi@impact
            </span>

            <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-400">
              LIVE
            </span>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4">

            {stats.map((item) => (
              <motion.div
                key={item.label}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                transition={{ duration: 0.3 }}
                className="group border-r border-b border-[#2A2A2A] p-8 last:border-r-0 md:last:border-r-0"
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37] transition-all duration-300 group-hover:bg-[#D4AF37] group-hover:text-black">
                  <item.icon size={26} />
                </div>

                <h3 className="font-poppins text-4xl font-bold text-white">
                  {item.number}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-400">
                  {item.label}
                </p>
              </motion.div>
            ))}

          </div>
        </motion.div>
      </div>
    </section>
  );
}