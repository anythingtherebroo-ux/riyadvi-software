import { motion } from "framer-motion";
import {
  Lightbulb,
  ShieldCheck,
  Users,
  Award,
  HeartHandshake,
  TrendingUp,
} from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We continuously embrace new technologies and creative thinking to build future-ready digital products.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "Transparency, honesty and trust are the foundation of every relationship we build with our clients.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We work closely with our clients as partners, ensuring every project reflects their vision and business goals.",
  },
  {
    icon: Award,
    title: "Quality",
    description:
      "Every solution undergoes careful planning, development and testing to deliver exceptional quality.",
  },
  {
    icon: HeartHandshake,
    title: "Customer First",
    description:
      "Our clients' success is our success. We focus on delivering value that creates long-term relationships.",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description:
      "We build scalable digital solutions that help businesses grow, adapt and stay competitive.",
  },
];

export default function CoreValues() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-28">

      {/* Background */}

      <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-[#D4AF37]/10 blur-[160px]" />

      <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-[#D4AF37]/10 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >

          <span className="rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-[#D4AF37]">
            Our Core Values
          </span>

          <h2 className="mt-8 text-5xl font-black text-white">

            Principles That

            <span className="block text-[#D4AF37]">
              Drive Everything
            </span>

          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-400">
            Every decision we make is guided by these core values,
            ensuring we deliver exceptional digital experiences and
            long-lasting partnerships.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {values.map((value, index) => {

            const Icon = value.icon;

            return (

              <motion.div
                key={value.title}
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
                  delay: index * 0.12,
                  duration: .7,
                }}
                whileHover={{
                  y: -10,
                }}
                className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0A0A0A] p-8 transition-all duration-500 hover:border-[#D4AF37]/40 hover:shadow-[0_0_45px_rgba(212,175,55,.15)]"
              >

                {/* Glow */}

                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="relative z-10">

                  <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-[#D4AF37]/10">

                    <Icon
                      size={36}
                      className="text-[#D4AF37]"
                    />

                  </div>

                  <h3 className="mt-8 text-2xl font-bold text-white">

                    {value.title}

                  </h3>

                  <p className="mt-5 leading-8 text-gray-400">

                    {value.description}

                  </p>

                  <div className="mt-8 h-px bg-gradient-to-r from-[#D4AF37]/40 to-transparent" />

                  <div className="mt-6 flex items-center text-[#D4AF37] font-medium">

                    Learn More

                    <svg
                      className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h14M13 5l7 7-7 7"
                      />
                    </svg>

                  </div>

                </div>

              </motion.div>

            );

          })}

        </div>
                {/* Bottom Banner */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.3,
            duration: 0.8,
          }}
          className="mt-24"
        >

          <div className="relative overflow-hidden rounded-[36px] border border-[#D4AF37]/20 bg-gradient-to-r from-[#111111] via-[#0b0b0b] to-[#111111] p-10">

            {/* Glow */}

            <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-[#D4AF37]/10 blur-[120px]" />

            <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-[#D4AF37]/10 blur-[120px]" />

            <div className="relative z-10 grid items-center gap-10 lg:grid-cols-2">

              <div>

                <span className="rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-[#D4AF37]">

                  Our Promise

                </span>

                <h3 className="mt-6 text-4xl font-black text-white">

                  Values That Shape

                  <span className="block text-[#D4AF37]">

                    Every Project

                  </span>

                </h3>

                <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">

                  From strategy and design to development and support,
                  our values influence every decision we make. They help
                  us create products that are not only visually stunning
                  but also reliable, scalable and built for long-term
                  business success.

                </p>

              </div>

              {/* Right */}

              <div className="grid grid-cols-2 gap-6">

                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

                  <h4 className="text-4xl font-black text-[#D4AF37]">

                    100%

                  </h4>

                  <p className="mt-2 text-gray-400">

                    Transparent Communication

                  </p>

                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

                  <h4 className="text-4xl font-black text-[#D4AF37]">

                    24/7

                  </h4>

                  <p className="mt-2 text-gray-400">

                    Dedicated Support

                  </p>

                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

                  <h4 className="text-4xl font-black text-[#D4AF37]">

                    Agile

                  </h4>

                  <p className="mt-2 text-gray-400">

                    Development Process

                  </p>

                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

                  <h4 className="text-4xl font-black text-[#D4AF37]">

                    Long-Term

                  </h4>

                  <p className="mt-2 text-gray-400">

                    Client Partnerships

                  </p>

                </div>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}