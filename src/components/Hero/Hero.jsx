import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import HeroStats from "./HeroStats";
import Button from "../Common/Button";
import "./Hero.css";

const buildLines = [
  "web development",
  "app development",
  "ui/ux design",
  "digital strategy",
];

function Hero() {
  return (
    <section className="hero">
      <div className="hero__inner">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="hero__content"
        >
          <span className="hero__eyebrow">
            <span className="hero__eyebrow-dash" />
            Premium Digital Solutions
          </span>

          <h1 className="hero__title">
            Custom Software
            <br />
            &amp; Digital Solutions
            <br />
            <span className="hero__title-accent">to Grow Your Business</span>
          </h1>

          <p className="hero__subtext">
            Web &amp; App Development, UI/UX Design, and Business Strategy —
            all tailored to your needs.
          </p>

          <div className="hero__actions">
            <Button>Book a Free Consultation</Button>
            <Link to="/services" className="hero__link">
              Explore Services
              <ArrowRight size={18} />
            </Link>
          </div>

          <HeroStats />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="hero__panel-wrap"
        >
          <div className="hero__panel">
            <div className="hero__panel-header">
              <span>riyadvi@build</span>
              <span className="hero__panel-status">running</span>
            </div>

            <div className="hero__panel-body">
              {buildLines.map((line, i) => (
                <div
                  className="hero__panel-line"
                  style={{ animationDelay: `${0.4 + i * 0.35}s` }}
                  key={line}
                >
                  <span className="hero__panel-prompt">&gt;</span> {line}
                </div>
              ))}
              <div className="hero__panel-cursor" />
            </div>

            <div className="hero__panel-footer">
              <span>stack: React · Node · Laravel</span>
              <span>since 2021</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;