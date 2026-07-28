import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

const contactCards = [
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 98765 43210",
    description: "Monday - Saturday\n9:00 AM - 6:00 PM",
  },
  {
    icon: Mail,
    title: "Email Us",
    value: "hello@riyadvi.com",
    description: "We'll respond within 24 hours.",
  },
  {
    icon: MapPin,
    title: "Office Address",
    value: "Madurai, Tamil Nadu",
    description: "India",
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: "Mon - Sat",
    description: "09:00 AM - 06:00 PM",
  },
];

export default function ContactCards() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-24">

      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-[#D4AF37]/10 blur-[160px]" />

      <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-[#D4AF37]/10 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-[#D4AF37]">
            Get In Touch
          </span>

          <h2 className="mt-8 text-5xl font-black text-white">
            Multiple Ways
            <span className="block text-[#D4AF37]">
              To Reach Us
            </span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-400">
            Choose the communication method that works best for you.
            We're always happy to discuss your ideas.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {contactCards.map((card, index) => {

            const Icon = card.icon;

            return (

              <motion.div
                key={card.title}
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
                  delay: index * 0.12,
                  duration: 0.7,
                }}
                whileHover={{
                  y: -10,
                }}
                className="group rounded-[32px] border border-white/10 bg-[#0B0B0B] p-8 transition-all duration-500 hover:border-[#D4AF37]/40 hover:shadow-[0_0_40px_rgba(212,175,55,.18)]"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D4AF37]/10">

                  <Icon
                    size={30}
                    className="text-[#D4AF37]"
                  />

                </div>

                <h3 className="mt-8 text-2xl font-bold text-white">

                  {card.title}

                </h3>

                <p className="mt-4 text-lg font-medium text-[#D4AF37] whitespace-pre-line">

                  {card.value}

                </p>

                <p className="mt-4 leading-7 text-gray-400 whitespace-pre-line">

                  {card.description}

                </p>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}