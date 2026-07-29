import { motion } from "framer-motion";
import { services } from "./ServiceData";
import ServiceCard from "./ServiceCard";

export default function Service() {
  return (
    <section id="services" className="bg-[#080808] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af37]">
            <span className="h-[2px] w-10 bg-[#d4af37]" />
            Our Services
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white lg:text-5xl">
            Transforming Ideas Into{" "}
            <span className="text-[#d4af37]">
              Digital Solutions
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            We deliver cutting-edge software solutions that help
            businesses innovate, scale and succeed in today's digital world.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .5,
                delay: index * .1
              }}
              viewport={{ once: true }}
            >
              <ServiceCard
                service={service}
                index={index}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}