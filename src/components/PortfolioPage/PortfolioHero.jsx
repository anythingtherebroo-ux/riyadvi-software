import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, FolderOpen, Award, Users, Briefcase } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const stats = [
  { icon: Briefcase, number: "50+", label: "Projects Delivered" },
  { icon: Users, number: "30+", label: "Happy Clients" },
  { icon: Award, number: "98%", label: "Client Satisfaction" },
  { icon: FolderOpen, number: "2021", label: "Founded" },
];

export default function PortfolioHero() {
  const navigate = useNavigate();

  const handleStartProject = () => {
    const contactSection =
      document.getElementById("contact-form") ||
      document.getElementById("contact");

    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/contact");
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#080808] pt-36 sm:pt-40 lg:pt-44 pb-20 sm:pb-24 text-white">
      {/* Background Orbs & Grid */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-[#d4af37]/15 blur-[140px]" />
        <div className="absolute right-0 bottom-0 h-[350px] w-[350px] rounded-full bg-[#d4af37]/10 blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mb-8 flex items-center gap-2 text-xs sm:text-sm text-gray-400 font-medium"
        >
          <Link to="/" className="transition hover:text-[#d4af37]">
            Home
          </Link>
          <ChevronRight size={14} className="text-gray-600" />
          <span className="text-[#d4af37]">Portfolio</span>
        </motion.div>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Left Text */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="lg:col-span-7"
          >
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#d4af37]/30 bg-white/5 px-4 py-2 backdrop-blur-md shadow-[0_0_20px_rgba(212,175,55,0.1)]">
              <FolderOpen size={16} className="text-[#d4af37]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d4af37] sm:text-sm">
                Our Success Stories
              </span>
            </div>

            <h1 className="font-poppins text-4xl font-extrabold leading-tight text-white sm:text-6xl lg:text-6xl 2xl:text-7xl">
              Crafting{" "}
              <span className="bg-gradient-to-r from-[#d4af37] via-yellow-300 to-[#d4af37] bg-clip-text text-transparent">
                Digital Excellence
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-300 sm:text-lg sm:leading-8">
              Explore a collection of web applications, mobile apps, UI/UX
              designs, AR/VR experiences and enterprise software we've
              delivered for businesses across multiple industries.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4 sm:gap-5">
              <button
                onClick={handleStartProject}
                className="group inline-flex items-center gap-2.5 rounded-full bg-[#d4af37] px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(212,175,55,0.45)]"
              >
                <span>Start Your Project</span>
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>

              <Link
                to="/services"
                className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.03] px-8 py-4 font-semibold text-white backdrop-blur-md transition hover:border-[#d4af37] hover:text-[#d4af37]"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>

          {/* Right Stats Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {stats.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    whileHover={{ y: -6 }}
                    key={item.label}
                    className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition-all duration-500 hover:border-[#d4af37]/40 hover:bg-white/[0.07]"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#d4af37]/20 bg-[#d4af37]/10 text-[#d4af37] transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                      <Icon size={26} />
                    </div>

                    <h2 className="mt-6 font-poppins text-3xl font-extrabold text-[#d4af37] sm:text-4xl">
                      {item.number}
                    </h2>

                    <p className="mt-2 text-xs sm:text-sm font-medium text-gray-400">
                      {item.label}
                    </p>
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