import { motion } from "framer-motion";
import { coreValues } from "./aboutData";
import "./CoreValues.css";

const promiseStats = [
  { value: "100%", label: "Transparent Communication" },
  { value: "24/7", label: "Dedicated Support" },
  { value: "Agile", label: "Development Process" },
  { value: "Long-Term", label: "Client Partnerships" },
];

export default function CoreValues() {
  return (
    <section className="core-values">
      <div className="core-values__inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="core-values__header"
        >
          <span className="core-values__eyebrow">
            <span className="core-values__eyebrow-dash" />
            Our Core Values
          </span>

          <h2 className="core-values__title">
            Principles That
            <span className="core-values__title-accent"> Drive Everything</span>
          </h2>

          <p className="core-values__subtext">
            Every decision we make is guided by these core values, ensuring
            we deliver exceptional digital experiences and long-lasting
            partnerships.
          </p>
        </motion.div>

        <div className="core-values__grid">
          {coreValues.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="value-card"
            >
              <span className="value-card__icon">
                <value.icon size={24} />
              </span>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="core-values__promise"
        >
          <div className="core-values__promise-text">
            <span className="core-values__eyebrow">Our Promise</span>
            <h3>
              Values That Shape
              <span className="core-values__title-accent"> Every Project</span>
            </h3>
            <p>
              From strategy and design to development and support, our
              values influence every decision we make.
            </p>
          </div>

          <div className="core-values__promise-grid">
            {promiseStats.map((stat) => (
              <div className="core-values__promise-cell" key={stat.label}>
                <h4>{stat.value}</h4>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}