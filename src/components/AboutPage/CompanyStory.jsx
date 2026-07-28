import { motion } from "framer-motion";
import {
  Rocket,
  Target,
  Lightbulb,
  Globe,
  CheckCircle2,
} from "lucide-react";

const highlights = [
  {
    icon: Rocket,
    title: "Started with a Vision",
    description:
      "Founded with the goal of helping businesses embrace modern digital technology.",
  },
  {
    icon: Target,
    title: "Business Focused",
    description:
      "Every project is designed to solve real business problems and deliver measurable results.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Driven",
    description:
      "We continuously adopt modern frameworks, tools and technologies to build future-ready products.",
  },
  {
    icon: Globe,
    title: "Serving Multiple Industries",
    description:
      "From startups to enterprises, we've delivered solutions across various business domains.",
  },
];

export default function CompanyStory() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-28">

      {/* Background */}

      <div className="absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-[#D4AF37]/10 blur-[160px]" />

      <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-[#D4AF37]/10 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >

            <span className="rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-[#D4AF37]">

              Our Story

            </span>

            <h2 className="mt-8 text-5xl font-black leading-tight text-white">

              Creating Digital

              <span className="block text-[#D4AF37]">

                Success Stories

              </span>

            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-300">

              Riyadvi Software Technologies was founded with a simple
              mission—to help businesses leverage technology for
              sustainable growth.

            </p>

            <p className="mt-6 text-lg leading-8 text-gray-300">

              From modern websites and enterprise software to
              mobile applications, UI/UX design, digital marketing,
              AR/VR experiences and custom solutions,
              we transform ideas into scalable digital products.

            </p>

            <p className="mt-6 text-lg leading-8 text-gray-300">

              Our team believes every business deserves technology
              that is fast, secure, scalable and beautifully designed.

            </p>

            {/* Achievement */}

            <div className="mt-12 rounded-3xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-8">

              <div className="flex items-center gap-4">

                <CheckCircle2
                  className="text-[#D4AF37]"
                  size={32}
                />

                <div>

                  <h3 className="text-xl font-bold text-white">

                    Trusted Digital Partner

                  </h3>

                  <p className="mt-2 text-gray-400">

                    Helping businesses transform ideas into
                    high-performing digital solutions.

                  </p>

                </div>

              </div>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >

            <div className="grid gap-6">

              {highlights.map((item) => {

                const Icon = item.icon;

                return (

                  <motion.div
                    whileHover={{
                      y: -8,
                    }}
                    key={item.title}
                    className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:border-[#D4AF37]/40 hover:bg-white/10"
                  >

                    <div className="flex items-start gap-6">

                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D4AF37]/10">

                        <Icon
                          size={30}
                          className="text-[#D4AF37]"
                        />

                      </div>

                      <div>

                        <h3 className="text-2xl font-bold text-white">

                          {item.title}

                        </h3>

                        <p className="mt-3 leading-7 text-gray-400">

                          {item.description}

                        </p>

                      </div>

                    </div>

                  </motion.div>

                );

              })}

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}