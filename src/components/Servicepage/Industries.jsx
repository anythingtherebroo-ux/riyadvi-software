import { motion } from "framer-motion";

export default function Industries({ service }) {
  return (
    <section className="relative bg-[#070707] py-24 sm:py-32 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[#d4af37]">
            Industry Expertise
          </span>
          <h2 className="mt-6 font-poppins text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            Solutions Built For <span className="text-[#d4af37]">Every Industry</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {service.industries.map((industry) => (
            <div key={industry} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center">
              <h3 className="font-poppins text-xl font-bold text-white">{industry}</h3>
              <p className="mt-2 text-sm text-gray-400">Tailored digital products for {industry}.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}