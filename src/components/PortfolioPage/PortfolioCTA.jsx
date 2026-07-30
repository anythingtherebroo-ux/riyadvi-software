import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, MessageCircle, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { companyInfo } from "../ContactPage/contactData";

export default function PortfolioCTA() {
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
    <section className="relative overflow-hidden bg-[#080808] py-20 sm:py-28 text-white">
      {/* Ambient Glows */}
      <div className="pointer-events-none absolute -left-32 top-0 h-[450px] w-[450px] rounded-full bg-[#d4af37]/10 blur-[160px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[450px] w-[450px] rounded-full bg-[#d4af37]/10 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="overflow-hidden rounded-[32px] sm:rounded-[40px] border border-[#d4af37]/30 bg-gradient-to-br from-[#111111] via-[#0c0c0c] to-black p-8 shadow-[0_0_80px_rgba(212,175,55,.1)] sm:p-12 lg:p-16"
        >
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left */}
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#d4af37] sm:text-sm">
                <Sparkles size={16} />
                <span>Ready To Build Something Amazing?</span>
              </div>

              <h2 className="font-poppins text-3xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
                Let's Turn Your{" "}
                <span className="block text-[#d4af37]">Vision Into Reality</span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-300 sm:text-lg sm:leading-8">
                You've seen what we've built for our clients. Now let's discuss
                your next website, mobile application, UI/UX design, digital
                marketing campaign, or custom software solution.
              </p>

              <div className="mt-10 flex flex-wrap gap-4 sm:gap-5">
                <button
                  onClick={handleStartProject}
                  className="group inline-flex items-center gap-2 rounded-full bg-[#d4af37] px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(212,175,55,0.45)]"
                >
                  <span>Start Your Project</span>
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>

                <a
                  href={`https://wa.me/${companyInfo?.whatsapp || ""}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.03] px-8 py-4 font-semibold text-white transition hover:border-[#25D366] hover:text-[#25D366]"
                >
                  <MessageCircle size={18} className="mr-2 text-[#25D366]" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Cards */}
            <div className="space-y-5">
              <motion.div
                whileHover={{ y: -5 }}
                onClick={handleStartProject}
                className="cursor-pointer rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8 backdrop-blur-xl transition hover:border-[#d4af37]/40"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#d4af37]/20 bg-[#d4af37]/10 text-[#d4af37]">
                  <CalendarDays size={26} />
                </div>
                <h3 className="font-poppins text-xl font-bold text-white sm:text-2xl">
                  Free Strategy Session
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">
                  Schedule a free consultation with our experts. We'll analyse
                  your requirements, recommend the best technology stack, and
                  provide a tailored roadmap.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="rounded-3xl border border-[#d4af37]/20 bg-[#d4af37]/5 p-6 sm:p-8 backdrop-blur-xl"
              >
                <h3 className="font-poppins text-xl font-bold text-white sm:text-2xl">
                  Why Choose Riyadvi?
                </h3>
                <ul className="mt-4 space-y-2.5 text-sm text-gray-300 sm:text-base">
                  <li>✔ Modern scalable architecture</li>
                  <li>✔ Premium UI/UX design</li>
                  <li>✔ SEO & performance optimisation</li>
                  <li>✔ Agile development process</li>
                  <li>✔ Dedicated support after launch</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}