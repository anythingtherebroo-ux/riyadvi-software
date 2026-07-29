import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  User,
  Mail,
  Briefcase,
  Download,
  CheckCircle2,
} from "lucide-react";

export default function LeadMagnetModal({ open, setOpen }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    setErrors((prev) => ({
      ...prev,
      [e.target.name]: "",
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim())
      newErrors.name = "Name is required";

    if (!formData.email.trim())
      newErrors.email = "Email is required";
    else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    )
      newErrors.email = "Invalid Email";

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

      setFormData({
        name: "",
        email: "",
        company: "",
      });
    }, 1500);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 p-6 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
            }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-xl overflow-hidden rounded-3xl border border-[#d4af37]/20 bg-[#111111] shadow-[0_20px_60px_rgba(0,0,0,.6)]"
          >
            {/* Header */}

            <div className="flex items-center justify-between border-b border-white/10 px-7 py-5">

              <span className="font-semibold text-[#d4af37]">
                download-guide.pdf
              </span>

              <button
                onClick={() => setOpen(false)}
                className="rounded-xl p-2 text-white transition hover:bg-white/10"
              >
                <X size={18} />
              </button>
            </div>

            {/* Body */}

            <div className="space-y-8 p-8">

              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#d4af37]/10 text-[#d4af37]">

                <Download size={34} />

              </div>

              <div className="text-center">

                <h2 className="text-3xl font-bold text-white">

                  Download Free Guide

                </h2>

                <p className="mt-3 text-gray-400">

                  Complete the form to access the

                  <span className="font-semibold text-[#d4af37]">

                    {" "}Software Project Planning Guide

                  </span>

                </p>

              </div>

              {/* FORM */}

              <div className="space-y-5">

                {/* NAME */}

                <div>

                  <label className="mb-2 block text-sm text-gray-300">

                    Full Name

                  </label>

                  <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-4">

                    <User className="text-[#d4af37]" size={18} />

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full bg-transparent py-4 text-white outline-none"
                    />

                  </div>

                  {errors.name && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.name}
                    </p>
                  )}

                </div>

                {/* EMAIL */}

                <div>

                  <label className="mb-2 block text-sm text-gray-300">

                    Email Address

                  </label>

                  <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-4">

                    <Mail className="text-[#d4af37]" size={18} />

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@email.com"
                      className="w-full bg-transparent py-4 text-white outline-none"
                    />

                  </div>

                  {errors.email && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.email}
                    </p>
                  )}

                </div>

                {/* COMPANY */}

                <div>

                  <label className="mb-2 block text-sm text-gray-300">

                    Company (Optional)

                  </label>

                  <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-4">

                    <Briefcase className="text-[#d4af37]" size={18} />

                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company Name"
                      className="w-full bg-transparent py-4 text-white outline-none"
                    />

                  </div>

                </div>

              </div>

              {/* BENEFITS */}

              <div className="grid gap-3 sm:grid-cols-2">

                {[
                  "Project Checklist",
                  "Budget Planning",
                  "Technology Selection",
                  "Deployment Guide",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-xl bg-[#d4af37]/10 px-4 py-3 text-[#d4af37]"
                  >
                    <CheckCircle2 size={18} />
                    <span>{item}</span>
                  </div>
                ))}

              </div>

              {/* BUTTON */}

              <button
                onClick={handleDownload}
                disabled={loading}
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#d4af37] py-4 font-semibold text-black transition hover:scale-[1.02]"
              >
                {loading ? (
                  <>
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-black border-t-transparent" />
                    Preparing Download...
                  </>
                ) : (
                  <>
                    <Download size={20} />
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
}