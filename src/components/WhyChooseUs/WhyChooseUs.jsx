import { motion } from "framer-motion";
import FeatureCard from "./FeatureCard";
import StatCard from "./StatCard";
import { WhyChooseData } from "./WhyChooseData";
import { statsData } from "./statsData";
import "./WhyChooseUs.css";

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="why">
      <div className="why__inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="why__header"
        >
          <span className="why__eyebrow">
            <span className="why__eyebrow-dash" />
            Why Riyadvi
          </span>

          <h2 className="why__title">
            Why Businesses
            <span className="why__title-accent"> Choose Riyadvi</span>
          </h2>

          <p className="why__subtext">
            We create digital experiences that help businesses grow faster,
            improve efficiency and deliver exceptional value to customers.
          </p>
        </motion.div>

        <div className="why__grid">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="why__panel"
          >
            <div className="why__panel-header">
              <span>riyadvi@diagnostics</span>
              <span className="why__panel-status">live</span>
            </div>

            <div className="why__panel-grid">
              {statsData.map((stat) => (
                <StatCard key={stat.id} stat={stat} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="why__checklist"
          >
            {WhyChooseData.map((item, index) => (
              <FeatureCard key={item.id} item={item} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}