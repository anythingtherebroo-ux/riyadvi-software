import { motion } from "framer-motion";
import { ArrowRight, PhoneCall, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { aboutCTA } from "./aboutData";

const benefits = [
  "Free Project Consultation",
  "Custom Development Strategyyyyyyyyyyy",
  "Transparent Pricing",
  "Dedicated Technical Support",
];

export default function AboutCTA() {
  const navigate = useNavigate();

  const handleStartProject = () => {
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
    <section className="relative overflow-hidden bg-[#050505] py-20 sm:py-28 text-white">
      <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#d4af37]/10 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="overflow-hidden rounded-[32px] sm:rounded-[40px] border border-[#d4af37]/30 bg-gradient-to-br from-[#111111] via-[#0c0c0c] to-black p-8 shadow-2xl lg:p-16"
        >
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left */}
            <div>
              <span className="inline-flex rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#d4af37]">
                Let's Work Together
              </span>

              <h2 className="mt-6 font-poppins text-3xl font-extrabold leading-tight text-white sm:text-5xl">
                Ready to Build{" "}
                <span className="text-[#d4af37]">Something Amazing?</span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-300 sm:text-lg">
                {aboutCTA.subtitle}
              </p>

              <div className="mt-8 space-y-3">
                {benefits.map((item) => (
                  <div className="flex items-center gap-3 text-sm text-gray-300" key={item}>
                    <CheckCircle2 size={18} className="text-[#d4af37]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Action Card */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">
              <h3 className="font-poppins text-2xl font-bold text-white">
                Start Your Project Today
              </h3>
              <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                Book a free consultation and discover how our engineers and
                designers can help accelerate your business growth.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <button
                  onClick={handleStartProject}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d4af37] px-8 py-4 font-semibold text-black transition hover:scale-105 hover:shadow-[0_0_35px_rgba(212,175,55,0.45)]"
                >
                  <span>Start Project</span>
                  <ArrowRight size={18} />
                </button>

                <button
                  onClick={handleStartProject}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-8 py-4 font-semibold text-white transition hover:border-[#d4af37] hover:text-[#d4af37]"
                >
                  <PhoneCall size={16} />
                  <span>Schedule Call</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}