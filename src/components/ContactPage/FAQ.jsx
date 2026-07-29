import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";


const faqs = [
  { question: "How long does a project usually take?", answer: "Project timelines depend on the scope and complexity. Most websites are completed within 2–6 weeks, while larger web or mobile applications may take several months." },
  { question: "How much does a website or application cost?", answer: "Pricing depends on your requirements, features, integrations, and timeline. After our consultation, we'll provide a detailed proposal and transparent quotation." },
  { question: "Do you provide maintenance and support?", answer: "Yes. We offer ongoing maintenance, performance monitoring, security updates, bug fixes, and feature enhancements after your project is launched." },
  { question: "Can we schedule a free consultation?", answer: "Absolutely. You can use the Calendly booking section above to schedule a free consultation at a time that works best for you." },
  { question: "Which technologies do you work with?", answer: "We build solutions using React, Next.js, Node.js, Laravel, Flutter, React Native, Python, cloud platforms, AI technologies, and modern UI/UX design practices." },
  { question: "Will my website be mobile friendly?", answer: "Yes. Every website we build is fully responsive and optimized for desktops, tablets, and mobile devices." },
];

export default function FAQ() {
  const [active, setActive] = useState(0);
  const toggleFAQ = (index) => setActive(active === index ? -1 : index);

  return (
    <section className="faq-section">
      <div className="faq-section__inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="faq-section__header"
        >
          <span className="faq-section__eyebrow">
            <span className="faq-section__eyebrow-dash" />
            Frequently Asked Questions
          </span>
          <h2 className="faq-section__title">
            Got Questions? <span className="faq-section__title-accent">We&apos;ve Got Answers</span>
          </h2>
          <p className="faq-section__subtext">
            Here are some of the most common questions our clients ask
            before starting a project.
          </p>
        </motion.div>

        <div className="faq-section__list">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="faq-item"
            >
              <button onClick={() => toggleFAQ(index)} className="faq-item__question" aria-expanded={active === index}>
                <h3>{faq.question}</h3>
                <motion.span animate={{ rotate: active === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <ChevronDown size={20} />
                </motion.span>
              </button>

              <AnimatePresence>
                {active === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="faq-item__answer-wrap"
                  >
                    <p className="faq-item__answer">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}