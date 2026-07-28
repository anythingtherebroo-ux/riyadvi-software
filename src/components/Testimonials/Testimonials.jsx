import { motion } from "framer-motion";
import { MessageSquareQuote, ShieldCheck, Sparkles } from "lucide-react";
import TestimonialCard from "./TestimonialCard";
import { testimonialsData } from "./testimonialsData";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#080808] py-24 sm:py-28"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[120px]" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-64 w-64 rounded-full bg-[#D4AF37]/5 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-4 py-2 text-sm font-medium text-[#D4AF37]">
            <MessageSquareQuote size={16} />
            CLIENT TESTIMONIALS
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl">
            Trusted by Businesses
            <span className="text-[#D4AF37]"> That Value Quality</span>
          </h2>

          <p className="mt-6 text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
            Our clients choose Riyadvi for premium design, reliable delivery, and
            responsive support throughout their digital journey.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 rounded-3xl border border-[#2A2A2A] bg-[#141414] px-6 py-6 text-center sm:flex-row sm:text-left"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#D4AF37]">
            <ShieldCheck size={24} />
          </div>

          <div>
            <h3 className="font-semibold text-white">
              Premium frontend, built for real businesses
            </h3>
            <p className="text-sm text-gray-400">
              Responsive layouts, polished interactions, and consistent branding across every screen.
            </p>
          </div>

          <div className="sm:ml-auto">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#D4AF37]/10 px-3 py-1.5 text-xs font-medium text-[#D4AF37]">
              <Sparkles size={14} />
              Riyadvi Quality
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}