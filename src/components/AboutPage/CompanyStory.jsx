import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { companyHighlights } from "./aboutData";

export default function CompanyStory() {
  return (
    <section className="bg-[#080808] py-24">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-8">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-3 uppercase tracking-[4px] text-sm font-semibold text-[#D4AF37]">
            <span className="h-px w-10 bg-[#D4AF37]" />
            Our Story
          </span>

          <h2 className="mt-6 font-poppins text-5xl font-bold leading-tight text-white">
            Creating Digital
            <br />
            <span className="text-[#D4AF37]">
              Success Stories.
            </span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-400">
            Riyadvi Software Technologies was founded with one goal—
            helping businesses build modern digital products that
            create measurable business growth.
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Today we design websites, enterprise software,
            mobile applications, SaaS platforms and AI-powered
            experiences used by businesses across industries.
          </p>

          {/* Terminal Card */}

          <div className="mt-12 overflow-hidden rounded-3xl border border-[#2A2A2A] bg-[#111111] shadow-2xl">

            <div className="flex items-center justify-between border-b border-[#2A2A2A] bg-[#171717] px-6 py-4">

              <span className="font-mono text-sm text-gray-400">
                riyadvi@story
              </span>

              <span className="rounded-full bg-green-500/15 px-3 py-1 text-xs font-semibold text-green-400">
                trusted
              </span>

            </div>

            <div className="flex items-start gap-5 p-8">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37]">
                <CheckCircle2 size={28} />
              </div>

              <div>

                <h3 className="text-xl font-semibold text-white">
                  Trusted Technology Partner
                </h3>

                <p className="mt-2 leading-7 text-gray-400">
                  Building scalable digital products since 2021 with
                  premium quality, innovation and long-term client
                  partnerships.
                </p>

              </div>

            </div>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="grid gap-6"
        >
          {companyHighlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-[#2A2A2A] bg-[#111111] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#D4AF37]/40 hover:shadow-[0_20px_60px_rgba(212,175,55,.12)]"
              >
                <div className="flex items-start gap-5">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37] transition-all duration-300 group-hover:bg-[#D4AF37] group-hover:text-black">
                    <Icon size={26} />
                  </div>

                  <div>

                    <h3 className="text-xl font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-3 leading-7 text-gray-400">
                      {item.description}
                    </p>

                  </div>

                </div>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}