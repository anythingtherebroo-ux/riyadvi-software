import { motion } from "framer-motion";
import FeatureCard from "./FeatureCard";
import StatCard from "./StatCard";
import { WhyChooseData } from "./WhyChooseData";
import { statsData } from "./statsData";

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-[#080808] py-24"
    >
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#d4af37]/5 blur-[160px]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-[#d4af37]/10 blur-[180px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >

          <span className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af37]">

            <span className="h-[2px] w-10 bg-[#d4af37]" />

            Why Riyadvi

          </span>

          <h2 className="mt-6 text-4xl font-bold text-white lg:text-5xl">

            Why Businesses

            <span className="text-[#d4af37]">

              {" "}Choose Riyadvi

            </span>

          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">

            We build scalable software solutions that increase productivity,
            accelerate growth and deliver measurable business results.

          </p>

        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2">

          {/* Left */}

          <motion.div
            initial={{ opacity:0,x:-40 }}
            whileInView={{ opacity:1,x:0 }}
            viewport={{ once:true }}
            transition={{ duration:.6 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >

            <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-5">

              <span className="text-gray-300">

                riyadvi@diagnostics

              </span>

              <span className="rounded-full bg-green-500/20 px-4 py-1 text-sm font-semibold text-green-400">

                live

              </span>

            </div>

            <div className="grid grid-cols-2 gap-6">

              {statsData.map((stat)=>(

                <StatCard
                  key={stat.id}
                  stat={stat}
                />

              ))}

            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity:0,x:40 }}
            whileInView={{ opacity:1,x:0 }}
            viewport={{ once:true }}
            transition={{ duration:.6 }}
            className="space-y-6"
          >

            {WhyChooseData.map((item,index)=>(

              <FeatureCard
                key={item.id}
                item={item}
                index={index}
              />

            ))}

          </motion.div>

        </div>

      </div>

    </section>
  );
}