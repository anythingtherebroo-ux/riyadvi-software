import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  Briefcase,
  Users,
  Award,
  Rocket,
} from "lucide-react";
import { Link } from "react-router-dom";

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
    icon: Award,
    number: "98%",
    label: "Client Satisfaction",
  },
  {
    icon: Rocket,
    number: "2021",
    label: "Founded",
  },
];

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#080808] pt-40 pb-28">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-[#d4af37]/5 blur-[180px]" />

        <div className="absolute bottom-0 right-0 h-[520px] w-[520px] rounded-full bg-[#d4af37]/10 blur-[180px]" />

      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Breadcrumb */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-10 flex items-center gap-2 text-sm text-gray-400"
        >

          <Link
            to="/"
            className="hover:text-[#d4af37]"
          >
            Home
          </Link>

          <ChevronRight size={15} />

          <span className="text-[#d4af37]">

            About

          </span>

        </motion.div>

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .6 }}
          >

            <span className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af37]">

              <span className="h-[2px] w-10 bg-[#d4af37]" />

              About Riyadvi

            </span>

            <h1 className="mt-7 text-5xl font-bold leading-tight text-white lg:text-6xl">

              Building

              <span className="text-[#d4af37]">

                {" "}Digital Experiences

              </span>

              <br />

              That Drive Growth

            </h1>

            <p className="mt-8 max-w-xl text-lg leading-9 text-gray-400">

              Riyadvi Software Technologies develops premium
              websites,
              mobile apps,
              enterprise software,
              UI/UX,
              branding,
              digital marketing
              and scalable digital products
              for startups and enterprises.

            </p>

            <div className="mt-12 flex flex-wrap gap-5">

              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-[#d4af37] px-8 py-4 font-semibold text-black transition hover:scale-105"
              >

                Let's Work Together

                <ArrowRight size={18} />

              </Link>

              <Link
                to="/portfolio"
                className="rounded-full border border-[#d4af37]/30 px-8 py-4 font-semibold text-white transition hover:bg-[#d4af37] hover:text-black"
              >

                View Portfolio

              </Link>

            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: .7,
            }}
          >

            <div
              className="
              rounded-3xl
              border
              border-white/10
              bg-white/5
              p-8
              backdrop-blur-xl
              "
            >

              <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-5">

                <span className="text-gray-300">

                  riyadvi@overview

                </span>

                <span className="rounded-full bg-[#d4af37]/20 px-4 py-1 text-[#d4af37]">

                  Since 2021

                </span>

              </div>

              <div className="grid grid-cols-2 gap-6">

                {stats.map((item) => {

                  const Icon = item.icon;

                  return (

                    <div
                      key={item.label}
                      className="
                      rounded-2xl
                      border
                      border-white/10
                      bg-black/20
                      p-6
                      transition
                      duration-300
                      hover:border-[#d4af37]/40
                      hover:-translate-y-2
                      "
                    >

                      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#d4af37]/10">

                        <Icon
                          size={22}
                          className="text-[#d4af37]"
                        />

                      </div>

                      <h2 className="text-3xl font-bold text-white">

                        {item.number}

                      </h2>

                      <p className="mt-2 text-gray-400">

                        {item.label}

                      </p>

                    </div>

                  );

                })}

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}