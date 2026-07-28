import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiDownload,
  FiFileText,
  FiStar,
} from "react-icons/fi";
import { guideFeatures } from "./LeadMagnetData";
import LeadMagnetModal from "./LeadMagnetModal";

const LeadMagnet = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden bg-black py-24">
        {/* Background Glow */}
        <div className="absolute top-0 left-0 h-80 w-80 rounded-full bg-yellow-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-yellow-500/10 blur-[160px]" />

        <div className="container mx-auto px-6 lg:px-10">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT SIDE */}

            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative flex justify-center"
            >

              {/* Decorative Glow */}

              <div className="absolute h-80 w-80 rounded-full bg-yellow-500/20 blur-[120px]" />

              {/* PDF Mockup */}

              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className="relative z-10 w-[320px] rounded-3xl border border-yellow-500/30 bg-zinc-900 p-8 shadow-[0_0_50px_rgba(212,175,55,0.15)]"
              >

                <div className="flex items-center gap-3">

                  <div className="rounded-xl bg-yellow-500 p-4 text-black">
                    <FiFileText size={34} />
                  </div>

                  <div>

                    <h3 className="text-xl font-bold text-white">
                      Project Guide
                    </h3>

                    <p className="text-sm text-gray-400">
                      PDF • Free Download
                    </p>

                  </div>

                </div>

                <div className="mt-8 space-y-5">

                  {guideFeatures.slice(0, 4).map((item) => (
                    <div
                      key={item.id}
                      className="flex items-start gap-4"
                    >
                      <div className="rounded-lg bg-yellow-500/10 p-2 text-yellow-400">
                        <item.icon />
                      </div>

                      <div>

                        <h4 className="font-semibold text-white">
                          {item.title}
                        </h4>

                        <p className="text-sm text-gray-400">
                          {item.description}
                        </p>

                      </div>
                    </div>
                  ))}

                </div>

                <div className="mt-8 rounded-xl bg-yellow-500 py-3 text-center font-semibold text-black">
                  FREE DOWNLOAD
                </div>

              </motion.div>

            </motion.div>

            {/* RIGHT SIDE */}

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: .8 }}
              viewport={{ once: true }}
            >

              <span className="rounded-full border border-yellow-500/40 bg-yellow-500/10 px-5 py-2 text-sm font-medium text-yellow-400">
                FREE RESOURCE
              </span>

              <h2 className="mt-6 text-4xl font-bold leading-tight text-white lg:text-5xl">

                Download Our

                <span className="block text-yellow-400">

                  Software Project
                  Planning Guide

                </span>

              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-400">

                Planning your software project doesn't have to be difficult.

                Our professional planning guide helps businesses define
                requirements, estimate budgets, choose technologies and avoid
                expensive development mistakes before writing a single line
                of code.

              </p>

              {/* Features */}

              <div className="mt-10 grid gap-5">

                {guideFeatures.map((item) => (

                  <motion.div
                    key={item.id}
                    whileHover={{
                      x: 8,
                    }}
                    className="flex items-start gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 transition-all hover:border-yellow-500/40"
                  >

                    <div className="rounded-xl bg-yellow-500/10 p-3 text-yellow-400">
                      <item.icon size={22} />
                    </div>

                    <div>

                      <h3 className="font-semibold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-gray-400 text-sm">
                        {item.description}
                      </p>

                    </div>

                  </motion.div>

                ))}

              </div>

              {/* Trust */}

              <div className="mt-10 flex flex-wrap items-center gap-8">

                <div>

                  <h3 className="text-3xl font-bold text-yellow-400">
                    2000+
                  </h3>

                  <p className="text-gray-400">
                    Downloads
                  </p>

                </div>

                <div>

                  <h3 className="flex items-center gap-1 text-yellow-400">

                    <FiStar />
                    <FiStar />
                    <FiStar />
                    <FiStar />
                    <FiStar />

                  </h3>

                  <p className="text-gray-400">
                    Trusted Resource
                  </p>

                </div>

              </div>

              {/* Buttons */}

              <div className="mt-12 flex flex-wrap gap-5">

                <button
                  onClick={() => setOpen(true)}
                  className="group flex items-center gap-3 rounded-xl bg-yellow-500 px-8 py-4 font-semibold text-black transition-all hover:scale-105"
                >

                  <FiDownload />

                  Download Free Guide

                  <FiArrowRight className="transition-transform group-hover:translate-x-1" />

                </button>

                <button className="rounded-xl border border-yellow-500 px-8 py-4 font-semibold text-yellow-400 transition-all hover:bg-yellow-500 hover:text-black">

                  Book Free Consultation

                </button>

              </div>

            </motion.div>

          </div>

        </div>

      </section>

      <LeadMagnetModal
        open={open}
        setOpen={setOpen}
      />
    </>
  );
};

export default LeadMagnet;