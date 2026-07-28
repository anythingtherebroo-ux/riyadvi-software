import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Briefcase,
  Users,
  Rocket,
} from "lucide-react";

export default function CareersCTA() {
  return (
    <section className="relative overflow-hidden bg-black py-28">

      {/* Background Glow */}

      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/10 blur-[220px]" />

      {/* Grid */}

      <div className="absolute inset-0 opacity-5">

        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] bg-[size:70px_70px]" />

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
          className="overflow-hidden rounded-[40px] border border-[#D4AF37]/20 bg-gradient-to-br from-[#0B0B0B] via-[#101010] to-[#0B0B0B] p-10 lg:p-20"
        >

          <div className="mx-auto max-w-4xl text-center">

            <span className="rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-6 py-2 text-sm font-semibold uppercase tracking-[3px] text-[#D4AF37]">

              Build Your Future

            </span>

            <h2 className="mt-8 text-5xl font-black leading-tight text-white lg:text-6xl">

              Ready To Join

              <span className="block text-[#D4AF37]">

                Riyadvi?

              </span>

            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">

              Whether you're an experienced professional or just starting your
              career, we'd love to hear from passionate individuals who enjoy
              solving problems, learning continuously and building exceptional
              digital experiences.

            </p>

            {/* Buttons */}

            <div className="mt-12 flex flex-wrap justify-center gap-6">

              <a
                href="#application"
                className="group inline-flex items-center rounded-xl bg-[#D4AF37] px-8 py-5 text-lg font-bold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_45px_rgba(212,175,55,.35)]"
              >

                Apply Now

                <ArrowRight
                  size={20}
                  className="ml-3 transition-transform duration-300 group-hover:translate-x-1"
                />

              </a>

              <Link
                to="/contact"
                className="inline-flex items-center rounded-xl border border-[#D4AF37]/30 px-8 py-5 text-lg font-semibold text-[#D4AF37] transition-all duration-300 hover:bg-[#D4AF37]/10"
              >

                Contact HR

              </Link>

            </div>

            {/* Highlights */}

            <div className="mt-16 grid gap-8 border-t border-white/10 pt-12 md:grid-cols-3">

              <div>

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#D4AF37]/10">

                  <Users
                    size={28}
                    className="text-[#D4AF37]"
                  />

                </div>

                <h3 className="mt-5 text-xl font-bold text-white">

                  Great Team

                </h3>

                <p className="mt-3 leading-7 text-gray-400">

                  Work alongside talented designers, developers,
                  strategists and innovators.

                </p>

              </div>

              <div>

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#D4AF37]/10">

                  <Rocket
                    size={28}
                    className="text-[#D4AF37]"
                  />

                </div>

                <h3 className="mt-5 text-xl font-bold text-white">

                  Exciting Projects

                </h3>

                <p className="mt-3 leading-7 text-gray-400">

                  Build modern websites, AI products,
                  enterprise systems and mobile apps.

                </p>

              </div>

              <div>

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#D4AF37]/10">

                  <Briefcase
                    size={28}
                    className="text-[#D4AF37]"
                  />

                </div>

                <h3 className="mt-5 text-xl font-bold text-white">

                  Career Growth

                </h3>

                <p className="mt-3 leading-7 text-gray-400">

                  Learn continuously, take ownership and
                  grow into future leadership roles.

                </p>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}