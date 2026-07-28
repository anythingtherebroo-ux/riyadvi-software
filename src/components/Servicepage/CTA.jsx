import { motion } from "framer-motion";
import {
  ArrowRight,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function CTA({ service }) {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-28">

      {/* Background Effects */}

      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-[150px]" />

      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-[150px]" />

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
            duration: .8,
          }}
          className="overflow-hidden rounded-[40px] border border-[#D4AF37]/20 bg-gradient-to-br from-[#111111] via-[#0c0c0c] to-black p-12 shadow-[0_0_80px_rgba(212,175,55,.08)] lg:p-20"
        >

          <div className="grid items-center gap-14 lg:grid-cols-2">

            {/* Left */}

            <div>

              <span className="inline-flex rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-[#D4AF37]">
                Ready to Start?
              </span>

              <h2 className="mt-8 text-4xl font-black leading-tight text-white lg:text-6xl">

                Let's Build Your

                <span className="block text-[#D4AF37]">
                  {service.title}
                </span>

              </h2>

              <p className="mt-8 max-w-xl text-lg leading-8 text-gray-300">
                Whether you're starting from scratch or upgrading an
                existing solution, our team is ready to transform your
                ideas into a high-performing digital product.
              </p>

              <div className="mt-12 flex flex-wrap gap-5">

                <Link
                  to="/contact"
                  className="group inline-flex items-center rounded-xl bg-[#D4AF37] px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(212,175,55,.45)]"
                >
                  Book Free Consultation

                  <ArrowRight
                    size={18}
                    className="ml-2 transition group-hover:translate-x-1"
                  />
                </Link>

                <a
                  href="mailto:info@riyadvi.com"
                  className="inline-flex items-center rounded-xl border border-white/15 px-8 py-4 text-white transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
                >
                  <Mail
                    size={18}
                    className="mr-2"
                  />

                  Email Us
                </a>

              </div>

            </div>

            {/* Right */}

            <div className="space-y-6">

              <motion.div
                whileHover={{
                  y: -6,
                }}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
              >

                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D4AF37]/10">

                  <Phone
                    className="text-[#D4AF37]"
                    size={28}
                  />

                </div>

                <h3 className="text-2xl font-bold text-white">
                  Free Strategy Call
                </h3>

                <p className="mt-4 text-gray-400">
                  Discuss your project with our experts and receive a
                  personalised roadmap with no obligation.
                </p>

              </motion.div>

              <motion.a
                whileHover={{
                  y: -6,
                }}
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noreferrer"
                className="block rounded-3xl border border-[#25D366]/20 bg-[#25D366]/10 p-8 backdrop-blur-xl transition hover:border-[#25D366]"
              >

                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#25D366]/20">

                  <MessageCircle
                    className="text-[#25D366]"
                    size={28}
                  />

                </div>

                <h3 className="text-2xl font-bold text-white">
                  Chat on WhatsApp
                </h3>

                <p className="mt-4 text-gray-300">
                  Get instant answers, project estimates and quick
                  consultations directly on WhatsApp.
                </p>

              </motion.a>

            </div>

          </div>

          {/* Bottom */}

          <div className="mt-20 grid gap-6 border-t border-white/10 pt-10 text-center md:grid-cols-3">

            <div>

              <h3 className="text-3xl font-black text-[#D4AF37]">
                50+
              </h3>

              <p className="mt-2 text-gray-400">
                Projects Delivered
              </p>

            </div>

            <div>

              <h3 className="text-3xl font-black text-[#D4AF37]">
                100%
              </h3>

              <p className="mt-2 text-gray-400">
                Client Satisfaction Focus
              </p>

            </div>

            <div>

              <h3 className="text-3xl font-black text-[#D4AF37]">
                Since 2021
              </h3>

              <p className="mt-2 text-gray-400">
                Trusted Digital Partner
              </p>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}