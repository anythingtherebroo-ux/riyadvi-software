import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  MessageCircle,
  Rocket,
} from "lucide-react";

export default function BlogCTA() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-28">

      {/* Background Glow */}

      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/10 blur-[220px]" />

      {/* Grid */}

      <div className="absolute inset-0 opacity-5">

        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.15)_1px,transparent_1px)] bg-[size:70px_70px]" />

      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="overflow-hidden rounded-[40px] border border-[#D4AF37]/20 bg-gradient-to-br from-[#0B0B0B] to-[#111111] p-10 lg:p-20"
        >

          <div className="mx-auto max-w-4xl text-center">

            <span className="rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-6 py-2 text-sm font-semibold uppercase tracking-[3px] text-[#D4AF37]">

              Let's Build Together

            </span>

            <h2 className="mt-8 text-5xl font-black leading-tight text-white lg:text-6xl">

              Ready To Turn

              <span className="block text-[#D4AF37]">

                Ideas Into Reality?

              </span>

            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">

              Whether you're planning a modern website,
              scalable web application,
              mobile app,
              AI solution,
              branding project,
              or digital marketing campaign,
              Riyadvi is ready to help you succeed.

            </p>

            {/* Buttons */}

            <div className="mt-12 flex flex-wrap justify-center gap-6">

              <Link
                to="/contact"
                className="group inline-flex items-center rounded-xl bg-[#D4AF37] px-8 py-5 text-lg font-bold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_45px_rgba(212,175,55,.35)]"
              >

                Start Your Project

                <ArrowRight
                  size={20}
                  className="ml-3 transition-transform duration-300 group-hover:translate-x-1"
                />

              </Link>

              <Link
                to="/services"
                className="inline-flex items-center rounded-xl border border-[#D4AF37]/30 px-8 py-5 text-lg font-semibold text-[#D4AF37] transition-all duration-300 hover:bg-[#D4AF37]/10"
              >

                <Rocket
                  size={20}
                  className="mr-3"
                />

                Explore Services

              </Link>

            </div>

            {/* Highlights */}

            <div className="mt-16 grid gap-8 border-t border-white/10 pt-12 md:grid-cols-3">

              <div>

                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#D4AF37]/10">

                  <Rocket
                    className="text-[#D4AF37]"
                    size={24}
                  />

                </div>

                <h3 className="mt-5 text-xl font-bold text-white">

                  Innovative Solutions

                </h3>

                <p className="mt-3 text-gray-400">

                  Modern technologies that scale with your business.

                </p>

              </div>

              <div>

                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#D4AF37]/10">

                  <MessageCircle
                    className="text-[#D4AF37]"
                    size={24}
                  />

                </div>

                <h3 className="mt-5 text-xl font-bold text-white">

                  Free Consultation

                </h3>

                <p className="mt-3 text-gray-400">

                  Discuss your project with our experienced team.

                </p>

              </div>

              <div>

                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#D4AF37]/10">

                  <ArrowRight
                    className="text-[#D4AF37]"
                    size={24}
                  />

                </div>

                <h3 className="mt-5 text-xl font-bold text-white">

                  Fast Delivery

                </h3>

                <p className="mt-3 text-gray-400">

                  Efficient development with premium quality standards.

                </p>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}