import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiX,
  FiUser,
  FiMail,
  FiBriefcase,
  FiDownload,
  FiCheckCircle,
} from "react-icons/fi";

const LeadMagnetModal = ({ open, setOpen }) => {
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
      newErrors.email = "Invalid email address";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleDownload = async () => {
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-md p-5"
        >
          <motion.div
            initial={{ opacity: 0, scale: .9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: .9 }}
            transition={{ duration: .35 }}
            className="relative w-full max-w-xl overflow-hidden rounded-3xl border border-yellow-500/20 bg-zinc-950"
          >
            <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-yellow-500/10 blur-[100px]" />
            <div className="absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-yellow-500/10 blur-[100px]" />

            <button
              onClick={() => setOpen(false)}
              className="absolute right-5 top-5 rounded-full bg-zinc-900 p-2 text-white hover:bg-yellow-500 hover:text-black transition"
            >
              <FiX />
            </button>

            <div className="relative z-10 p-10">

              <div className="flex justify-center">
                <div className="rounded-full bg-yellow-500/10 p-5 text-yellow-400">
                  <FiDownload size={34} />
                </div>
              </div>

              <h2 className="mt-6 text-center text-3xl font-bold text-white">
                Download Free Guide
              </h2>

              <p className="mt-3 text-center text-gray-400 leading-7">
                Enter your details to download the
                <span className="font-semibold text-yellow-400">
                  {" "}Software Project Planning Guide
                </span>
              </p>

              <div className="mt-10 space-y-6">

                {/* Name */}

                <div>
                  <label className="mb-2 block text-sm text-gray-300">
                    Full Name
                  </label>

                  <div className="flex items-center rounded-xl border border-zinc-800 bg-zinc-900 px-4">
                    <FiUser className="text-yellow-400" />

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full bg-transparent px-4 py-4 text-white outline-none"
                    />
                  </div>

                  {errors.name && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}

                <div>
                  <label className="mb-2 block text-sm text-gray-300">
                    Email Address
                  </label>

                  <div className="flex items-center rounded-xl border border-zinc-800 bg-zinc-900 px-4">
                    <FiMail className="text-yellow-400" />

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@email.com"
                      className="w-full bg-transparent px-4 py-4 text-white outline-none"
                    />
                  </div>

                  {errors.email && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Company */}

                <div>
                  <label className="mb-2 block text-sm text-gray-300">
                    Company (Optional)
                  </label>

                  <div className="flex items-center rounded-xl border border-zinc-800 bg-zinc-900 px-4">
                    <FiBriefcase className="text-yellow-400" />

                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company Name"
                      className="w-full bg-transparent px-4 py-4 text-white outline-none"
                    />
                  </div>
                </div>

              </div>

              {/* Benefits */}

              <div className="mt-8 grid gap-3">

                {[
                  "Project Requirement Checklist",
                  "Budget Planning",
                  "Technology Selection",
                  "Deployment Checklist",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <FiCheckCircle className="text-yellow-400" />
                    {item}
                  </div>
                ))}

              </div>

              {/* Button */}

              <button
                onClick={handleDownload}
                disabled={loading}
                className="mt-10 flex w-full items-center justify-center gap-3 rounded-xl bg-yellow-500 py-4 font-semibold text-black transition hover:scale-[1.02]"
              >
                {loading ? (
                  <>
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-black border-t-transparent"></div>
                    Preparing Download...
                  </>
                ) : (
                  <>
                    <FiDownload />
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