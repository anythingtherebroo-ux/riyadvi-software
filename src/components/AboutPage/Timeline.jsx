import { motion } from "framer-motion";
import { timeline } from "./aboutData";
import "./Timeline.css";

export default function Timeline() {
  return (
    <section className="about-timeline">
      <div className="about-timeline__inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="about-timeline__header"
        >
          <span className="about-timeline__eyebrow">
            <span className="about-timeline__eyebrow-dash" />
            Company Journey
          </span>
          <h2 className="about-timeline__title">
            Our <span className="about-timeline__title-accent">Timeline</span>
          </h2>
          <p className="about-timeline__subtext">
            Every milestone reflects our commitment to innovation, quality
            and long-term partnerships.
          </p>
        </motion.div>

        <div className="about-timeline__list">
          {timeline.map((item, index) => {
            const code = String(index + 1).padStart(2, "0");
            return (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="timeline-row"
              >
                <div className="timeline-row__marker">
                  <item.icon size={18} />
                  <span>{code}</span>
                </div>
                <div className="timeline-row__content">
                  <span className="timeline-row__year">{item.year}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}