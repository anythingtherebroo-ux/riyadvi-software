import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Users,
  Briefcase,
  Sparkles,
} from "lucide-react";

export default function CareersHero() {
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

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-sm text-gray-400"
        >

          Home

          <span className="mx-2 text-[#D4AF37]">

            /

          </span>

          Careers

        </motion.p>

        <div className="mt-14 grid items-center gap-16 lg:grid-cols-2">

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

              Join Our Team

            </span>

            <h1 className="mt-8 text-5xl font-black leading-tight text-white lg:text-7xl">

              Build The

              <span className="block text-[#D4AF37]">

                Future With Riyadvi

              </span>

            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">

              We're looking for passionate designers,
              developers, marketers and innovators who
              want to create exceptional digital products
              and shape the future of technology.

            </p>

            <div className="mt-10 flex flex-wrap gap-5">

              <a
                href="#jobs"
                className="group inline-flex items-center rounded-xl bg-[#D4AF37] px-7 py-4 font-semibold text-black transition hover:scale-105 hover:shadow-[0_0_35px_rgba(212,175,55,.35)]"
              >

                View Open Roles

                <ArrowRight
                  size={18}
                  className="ml-2 transition group-hover:translate-x-1"
                />

              </a>

              <Link
                to="/contact"
                className="rounded-xl border border-[#D4AF37]/30 px-7 py-4 font-semibold text-[#D4AF37] transition hover:bg-[#D4AF37]/10"
              >

                Contact HR

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

              <div className="space-y-8">

                <div className="flex items-start gap-5">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4AF37]/10">

                    <Users
                      size={28}
                      className="text-[#D4AF37]"
                    />

                  </div>

                  <div>

                    <h3 className="text-xl font-bold text-white">

                      Collaborative Culture

                    </h3>

                    <p className="mt-2 text-gray-400">

                      Work alongside talented professionals who value creativity, teamwork and innovation.

                    </p>

                  </div>

                </div>

                <div className="flex items-start gap-5">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4AF37]/10">

                    <Briefcase
                      size={28}
                      className="text-[#D4AF37]"
                    />

                  </div>

                  <div>

                    <h3 className="text-xl font-bold text-white">

                      Exciting Projects

                    </h3>

                    <p className="mt-2 text-gray-400">

                      Build modern websites, mobile apps, AI solutions and enterprise software.

                    </p>

                  </div>

                </div>

                <div className="flex items-start gap-5">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4AF37]/10">

                    <Sparkles
                      size={28}
                      className="text-[#D4AF37]"
                    />

                  </div>

                  <div>

                    <h3 className="text-xl font-bold text-white">

                      Continuous Growth

                    </h3>

                    <p className="mt-2 text-gray-400">

                      Learn new technologies, attend workshops and grow your career with us.

                    </p>

                  </div>

                </div>

              </div>

              {/* Stats */}

              <div className="mt-10 grid grid-cols-3 gap-6 border-t border-white/10 pt-8 text-center">

                <div>

                  <h4 className="text-3xl font-black text-[#D4AF37]">

                    10+

                  </h4>

                  <p className="mt-2 text-sm text-gray-400">

                    Open Roles

                  </p>

                </div>

                <div>

                  <h4 className="text-3xl font-black text-[#D4AF37]">

                    50+

                  </h4>

                  <p className="mt-2 text-sm text-gray-400">

                    Team Members

                  </p>

                </div>

                <div>

                  <h4 className="text-3xl font-black text-[#D4AF37]">

                    100+

                  </h4>

                  <p className="mt-2 text-sm text-gray-400">

                    Projects

                  </p>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}