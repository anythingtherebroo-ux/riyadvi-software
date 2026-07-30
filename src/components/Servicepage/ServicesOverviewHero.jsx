import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { ChevronRight, Sparkles } from "lucide-react";

export default function ServicesOverviewHero() {
  const navigate = useNavigate();

  const handleConsultationClick = () => {
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
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-36 left-1/2 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-[#d4af37]/15 blur-[160px]" />
        <div className="absolute right-0 bottom-0 h-[350px] w-[350px] rounded-full bg-[#d4af37]/5 blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex items-center justify-center gap-2 text-sm text-gray-400 font-medium"
        >
          <Link to="/" className="transition hover:text-[#d4af37]">
            Home
          </Link>
          <ChevronRight size={16} className="text-gray-600" />
          <span className="text-[#d4af37]">Services</span>
        </motion.div>

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/30 bg-white/5 px-4 py-2 backdrop-blur-md shadow-[0_0_20px_rgba(212,175,55,0.1)]"
        >
          <Sparkles className="text-[#d4af37]" size={16} />
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d4af37] sm:text-sm">
            What We Do
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto max-w-4xl font-poppins text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-7xl"
        >
          Full-Spectrum{" "}
          <span className="bg-gradient-to-r from-[#d4af37] via-yellow-300 to-[#d4af37] bg-clip-text text-transparent">
            Digital Solutions
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg sm:leading-8"
        >
          From websites and apps to immersive AR/VR and 3D experiences, we build
          every piece of technology your business needs to grow — under one roof.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-5 sm:mt-12"
        >
          <button
            onClick={handleConsultationClick}
            className="group inline-flex items-center rounded-full bg-[#d4af37] px-8 py-4 text-sm sm:text-base font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(212,175,55,0.45)]"
          >
            Book a Free Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
}