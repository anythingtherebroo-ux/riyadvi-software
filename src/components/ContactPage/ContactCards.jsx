import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { companyInfo } from "./contactData";
import "./ContactCards.css";

export default function ContactCards() {
  const contactCards = [
    {
      icon: Phone,
      title: "Call Us",
      value: companyInfo.phone,
      description: `${companyInfo.workingHours.weekdays}\n${companyInfo.workingHours.time}`,
    },
    {
      icon: Mail,
      title: "Email Us",
      value: companyInfo.email,
      description: "We'll respond within 24 hours.",
    },
    {
      icon: MapPin,
      title: "Office Address",
      value: `${companyInfo.address.city}, ${companyInfo.address.state}`,
      description: companyInfo.address.country,
    },
    {
      icon: Clock,
      title: "Working Hours",
      value: companyInfo.workingHours.weekdays,
      description: companyInfo.workingHours.time,
    },
  ];

  return (
    <section className="contact-cards">
      <div className="contact-cards__inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="contact-cards__header"
        >
          <span className="contact-cards__eyebrow">
            <span className="contact-cards__eyebrow-dash" />
            Get In Touch
          </span>
          <h2 className="contact-cards__title">
            Multiple Ways <span className="contact-cards__title-accent">To Reach Us</span>
          </h2>
          <p className="contact-cards__subtext">
            Choose the communication method that works best for you. We&apos;re
            always happy to discuss your ideas.
          </p>
        </motion.div>

        <div className="contact-cards__grid">
          {contactCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="contact-card"
            >
              <span className="contact-card__icon">
                <card.icon size={22} />
              </span>
              <h3>{card.title}</h3>
              <p className="contact-card__value">{card.value}</p>
              <p className="contact-card__desc">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}