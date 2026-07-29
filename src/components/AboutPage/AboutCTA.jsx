import { motion } from "framer-motion";
import { ArrowRight, PhoneCall, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { aboutCTA } from "./aboutData";

const benefits = [
  "Free Project Consultation",
  "Custom Development Strategy",
  "Transparent Pricing",
  "Dedicated Support",
];

export default function AboutCTA() {
  return (
    <section className="about-cta">
      <div className="about-cta__inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="about-cta__panel"
        >
          <div className="about-cta__grid">
            <div>
              <span className="about-cta__eyebrow">Let&apos;s Work Together</span>

              <h2 className="about-cta__title">
                {aboutCTA.title.replace("Something Amazing?", "")}
                <span className="about-cta__title-accent">Something Amazing?</span>
              </h2>

              <p className="about-cta__subtext">{aboutCTA.subtitle}</p>

              <div className="about-cta__benefits">
                {benefits.map((item) => (
                  <div className="about-cta__benefit" key={item}>
                    <CheckCircle2 size={18} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="about-cta__card">
              <h3>Start Your Project Today</h3>
              <p>
                Book a free consultation and discover how our designers,
                developers and strategists can help accelerate your business
                growth.
              </p>

              <div className="about-cta__card-actions">
                <Link to={aboutCTA.primaryButton.link} className="about-cta__btn-primary">
                  {aboutCTA.primaryButton.text}
                  <ArrowRight size={18} />
                </Link>
                <Link to={aboutCTA.secondaryButton.link} className="about-cta__btn-outline">
                  <PhoneCall size={16} />
                  {aboutCTA.secondaryButton.text}
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}