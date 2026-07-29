import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MessageCircle, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { companyInfo } from "../ContactPage/contactData";
import "./StickyCTA.css";

const StickyCTA = () => {
  const [open, setOpen] = useState(false);

  const openCalendly = () => window.open(companyInfo.calendly, "_blank", "noopener,noreferrer");
  const openWhatsapp = () =>
    window.open(`https://wa.me/${companyInfo.whatsapp}`, "_blank", "noopener,noreferrer");

  return (
    <div className="sticky-cta">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            className="sticky-cta__menu"
          >
            <button onClick={openCalendly} className="sticky-cta__option" aria-label="Book a consultation via Calendly">
              <span className="sticky-cta__option-icon">
                <Calendar size={18} />
              </span>
              <span className="sticky-cta__option-text">
                <strong>Book Consultation</strong>
                <span>Schedule a free call</span>
              </span>
            </button>

            <button onClick={openWhatsapp} className="sticky-cta__option" aria-label="Chat with us on WhatsApp">
              <span className="sticky-cta__option-icon">
                <FaWhatsapp size={18} />
              </span>
              <span className="sticky-cta__option-text">
                <strong>WhatsApp Chat</strong>
                <span>Quick response</span>
              </span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 0.8, delay: 0.5 }}
        onClick={() => setOpen(!open)}
        className="sticky-cta__toggle"
        aria-label={open ? "Close contact options" : "Open contact options"}
        aria-expanded={open}
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>
    </div>
  );
};

export default StickyCTA;