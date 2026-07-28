import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Cloud,
  Palette,
  Server,
  Cpu,
} from "lucide-react";

const categories = {
  Frontend: [
    "React",
    "Next.js",
    "Vue",
    "Angular",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
  ],
  Backend: [
    "Node.js",
    "Express",
    "Laravel",
    "Django",
    "REST API",
    "GraphQL",
  ],
  Database: [
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "Firebase",
  ],
  Cloud: [
    "AWS",
    "Vercel",
    "Netlify",
    "Docker",
    "Cloudflare",
  ],
  Design: [
    "Figma",
    "Adobe XD",
    "Photoshop",
    "Illustrator",
  ],
};

const icons = {
  Frontend: Code2,
  Backend: Server,
  Database: Database,
  Cloud: Cloud,
  Design: Palette,
};

const cardAnimation = {
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

export default function TechStack({ service }) {
  const activeTech = new Set(service.tech);

  return (
    <section className="relative overflow-hidden bg-black py-28 text-white">

      {/* Background */}

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-[150px]" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >

          <span className="rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-[#D4AF37]">
            Technology Stack
          </span>

          <h2 className="mt-8 text-4xl font-black lg:text-5xl">
            Modern Technologies
            <span className="text-[#D4AF37]"> We Use</span>
          </h2>

          <p className="mt-6 text-lg text-gray-400">
            We select proven technologies that provide excellent
            performance, scalability, security and long-term maintainability.
          </p>

        </motion.div>

        {/* Categories */}

        <div className="grid gap-8 lg:grid-cols-2">

          {Object.entries(categories).map(([category, techs]) => {

            const Icon = icons[category] || Cpu;

            return (

              <motion.div
                key={category}
                variants={cardAnimation}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:border-[#D4AF37]/40 hover:bg-white/10"
              >

                {/* Header */}

                <div className="mb-8 flex items-center gap-4">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37]">
                    <Icon size={28} />
                  </div>

                  <div>

                    <h3 className="text-2xl font-bold">
                      {category}
                    </h3>

                    <p className="text-gray-400">
                      Professional tools & frameworks
                    </p>

                  </div>

                </div>

                {/* Tech Pills */}

                <div className="flex flex-wrap gap-4">

                  {techs.map((tech) => {

                    const active = activeTech.has(tech);

                    return (

                      <motion.div
                        key={tech}
                        whileHover={{
                          scale: 1.05,
                          y: -4,
                        }}
                        className={`rounded-xl border px-5 py-3 transition-all duration-300

                        ${
                          active
                            ? "border-[#D4AF37] bg-[#D4AF37]/15 text-[#D4AF37]"
                            : "border-white/10 bg-black/40 text-gray-300 hover:border-white/30"
                        }`}
                      >
                        {tech}
                      </motion.div>

                    );

                  })}

                </div>

              </motion.div>

            );

          })}

        </div>

        {/* Bottom Feature Card */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            delay: .3,
          }}
          className="mt-20 rounded-3xl border border-[#D4AF37]/20 bg-gradient-to-r from-[#D4AF37]/10 to-white/5 p-10 backdrop-blur-xl"
        >

          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">

            <div>

              <h3 className="text-3xl font-bold">
                Future-Ready Technology
              </h3>

              <p className="mt-4 max-w-2xl text-gray-300">
                Every solution is developed using scalable architecture,
                clean code principles, enterprise security standards and
                modern development workflows for long-term success.
              </p>

            </div>

            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#D4AF37]/20">

              <Cpu
                className="text-[#D4AF37]"
                size={42}
              />

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}