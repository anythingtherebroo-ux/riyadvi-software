import { motion } from "framer-motion";

export default function TechStack({ service }) {
  return (
    <section className="relative bg-[#080808] py-24 sm:py-32 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[#d4af37]">
            Tools & Tech Stack
          </span>
          <h2 className="mt-6 font-poppins text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            Technologies <span className="text-[#d4af37]">We Use</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {service.tech.map((tool) => (
            <span
              key={tool}
              className="rounded-xl border border-[#d4af37]/30 bg-[#d4af37]/10 px-5 py-3 text-sm font-semibold text-[#d4af37]"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}