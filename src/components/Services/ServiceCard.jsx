import { ArrowRight } from "lucide-react";

export default function ServiceCard({ service, index }) {
  const Icon = service.icon;

  const code = String(index + 1).padStart(2, "0");

  return (
    <div
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
      <div className="absolute left-0 top-0 h-1 w-full bg-[#d4af37] scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />

      <div className="mb-10 flex items-center justify-between">

        <span className="text-sm font-semibold tracking-widest text-[#d4af37]">
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
          bg-[#d4af37]/10
          text-[#d4af37]
          transition-transform
          duration-500
          group-hover:rotate-6
          "
        >
          <Icon size={28} />
        </div>

      </div>

      <h3 className="mb-4 text-2xl font-bold text-white">
        {service.title}
      </h3>

      <p className="mb-8 leading-8 text-gray-400">
        {service.description}
      </p>

      <button
        className="
        inline-flex
        items-center
        gap-2
        font-semibold
        text-[#d4af37]
        transition-all
        duration-300
        hover:gap-4
        "
      >
        Get a Quote

        <ArrowRight size={18} />
      </button>

    </div>
  );
}