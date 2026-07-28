import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function Features({ service }) {
  return (
    <section className="relative overflow-hidden bg-black py-28 text-white">

      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-[140px]" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-[#D4AF37]">
            Key Features
          </span>

          <h2 className="mt-8 text-4xl font-black lg:text-5xl">
            Everything You Need To
            <span className="text-[#D4AF37]"> Succeed</span>
          </h2>

          <p className="mt-6 text-lg text-gray-400">
            Every solution we deliver is engineered for performance,
            scalability, security, and business growth.
          </p>
        </motion.div>

        {/* Bento Grid */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-4"
        >
          {service.features.map((feature, index) => (
            <motion.div
              key={feature}
              variants={item}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:border-[#D4AF37]/40 hover:bg-white/10 ${
                index % 5 === 0
                  ? "xl:col-span-2"
                  : ""
              }`}
            >
              {/* Glow */}

              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#D4AF37]/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

              {/* Number */}

              <div className="mb-8 text-5xl font-black text-[#D4AF37]/20">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Icon */}

              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37]">
                <CheckCircle2 size={28} />
              </div>

              {/* Title */}

              <h3 className="text-2xl font-bold">
                {feature}
              </h3>

              {/* Description */}

              <p className="mt-5 leading-7 text-gray-400">
                We implement {feature.toLowerCase()} using modern
                technologies and industry best practices to ensure
                long-term reliability and outstanding user experience.
              </p>

              {/* Bottom Line */}

              <div className="mt-8 h-[2px] w-16 bg-[#D4AF37] transition-all duration-500 group-hover:w-full" />

            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Stats */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.3,
          }}
          viewport={{ once: true }}
          className="mt-24 grid gap-6 rounded-3xl border border-[#D4AF37]/20 bg-white/5 p-10 backdrop-blur-xl md:grid-cols-4"
        >
          <div>
            <h3 className="text-4xl font-black text-[#D4AF37]">
              99%
            </h3>

            <p className="mt-2 text-gray-400">
              Client Satisfaction
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-black text-[#D4AF37]">
              50+
            </h3>

            <p className="mt-2 text-gray-400">
              Successful Projects
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-black text-[#D4AF37]">
              24/7
            </h3>

            <p className="mt-2 text-gray-400">
              Technical Support
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-black text-[#D4AF37]">
              Since 2021
            </h3>

            <p className="mt-2 text-gray-400">
              Trusted Technology Partner
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}