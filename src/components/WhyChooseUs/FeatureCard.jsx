import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function FeatureCard({ item, index }) {
  return (
    <div className="check-row">
      <motion.span
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35, delay: index * 0.12 }}
        className="check-row__box"
      >
        <Check size={14} strokeWidth={3} />
      </motion.span>

      <div className="check-row__text">
        <h3 className="check-row__title">{item.title}</h3>
        <p className="check-row__desc">{item.description}</p>
      </div>
    </div>
  );
}