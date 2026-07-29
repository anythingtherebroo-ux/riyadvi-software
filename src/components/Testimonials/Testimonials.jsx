import { motion } from "framer-motion";
import TestimonialCard from "./TestimonialCard";
import { testimonialsData } from "./testimonialsData";
import "./Testimonials.css";

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials__inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="testimonials__header"
        >
          <span className="testimonials__eyebrow">
            <span className="testimonials__eyebrow-dash" />
            Client Testimonials
          </span>

          <h2 className="testimonials__title">
            Trusted by Businesses
            <span className="testimonials__title-accent"> That Value Quality</span>
          </h2>

          <p className="testimonials__subtext">
            Our clients choose Riyadvi for premium design, reliable delivery,
            and responsive support throughout their digital journey.
          </p>
        </motion.div>

        <div className="testimonials__grid">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TestimonialCard testimonial={testimonial} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}