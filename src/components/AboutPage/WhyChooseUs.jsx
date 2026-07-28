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
    <section className="relative overflow-hidden bg-[#050505] py-28">

      {/* Background */}

      <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-[#D4AF37]/10 blur-[150px]" />

      <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-[#D4AF37]/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

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
            duration: .8,
          }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >

          <span className="rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-[#D4AF37]">

            Why Choose Riyadvi

          </span>

          <h2 className="mt-8 text-5xl font-black text-white">

            What Makes Us

            <span className="block text-[#D4AF37]">

              Different

            </span>

          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-400">

            We combine creativity, strategy and technology to build
            digital products that help businesses grow confidently.

          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (

              <motion.div
                key={feature.title}
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
                  delay: index * .12,
                  duration: .7,
                }}
                whileHover={{
                  y: -10,
                }}
                className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0B0B0B] p-8 transition-all duration-500 hover:border-[#D4AF37]/40 hover:shadow-[0_0_45px_rgba(212,175,55,.15)]"
              >

                {/* Hover Glow */}

                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="relative z-10">

                  <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-[#D4AF37]/10">

                    <Icon
                      size={38}
                      className="text-[#D4AF37]"
                    />

                  </div>

                  <h3 className="mt-8 text-2xl font-bold text-white">

                    {feature.title}

                  </h3>

                  <p className="mt-5 leading-8 text-gray-400">

                    {feature.description}

                  </p>

                  <div className="mt-8 h-px bg-gradient-to-r from-[#D4AF37]/40 to-transparent" />

                  <div className="mt-6 text-[#D4AF37] font-medium">

                    Learn More →

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

            {/* Background Glow */}

            <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-[130px]" />

            <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-[130px]" />

            <div className="relative z-10 grid items-center gap-12 lg:grid-cols-2">

              {/* Left */}

              <div>

                <span className="rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-[#D4AF37]">

                  Our Commitment

                </span>

                <h3 className="mt-6 text-4xl font-black text-white">

                  Your Success

                  <span className="block text-[#D4AF37]">

                    Is Our Priority

                  </span>

                </h3>

                <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">

                  We don't just build websites and applications—we create
                  digital experiences that help businesses grow, improve
                  customer engagement and achieve measurable results.

                </p>

              </div>

              {/* Right */}

              <div className="grid grid-cols-2 gap-6">

                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

                  <h4 className="text-4xl font-black text-[#D4AF37]">

                    50+

                  </h4>

                  <p className="mt-2 text-gray-400">

                    Successful Projects

                  </p>

                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

                  <h4 className="text-4xl font-black text-[#D4AF37]">

                    30+

                  </h4>

                  <p className="mt-2 text-gray-400">

                    Happy Clients

                  </p>

                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

                  <h4 className="text-4xl font-black text-[#D4AF37]">

                    98%

                  </h4>

                  <p className="mt-2 text-gray-400">

                    Client Satisfaction

                  </p>

                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

                  <h4 className="text-4xl font-black text-[#D4AF37]">

                    24/7

                  </h4>

                  <p className="mt-2 text-gray-400">

                    Technical Support

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