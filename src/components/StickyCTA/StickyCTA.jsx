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
    <div className="fixed bottom-6 right-6 z-50">

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
            }}
            className="
              mb-4
              w-72
              rounded-2xl
              border
              border-[#2A2A2A]
              bg-[#141414]
              p-3
              shadow-[0_20px_60px_rgba(0,0,0,.5)]
            "
          >

            {/* Calendly */}
            <button
              onClick={openCalendly}
              className="
                group
                flex
                w-full
                items-center
                gap-4
                rounded-xl
                p-3
                text-left
                transition
                hover:bg-[#1f1f1f]
              "
            >

              <span
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-[#D4AF37]
                  text-black
                "
              >
                <Calendar size={18}/>
              </span>


              <span className="flex flex-col">
                <strong className="text-sm text-white">
                  Book Consultation
                </strong>

                <span className="text-xs text-gray-400">
                  Schedule a free call
                </span>
              </span>

            </button>



            {/* WhatsApp */}
            <button
              onClick={openWhatsapp}
              className="
                group
                mt-2
                flex
                w-full
                items-center
                gap-4
                rounded-xl
                p-3
                text-left
                transition
                hover:bg-[#1f1f1f]
              "
            >

              <span
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-green-500
                  text-white
                "
              >
                <FaWhatsapp size={18}/>
              </span>


              <span className="flex flex-col">

                <strong className="text-sm text-white">
                  WhatsApp Chat
                </strong>

                <span className="text-xs text-gray-400">
                  Quick response
                </span>

              </span>

            </button>


          </motion.div>
        )}
      </AnimatePresence>



      {/* Floating Button */}
      <motion.button

        initial={{
          scale:1
        }}

        animate={{
          scale:[1,1.08,1]
        }}

        transition={{
          duration:.8,
          delay:.5
        }}

        onClick={()=>setOpen(!open)}

        className="
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          bg-[#D4AF37]
          text-black
          shadow-[0_0_40px_rgba(212,175,55,.45)]
          transition
          hover:scale-110
        "

      >

        {
          open 
          ? 
          <X size={24}/>
          :
          <MessageCircle size={24}/>
        }

      </motion.button>


    </div>
  );
};


export default StickyCTA;