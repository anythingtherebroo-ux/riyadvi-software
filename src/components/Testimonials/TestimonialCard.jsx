import { Star } from "lucide-react";

export default function TestimonialCard({ testimonial, index }) {
  const code = String(index + 1).padStart(2, "0");

  return (
    <article
      className="
      group
      relative
      overflow-hidden
      rounded-3xl
      border
      border-white/10
      bg-white/5
      p-8
      backdrop-blur-xl
      transition-all
      duration-500
      hover:-translate-y-2
      hover:border-[#d4af37]/40
      hover:shadow-[0_20px_60px_rgba(212,175,55,0.15)]
      "
    >
      <div className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-[#d4af37] transition-transform duration-500 group-hover:scale-x-100" />

      <div className="mb-8 flex items-center justify-between">

        <span className="text-xs font-semibold tracking-[0.25em] text-[#d4af37]">
          REVIEW / {code}
        </span>

        <div className="flex gap-1 text-[#d4af37]">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star
              key={i}
              size={16}
              fill="currentColor"
            />
          ))}
        </div>

      </div>

      <p className="mb-8 leading-8 text-gray-300">
        "{testimonial.quote}"
      </p>

      <div className="flex items-center gap-4">

        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="h-14 w-14 rounded-full border-2 border-[#d4af37] object-cover"
        />

        <div>

          <h3 className="font-semibold text-white">
            {testimonial.name}
          </h3>

          <p className="text-sm text-gray-400">
            {testimonial.role}
          </p>

        </div>

      </div>

      <div className="mt-8 rounded-xl border border-[#d4af37]/20 bg-[#d4af37]/10 px-4 py-3 text-sm font-medium text-[#d4af37]">
        {testimonial.project}
      </div>
    </article>
  );
}