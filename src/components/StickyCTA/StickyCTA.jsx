import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCalendarCheck,
  FaWhatsapp,
  FaTimes,
  FaComments,
} from "react-icons/fa";


const StickyCTA = () => {

  const [open, setOpen] = useState(false);


  const openCalendly = () => {

    window.open(
      "https://calendly.com/your-link",
      "_blank"
    );

  };


  const openWhatsapp = () => {

    window.open(
      "https://wa.me/919999999999",
      "_blank"
    );

  };


  return (

    <div className="fixed bottom-6 right-6 z-50">


      {/* Expanded Menu */}

      <AnimatePresence>

        {open && (

          <motion.div

            initial={{
              opacity:0,
              y:30,
              scale:0.8
            }}

            animate={{
              opacity:1,
              y:0,
              scale:1
            }}

            exit={{
              opacity:0,
              y:30,
              scale:0.8
            }}

            transition={{
              duration:0.3
            }}

            className="
            mb-4
            flex
            flex-col
            gap-4
            "

          >


            {/* Calendly Button */}

            <motion.button

              whileHover={{
                scale:1.05
              }}

              onClick={openCalendly}

              className="
              group
              flex
              items-center
              gap-3
              rounded-full
              border
              border-[#D4AF37]/40
              bg-[#111111]
              px-5
              py-4
              text-white
              shadow-[0_0_30px_rgba(212,175,55,0.25)]
              hover:border-[#D4AF37]
              "

            >

              <div
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

                <FaCalendarCheck/>

              </div>


              <div className="text-left">


                <p className="font-semibold">

                  Book Consultation

                </p>


                <span className="
                text-xs
                text-gray-400
                ">

                  Schedule a free call

                </span>


              </div>


            </motion.button>




            {/* WhatsApp Button */}


            <motion.button


              whileHover={{
                scale:1.05
              }}


              onClick={openWhatsapp}


              className="
              group
              flex
              items-center
              gap-3
              rounded-full
              border
              border-[#D4AF37]/40
              bg-[#111111]
              px-5
              py-4
              text-white
              shadow-[0_0_30px_rgba(212,175,55,0.25)]
              hover:border-[#D4AF37]
              "

            >


              <div

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

                <FaWhatsapp/>

              </div>



              <div className="text-left">


                <p className="font-semibold">

                  WhatsApp Chat

                </p>


                <span className="
                text-xs
                text-gray-400
                ">

                  Quick response

                </span>


              </div>



            </motion.button>



          </motion.div>


        )}

      </AnimatePresence>





      {/* Main Floating Button */}


      <motion.button


        animate={{
          scale:[1,1.08,1]
        }}


        transition={{
          duration:2,
          repeat:Infinity
        }}


        onClick={()=>setOpen(!open)}


        className="
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-full
        bg-[#D4AF37]
        text-black
        text-2xl
        shadow-[0_0_40px_rgba(212,175,55,0.5)]
        "

      >

        {open ? <FaTimes/> : <FaComments/>}


      </motion.button>



    </div>

  );

};


export default StickyCTA;