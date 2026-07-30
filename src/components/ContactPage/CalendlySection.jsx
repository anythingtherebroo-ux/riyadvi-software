import { motion } from "framer-motion";
import { InlineWidget } from "react-calendly";
import { CalendarDays, Clock3, Video, CheckCircle2, Sparkles } from "lucide-react";
import { companyInfo } from "./contactData";

const benefits = [
  {
    icon: CalendarDays,
    title: "Choose Your Time",
    description: "Pick a date and time that fits your schedule.",
  },
  {
    icon: Video,
    title: "Online Meeting",
    description: "Meet with our experts through Google Meet or Zoom.",
  },
  {
    icon: Clock3,
    title: "30 Minute Session",
    description: "A focused consultation about your project.",
  },
];

export default function CalendlySection() {
  return (
    <section id="booking" className="relative overflow-hidden bg-[#050505] py-24 sm:py-32 text-white">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center sm:mb-20"
        >
          <div className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-[#d4af37]/30 bg-white/5 px-4 py-2 backdrop-blur-md shadow-[0_0_20px_rgba(212,175,55,0.1)]">
            <Sparkles className="text-[#d4af37]" size={16} />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d4af37] sm:text-sm">
              Free Consultation
            </span>
          </div>

          <h2 className="font-poppins text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Book Your{" "}
            <span className="bg-gradient-to-r from-[#d4af37] via-yellow-300 to-[#d4af37] bg-clip-text text-transparent">
              Strategy Call
            </span>
          </h2>

          <p className="mt-6 text-base leading-relaxed text-gray-400 sm:text-lg sm:leading-8">
            Schedule a free consultation to discuss your project, goals and the
            best digital solution for your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 lg:col-span-5"
          >
            {benefits.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#d4af37]/20 bg-[#d4af37]/10 text-[#d4af37]">
                  <item.icon size={22} />
                </div>
                <div>
                  <h3 className="font-poppins text-lg font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}

            <div className="flex items-start gap-4 rounded-3xl border border-[#d4af37]/30 bg-[#d4af37]/10 p-6 backdrop-blur-xl">
              <CheckCircle2 size={24} className="shrink-0 text-[#d4af37]" />
              <p className="text-sm leading-relaxed text-gray-300">
                No obligation consultation. We'll discuss your requirements,
                answer your questions and suggest the most suitable solution.
              </p>
            </div>
          </motion.div>

          {/* Right Column Calendly Widget Frame */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-3xl border border-white/15 bg-white/[0.04] p-2 backdrop-blur-2xl lg:col-span-7"
          >
            <InlineWidget
              url={companyInfo.calendly}
              styles={{ height: "700px", width: "100%" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}