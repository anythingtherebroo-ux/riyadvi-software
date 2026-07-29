import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, Mail, CalendarDays } from "lucide-react";
import { companyInfo } from "./contactData";
import "./ContactHero.css";

export default function ContactHero() {
  return (
    <section className="contact-hero">
      <div className="contact-hero__inner">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="contact-hero__breadcrumb"
        >
          <Link to="/">Home</Link>
          <span>/</span>
          Contact
        </motion.p>

        <div className="contact-hero__grid">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="contact-hero__eyebrow">
              <span className="contact-hero__eyebrow-dash" />
              Contact Riyadvi
            </span>

            <h1 className="contact-hero__title">
              Let&apos;s Build
              <span className="contact-hero__title-accent"> Something Amazing</span>
            </h1>

            <p className="contact-hero__subtext">
              Have an idea, project or business challenge? We&apos;d love to
              hear from you. Let&apos;s discuss how Riyadvi Software
              Technologies can transform your vision into a powerful digital
              experience.
            </p>

            <div className="contact-hero__actions">
              <a href="#contact-form" className="contact-hero__btn-primary">
                Send Message
                <ArrowRight size={18} />
              </a>
              <a href="#booking" className="contact-hero__btn-outline">
                Book Meeting
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="contact-hero__panel"
          >
            <div className="contact-hero__panel-header">
              <span>riyadvi@quick-contact</span>
            </div>

            <div className="contact-hero__panel-body">
              <div className="contact-hero__row">
                <span className="contact-hero__row-icon">
                  <Phone size={20} />
                </span>
                <div>
                  <h4>Phone</h4>
                  <p>{companyInfo.phone}</p>
                </div>
              </div>

              <div className="contact-hero__row">
                <span className="contact-hero__row-icon">
                  <Mail size={20} />
                </span>
                <div>
                  <h4>Email</h4>
                  <p>{companyInfo.email}</p>
                </div>
              </div>

              <div className="contact-hero__row">
                <span className="contact-hero__row-icon">
                  <CalendarDays size={20} />
                </span>
                <div>
                  <h4>Consultation</h4>
                  <p>Book a free 30-minute strategy call.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}