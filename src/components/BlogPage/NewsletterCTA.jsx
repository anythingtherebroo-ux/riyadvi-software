import { motion } from "framer-motion";
import { useState } from "react";
import {
  Mail,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function NewsletterCTA() {

  const [email, setEmail] = useState("");

  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {

    e.preventDefault();

    if (!email) return;

    // Replace with your API / Mailchimp later

    console.log(email);

    setSubscribed(true);

    setEmail("");

  };

  return (

    <section className="relative overflow-hidden bg-black py-28">

      {/* Background Glow */}

      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/10 blur-[220px]" />

      {/* Grid */}

      <div className="absolute inset-0 opacity-5">

        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] bg-[size:70px_70px]" />

      </div>

      <div className="relative mx-auto max-w-5xl px-6">

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
            duration: .8,
          }}

          className="overflow-hidden rounded-[40px] border border-[#D4AF37]/20 bg-gradient-to-br from-[#0B0B0B] to-[#111111] p-10 lg:p-16"

        >

          <div className="text-center">

            <span className="rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-[#D4AF37]">

              Weekly Insights

            </span>

            <h2 className="mt-8 text-5xl font-black text-white">

              Join Our

              <span className="block text-[#D4AF37]">

                Newsletter

              </span>

            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">

              Receive exclusive articles,

              development tips,

              UI inspiration,

              AI updates,

              and technology insights directly in your inbox.

            </p>

          </div>

          <form

            onSubmit={handleSubmit}

            className="mx-auto mt-14 max-w-3xl"

          >

            <div className="flex flex-col gap-5 md:flex-row">

              <div className="relative flex-1">

                <Mail

                  size={20}

                  className="absolute left-5 top-1/2 -translate-y-1/2 text-[#D4AF37]"

                />

                <input

                  type="email"

                  required

                  value={email}

                  onChange={(e)=>setEmail(e.target.value)}

                  placeholder="Enter your email address"

                  className="w-full rounded-xl border border-white/10 bg-black py-5 pl-14 pr-5 text-white outline-none transition focus:border-[#D4AF37]"

                />

              </div>

              <button

                type="submit"

                className="group inline-flex items-center justify-center rounded-xl bg-[#D4AF37] px-8 py-5 font-bold text-black transition hover:scale-105 hover:shadow-[0_0_35px_rgba(212,175,55,.35)]"

              >

                Subscribe

                <ArrowRight

                  size={18}

                  className="ml-3 transition group-hover:translate-x-1"

                />

              </button>

            </div>

          </form>

          {subscribed && (

            <motion.div

              initial={{
                opacity:0,
                y:15,
              }}

              animate={{
                opacity:1,
                y:0,
              }}

              className="mt-8 flex items-center justify-center gap-3 text-green-400"

            >

              <CheckCircle2 size={22} />

              <span>

                Thank you for subscribing to our newsletter!

              </span>

            </motion.div>

          )}

          <div className="mt-14 grid gap-8 border-t border-white/10 pt-10 text-center md:grid-cols-3">

            <div>

              <h3 className="text-3xl font-black text-[#D4AF37]">

                Weekly

              </h3>

              <p className="mt-3 text-gray-400">

                Industry Insights

              </p>

            </div>

            <div>

              <h3 className="text-3xl font-black text-[#D4AF37]">

                Practical

              </h3>

              <p className="mt-3 text-gray-400">

                Development Guides

              </p>

            </div>

            <div>

              <h3 className="text-3xl font-black text-[#D4AF37]">

                Free

              </h3>

              <p className="mt-3 text-gray-400">

                Resources & Tips

              </p>

            </div>

          </div>

        </motion.div>

      </div>

    </section>

  );

}