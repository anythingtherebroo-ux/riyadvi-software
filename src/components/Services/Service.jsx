import { motion } from "framer-motion";
import { services } from "./ServiceData";
import ServiceCard from "./ServiceCard";
import "./Service.css";

export default function Service() {
  return (
    <section id="services" className="services">
      <div className="services__inner">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="services__header"
        >
          <span className="services__eyebrow">
            <span className="services__eyebrow-dash" />
            Our Services
          </span>

          <h2 className="services__title">
            Transforming Ideas Into
            <span className="services__title-accent"> Digital Solutions</span>
          </h2>

          <p className="services__subtext">
            We deliver cutting-edge software solutions that help businesses
            innovate, grow and succeed in today&apos;s digital world.
          </p>
        </motion.div>

        <div className="services__grid">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ServiceCard service={service} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}