
import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Download,
  ArrowRight,
  Star,
  FileText,
} from "lucide-react";

import { guideFeatures } from "./LeadMagnetData";
import LeadMagnetModal from "./LeadMagnetModal";
import Button from "../Common/Button";

export default function LeadMagnet() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  // Handler for Book Consultation button
  const handleConsultationClick = () => {
    const contactSection =
      document.getElementById("contact-form") ||
      document.getElementById("contact");

    if (contactSection) {
      // Smooth scroll to contact section
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to /contact page if section isn't on current page
      navigate("/contact");
    }
  };

  return (
    <>
      <section className="relative overflow-hidden bg-[#080808] py-28">

        {/* Background */}

        <div className="absolute inset-0">

          <div className="absolute top-0 left-0 h-[420px] w-[420px] rounded-full bg-[#d4af37]/5 blur-[160px]" />

          <div className="absolute bottom-0 right-0 h-[520px] w-[520px] rounded-full bg-[#d4af37]/10 blur-[180px]" />

        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >

            <div
              className="
              rounded-3xl
              border
              border-white/10
              bg-white/5
              p-8
              backdrop-blur-xl
              shadow-2xl
              "
            >

              <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-5">

                <span className="text-gray-300">

                  project-guide.pdf

                </span>

                <span className="rounded-full bg-[#d4af37]/20 px-4 py-1 text-sm font-semibold text-[#d4af37]">

                  6 Sections

                </span>

              </div>

              <div className="mb-8 flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#d4af37]/10 text-[#d4af37]">

                  <FileText size={28} />

                </div>

                <div>

                  <h3 className="text-2xl font-bold text-white">

                    Software Project Guide

                  </h3>

                  <p className="text-gray-400">

                    PDF • Free Download

                  </p>

                </div>

              </div>

              <div className="space-y-4">

                {guideFeatures.slice(0, 4).map((item) => {

                  const Icon = item.icon;

                  return (

                    <div
                      key={item.id}
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 p-4"
                    >

                      <Icon
                        size={18}
                        className="text-[#d4af37]"
                      />

                      <span className="text-gray-300">

                        {item.title}

                      </span>

                    </div>

                  );

                })}

              </div>

              <div className="mt-8 rounded-xl bg-[#d4af37]/10 py-4 text-center font-semibold text-[#d4af37]">

                +2 More Premium Sections

              </div>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >

            <span className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af37]">

              <span className="h-[2px] w-10 bg-[#d4af37]" />

              Free Resource

            </span>

            <h2 className="mt-6 text-4xl font-bold text-white lg:text-5xl">

              Download Our

              <span className="text-[#d4af37]">

                {" "}Software Project Planning Guide

              </span>

            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-400">

              Learn how to define requirements,
              estimate budgets,
              select technologies,
              manage timelines
              and launch successful software projects.

            </p>

            <div className="mt-10 space-y-6">

              {guideFeatures.map((item) => {

                const Icon = item.icon;

                return (

                  <div
                    key={item.id}
                    className="flex gap-4"
                  >

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#d4af37]/10 text-[#d4af37]">

                      <Icon size={22} />

                    </div>

                    <div>

                      <h3 className="font-semibold text-white">

                        {item.title}

                      </h3>

                      <p className="mt-2 text-gray-400">

                        {item.description}

                      </p>

                    </div>

                  </div>

                );

              })}

            </div>

            <div className="mt-12 flex gap-10">

              <div>

                <h3 className="text-4xl font-bold text-[#d4af37]">

                  2000+

                </h3>

                <p className="text-gray-400">

                  Downloads

                </p>

              </div>

              <div>

                <div className="mb-2 flex gap-1 text-[#d4af37]">

                  {[...Array(5)].map((_, i) => (

                    <Star
                      key={i}
                      fill="currentColor"
                      size={16}
                    />

                  ))}

                </div>

                <p className="text-gray-400">

                  Trusted Resource

                </p>

              </div>

            </div>

            <div className="mt-12 flex flex-wrap gap-5">

              <Button onClick={() => setOpen(true)}>

                <Download size={18} />

                Download Guide

                <ArrowRight size={18} />

              </Button>

              <button
                onClick={handleConsultationClick}
                className="
                rounded-full
                border
                border-[#d4af37]/30
                px-8
                py-4
                font-semibold
                text-white
                transition-all
                duration-300
                hover:bg-[#d4af37]
                hover:text-black
                "
              >

                Book Consultation

              </button>

            </div>

          </motion.div>

        </div>

      </section>

      <LeadMagnetModal
        open={open}
        setOpen={setOpen}
      />
    </>
  );
}
