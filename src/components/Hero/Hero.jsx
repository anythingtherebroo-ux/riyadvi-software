import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  Sparkles,
  CheckCircle2,
  Terminal as TerminalIcon,
  Zap,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import HeroStats from "./HeroStats";
import Button from "../Common/Button";
import { heroFeatures, terminalLines } from "./heroData";

const Hero = () => {
  const navigate = useNavigate();

  // Handler for Get Quote button
  const handleQuoteClick = () => {
    const contactSection =
      document.getElementById("contact-form") ||
      document.getElementById("contact");

    if (contactSection) {
      // Smooth scroll to contact & quote form
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to /contact page if section isn't on current page
      navigate("/contact");
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#080808] pt-36 sm:pt-40 lg:pt-44 pb-20 sm:pb-28">
      {/* ================= BACKGROUND EFFECTS ================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Grid Overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 40%, #000 40%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 40%, #000 40%, transparent 100%)",
          }}
        />

        {/* Ambient Glows */}
        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.12, 0.18, 0.12],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-32 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#d4af37]/15 blur-[160px]"
        />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-[#d4af37]/5 blur-[140px]" />
        <div className="absolute right-0 top-1/4 h-[350px] w-[350px] rounded-full bg-yellow-400/5 blur-[130px]" />
      </div>

      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 12-Column Grid aligned to TOP (items-start) */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-8 xl:gap-12">
          
          {/* ================= LEFT CONTENT (Col 7) ================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:col-span-7"
          >
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#d4af37]/30 bg-white/5 px-4 py-2 backdrop-blur-md shadow-[0_0_20px_rgba(212,175,55,0.1)]"
            >
              <Sparkles className="animate-pulse text-[#d4af37]" size={16} />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d4af37] sm:text-sm">
                Premium Digital Agency
              </span>
            </motion.div>

            {/* Proportional Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.8 }}
              className="font-poppins text-3xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl"
            >
              Build{" "}
              <span className="relative inline-block text-[#d4af37]">
                Modern
                <span className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-gradient-to-r from-[#d4af37] to-transparent opacity-60" />
              </span>{" "}
              Software
              <br />
              That Helps Your
              <br />
              <span className="bg-gradient-to-r from-[#d4af37] via-yellow-300 to-[#d4af37] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(212,175,55,0.2)]">
                Business Grow
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.8 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-gray-400 sm:text-lg sm:leading-8"
            >
              We create premium websites, mobile applications, UI/UX experiences
              and scalable digital products that elevate brands and deliver
              measurable business results.
            </motion.p>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2"
            >
              {heroFeatures.slice(0, 4).map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-white/[0.04] bg-white/[0.02] p-2.5 backdrop-blur-sm"
                >
                  <CheckCircle2 size={18} className="shrink-0 text-[#d4af37]" />
                  <span className="text-sm font-medium text-gray-300">
                    {item}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5"
            >
              <Button onClick={handleQuoteClick}>
                Get a Free Quote
              </Button>

              <Link
                to="/services"
                className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-7 py-4 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-[#d4af37] hover:bg-white/10"
              >
                <Play size={16} className="fill-[#d4af37] text-[#d4af37]" />
                <span>Explore Services</span>
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          </motion.div>

          {/* ================= RIGHT TERMINAL DISPLAY (Col 5) ================= */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="w-full lg:col-span-5 lg:mt-4"
          >
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              {/* Back Glow */}
              <div className="absolute inset-0 rounded-[35px] bg-[#d4af37]/20 blur-3xl" />

              {/* Terminal Window Card */}
              <div className="relative overflow-hidden rounded-[28px] border border-white/15 bg-white/[0.04] backdrop-blur-2xl shadow-[0_30px_90px_rgba(0,0,0,0.65)]">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.02] px-5 py-4">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-green-400" />
                    <span className="ml-2 font-mono text-xs text-gray-400">bash</span>
                  </div>

                  <span className="rounded-full border border-green-500/30 bg-green-500/10 px-3 py-0.5 text-[11px] font-semibold text-green-400">
                    LIVE BUILD
                  </span>
                </div>

                {/* Output */}
                <div className="space-y-3 p-6 font-mono text-xs sm:text-sm">
                  <div className="text-[#d4af37]">~/premium-project</div>

                  {terminalLines.map((line, index) => (
                    <motion.div
                      key={line}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className="flex items-center text-gray-200"
                    >
                      <span className="mr-2.5 text-[#d4af37]">&gt;</span>
                      <span className={line.includes("completed") ? "text-green-400 font-semibold" : ""}>
                        {line}
                      </span>
                    </motion.div>
                  ))}

                  <motion.div
                    animate={{ opacity: [1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="h-4 w-2.5 bg-[#d4af37]"
                  />
                </div>

                {/* Footer Tech Tabs */}
                <div className="grid grid-cols-3 border-t border-white/10 bg-black/20">
                  {[
                    ["React", "Frontend"],
                    ["Node", "Backend"],
                    ["MongoDB", "Cloud"],
                  ].map(([title, value], i) => (
                    <div
                      key={title}
                      className={`p-3.5 sm:p-4 text-center ${
                        i !== 2 ? "border-r border-white/10" : ""
                      }`}
                    >
                      <p className="text-[10px] uppercase tracking-widest text-gray-500">
                        {value}
                      </p>
                      <h4 className="mt-0.5 font-poppins text-xs sm:text-sm font-semibold text-white">
                        {title}
                      </h4>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute -bottom-5 -right-4 hidden rounded-2xl border border-[#d4af37]/30 bg-[#121212]/95 p-4 shadow-2xl backdrop-blur-xl sm:flex sm:items-center sm:gap-3"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#d4af37]/15 text-[#d4af37]">
                  <Zap size={20} />
                </div>
                <div>
                  <p className="text-[11px] uppercase text-gray-400">Projects Delivered</p>
                  <h2 className="text-2xl font-bold text-[#d4af37]">100+</h2>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>

        {/* Hero Stats */}
        <HeroStats />
      </div>
    </section>
  );
};

export default Hero;