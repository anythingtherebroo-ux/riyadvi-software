import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Phone,
  Mail,
  CalendarDays,
} from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-black pt-40 pb-28">

      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-[#D4AF37]/10 blur-[180px]" />

      <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-[#D4AF37]/10 blur-[180px]" />

      {/* Grid */}

      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.15)_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Breadcrumb */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <p className="text-sm text-gray-400">
            Home
            <span className="mx-2 text-[#D4AF37]">/</span>
            Contact
          </p>
        </motion.div>

        <div className="mt-12 grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}

          <motion.div
            initial={{
              opacity: 0,
              x: -60,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: .8,
            }}
          >

            <span className="rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-[#D4AF37]">

              Contact Riyadvi

            </span>

            <h1 className="mt-8 text-5xl font-black leading-tight text-white lg:text-7xl">

              Let's Build

              <span className="block text-[#D4AF37]">

                Something Amazing

              </span>

            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">

              Have an idea, project or business challenge?

              We'd love to hear from you.

              Let's discuss how Riyadvi Software Technologies
              can transform your vision into a powerful digital experience.

            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-5">

              <Link
                to="#contact-form"
                className="group inline-flex items-center rounded-xl bg-[#D4AF37] px-7 py-4 font-semibold text-black transition hover:scale-105 hover:shadow-[0_0_35px_rgba(212,175,55,.35)]"
              >

                Send Message

                <ArrowRight
                  size={18}
                  className="ml-2 transition group-hover:translate-x-1"
                />

              </Link>

              <Link
                to="#booking"
                className="inline-flex items-center rounded-xl border border-[#D4AF37]/30 px-7 py-4 font-semibold text-[#D4AF37] transition hover:bg-[#D4AF37]/10"
              >

                Book Meeting

              </Link>

            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{
              opacity: 0,
              x: 60,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: .8,
            }}
          >

            <div className="rounded-[36px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl">

              <h3 className="text-3xl font-bold text-white">

                Quick Contact

              </h3>

              <div className="mt-10 space-y-8">

                <div className="flex items-start gap-5">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4AF37]/10">

                    <Phone
                      className="text-[#D4AF37]"
                      size={24}
                    />

                  </div>

                  <div>

                    <h4 className="font-semibold text-white">

                      Phone

                    </h4>

                    <p className="mt-2 text-gray-400">

                      +91 XXXXX XXXXX

                    </p>

                  </div>

                </div>

                <div className="flex items-start gap-5">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4AF37]/10">

                    <Mail
                      className="text-[#D4AF37]"
                      size={24}
                    />

                  </div>

                  <div>

                    <h4 className="font-semibold text-white">

                      Email

                    </h4>

                    <p className="mt-2 text-gray-400">

                      hello@riyadvi.com

                    </p>

                  </div>

                </div>

                <div className="flex items-start gap-5">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4AF37]/10">

                    <CalendarDays
                      className="text-[#D4AF37]"
                      size={24}
                    />

                  </div>

                  <div>

                    <h4 className="font-semibold text-white">

                      Consultation

                    </h4>

                    <p className="mt-2 text-gray-400">

                      Book a free 30-minute strategy call.

                    </p>

                  </div>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}