import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { companyHighlights } from "./aboutData";
import "./CompanyStory.css";

export default function CompanyStory() {
  return (
    <section className="company-story">
      <div className="company-story__inner">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="company-story__eyebrow">
            <span className="company-story__eyebrow-dash" />
            Our Story
          </span>

          <h2 className="company-story__title">
            Creating Digital
            <span className="company-story__title-accent"> Success Stories</span>
          </h2>

          <p className="company-story__text">
            Riyadvi Software Technologies was founded with a simple
            mission — to help businesses leverage technology for
            sustainable growth.
          </p>

          <p className="company-story__text">
            From modern websites and enterprise software to mobile
            applications, UI/UX design, digital marketing, AR/VR
            experiences and custom solutions, we transform ideas into
            scalable digital products.
          </p>

          <div className="company-story__achievement">
            <div className="company-story__achievement-header">
              <span>riyadvi@story</span>
              <span className="company-story__achievement-status">trusted partner</span>
            </div>
            <div className="company-story__achievement-body">
              <CheckCircle2 size={26} />
              <div>
                <h3>Trusted Digital Partner</h3>
                <p>
                  Helping businesses transform ideas into high-performing
                  digital solutions.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="company-story__list"
        >
          {companyHighlights.map((item) => (
            <div className="company-story__row" key={item.title}>
              <span className="company-story__row-icon">
                <item.icon size={20} />
              </span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}