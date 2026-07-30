import { ArrowRight } from "lucide-react";

export default function ServiceCard({ service, index }) {
  const Icon = service.icon;
  const code = String(index + 1).padStart(2, "0");

  return (
    <div
      className="
      group
      relative
      flex
      h-full
      flex-col
      justify-between
      overflow-hidden
      rounded-3xl
      border
      border-white/10
      bg-white/[0.04]
      p-7
      sm:p-8
      backdrop-blur-xl
      transition-all
      duration-500
      hover:-translate-y-2
      hover:border-[#d4af37]/50
      hover:bg-white/[0.07]
      hover:shadow-[0_20px_60px_rgba(212,175,55,0.15)]
      "
    >
      {/* Top Gold Glowing Highlight Bar on Hover */}
      <div className="absolute left-0 top-0 h-[3px] w-full origin-left bg-gradient-to-r from-transparent via-[#d4af37] to-transparent scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100" />

      {/* Corner Spotlight Glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[#d4af37]/10 blur-3xl transition-all duration-500 group-hover:scale-150 group-hover:bg-[#d4af37]/20" />

      <div>
        {/* Header Row: Module Badge & Animated Icon */}
        <div className="mb-8 flex items-center justify-between">
          <span className="rounded-full border border-[#d4af37]/20 bg-[#d4af37]/10 px-3.5 py-1 font-mono text-xs font-semibold tracking-widest text-[#d4af37] shadow-[0_0_12px_rgba(212,175,55,0.1)]">
            MOD / {code}
          </span>

          <div
            className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            border
            border-[#d4af37]/20
            bg-[#d4af37]/10
            text-[#d4af37]
            shadow-[0_0_15px_rgba(212,175,55,0.05)]
            transition-all
            duration-500
            group-hover:rotate-6
            group-hover:scale-110
            group-hover:bg-[#d4af37]/20
            group-hover:shadow-[0_0_20px_rgba(212,175,55,0.2)]
            "
          >
            <Icon size={28} />
          </div>
        </div>

        {/* Title */}
        <h3 className="mb-4 font-poppins text-2xl font-bold text-white transition-colors duration-300 group-hover:text-[#d4af37]">
          {service.title}
        </h3>

        {/* Description */}
        <p className="mb-8 text-base leading-relaxed text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
          {service.description}
        </p>
      </div>

      {/* Interactive CTA Button */}
      <div>
        <button
          className="
          group/btn
          inline-flex
          items-center
          gap-2 font-semibold
          text-[#d4af37]
          transition-all
          duration-300
          hover:gap-3.5
          hover:text-yellow-300
          "
        >
          <span>Get a Quote</span>
          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover/btn:translate-x-1"
          />
        </button>
      </div>
    </div>
  );
}