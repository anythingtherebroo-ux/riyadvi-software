import { useRef, useState } from "react";
import { motion } from "framer-motion";
import API from "../../Services/api";
import { services } from "./contactData";
import {
  Send,
  User,
  Mail,
  Phone,
  Building2,
  Briefcase,
  DollarSign,
  Calendar,
  MessageSquare,
} from "lucide-react";
import "./ContactForm.css";

const budgetOptions = [
  "Below ₹50,000",
  "₹50,000 - ₹1,00,000",
  "₹1,00,000 - ₹3,00,000",
  "Above ₹3,00,000",
];

const timelineOptions = [
  "Immediately",
  "Within 1 Month",
  "1 - 3 Months",
  "3 - 6 Months",
  "Flexible",
];

export default function ContactForm() {
  const form = useRef(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const formData = new FormData(form.current);
      const payload = {
        name: formData.get("user_name"),
        email: formData.get("user_email"),
        phone: formData.get("phone"),
        company: formData.get("company"),
        service: formData.get("service"),
        budget: formData.get("budget"),
        timeline: formData.get("timeline"),
        message: formData.get("message"),
      };

      const response = await API.post("/contact", payload);

      if (!response.data.success) {
        throw new Error(response.data.message || "Failed to send message");
      }

      setSuccess(response.data.message || "Message sent successfully!");
      form.current.reset();
    } catch (err) {
      console.error(err);
      setError(
        err.response?.data?.message || err.message || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact-form" className="contact-form-section">
      <div className="contact-form-section__inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="contact-form-section__header"
        >
          <span className="contact-form-section__eyebrow">
            <span className="contact-form-section__eyebrow-dash" />
            Send Us A Message
          </span>
          <h2 className="contact-form-section__title">
            Tell Us About <span className="contact-form-section__title-accent">Your Project</span>
          </h2>
          <p className="contact-form-section__subtext">
            Fill out the form below and our team will get back to you within
            24 hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="contact-form-section__panel"
        >
          <form ref={form} onSubmit={sendEmail} className="contact-form-grid">
            <div className="form-field">
              <label>Full Name</label>
              <div className="form-input">
                <User size={18} />
                <input type="text" name="user_name" required placeholder="John Doe" />
              </div>
            </div>

            <div className="form-field">
              <label>Email Address</label>
              <div className="form-input">
                <Mail size={18} />
                <input type="email" name="user_email" required placeholder="john@email.com" />
              </div>
            </div>

            <div className="form-field">
              <label>Phone Number</label>
              <div className="form-input">
                <Phone size={18} />
                <input type="tel" name="phone" placeholder="+91 XXXXX XXXXX" />
              </div>
            </div>

            <div className="form-field">
              <label>Company</label>
              <div className="form-input">
                <Building2 size={18} />
                <input type="text" name="company" placeholder="Company Name" />
              </div>
            </div>

            <div className="form-field">
              <label>Service Required</label>
              <div className="form-input">
                <Briefcase size={18} />
                <select name="service">
                  {services.map((service) => (
                    <option key={service}>{service}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-field">
              <label>Budget</label>
              <div className="form-input">
                <DollarSign size={18} />
                <select name="budget">
                  {budgetOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-field">
              <label>Project Timeline</label>
              <div className="form-input">
                <Calendar size={18} />
                <select name="timeline">
                  {timelineOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-field form-field--full">
              <label>Project Description</label>
              <div className="form-input form-input--textarea">
                <MessageSquare size={18} />
                <textarea
                  name="message"
                  required
                  rows={7}
                  placeholder="Tell us about your project, business goals, required features and anything else that will help us understand your vision."
                />
              </div>
            </div>

            {(success || error) && (
              <div className="form-field--full">
                {success && <div className="form-status form-status--success">{success}</div>}
                {error && <div className="form-status form-status--error">{error}</div>}
              </div>
            )}

            <div className="form-field--full">
              <button type="submit" disabled={loading} className="contact-form-submit">
                {loading ? (
                  <>
                    <span className="contact-form-submit__spinner" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}