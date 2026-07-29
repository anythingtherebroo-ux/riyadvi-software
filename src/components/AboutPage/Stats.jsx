import { motion } from "framer-motion";
import { Briefcase, Users, Smile, Globe } from "lucide-react";
import "./Stats.css";

const stats = [
  { icon: Briefcase, number: "50+", label: "Projects Delivered" },
  { icon: Users, number: "30+", label: "Happy Clients" },
  { icon: Smile, number: "98%", label: "Client Satisfaction" },
  { icon: Globe, number: "10+", label: "Industries Served" },
];

export default function Stats() {
  return (
    <section className="impact-stats">
      <div className="impact-stats__inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="impact-stats__header"
        >
          <span className="impact-stats__eyebrow">
            <span className="impact-stats__eyebrow-dash" />
            Our Impact
          </span>
          <h2 className="impact-stats__title">
            Numbers That <span className="impact-stats__title-accent">Speak for Themselves</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="impact-stats__panel"
        >
          <div className="impact-stats__panel-header">
            <span>riyadvi@impact</span>
            <span className="impact-stats__panel-status">live</span>
          </div>
          <div className="impact-stats__grid">
            {stats.map((item) => (
              <div className="impact-stats__cell" key={item.label}>
                <item.icon size={20} className="impact-stats__icon" />
                <h3>{item.number}</h3>
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}