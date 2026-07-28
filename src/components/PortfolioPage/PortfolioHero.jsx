import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, FolderOpen, Award, Users, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

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
    icon: FolderOpen,
    number: "2021",
    label: "Founded",
  },
];

export default function PortfolioHero() {
  return (
    <section className="relative overflow-hidden bg-black text-white">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#090909] to-black" />

        <div className="absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-[#D4AF37]/15 blur-[140px]" />

        <div className="absolute right-0 bottom-0 h-[350px] w-[350px] rounded-full bg-[#D4AF37]/10 blur-[140px]" />

        <div className="absolute inset-0 opacity-[0.04]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </div>

      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-24 lg:px-8">

        {/* Breadcrumb */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mb-10 flex items-center gap-2 text-sm text-gray-400"
        >

          <Link
            to="/"
            className="transition hover:text-[#D4AF37]"
          >
            Home
          </Link>

          <ChevronRight size={16} />

          <span className="text-[#D4AF37]">
            Portfolio
          </span>

        </motion.div>

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
          >

            <div className="inline-flex items-center gap-3 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-2 text-[#D4AF37]">

              <FolderOpen size={20} />

              <span className="font-medium">
                Our Success Stories
              </span>

            </div>

            <h1 className="mt-8 text-5xl font-black leading-tight lg:text-7xl">

              Crafting

              <span className="block text-[#D4AF37]">

                Digital Excellence

              </span>

            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-300">

              Explore a collection of web applications, mobile apps,
              UI/UX designs, AR/VR experiences and enterprise software
              we've delivered for businesses across multiple industries.

            </p>

            <div className="mt-12 flex flex-wrap gap-5">

              <Link
                to="/contact"
                className="group rounded-xl bg-[#D4AF37] px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(212,175,55,.45)]"
              >

                Start Your Project

                <ArrowRight
                  size={18}
                  className="ml-2 inline transition group-hover:translate-x-1"
                />

              </Link>

              <Link
                to="/services"
                className="rounded-xl border border-white/15 px-8 py-4 transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
              >
                Explore Services
              </Link>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{
              opacity: 0,
              scale: .9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: .8,
            }}
          >

            <div className="grid grid-cols-2 gap-6">

              {stats.map((item) => {

                const Icon = item.icon;

                return (

                  <motion.div
                    whileHover={{
                      y: -8,
                    }}
                    key={item.label}
                    className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:border-[#D4AF37]/40 hover:bg-white/10"
                  >

                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37]">

                      <Icon size={30} />

                    </div>

                    <h2 className="mt-8 text-4xl font-black text-[#D4AF37]">

                      {item.number}

                    </h2>

                    <p className="mt-3 text-gray-400">

                      {item.label}

                    </p>

                  </motion.div>

                );

              })}

            </div>

          </motion.div>

        </div>

        {/* Bottom Scroll Indicator */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1,
          }}
          className="mt-24 flex justify-center"
        >

          <div className="flex flex-col items-center">

            <span className="mb-4 text-sm uppercase tracking-[0.25em] text-gray-500">

              Scroll to Explore

            </span>

            <div className="flex h-12 w-7 justify-center rounded-full border border-[#D4AF37]/40">

              <motion.div
                animate={{
                  y: [0, 16, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.8,
                }}
                className="mt-2 h-3 w-3 rounded-full bg-[#D4AF37]"
              />

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}