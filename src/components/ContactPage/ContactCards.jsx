import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Sparkles } from "lucide-react";
import { companyInfo } from "./contactData";

export default function ContactCards() {
  const contactCards = [
    {
      icon: Phone,
      title: "Call Us",
      value: companyInfo.phone,
      description: `${companyInfo.workingHours.weekdays}\n${companyInfo.workingHours.time}`,
    },
    {
      icon: Mail,
      title: "Email Us",
      value: companyInfo.email,
      description: "We'll respond within 24 hours.",
    },
    {
      icon: MapPin,
      title: "Office Address",
      value: `${companyInfo.address.city}, ${companyInfo.address.state}`,
      description: companyInfo.address.country,
    },
    {
      icon: Clock,
      title: "Working Hours",
      value: companyInfo.workingHours.weekdays,
      description: companyInfo.workingHours.time,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#050505] py-20 sm:py-28 text-white">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center sm:mb-20"
        >
          <div className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-[#d4af37]/30 bg-white/5 px-4 py-2 backdrop-blur-md shadow-[0_0_20px_rgba(212,175,55,0.1)]">
            <Sparkles className="text-[#d4af37]" size={16} />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d4af37] sm:text-sm">
              Get In Touch
            </span>
          </div>

          <h2 className="font-poppins text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Multiple Ways{" "}
            <span className="bg-gradient-to-r from-[#d4af37] via-yellow-300 to-[#d4af37] bg-clip-text text-transparent">
              To Reach Us
            </span>
          </h2>

          <p className="mt-6 text-base leading-relaxed text-gray-400 sm:text-lg sm:leading-8">
            Choose the communication method that works best for you. We're
            always happy to discuss your ideas.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl transition-all duration-500 hover:border-[#d4af37]/40 hover:bg-white/[0.07]"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#d4af37]/20 bg-[#d4af37]/10 text-[#d4af37] transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                <card.icon size={24} />
              </div>

              <h3 className="font-poppins text-xl font-bold text-white">
                {card.title}
              </h3>

              <p className="mt-3 font-semibold text-[#d4af37]">
                {card.value}
              </p>

              <p className="mt-2 text-sm leading-relaxed text-gray-400 whitespace-pre-line">
                {card.description}
              </p>

              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#d4af37] transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}