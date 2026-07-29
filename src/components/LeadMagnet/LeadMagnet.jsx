import { useState } from "react";
import { motion } from "framer-motion";
import { Download, ArrowRight, Star, FileText } from "lucide-react";
import { guideFeatures } from "./LeadMagnetData";
import LeadMagnetModal from "./LeadMagnetModal";
import Button from "../Common/Button";
import "./LeadMagnet.css";

const LeadMagnet = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="lead-magnet">
        <div className="lead-magnet__inner">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lead-magnet__preview-wrap"
          >
            <div className="lead-magnet__preview">
              <div className="lead-magnet__preview-header">
                <span>project-guide.pdf</span>
                <span className="lead-magnet__preview-status">6 sections</span>
              </div>

              <div className="lead-magnet__preview-title">
                <FileText size={22} />
                <div>
                  <h3>Project Guide</h3>
                  <p>PDF · Free Download</p>
                </div>
              </div>

              <div className="lead-magnet__preview-list">
                {guideFeatures.slice(0, 4).map((item) => (
                  <div className="lead-magnet__preview-row" key={item.id}>
                    <item.icon size={16} />
                    <span>{item.title}</span>
                  </div>
                ))}
              </div>

              <div className="lead-magnet__preview-footer">+2 more sections inside</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="lead-magnet__eyebrow">
              <span className="lead-magnet__eyebrow-dash" />
              Free Resource
            </span>

            <h2 className="lead-magnet__title">
              Download Our
              <span className="lead-magnet__title-accent">
                {" "}
                Software Project Planning Guide
              </span>
            </h2>

            <p className="lead-magnet__subtext">
              Planning your software project doesn&apos;t have to be difficult.
              Our planning guide helps businesses define requirements,
              estimate budgets, choose technologies and avoid costly mistakes
              before writing a single line of code.
            </p>

            <div className="lead-magnet__list">
              {guideFeatures.map((item) => (
                <div className="lead-magnet__row" key={item.id}>
                  <span className="lead-magnet__row-icon">
                    <item.icon size={18} />
                  </span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="lead-magnet__stats">
              <div className="lead-magnet__stats-item">
                <h3>2000+</h3>
                <p>Downloads</p>
              </div>
              <div className="lead-magnet__stats-item">
                <div className="lead-magnet__stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <p>Trusted Resource</p>
              </div>
            </div>

            <div className="lead-magnet__actions">
              <Button onClick={() => setOpen(true)}>
                <Download size={18} />
                Download Free Guide
                <ArrowRight size={18} />
              </Button>
              <button className="lead-magnet__btn-outline">Book Free Consultation</button>
            </div>
          </motion.div>
        </div>
      </section>

      <LeadMagnetModal open={open} setOpen={setOpen} />
    </>
  );
};

export default LeadMagnet;