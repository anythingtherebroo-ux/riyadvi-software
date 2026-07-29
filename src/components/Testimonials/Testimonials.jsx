import { motion } from "framer-motion";
import TestimonialCard from "./TestimonialCard";
import { testimonialsData } from "./testimonialsData";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#080808] py-24"
    >
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-[#d4af37]/5 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#d4af37]/10 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#d4af37]">
            <span className="h-[2px] w-10 bg-[#d4af37]" />
            Client Testimonials
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white lg:text-5xl">
            Trusted by Businesses{" "}
            <span className="text-[#d4af37]">
              That Value Quality
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Our clients choose Riyadvi because we deliver premium
            digital experiences with reliable support,
            modern technologies and exceptional quality.
          </p>

        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .5,
                delay: index * .15,
              }}
            >
              <TestimonialCard
                testimonial={testimonial}
                index={index}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}