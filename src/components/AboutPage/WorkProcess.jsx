import { motion } from "framer-motion";
import {
  Search,
  Lightbulb,
  PenTool,
  Code2,
  ShieldCheck,
  Rocket,
} from "lucide-react";

const process = [
  {
    icon: Search,
    step: "01",
    title: "Discover",
    description:
      "Understanding your business goals, audience and project requirements.",
  },
  {
    icon: Lightbulb,
    step: "02",
    title: "Strategy",
    description:
      "Creating the roadmap, choosing technologies and planning the project.",
  },
  {
    icon: PenTool,
    step: "03",
    title: "Design",
    description:
      "Designing intuitive user experiences with modern UI principles.",
  },
  {
    icon: Code2,
    step: "04",
    title: "Development",
    description:
      "Building scalable, secure and high-performance applications.",
  },
  {
    icon: ShieldCheck,
    step: "05",
    title: "Testing",
    description:
      "Quality assurance, security testing and performance optimisation.",
  },
  {
    icon: Rocket,
    step: "06",
    title: "Launch",
    description:
      "Deploying your product with continuous support and improvements.",
  },
];

export default function WorkProcess() {
  return (
    <section className="relative overflow-hidden bg-black py-28">

      {/* Background */}

      <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-[#D4AF37]/10 blur-[160px]" />

      <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-[#D4AF37]/10 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="mx-auto mb-24 max-w-3xl text-center"
        >

          <span className="rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-[#D4AF37]">

            Our Process

          </span>

          <h2 className="mt-8 text-5xl font-black text-white">

            How We Turn

            <span className="block text-[#D4AF37]">

              Ideas Into Reality

            </span>

          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-400">

            Every successful project follows a structured process,
            ensuring quality, transparency and measurable results.

          </p>

        </motion.div>

        {/* Timeline */}

        <div className="relative">

          {/* Desktop Line */}

          <div className="absolute left-0 right-0 top-10 hidden h-[2px] bg-gradient-to-r from-[#D4AF37]/20 via-[#D4AF37] to-[#D4AF37]/20 lg:block" />

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {process.map((item, index) => {

              const Icon = item.icon;

              return (

                <motion.div
                  key={item.step}
                  initial={{
                    opacity: 0,
                    y: 60,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * .12,
                    duration: .7,
                  }}
                  whileHover={{
                    y: -10,
                  }}
                  className="relative z-10 rounded-[32px] border border-white/10 bg-[#0A0A0A] p-8 transition-all duration-500 hover:border-[#D4AF37]/40 hover:shadow-[0_0_45px_rgba(212,175,55,.18)]"
                >

                  {/* Step */}

                  <div className="absolute right-8 top-8 text-5xl font-black text-[#D4AF37]/10">

                    {item.step}

                  </div>

                  {/* Icon */}

                  <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-[#D4AF37]/10">

                    <Icon
                      size={38}
                      className="text-[#D4AF37]"
                    />

                  </div>

                  <h3 className="mt-8 text-2xl font-bold text-white">

                    {item.title}

                  </h3>

                  <p className="mt-5 leading-8 text-gray-400">

                    {item.description}

                  </p>

                  <div className="mt-8 h-px bg-gradient-to-r from-[#D4AF37]/40 to-transparent" />

                  <div className="mt-6 flex items-center gap-2 text-[#D4AF37] font-semibold">

                    Step {item.step}

                  </div>

                </motion.div>

              );

            })}

          </div>

        </div>

        {/* Bottom Section */}

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
            delay: .3,
            duration: .8,
          }}
          className="mt-24"
        >

          <div className="rounded-[36px] border border-[#D4AF37]/20 bg-gradient-to-r from-[#111111] via-[#0B0B0B] to-[#111111] p-10">

            <div className="grid items-center gap-10 lg:grid-cols-2">

              <div>

                <h3 className="text-4xl font-black text-white">

                  A Process Built For

                  <span className="block text-[#D4AF37]">

                    Long-Term Success

                  </span>

                </h3>

                <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">

                  We believe successful digital products are created
                  through collaboration, transparency and continuous
                  improvement at every stage.

                </p>

              </div>

              <div className="grid grid-cols-2 gap-6">

                <div className="rounded-3xl bg-white/5 p-6 border border-white/10">

                  <h4 className="text-4xl font-black text-[#D4AF37]">

                    Agile

                  </h4>

                  <p className="mt-2 text-gray-400">

                    Development

                  </p>

                </div>

                <div className="rounded-3xl bg-white/5 p-6 border border-white/10">

                  <h4 className="text-4xl font-black text-[#D4AF37]">

                    Fast

                  </h4>

                  <p className="mt-2 text-gray-400">

                    Delivery

                  </p>

                </div>

                <div className="rounded-3xl bg-white/5 p-6 border border-white/10">

                  <h4 className="text-4xl font-black text-[#D4AF37]">

                    Secure

                  </h4>

                  <p className="mt-2 text-gray-400">

                    Architecture

                  </p>

                </div>

                <div className="rounded-3xl bg-white/5 p-6 border border-white/10">

                  <h4 className="text-4xl font-black text-[#D4AF37]">

                    Scalable

                  </h4>

                  <p className="mt-2 text-gray-400">

                    Solutions

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