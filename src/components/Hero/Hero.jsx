import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import HeroStats from "./HeroStats";
import Button from "../Common/Button";
import webdevelopment from "../../assets/images/webdevelopment.webp";

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#080808]">

      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-32 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[100px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px] lg:blur-[140px]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-4 py-28 sm:px-6 lg:px-8 lg:py-24">

        <div className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center text-center lg:text-left"
          >
            <span className="mx-auto mb-5 inline-flex w-fit rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-4 py-2 text-sm font-medium text-[#D4AF37] lg:mx-0">
              Premium Digital Solutions
            </span>

            <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Custom Software
              <br />
              & Digital Solutions
              <br />
              <span className="text-[#D4AF37]">
                to Grow Your Business
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8 lg:mx-0">
              Web Development, Mobile Applications,
              UI/UX Design and Digital Strategy —
              all tailored specifically for your business.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-5 lg:justify-start">

              <Button>
                Book Free Consultation
              </Button>

              <Link
                to="/services"
                className="inline-flex items-center gap-3 rounded-full border border-zinc-700 px-7 py-3 font-semibold text-white transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
              >
                Explore Services

                <ArrowRight size={20} />
              </Link>

            </div>

            <HeroStats />

          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto flex w-full max-w-[520px] items-center justify-center px-6 py-10 sm:px-10 lg:px-0 lg:py-0"
          >
            {/* Laptop */}
            <div className="relative aspect-[520/420] w-full rounded-[24px] border border-zinc-800 bg-zinc-900 shadow-2xl sm:rounded-[35px]">

              <div className="h-8 rounded-t-[24px] border-b border-zinc-800 bg-zinc-950 sm:h-10 sm:rounded-t-[35px]" />

              <div className="flex h-[calc(100%-2rem)] items-center justify-center px-4 sm:h-[calc(100%-2.5rem)]">

                <h2 className="text-center text-xl font-bold text-[#D4AF37] sm:text-2xl md:text-3xl">
                  Riyadvi Software
                  <br />
                  Technologies
                </h2>

              </div>

            </div>

            {/* Floating Card 1 */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{
                repeat: Infinity,
                duration: 5,
              }}
              className="absolute left-0 top-4 max-w-[45%] rounded-2xl border border-zinc-800 bg-zinc-900 p-3 shadow-xl sm:top-10 sm:p-5"
            >
              <h3 className="text-sm font-bold text-[#D4AF37] sm:text-base">
                UI/UX Design
              </h3>

              <p className="text-xs text-gray-400 sm:text-sm">
                User First Experience
              </p>
            </motion.div>

            {/* Floating Card 2 */}
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{
                repeat: Infinity,
                duration: 6,
              }}
              className="absolute bottom-4 right-0 max-w-[45%] rounded-2xl border border-zinc-800 bg-zinc-900 p-3 shadow-xl sm:bottom-10 sm:p-5"
            >
              <div className="flex items-center gap-3">

                <img
                  src={webdevelopment}
                  alt="Web Development"
                  className="h-8 w-8 flex-shrink-0 rounded-lg object-cover sm:h-10 sm:w-10"
                />

                <div>
                  <h3 className="text-sm font-bold text-[#D4AF37] sm:text-base">
                    Web Development
                  </h3>

                  <p className="text-xs text-gray-400 sm:text-sm">
                    React • Node • Laravel
                  </p>
                </div>

              </div>
            </motion.div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default Hero;