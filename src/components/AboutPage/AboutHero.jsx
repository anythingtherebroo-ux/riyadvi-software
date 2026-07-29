import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Briefcase, Users, Award, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import "./AboutHero.css";

const stats = [
  { icon: Briefcase, number: "50+", label: "Projects Delivered" },
  { icon: Users, number: "30+", label: "Happy Clients" },
  { icon: Award, number: "98%", label: "Client Satisfaction" },
  { icon: Rocket, number: "2021", label: "Founded" },
];

export default function AboutHero() {
  return (
    <section className="about-hero">
      <div className="about-hero__inner">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="about-hero__breadcrumb"
        >
          <Link to="/">Home</Link>
          <ChevronRight size={14} />
          <span>About Us</span>
        </motion.div>

        <div className="about-hero__grid">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="about-hero__eyebrow">
              <span className="about-hero__eyebrow-dash" />
              About Riyadvi Software Technologies
            </span>

            <h1 className="about-hero__title">
              Building
              <span className="about-hero__title-accent"> Digital Experiences</span>
              <br />
              That Drive Growth
            </h1>

            <p className="about-hero__subtext">
              Riyadvi Software Technologies is a modern digital agency
              specialising in web development, mobile applications, UI/UX
              design, digital marketing, AR/VR solutions and innovative
              software products for startups and enterprises.
            </p>

            <div className="about-hero__actions">
              <Link to="/contact" className="about-hero__btn-primary">
                Let&apos;s Work Together
                <ArrowRight size={18} />
              </Link>
              <Link to="/portfolio" className="about-hero__btn-outline">
                View Portfolio
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="about-hero__panel"
          >
            <div className="about-hero__panel-header">
              <span>riyadvi@overview</span>
              <span className="about-hero__panel-status">since 2021</span>
            </div>

            <div className="about-hero__panel-grid">
              {stats.map((item) => (
                <div className="about-hero__stat" key={item.label}>
                  <item.icon size={18} className="about-hero__stat-icon" />
                  <h2>{item.number}</h2>
                  <p>{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}