import { motion } from "framer-motion";
import { InlineWidget } from "react-calendly";
import {
  CalendarDays,
  Clock3,
  Video,
  CheckCircle2,
} from "lucide-react";

const benefits = [
  {
    icon: CalendarDays,
    title: "Choose Your Time",
    description: "Pick a date and time that fits your schedule.",
  },
  {
    icon: Video,
    title: "Online Meeting",
    description: "Meet with our experts through Google Meet or Zoom.",
  },
  {
    icon: Clock3,
    title: "30 Minute Session",
    description: "A focused consultation about your project.",
  },
];

export default function CalendlySection() {
  return (
    <section
      id="booking"
      className="relative overflow-hidden bg-[#050505] py-28"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-[#D4AF37]/10 blur-[170px]" />

      <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-[#D4AF37]/10 blur-[170px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-[#D4AF37]">

            Free Consultation

          </span>

          <h2 className="mt-8 text-5xl font-black text-white">

            Book Your

            <span className="block text-[#D4AF37]">

              Strategy Call

            </span>

          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-400">

            Schedule a free consultation to discuss your project,
            goals and the best digital solution for your business.

          </p>

        </motion.div>

        <div className="grid items-start gap-10 lg:grid-cols-3">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            className="space-y-6"
          >

            {benefits.map((item) => {

              const Icon = item.icon;

              return (

                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-[#0B0B0B] p-6"
                >

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4AF37]/10">

                    <Icon
                      size={26}
                      className="text-[#D4AF37]"
                    />

                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-white">

                    {item.title}

                  </h3>

                  <p className="mt-3 leading-7 text-gray-400">

                    {item.description}

                  </p>

                </div>

              );

            })}

            <div className="rounded-3xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-6">

              <div className="flex items-start gap-3">

                <CheckCircle2
                  className="mt-1 text-[#D4AF37]"
                  size={22}
                />

                <p className="leading-7 text-gray-300">

                  No obligation consultation.
                  We'll discuss your requirements,
                  answer your questions and suggest
                  the most suitable solution.

                </p>

              </div>

            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            className="lg:col-span-2 overflow-hidden rounded-[32px] border border-white/10 bg-white"
          >

            <InlineWidget
              url="https://calendly.com/YOUR_USERNAME/30min"
              styles={{
                height: "760px",
              }}
            />

          </motion.div>

        </div>

      </div>

    </section>
  );
}