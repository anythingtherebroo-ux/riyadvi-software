import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function PortfolioCTA() {
  return (
    <section className="relative overflow-hidden bg-black py-28">

      {/* Background Glow */}

      <div className="absolute -left-32 top-0 h-[450px] w-[450px] rounded-full bg-[#D4AF37]/10 blur-[160px]" />

      <div className="absolute -right-32 bottom-0 h-[450px] w-[450px] rounded-full bg-[#D4AF37]/10 blur-[160px]" />

      {/* Grid Pattern */}

      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
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
          className="overflow-hidden rounded-[40px] border border-[#D4AF37]/20 bg-gradient-to-br from-[#111111] via-[#0b0b0b] to-black p-10 shadow-[0_0_80px_rgba(212,175,55,.08)] lg:p-20"
        >

          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* LEFT */}

            <div>

              <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-2 text-[#D4AF37]">

                <Sparkles size={18} />

                <span className="font-medium">
                  Ready To Build Something Amazing?
                </span>

              </div>

              <h2 className="mt-8 text-5xl font-black leading-tight text-white lg:text-6xl">

                Let's Turn Your

                <span className="block text-[#D4AF37]">
                  Vision Into Reality
                </span>

              </h2>

              <p className="mt-8 max-w-xl text-lg leading-8 text-gray-300">

                You've seen what we've built for our clients.

                Now let's discuss your next website,
                mobile application, UI/UX design,
                digital marketing campaign, or custom software solution.

              </p>

              <div className="mt-12 flex flex-wrap gap-5">

                <Link
                  to="/contact"
                  className="group inline-flex items-center rounded-xl bg-[#D4AF37] px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(212,175,55,.45)]"
                >

                  Start Your Project

                  <ArrowRight
                    size={18}
                    className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                  />

                </Link>

                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-xl border border-white/15 px-8 py-4 text-white transition hover:border-[#25D366] hover:text-[#25D366]"
                >

                  <MessageCircle
                    size={18}
                    className="mr-2"
                  />

                  WhatsApp

                </a>

              </div>

            </div>

            {/* RIGHT */}

            <div className="space-y-6">

              <motion.div
                whileHover={{
                  y: -6,
                }}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
              >

                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D4AF37]/10">

                  <CalendarDays
                    className="text-[#D4AF37]"
                    size={30}
                  />

                </div>

                <h3 className="text-2xl font-bold text-white">
                  Free Strategy Session
                </h3>

                <p className="mt-4 text-gray-400 leading-7">

                  Schedule a free consultation with our experts.
                  We'll analyse your requirements,
                  recommend the best technology stack,
                  estimate the timeline,
                  and provide a tailored roadmap for your project.

                </p>

              </motion.div>

              <motion.div
                whileHover={{
                  y: -6,
                }}
                className="rounded-3xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-8 backdrop-blur-xl"
              >

                <h3 className="text-2xl font-bold text-white">
                  Why Choose Riyadvi?
                </h3>

                <ul className="mt-6 space-y-4 text-gray-300">

                  <li>✔ Modern scalable architecture</li>

                  <li>✔ Premium UI/UX design</li>

                  <li>✔ SEO & performance optimisation</li>

                  <li>✔ Agile development process</li>

                  <li>✔ Dedicated support after launch</li>

                </ul>

              </motion.div>

            </div>

          </div>

          {/* Bottom Statistics */}

          <div className="mt-20 grid gap-8 border-t border-white/10 pt-10 text-center md:grid-cols-4">

            <div>

              <h3 className="text-4xl font-black text-[#D4AF37]">
                50+
              </h3>

              <p className="mt-2 text-gray-400">
                Successful Projects
              </p>

            </div>

            <div>

              <h3 className="text-4xl font-black text-[#D4AF37]">
                30+
              </h3>

              <p className="mt-2 text-gray-400">
                Happy Clients
              </p>

            </div>

            <div>

              <h3 className="text-4xl font-black text-[#D4AF37]">
                98%
              </h3>

              <p className="mt-2 text-gray-400">
                Client Satisfaction
              </p>

            </div>

            <div>

              <h3 className="text-4xl font-black text-[#D4AF37]">
                Since 2021
              </h3>

              <p className="mt-2 text-gray-400">
                Trusted Technology Partner
              </p>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}