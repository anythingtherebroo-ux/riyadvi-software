import { motion } from "framer-motion";
import {
  BadgeCheck,
  Code2,
  Palette,
  Headphones,
  ShieldCheck,
  Rocket,
} from "lucide-react";

const features = [
  {
    icon: BadgeCheck,
    title: "Trusted Partner",
    description:
      "We build long-term relationships by delivering reliable, transparent and business-focused digital solutions.",
  },
  {
    icon: Code2,
    title: "Modern Technology",
    description:
      "Our team works with the latest frameworks and technologies to create scalable and high-performance products.",
  },
  {
    icon: Palette,
    title: "Creative Design",
    description:
      "Beautiful UI/UX combined with seamless functionality creates memorable digital experiences.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "We stay with our clients beyond launch, providing maintenance, updates and technical assistance.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description:
      "Every solution is thoroughly tested for security, speed and performance before delivery.",
  },
  {
    icon: Rocket,
    title: "Growth Focused",
    description:
      "Our products are designed to help businesses increase efficiency, revenue and customer engagement.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#080808] py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mx-auto max-w-3xl text-center"
        >

          <span className="inline-flex items-center gap-3 text-[#D4AF37] uppercase tracking-[4px] text-sm font-semibold">

            <span className="h-px w-10 bg-[#D4AF37]" />

            Why Choose Riyadvi

          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white leading-tight">

            What Makes Us

            <span className="text-[#D4AF37]">
              {" "}
              Different
            </span>

          </h2>

          <p className="mt-6 text-gray-400 text-lg leading-8">

            We combine strategy, creativity and engineering to build premium
            digital products that help businesses scale confidently.

          </p>

        </motion.div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature, index) => {

            const Icon = feature.icon;
            const code = String(index + 1).padStart(2, "0");

            return (

              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: .5,
                  delay: index * .08,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group rounded-3xl border border-[#2A2A2A] bg-[#111111] p-8 transition-all duration-500 hover:border-[#D4AF37]/50 hover:shadow-[0_20px_60px_rgba(212,175,55,.12)]"
              >

                <div className="flex items-center justify-between">

                  <span className="text-xs tracking-[3px] uppercase text-[#D4AF37]">

                    DIFF / {code}

                  </span>

                  <div className="rounded-xl bg-[#1A1A1A] p-3 text-[#D4AF37] group-hover:rotate-6 transition">

                    <Icon size={22} />

                  </div>

                </div>

                <h3 className="mt-8 text-2xl font-semibold text-white">

                  {feature.title}

                </h3>

                <p className="mt-4 leading-8 text-gray-400">

                  {feature.description}

                </p>

              </motion.div>

            );

          })}

        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mt-24 rounded-[32px] border border-[#2A2A2A] bg-gradient-to-r from-[#111111] via-[#151515] to-[#111111] p-12 text-center"
        >

          <span className="text-[#D4AF37] uppercase tracking-[4px] text-sm">

            OUR COMMITMENT

          </span>

          <h3 className="mt-6 text-4xl font-bold text-white">

            Your Success

            <span className="text-[#D4AF37]">
              {" "}
              Is Our Priority
            </span>

          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">

            We don't just develop software. We build scalable digital
            experiences that improve customer engagement, increase efficiency
            and help businesses grow for years to come.

          </p>

        </motion.div>

      </div>
    </section>
  );
}