import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays } from "lucide-react";
import "./ContactCTA.css";

export default function ContactCTA() {
  return (
    <section className="contact-cta">
      <div className="contact-cta__inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="contact-cta__panel"
        >
          <span className="contact-cta__eyebrow">Ready To Start?</span>

          <h2 className="contact-cta__title">
            Let&apos;s Build Your
            <span className="contact-cta__title-accent"> Next Digital Success</span>
          </h2>

          <p className="contact-cta__subtext">
            Whether you need a modern website, scalable web application,
            mobile app, AI solution, branding, or digital marketing, our
            team is ready to transform your ideas into powerful digital
            experiences.
          </p>

          <div className="contact-cta__actions">
            <Link to="/contact" className="contact-cta__btn-primary">
              Start Your Project
              <ArrowRight size={18} />
            </Link>
            <a href="#booking" className="contact-cta__btn-outline">
              <CalendarDays size={18} />
              Book Free Consultation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}