import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

export default function TestimonialCard({ testimonial, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      whileHover={{ y: -8 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[#2A2A2A] bg-[#141414] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)] transition-all duration-300 hover:border-[#D4AF37]/50 hover:shadow-[0_24px_80px_rgba(212,175,55,0.12)] sm:p-7"
    >
      <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#D4AF37]/10 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="h-14 w-14 rounded-full border-2 border-[#D4AF37]/30 object-cover"
          />

          <div>
            <h3 className="text-base font-semibold text-white">
              {testimonial.name}
            </h3>
            <p className="text-sm text-gray-400">{testimonial.role}</p>
          </div>
        </div>

        <div className="flex items-center gap-1">
          {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
            <Star
              key={starIndex}
              size={16}
              className="fill-[#D4AF37] text-[#D4AF37]"
            />
          ))}
        </div>
      </div>

      <div className="relative mt-6">
        <Quote className="mb-4 text-[#D4AF37]/80" size={34} />
        <p className="text-sm leading-7 text-gray-300 sm:text-base">
          {testimonial.quote}
        </p>
      </div>

      <div className="relative mt-auto pt-6">
        <div className="inline-flex items-center rounded-full border border-[#D4AF37]/25 bg-[#D4AF37]/10 px-3 py-1.5 text-xs font-medium text-[#D4AF37]">
          {testimonial.project}
        </div>
      </div>
    </motion.article>
  );
}