import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle2, ArrowRight } from "lucide-react";

export default function ProblemSolution({ service }) {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-24 sm:py-32 text-white">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[#d4af37]">
            Our Approach
          </span>

          <h2 className="mt-6 font-poppins text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            From Challenges to <span className="text-[#d4af37]">Business Growth</span>
          </h2>
        </motion.div>

        {/* Problem vs Solution */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Problem Card */}
          <div className="rounded-3xl border border-red-500/20 bg-white/[0.04] p-8 sm:p-10">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-500/10 text-red-400">
              <AlertTriangle size={34} />
            </div>
            <h3 className="font-poppins text-3xl font-bold text-white">The Problem</h3>
            <p className="mt-5 leading-relaxed text-gray-300">{service.problem}</p>
          </div>

          {/* Solution Card */}
          <div className="rounded-3xl border border-[#d4af37]/30 bg-gradient-to-br from-[#d4af37]/10 via-white/[0.04] to-white/[0.02] p-8 sm:p-10">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#d4af37]/20 text-[#d4af37]">
              <CheckCircle2 size={34} />
            </div>
            <h3 className="font-poppins text-3xl font-bold text-white">Our Solution</h3>
            <p className="mt-5 leading-relaxed text-gray-300">{service.solution}</p>
          </div>
        </div>
      </div>
    </section>
  );
}