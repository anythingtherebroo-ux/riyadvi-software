import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import portfolioData from "./portfolioData";
import PortfolioCard from "./PortfolioCard";
import "./Portfolio.css";

const Portfolio = () => {
  const featured = portfolioData.filter((project) => project.featured);

  return (
    <section id="portfolio" className="portfolio-preview">
      <div className="portfolio-preview__inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="portfolio-preview__header"
        >
          <span className="portfolio-preview__eyebrow">
            <span className="portfolio-preview__eyebrow-dash" />
            Our Portfolio
          </span>

          <h2 className="portfolio-preview__title">
            Crafting Digital
            <span className="portfolio-preview__title-accent"> Success Stories</span>
          </h2>

          <p className="portfolio-preview__subtext">
            A few recent projects that show how we turn ideas into scalable,
            polished digital products.
          </p>
        </motion.div>

        <div className="portfolio-preview__grid">
          {featured.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              viewport={{ once: true }}
            >
              <PortfolioCard project={project} index={index} />
            </motion.div>
          ))}
        </div>

        <div className="portfolio-preview__footer">
          <Link to="/portfolio" className="portfolio-preview__link">
            View Full Portfolio
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;