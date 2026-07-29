import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, User, Mail, Briefcase, Download, CheckCircle2 } from "lucide-react";
import "./LeadMagnetModal.css";

const LeadMagnetModal = ({ open, setOpen }) => {
  const [formData, setFormData] = useState({ name: "", email: "", company: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email))
      newErrors.email = "Invalid email address";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleDownload = () => {
    if (!validate()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      const link = document.createElement("a");
      link.href = "/project-guide.pdf";
      link.download = "Software Project Planning Guide.pdf";
      link.click();
      setOpen(false);
      setFormData({ name: "", email: "", company: "" });
    }, 1500);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="lm-modal-overlay"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="lm-modal"
          >
            <div className="lm-modal__header">
              <span>download-guide</span>
              <button onClick={() => setOpen(false)} className="lm-modal__close" aria-label="Close">
                <X size={16} />
              </button>
            </div>

            <div className="lm-modal__body">
              <div className="lm-modal__icon">
                <Download size={26} />
              </div>

              <h2 className="lm-modal__title">Download Free Guide</h2>
              <p className="lm-modal__subtext">
                Enter your details to download the{" "}
                <span>Software Project Planning Guide</span>
              </p>

              <div className="lm-modal__fields">
                <div className="lm-modal__field">
                  <label>Full Name</label>
                  <div className="lm-modal__input">
                    <User size={16} />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                    />
                  </div>
                  {errors.name && <p className="lm-modal__error">{errors.name}</p>}
                </div>

                <div className="lm-modal__field">
                  <label>Email Address</label>
                  <div className="lm-modal__input">
                    <Mail size={16} />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@email.com"
                    />
                  </div>
                  {errors.email && <p className="lm-modal__error">{errors.email}</p>}
                </div>

                <div className="lm-modal__field">
                  <label>Company (Optional)</label>
                  <div className="lm-modal__input">
                    <Briefcase size={16} />
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company Name"
                    />
                  </div>
                </div>
              </div>

              <div className="lm-modal__benefits">
                {[
                  "Project Requirement Checklist",
                  "Budget Planning",
                  "Technology Selection",
                  "Deployment Checklist",
                ].map((item) => (
                  <div className="lm-modal__benefit" key={item}>
                    <CheckCircle2 size={16} />
                    {item}
                  </div>
                ))}
              </div>

              <button className="lm-modal__submit" onClick={handleDownload} disabled={loading}>
                {loading ? (
                  <>
                    <span className="lm-modal__spinner" />
                    Preparing Download...
                  </>
                ) : (
                  <>
                    <Download size={18} />
                    Download PDF Guide
                  </>
                )}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LeadMagnetModal;