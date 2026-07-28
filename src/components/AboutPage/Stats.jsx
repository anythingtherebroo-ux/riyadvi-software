import { motion } from "framer-motion";
import {
  Briefcase,
  Users,
  Smile,
  Globe,
} from "lucide-react";

const stats = [
  {
    icon: Briefcase,
    number: "50+",
    label: "Projects Delivered",
  },
  {
    icon: Users,
    number: "30+",
    label: "Happy Clients",
  },
  {
    icon: Smile,
    number: "98%",
    label: "Client Satisfaction",
  },
  {
    icon: Globe,
    number: "10+",
    label: "Industries Served",
  },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-28">

      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-[#D4AF37]/10 blur-[160px]" />

      <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-[#D4AF37]/10 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >

          <span className="rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-[#D4AF37]">
            Our Impact
          </span>

          <h2 className="mt-8 text-5xl font-black text-white">
            Numbers That
            <span className="block text-[#D4AF37]">
              Speak for Themselves
            </span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-400">
            Every project represents our commitment to quality,
            innovation and long-term client success.
          </p>

        </motion.div>

        {/* Stats Grid */}

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">

          {stats.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.label}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.7,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="rounded-[32px] border border-white/10 bg-[#0A0A0A] p-10 text-center transition-all duration-500 hover:border-[#D4AF37]/40 hover:shadow-[0_0_40px_rgba(212,175,55,.18)]"
              >

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-[#D4AF37]/10">

                  <Icon
                    size={38}
                    className="text-[#D4AF37]"
                  />

                </div>

                <h3 className="mt-8 text-5xl font-black text-[#D4AF37]">

                  {item.number}

                </h3>

                <p className="mt-4 text-lg text-gray-400">

                  {item.label}

                </p>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}