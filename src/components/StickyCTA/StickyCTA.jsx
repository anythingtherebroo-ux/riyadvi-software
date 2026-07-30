import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MessageCircle, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { companyInfo } from "../ContactPage/contactData";

const StickyCTA = () => {
  const [open, setOpen] = useState(false);

  const openCalendly = () => {
    window.open(companyInfo.calendly, "_blank", "noopener,noreferrer");
  };

  const openWhatsapp = () => {
    window.open(
      `https://wa.me/${companyInfo.whatsapp}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="fixed bottom-6 right-6 z-[999]">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 20,
              scale: 0.9,
            }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
            className="mb-4 w-72 overflow-hidden rounded-2xl border border-white/15 bg-[#121212]/95 p-3.5 backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.8)]"
          >
            {/* Calendly Booking Button */}
            <button
              onClick={openCalendly}
              className="group flex w-full items-center gap-3.5 rounded-xl p-3 text-left transition-all duration-300 hover:bg-white/10"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#d4af37] text-black shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-transform duration-300 group-hover:scale-110">
                <Calendar size={18} />
              </span>

              <span className="flex flex-col">
                <strong className="font-poppins text-sm font-bold text-white transition-colors group-hover:text-[#d4af37]">
                  Book Consultation
                </strong>
                <span className="text-xs text-gray-400">
                  Schedule a free 30-min call
                </span>
              </span>
            </button>

            {/* WhatsApp Chat Button */}
            <button
              onClick={openWhatsapp}
              className="group mt-2 flex w-full items-center gap-3.5 rounded-xl p-3 text-left transition-all duration-300 hover:bg-white/10"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#25D366] text-white shadow-[0_0_15px_rgba(37,211,102,0.4)] transition-transform duration-300 group-hover:scale-110">
                <FaWhatsapp size={20} />
              </span>

              <span className="flex flex-col">
                <strong className="font-poppins text-sm font-bold text-white transition-colors group-hover:text-[#25D366]">
                  WhatsApp Chat
                </strong>
                <span className="text-xs text-gray-400">
                  Instant response & quotes
                </span>
              </span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#d4af37] text-black shadow-[0_0_35px_rgba(212,175,55,0.5)] transition-all duration-300 hover:shadow-[0_0_50px_rgba(212,175,55,0.7)]"
        aria-label="Toggle Quick Contact Options"
      >
        {/* Pulsing Aura */}
        <span className="absolute inset-0 animate-ping rounded-full bg-[#d4af37]/30" />

        {open ? <X size={24} className="relative z-10" /> : <MessageCircle size={24} className="relative z-10" />}
      </motion.button>
    </div>
  );
};

export default StickyCTA;