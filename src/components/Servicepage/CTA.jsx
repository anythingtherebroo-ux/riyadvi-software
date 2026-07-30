import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function CTA({ service }) {
  const navigate = useNavigate();

  return (
    <section className="relative bg-[#050505] py-20 sm:py-28 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[32px] border border-[#d4af37]/30 bg-gradient-to-br from-[#111111] via-[#0c0c0c] to-black p-8 sm:p-14 text-center">
          <h2 className="font-poppins text-3xl font-extrabold sm:text-5xl">
            Let's Build Your <span className="text-[#d4af37]">{service?.title || "Digital Product"}</span>
          </h2>
          <p className="mt-4 text-gray-300 max-w-xl mx-auto">
            Ready to transform your vision into a high-performing digital solution? Contact our expert team today.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <button
              onClick={() => navigate("/contact")}
              className="inline-flex items-center gap-2 rounded-full bg-[#d4af37] px-8 py-4 font-semibold text-black hover:scale-105 transition"
            >
              <span>Get a Quote</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}