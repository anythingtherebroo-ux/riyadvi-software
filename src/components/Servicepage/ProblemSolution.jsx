import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle2, ArrowRight } from "lucide-react";

const cardAnimation = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

export default function ProblemSolution({ service }) {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-24 text-white">

      {/* Background Glow */}

      <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-[#D4AF37]/10 blur-[120px]" />

      <div className="absolute right-0 bottom-20 h-80 w-80 rounded-full bg-[#D4AF37]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial="hidden"
          whileInView="whileInView"
          viewport={{ once: true }}
          variants={cardAnimation}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-[#D4AF37]">
            Our Approach
          </span>

          <h2 className="mt-8 text-4xl font-black leading-tight lg:text-5xl">
            From Challenges to
            <span className="text-[#D4AF37]"> Business Growth</span>
          </h2>

          <p className="mt-6 text-lg text-gray-400">
            Every successful digital product begins with solving a real business
            problem. Here's how we transform your challenges into measurable
            results.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-10 lg:grid-cols-2">

          {/* Problem */}

          <motion.div
            variants={cardAnimation}
            initial="hidden"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="group relative rounded-3xl border border-red-500/20 bg-white/5 p-10 backdrop-blur-xl transition-all duration-500 hover:border-red-500/40 hover:bg-white/10"
          >

            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-500/10 text-red-400">

              <AlertTriangle size={34} />

            </div>

            <h3 className="text-3xl font-bold">
              The Problem
            </h3>

            <p className="mt-6 leading-8 text-gray-300">
              {service.problem}
            </p>

            <div className="mt-10 rounded-2xl border border-red-500/20 bg-black/40 p-5">

              <h4 className="mb-3 font-semibold text-red-400">
                Common Business Challenges
              </h4>

              <ul className="space-y-3 text-gray-400">

                <li>• Outdated digital presence</li>

                <li>• Low customer engagement</li>

                <li>• Slow and inefficient systems</li>

                <li>• Poor user experience</li>

                <li>• Limited scalability</li>

              </ul>

            </div>

          </motion.div>

          {/* Solution */}

          <motion.div
            variants={cardAnimation}
            initial="hidden"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="group relative rounded-3xl border border-[#D4AF37]/20 bg-gradient-to-br from-[#D4AF37]/10 to-white/5 p-10 backdrop-blur-xl transition-all duration-500 hover:border-[#D4AF37] hover:shadow-[0_0_60px_rgba(212,175,55,0.15)]"
          >

            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D4AF37]/20 text-[#D4AF37]">

              <CheckCircle2 size={34} />

            </div>

            <h3 className="text-3xl font-bold">
              Our Solution
            </h3>

            <p className="mt-6 leading-8 text-gray-300">
              {service.solution}
            </p>

            <div className="mt-10 rounded-2xl border border-[#D4AF37]/20 bg-black/40 p-5">

              <h4 className="mb-3 font-semibold text-[#D4AF37]">
                What You Receive
              </h4>

              <ul className="space-y-3 text-gray-300">

                <li>✔ Modern & scalable architecture</li>

                <li>✔ Premium user experience</li>

                <li>✔ High performance</li>

                <li>✔ SEO & business optimisation</li>

                <li>✔ Ongoing technical support</li>

              </ul>

            </div>

          </motion.div>

        </div>

        {/* Flow Indicator */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >

          <div className="flex items-center gap-4 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-8 py-4">

            <span className="font-semibold">
              Problem
            </span>

            <ArrowRight className="text-[#D4AF37]" />

            <span className="font-semibold text-[#D4AF37]">
              Strategy
            </span>

            <ArrowRight className="text-[#D4AF37]" />

            <span className="font-semibold">
              Solution
            </span>

            <ArrowRight className="text-[#D4AF37]" />

            <span className="font-semibold">
              Growth
            </span>

          </div>

        </motion.div>

      </div>

    </section>
  );
}