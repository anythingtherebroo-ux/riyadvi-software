import { motion } from "framer-motion";
import { Target, Eye, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const cards = [
  {
    title: "Our Mission",
    icon: Target,
    description:
      "To empower startups, SMEs and enterprises with innovative digital solutions that solve real business challenges and create measurable growth. We focus on quality, scalability and long-term partnerships.",
    color: "from-[#D4AF37]/20 to-transparent",
  },
  {
    title: "Our Vision",
    icon: Eye,
    description:
      "To become a globally recognised technology partner known for creating modern digital experiences, innovative products and customer-centric solutions that shape the future of businesses.",
    color: "from-[#D4AF37]/10 to-transparent",
  },
];

export default function MissionVision() {
  return (
    <section className="relative overflow-hidden bg-black py-28">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-[#D4AF37]/10 blur-[170px]" />

        <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-[#D4AF37]/10 blur-[170px]" />

      </div>

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

            Mission & Vision

          </span>

          <h2 className="mt-8 text-5xl font-black text-white">

            Building Technology

            <span className="block text-[#D4AF37]">

              With Purpose

            </span>

          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-400">

            Every project we undertake is guided by a clear mission,
            a bold vision and an unwavering commitment to innovation.

          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 lg:grid-cols-2">

          {cards.map((card, index) => {

            const Icon = card.icon;

            return (

              <motion.div
                key={card.title}
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
                  delay: index * .2,
                  duration: .8,
                }}
                whileHover={{
                  y: -10,
                }}
                className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-[#0A0A0A] p-10 transition-all duration-500 hover:border-[#D4AF37]/40 hover:shadow-[0_0_45px_rgba(212,175,55,.15)]"
              >

                {/* Glow */}

                <div
                  className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-40`}
                />

                {/* Icon */}

                <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-3xl bg-[#D4AF37]/10">

                  <Icon
                    size={38}
                    className="text-[#D4AF37]"
                  />

                </div>

                <h3 className="relative z-10 mt-8 text-3xl font-bold text-white">

                  {card.title}

                </h3>

                <p className="relative z-10 mt-6 text-lg leading-8 text-gray-300">

                  {card.description}

                </p>

                {/* Divider */}

                <div className="relative z-10 my-8 h-px bg-gradient-to-r from-[#D4AF37]/50 to-transparent" />

                {/* Features */}

                <div className="relative z-10 space-y-4">

                  <div className="flex items-center gap-3 text-gray-300">

                    <div className="h-2 w-2 rounded-full bg-[#D4AF37]" />

                    Innovation First

                  </div>

                  <div className="flex items-center gap-3 text-gray-300">

                    <div className="h-2 w-2 rounded-full bg-[#D4AF37]" />

                    Client-Centric Approach

                  </div>

                  <div className="flex items-center gap-3 text-gray-300">

                    <div className="h-2 w-2 rounded-full bg-[#D4AF37]" />

                    Long-Term Success

                  </div>

                </div>

              </motion.div>

            );

          })}

        </div>

        {/* Bottom CTA */}

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
          className="mt-20 text-center"
        >

          <Link
            to="/services"
            className="group inline-flex items-center rounded-xl bg-[#D4AF37] px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(212,175,55,.45)]"
          >

            Explore Our Services

            <ArrowRight
              size={18}
              className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
            />

          </Link>

        </motion.div>

      </div>

    </section>
  );
}