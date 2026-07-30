import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function ServiceHero({ service }) {
  const Icon = service.icon;
  const navigate = useNavigate();

  const handleQuoteClick = () => {
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
    <section className="relative overflow-hidden bg-[#080808] pt-36 sm:pt-40 lg:pt-44 pb-20 sm:pb-28 text-white">
      {/* Ambient Glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-[#d4af37]/15 blur-[160px]" />
        <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-[#d4af37]/5 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 flex flex-wrap items-center gap-2 text-xs sm:text-sm text-gray-400 font-medium"
        >
          <Link to="/" className="transition hover:text-[#d4af37]">
            Home
          </Link>
          <ChevronRight size={14} className="text-gray-600" />
          <Link to="/services" className="transition hover:text-[#d4af37]">
            Services
          </Link>
          <ChevronRight size={14} className="text-gray-600" />
          <span className="text-[#d4af37]">{service.title}</span>
        </motion.div>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/30 bg-white/5 px-4 py-2 backdrop-blur-md">
              <Icon size={16} className="text-[#d4af37]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d4af37] sm:text-sm">
                Premium Digital Solutions
              </span>
            </div>

            <h1 className="font-poppins text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
              {service.title}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg sm:leading-8">
              {service.subtitle}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4 sm:gap-5">
              <button
                onClick={handleQuoteClick}
                className="group inline-flex items-center gap-2.5 rounded-full bg-[#d4af37] px-8 py-4 font-semibold text-black transition-all hover:scale-105"
              >
                <span>Get a Quote</span>
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </button>

              <Link
                to="/portfolio"
                className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.03] px-8 py-4 font-semibold text-white transition hover:border-[#d4af37] hover:text-[#d4af37]"
              >
                View Portfolio
              </Link>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/[0.04] p-3 shadow-2xl">
              <img
                src={service.heroImage}
                alt={service.title}
                className="h-72 sm:h-96 w-full rounded-2xl object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}