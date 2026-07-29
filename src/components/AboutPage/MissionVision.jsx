import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { missionVision } from "./aboutData";
import "./MissionVision.css";

export default function MissionVision() {
  return (
    <section className="mission-vision">
      <div className="mission-vision__inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mission-vision__header"
        >
          <span className="mission-vision__eyebrow">
            <span className="mission-vision__eyebrow-dash" />
            Mission &amp; Vision
          </span>

          <h2 className="mission-vision__title">
            Building Technology
            <span className="mission-vision__title-accent"> With Purpose</span>
          </h2>

          <p className="mission-vision__subtext">
            Every project we undertake is guided by a clear mission, a bold
            vision and an unwavering commitment to innovation.
          </p>
        </motion.div>

        <div className="mission-vision__grid">
          {missionVision.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="mission-vision__card"
            >
              <span className="mission-vision__card-icon">
                <card.icon size={26} />
              </span>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mission-vision__footer"
        >
          <Link to="/services" className="mission-vision__link">
            Explore Our Services
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}