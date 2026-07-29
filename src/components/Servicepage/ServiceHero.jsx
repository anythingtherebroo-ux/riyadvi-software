import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ServiceHero({ service }) {
  const Icon = service.icon;

  return (
    <section className="service-hero">
      <div className="service-hero__inner">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="service-hero__breadcrumb"
        >
          <Link to="/">Home</Link>
          <ChevronRight size={14} />
          <Link to="/services">Services</Link>
          <ChevronRight size={14} />
          <span>{service.title}</span>
        </motion.div>

        <div className="service-hero__grid">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="service-hero__eyebrow">
              <Icon size={18} />
              Premium Digital Solutions
            </span>

            <h1 className="service-hero__title">{service.title}</h1>

            <p className="service-hero__subtext">{service.subtitle}</p>

            <div className="service-hero__actions">
              <Link to="/contact" className="service-hero__btn-primary">
                Get a Quote
                <ArrowRight size={18} />
              </Link>
              <Link to="/portfolio" className="service-hero__btn-outline">
                View Portfolio
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="service-hero__media"
          >
            <img src={service.heroImage} alt={service.title} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}