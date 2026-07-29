import { motion } from "framer-motion";
import { BadgeCheck, Code2, Palette, Headphones, ShieldCheck, Rocket } from "lucide-react";
import "./WhyChooseUs.css";

const features = [
  {
    icon: BadgeCheck,
    title: "Trusted Partner",
    description:
      "We build long-term relationships by delivering reliable, transparent and business-focused digital solutions.",
  },
  {
    icon: Code2,
    title: "Modern Technology",
    description:
      "Our team works with the latest frameworks and technologies to create scalable and high-performance products.",
  },
  {
    icon: Palette,
    title: "Creative Design",
    description:
      "Beautiful UI/UX combined with seamless functionality creates memorable digital experiences.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "We stay with our clients beyond launch, providing maintenance, updates and technical assistance.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description:
      "Every solution is thoroughly tested for security, speed and performance before delivery.",
  },
  {
    icon: Rocket,
    title: "Growth Focused",
    description:
      "Our products are designed to help businesses increase efficiency, revenue and customer engagement.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="diff-section">
      <div className="diff-section__inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="diff-section__header"
        >
          <span className="diff-section__eyebrow">
            <span className="diff-section__eyebrow-dash" />
            Why Choose Riyadvi
          </span>
          <h2 className="diff-section__title">
            What Makes Us <span className="diff-section__title-accent">Different</span>
          </h2>
          <p className="diff-section__subtext">
            We combine creativity, strategy and technology to build digital
            products that help businesses grow confidently.
          </p>
        </motion.div>

        <div className="diff-section__grid">
          {features.map((feature, index) => {
            const code = String(index + 1).padStart(2, "0");
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="diff-card"
              >
                <div className="diff-card__top">
                  <span className="diff-card__code">DIFF / {code}</span>
                  <feature.icon size={20} className="diff-card__icon" />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="diff-section__commitment"
        >
          <span className="diff-section__eyebrow">Our Commitment</span>
          <h3>
            Your Success <span className="diff-section__title-accent">Is Our Priority</span>
          </h3>
          <p>
            We don&apos;t just build websites and applications — we create
            digital experiences that help businesses grow, improve customer
            engagement and achieve measurable results.
          </p>
        </motion.div>
      </div>
    </section>
  );
}