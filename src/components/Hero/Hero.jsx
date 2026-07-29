import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";
import HeroStats from "./HeroStats";
import Button from "../Common/Button";

const terminalLines = [
  "Initializing project...",
  "Installing dependencies...",
  "Compiling React components...",
  "Generating production build...",
  "Optimizing assets...",
  "Deployment completed successfully ✔",
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#080808] pt-32 pb-24">
      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
            linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)
          `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Glow */}
        <div className="absolute -top-32 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#d4af37]/10 blur-[150px]" />

        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-[#d4af37]/5 blur-[140px]" />

        <div className="absolute right-0 top-20 h-[300px] w-[300px] rounded-full bg-yellow-400/5 blur-[120px]" />
      </div>

      <div className="relative z-20 mx-auto flex max-w-7xl flex-col items-center gap-20 px-6 lg:flex-row">
        {/* ================= LEFT ================= */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          {/* Badge */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .3 }}
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#d4af37]/20 bg-white/5 px-5 py-2 backdrop-blur-md"
          >
            <Sparkles
              className="text-[#d4af37]"
              size={18}
            />

            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d4af37]">
              Premium Digital Agency
            </span>
          </motion.div>

          {/* Heading */}

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .15 }}
            className="font-poppins text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl xl:text-[5.2rem]"
          >
            Build
            <span className="text-[#d4af37]"> Modern </span>
            Software
            <br />

            That Helps Your
            <br />

            <span className="bg-gradient-to-r from-[#d4af37] via-yellow-300 to-[#d4af37] bg-clip-text text-transparent">
              Business Grow
            </span>
          </motion.h1>

          {/* Description */}

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .35 }}
            className="mt-8 max-w-2xl text-lg leading-9 text-gray-400"
          >
            We create premium websites, mobile applications,
            UI/UX experiences and scalable digital products that
            elevate brands and deliver measurable business
            results.
          </motion.p>

          {/* Features */}

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {[
              "Modern UI/UX Design",
              "Fast Performance",
              "SEO Friendly",
              "24/7 Technical Support",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3"
              >
                <CheckCircle2
                  size={20}
                  className="text-[#d4af37]"
                />

                <span className="text-gray-300">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Buttons */}

          <div className="mt-12 flex flex-wrap gap-5">
            <Button>
              Book Free Consultation
            </Button>

            <Link
              to="/services"
              className="group flex items-center gap-3 rounded-full border border-white/10 px-7 py-4 font-semibold text-white transition-all duration-300 hover:border-[#d4af37] hover:bg-white/5"
            >
              <Play
                size={18}
                className="text-[#d4af37]"
              />

              Explore Services

              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </Link>
          </div>

          <HeroStats />
        </motion.div>

        {/* ================= RIGHT ================= */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .9 }}
          className="flex w-full flex-1 justify-center"
        >
          <div className="relative w-full max-w-xl">
            {/* Glow */}

            <div className="absolute inset-0 rounded-[35px] bg-[#d4af37]/20 blur-3xl" />

            {/* Card */}

            <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_30px_80px_rgba(0,0,0,.45)]">

              {/* Top */}

              <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>

                <span className="rounded-full bg-green-500/20 px-4 py-1 text-xs font-semibold text-green-400">
                  LIVE
                </span>
              </div>

              {/* Terminal */}

              <div className="space-y-5 p-8 font-mono">
                <div className="text-[#d4af37]">
                  ~/premium-project
                </div>

                {terminalLines.map((line, index) => (
                  <motion.div
                    key={line}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * .25,
                    }}
                    className="flex items-center text-gray-200"
                  >
                    <span className="mr-3 text-[#d4af37]">
                      &gt;
                    </span>

                    {line}
                  </motion.div>
                ))}

                <motion.div
                  animate={{
                    opacity: [1, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: .8,
                  }}
                  className="h-5 w-3 bg-[#d4af37]"
                />
              </div>

              {/* Bottom */}

              <div className="grid grid-cols-3 border-t border-white/10">

                {[
                  ["React", "Frontend"],
                  ["Laravel", "Backend"],
                  ["AWS", "Cloud"],
                ].map(([title, value]) => (
                  <div
                    key={title}
                    className="border-r border-white/10 p-6 last:border-r-0"
                  >
                    <p className="text-xs uppercase tracking-widest text-gray-500">
                      {value}
                    </p>

                    <h4 className="mt-2 text-white font-semibold">
                      {title}
                    </h4>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Card */}

            <motion.div
              animate={{
                y: [-10, 10, -10],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
              }}
              className="absolute -right-10 -bottom-8 hidden rounded-2xl border border-[#d4af37]/20 bg-[#121212] p-5 shadow-2xl lg:block"
            >
              <p className="text-sm text-gray-400">
                Projects Delivered
              </p>

              <h2 className="mt-2 text-4xl font-bold text-[#d4af37]">
                100+
              </h2>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;