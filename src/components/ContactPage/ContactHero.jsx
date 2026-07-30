import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, Mail, CalendarDays, ChevronRight, Sparkles } from "lucide-react";
import { companyInfo } from "./contactData";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-[#080808] pt-36 sm:pt-40 lg:pt-44 pb-20 sm:pb-24 text-white">
      {/* Ambient Background Glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-36 left-1/2 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-[#d4af37]/15 blur-[160px]" />
        <div className="absolute right-0 bottom-0 h-[350px] w-[350px] rounded-full bg-[#d4af37]/5 blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-center gap-2 text-xs sm:text-sm text-gray-400 font-medium"
        >
          <Link to="/" className="transition hover:text-[#d4af37]">
            Home
          </Link>
          <ChevronRight size={14} className="text-gray-600" />
          <span className="text-[#d4af37]">Contact</span>
        </motion.div>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#d4af37]/30 bg-white/5 px-4 py-2 backdrop-blur-md shadow-[0_0_20px_rgba(212,175,55,0.1)]">
              <Sparkles className="text-[#d4af37]" size={16} />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d4af37] sm:text-sm">
                Contact Riyadvi
              </span>
            </div>

            <h1 className="font-poppins text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              Let's Build{" "}
              <span className="bg-gradient-to-r from-[#d4af37] via-yellow-300 to-[#d4af37] bg-clip-text text-transparent">
                Something Amazing
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg sm:leading-8">
              Have an idea, project or business challenge? We'd love to hear
              from you. Let's discuss how Riyadvi Software Technologies can
              transform your vision into a powerful digital experience.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4 sm:gap-5">
              <a
                href="#contact-form"
                className="group inline-flex items-center gap-2.5 rounded-full bg-[#d4af37] px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(212,175,55,0.45)]"
              >
                <span>Send Message</span>
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <a
                href="#booking"
                className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.03] px-8 py-4 font-semibold text-white backdrop-blur-md transition hover:border-[#d4af37] hover:text-[#d4af37]"
              >
                Book Meeting
              </a>
            </div>
          </motion.div>

          {/* Right Panel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="overflow-hidden rounded-3xl border border-white/15 bg-white/[0.04] backdrop-blur-2xl shadow-[0_30px_90px_rgba(0,0,0,0.6)]">
              <div className="border-b border-white/10 bg-white/[0.02] px-6 py-4 font-mono text-xs text-gray-400">
                <span>riyadvi@quick-contact</span>
              </div>

              <div className="space-y-6 p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#d4af37]/20 bg-[#d4af37]/10 text-[#d4af37]">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-gray-500 font-mono">
                      Phone
                    </h4>
                    <p className="mt-1 font-poppins text-base font-semibold text-white">
                      {companyInfo.phone}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 border-t border-white/10 pt-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#d4af37]/20 bg-[#d4af37]/10 text-[#d4af37]">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-gray-500 font-mono">
                      Email
                    </h4>
                    <p className="mt-1 font-poppins text-base font-semibold text-white">
                      {companyInfo.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 border-t border-white/10 pt-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#d4af37]/20 bg-[#d4af37]/10 text-[#d4af37]">
                    <CalendarDays size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-gray-500 font-mono">
                      Consultation
                    </h4>
                    <p className="mt-1 font-poppins text-base font-semibold text-white">
                      Book a free 30-minute strategy call.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}