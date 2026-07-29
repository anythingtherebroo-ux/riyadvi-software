import { motion } from "framer-motion";
import { Search, Lightbulb, PenTool, Code2, ShieldCheck, Rocket } from "lucide-react";
import "./WorkProcess.css";

const process = [
  { icon: Search, step: "01", title: "Discover", description: "Understanding your business goals, audience and project requirements." },
  { icon: Lightbulb, step: "02", title: "Strategy", description: "Creating the roadmap, choosing technologies and planning the project." },
  { icon: PenTool, step: "03", title: "Design", description: "Designing intuitive user experiences with modern UI principles." },
  { icon: Code2, step: "04", title: "Development", description: "Building scalable, secure and high-performance applications." },
  { icon: ShieldCheck, step: "05", title: "Testing", description: "Quality assurance, security testing and performance optimisation." },
  { icon: Rocket, step: "06", title: "Launch", description: "Deploying your product with continuous support and improvements." },
];

const qualities = ["Agile", "Fast Delivery", "Secure", "Scalable"];

export default function WorkProcess() {
  return (
    <section className="process-section">
      <div className="process-section__inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="process-section__header"
        >
          <span className="process-section__eyebrow">
            <span className="process-section__eyebrow-dash" />
            Our Process
          </span>
          <h2 className="process-section__title">
            How We Turn <span className="process-section__title-accent">Ideas Into Reality</span>
          </h2>
          <p className="process-section__subtext">
            Every successful project follows a structured process, ensuring
            quality, transparency and measurable results.
          </p>
        </motion.div>

        <div className="process-section__grid">
          {process.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="process-card"
            >
              <span className="process-card__step">{item.step}</span>
              <item.icon size={26} className="process-card__icon" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="process-section__tags"
        >
          {qualities.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}