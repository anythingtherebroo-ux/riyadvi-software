import { motion } from "framer-motion";
import { InlineWidget } from "react-calendly";
import { CalendarDays, Clock3, Video, CheckCircle2 } from "lucide-react";
import { companyInfo } from "./contactData";

const benefits = [
  { icon: CalendarDays, title: "Choose Your Time", description: "Pick a date and time that fits your schedule." },
  { icon: Video, title: "Online Meeting", description: "Meet with our experts through Google Meet or Zoom." },
  { icon: Clock3, title: "30 Minute Session", description: "A focused consultation about your project." },
];

export default function CalendlySection() {
  return (
    <section id="booking" className="calendly-section">
      <div className="calendly-section__inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="calendly-section__header"
        >
          <span className="calendly-section__eyebrow">
            <span className="calendly-section__eyebrow-dash" />
            Free Consultation
          </span>
          <h2 className="calendly-section__title">
            Book Your <span className="calendly-section__title-accent">Strategy Call</span>
          </h2>
          <p className="calendly-section__subtext">
            Schedule a free consultation to discuss your project, goals and
            the best digital solution for your business.
          </p>
        </motion.div>

        <div className="calendly-section__grid">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="calendly-section__benefits"
          >
            {benefits.map((item) => (
              <div className="calendly-benefit" key={item.title}>
                <span className="calendly-benefit__icon">
                  <item.icon size={20} />
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}

            <div className="calendly-note">
              <CheckCircle2 size={20} />
              <p>
                No obligation consultation. We&apos;ll discuss your
                requirements, answer your questions and suggest the most
                suitable solution.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="calendly-section__widget"
          >
            <InlineWidget url={companyInfo.calendly} styles={{ height: "760px" }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}