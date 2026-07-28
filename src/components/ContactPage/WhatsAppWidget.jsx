import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppWidget() {

  const phoneNumber = "91XXXXXXXXXX";

  const message = encodeURIComponent(
    "Hello Riyadvi Team, I'm interested in discussing my project."
  );

  return (
    <motion.a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Riyadvi Team on WhatsApp"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        delay: 1,
        type: "spring",
        stiffness: 180,
      }}
      whileHover={{
        scale: 1.08,
      }}
      whileTap={{
        scale: 0.95,
      }}
      className="group fixed bottom-6 right-6 z-[999]"
    >

      {/* Pulse Ring */}
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/30"></span>


      {/* WhatsApp Button */}
      <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] shadow-[0_0_30px_rgba(37,211,102,.45)] transition-all duration-300 group-hover:shadow-[0_0_50px_rgba(37,211,102,.6)]">

        <MessageCircle
          size={30}
          className="text-white"
        />

      </div>


      {/* Tooltip */}
      <div className="pointer-events-none absolute right-20 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-xl border border-white/10 bg-[#111111] px-4 py-2 text-sm font-medium text-white opacity-0 shadow-xl transition-all duration-300 group-hover:opacity-100">

        Chat with us on WhatsApp

      </div>

    </motion.a>
  );
}