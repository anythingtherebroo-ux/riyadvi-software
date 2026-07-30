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

const qualities = [
  "Agile",
  "Fast Delivery",
  "Secure",
  "Scalable",
  "Modern Tech",
  "24/7 Support",
];

export default function WorkProcess() {
  return (
    <section className="relative overflow-hidden bg-[#080808] py-24">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-[#D4AF37]/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#D4AF37]/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
            <span className="h-px w-10 bg-[#D4AF37]" />
            Our Process
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-white md:text-6xl">
            How We Turn
            <span className="text-[#D4AF37]"> Ideas Into Reality</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Every successful software project follows a structured roadmap.
            From planning to deployment, every stage is designed to deliver
            quality, transparency and measurable business growth.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {process.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: .5,
                  delay: index * .08,
                }}
                whileHover={{
                  y: -10,
                }}
                className="group relative overflow-hidden rounded-3xl border border-[#2a2a2a] bg-[#141414] p-8 transition-all duration-500 hover:border-[#D4AF37]/40 hover:shadow-[0_0_60px_rgba(212,175,55,.15)]"
              >
                {/* Accent */}

                <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#D4AF37] to-transparent opacity-0 transition group-hover:opacity-100" />

                <div className="mb-8 flex items-center justify-between">

                  <span className="text-4xl font-bold text-[#D4AF37]/25">
                    {item.step}
                  </span>

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/10 text-[#D4AF37] transition group-hover:rotate-6 group-hover:scale-110">
                    <Icon size={26} />
                  </div>

                </div>

                <h3 className="mb-4 text-2xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="leading-8 text-gray-400">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Tags */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: .2 }}
          className="mt-20 flex flex-wrap justify-center gap-4"
        >
          {qualities.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[#2a2a2a] bg-[#141414] px-6 py-3 text-sm font-medium text-gray-300 transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
            >
              {tag}
            </span>
          ))}
        </motion.div>

      </div>
    </section>
  );
}