import { motion } from "framer-motion";
import { ArrowRight, PhoneCall, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const benefits = [
  "Free Project Consultation",
  "Custom Development Strategy",
  "Transparent Pricing",
  "Dedicated Support",
];

export default function AboutCTA() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-28">

      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-[#D4AF37]/10 blur-[170px]" />

      <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-[#D4AF37]/10 blur-[170px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="relative overflow-hidden rounded-[40px] border border-[#D4AF37]/20 bg-gradient-to-br from-[#111111] via-[#0B0B0B] to-[#111111] p-12 lg:p-16"
        >

          {/* Decorative Glow */}

          <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-[120px]" />

          <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-[120px]" />

          <div className="relative z-10 grid items-center gap-16 lg:grid-cols-2">

            {/* LEFT */}

            <div>

              <span className="rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-[#D4AF37]">

                Let's Work Together

              </span>

              <h2 className="mt-8 text-5xl font-black leading-tight text-white">

                Ready To Build

                <span className="block text-[#D4AF37]">

                  Something Amazing?

                </span>

              </h2>

              <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">

                Whether you're launching a startup, modernising your
                business, or scaling an existing platform, our team is
                ready to turn your vision into a powerful digital
                product.

              </p>

              {/* Benefits */}

              <div className="mt-10 grid gap-4">

                {benefits.map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-4"
                  >

                    <CheckCircle2
                      className="text-[#D4AF37]"
                      size={22}
                    />

                    <span className="text-gray-300">

                      {item}

                    </span>

                  </div>

                ))}

              </div>

            </div>

            {/* RIGHT */}

            <div className="space-y-8">

              {/* Card */}

              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

                <h3 className="text-2xl font-bold text-white">

                  Start Your Project Today

                </h3>

                <p className="mt-4 leading-8 text-gray-400">

                  Book a free consultation and discover how our
                  designers, developers and strategists can help
                  accelerate your business growth.

                </p>

                <div className="mt-10 flex flex-col gap-4">

                  <Link
                    to="/contact"
                    className="group inline-flex items-center justify-center rounded-xl bg-[#D4AF37] px-6 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,.35)]"
                  >

                    Start Your Project

                    <ArrowRight
                      size={18}
                      className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                    />

                  </Link>

                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center rounded-xl border border-[#D4AF37]/40 px-6 py-4 font-semibold text-[#D4AF37] transition hover:bg-[#D4AF37]/10"
                  >

                    <PhoneCall
                      size={18}
                      className="mr-2"
                    />

                    Schedule a Call

                  </Link>

                </div>

              </div>

              {/* Trust Box */}

              <div className="grid grid-cols-2 gap-5">

                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">

                  <h4 className="text-4xl font-black text-[#D4AF37]">

                    50+

                  </h4>

                  <p className="mt-2 text-gray-400">

                    Successful Projects

                  </p>

                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">

                  <h4 className="text-4xl font-black text-[#D4AF37]">

                    98%

                  </h4>

                  <p className="mt-2 text-gray-400">

                    Client Satisfaction

                  </p>

                </div>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}