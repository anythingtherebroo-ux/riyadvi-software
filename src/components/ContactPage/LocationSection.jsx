import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

export default function LocationSection() {
  return (
    <section className="relative overflow-hidden bg-black py-28">

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
            Visit Our Office
          </span>

          <h2 className="mt-8 text-5xl font-black text-white">

            Find

            <span className="block text-[#D4AF37]">

              Riyadvi

            </span>

          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-400">

            We'd love to meet you. Visit our office or
            connect with us online from anywhere in the world.

          </p>

        </motion.div>

        <div className="grid gap-10 lg:grid-cols-5">

          {/* Office Card */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            className="rounded-[32px] border border-white/10 bg-[#0B0B0B] p-8 lg:col-span-2"
          >

            <h3 className="text-3xl font-bold text-white">

              Office Information

            </h3>

            <div className="mt-10 space-y-8">

              {/* Address */}

              <div className="flex items-start gap-5">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4AF37]/10">

                  <MapPin
                    size={26}
                    className="text-[#D4AF37]"
                  />

                </div>

                <div>

                  <h4 className="font-semibold text-white">

                    Address

                  </h4>

                  <p className="mt-2 leading-7 text-gray-400">

                    Riyadvi Software Technologies

                    <br />

                    Madurai,

                    Tamil Nadu,

                    India

                  </p>

                </div>

              </div>

              {/* Phone */}

              <div className="flex items-start gap-5">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4AF37]/10">

                  <Phone
                    size={26}
                    className="text-[#D4AF37]"
                  />

                </div>

                <div>

                  <h4 className="font-semibold text-white">

                    Phone

                  </h4>

                  <p className="mt-2 text-gray-400">

                    +91 98765 43210

                  </p>

                </div>

              </div>

              {/* Email */}

              <div className="flex items-start gap-5">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4AF37]/10">

                  <Mail
                    size={26}
                    className="text-[#D4AF37]"
                  />

                </div>

                <div>

                  <h4 className="font-semibold text-white">

                    Email

                  </h4>

                  <p className="mt-2 text-gray-400">

                    hello@riyadvi.com

                  </p>

                </div>

              </div>

              {/* Hours */}

              <div className="flex items-start gap-5">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4AF37]/10">

                  <Clock
                    size={26}
                    className="text-[#D4AF37]"
                  />

                </div>

                <div>

                  <h4 className="font-semibold text-white">

                    Working Hours

                  </h4>

                  <p className="mt-2 leading-7 text-gray-400">

                    Monday - Saturday

                    <br />

                    9:00 AM - 6:00 PM

                  </p>

                </div>

              </div>

            </div>

          </motion.div>

          {/* Google Map */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            className="overflow-hidden rounded-[32px] border border-white/10 lg:col-span-3"
          >

            <iframe
              title="Riyadvi Office Location"
              src="https://www.google.com/maps?q=Madurai,Tamil%20Nadu&output=embed"
              width="100%"
              height="650"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0"
            />

          </motion.div>

        </div>

      </div>

    </section>
  );
}