import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { companyInfo } from "./contactData";
import "./LocationSection.css";

export default function LocationSection() {
  return (
    <section className="location-section">
      <div className="location-section__inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="location-section__header"
        >
          <span className="location-section__eyebrow">
            <span className="location-section__eyebrow-dash" />
            Visit Our Office
          </span>
          <h2 className="location-section__title">
            Find <span className="location-section__title-accent">Riyadvi</span>
          </h2>
          <p className="location-section__subtext">
            We&apos;d love to meet you. Visit our office or connect with us
            online from anywhere in the world.
          </p>
        </motion.div>

        <div className="location-section__grid">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="location-card"
          >
            <h3>Office Information</h3>

            <div className="location-card__row">
              <span className="location-card__icon"><MapPin size={20} /></span>
              <div>
                <h4>Address</h4>
                <p>
                  {companyInfo.address.line1}
                  <br />
                  {companyInfo.address.city}, {companyInfo.address.state}, {companyInfo.address.country}
                </p>
              </div>
            </div>

            <div className="location-card__row">
              <span className="location-card__icon"><Phone size={20} /></span>
              <div>
                <h4>Phone</h4>
                <p>{companyInfo.phone}</p>
              </div>
            </div>

            <div className="location-card__row">
              <span className="location-card__icon"><Mail size={20} /></span>
              <div>
                <h4>Email</h4>
                <p>{companyInfo.email}</p>
              </div>
            </div>

            <div className="location-card__row">
              <span className="location-card__icon"><Clock size={20} /></span>
              <div>
                <h4>Working Hours</h4>
                <p>
                  {companyInfo.workingHours.weekdays}
                  <br />
                  {companyInfo.workingHours.time}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="location-section__map"
          >
            <iframe
              title="Riyadvi Office Location"
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                companyInfo.address.city + "," + companyInfo.address.state
              )}&output=embed`}
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}