import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Sparkles } from "lucide-react";
import { companyInfo } from "./contactData";

export default function LocationSection() {
  return (
    <section className="relative overflow-hidden bg-[#080808] py-24 sm:py-32 text-white">
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
              Visit Our Office
            </span>
          </div>

          <h2 className="font-poppins text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Find <span className="text-[#d4af37]">Riyadvi</span>
          </h2>

          <p className="mt-6 text-base leading-relaxed text-gray-400 sm:text-lg sm:leading-8">
            We'd love to meet you. Visit our office or connect with us online
            from anywhere in the world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12">
          {/* Card Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between space-y-6 rounded-3xl border border-white/15 bg-white/[0.04] p-8 backdrop-blur-2xl lg:col-span-5"
          >
            <h3 className="font-poppins text-2xl font-bold text-white">
              Office Information
            </h3>

            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#d4af37]/20 bg-[#d4af37]/10 text-[#d4af37]">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-wider text-gray-500 font-mono">
                  Address
                </h4>
                <p className="mt-1 text-sm text-gray-300 leading-relaxed">
                  {companyInfo.address.line1}
                  <br />
                  {companyInfo.address.city}, {companyInfo.address.state},{" "}
                  {companyInfo.address.country}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 border-t border-white/10 pt-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#d4af37]/20 bg-[#d4af37]/10 text-[#d4af37]">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-wider text-gray-500 font-mono">
                  Phone
                </h4>
                <p className="mt-1 text-sm text-gray-300 font-semibold">
                  {companyInfo.phone}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 border-t border-white/10 pt-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#d4af37]/20 bg-[#d4af37]/10 text-[#d4af37]">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-wider text-gray-500 font-mono">
                  Email
                </h4>
                <p className="mt-1 text-sm text-gray-300 font-semibold">
                  {companyInfo.email}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 border-t border-white/10 pt-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#d4af37]/20 bg-[#d4af37]/10 text-[#d4af37]">
                <Clock size={20} />
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-wider text-gray-500 font-mono">
                  Working Hours
                </h4>
                <p className="mt-1 text-sm text-gray-300">
                  {companyInfo.workingHours.weekdays}
                  <br />
                  {companyInfo.workingHours.time}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Map Frame */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="min-h-[350px] overflow-hidden rounded-3xl border border-white/15 bg-white/[0.04] p-2 backdrop-blur-2xl lg:col-span-7"
          >
            <iframe
              title="Riyadvi Office Location"
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                companyInfo.address.city + "," + companyInfo.address.state
              )}&output=embed`}
              width="100%"
              height="100%"
              style={{ minHeight: "350px" }}
              className="rounded-2xl border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}