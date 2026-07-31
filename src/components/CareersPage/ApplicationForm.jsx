import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  Briefcase,
  Building2,
  FileText,
  Upload,
  Send,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

import API from "../../Services/api";

export default function ApplicationForm() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    department: "",
    experience: "",
    coverLetter: "",
    resume: null,
    agree: false,
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Ref to clear native file input DOM state
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "file") {
      const selectedFile = files[0];
      // File size validation (Max 5MB)
      if (selectedFile && selectedFile.size > 5 * 1024 * 1024) {
        setErrorMsg("File size exceeds 5MB limit. Please upload a smaller file.");
        return;
      }
      setErrorMsg("");
      setForm((prev) => ({ ...prev, resume: selectedFile }));
    } else if (type === "checkbox") {
      setForm((prev) => ({ ...prev, [name]: checked }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitted(false);
    setErrorMsg("");

    if (!form.resume) {
      setErrorMsg("Please upload your resume.");
      setLoading(false);
      return;
    }

    try {
      const formData = new FormData();
      formData.append("fullName", form.fullName);
      formData.append("email", form.email);
      formData.append("phone", form.phone);
      formData.append("position", form.position);
      formData.append("department", form.department);
      formData.append("experience", form.experience);
      formData.append("coverLetter", form.coverLetter);
      formData.append("resume", form.resume);

      // Axios automatically sets 'multipart/form-data' with correct boundary
      const response = await API.post("/career", formData);

      console.log("CAREER APPLICATION SUCCESS:", response.data);

      setSubmitted(true);
      setForm({
        fullName: "",
        email: "",
        phone: "",
        position: "",
        department: "",
        experience: "",
        coverLetter: "",
        resume: null,
        agree: false,
      });

      // Clear physical file input
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (error) {
      console.error(
        "CAREER APPLICATION ERROR:",
        error.response?.data || error.message
      );
      setErrorMsg(
        error.response?.data?.message ||
          "Application submission failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="application"
      className="relative overflow-hidden bg-[#080808] py-24 sm:py-32 text-white"
    >
      <div className="pointer-events-none absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-[#d4af37]/10 blur-[180px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-[#d4af37]/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center sm:mb-20"
        >
          <div className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-[#d4af37]/30 bg-white/5 px-4 py-2 backdrop-blur-md shadow-[0_0_20px_rgba(212,175,55,0.1)]">
            <Sparkles className="text-[#d4af37]" size={16} />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d4af37] sm:text-sm">
              Apply Today
            </span>
          </div>

          <h2 className="font-poppins text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Join Our <span className="text-[#d4af37]">Amazing Team</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg sm:leading-8">
            Fill in your details below. Our recruitment team will review your
            application and contact you if your profile matches an open position.
          </p>
        </motion.div>

        {/* Application Form */}
        <motion.form
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          onSubmit={handleSubmit}
          className="rounded-3xl border border-white/15 bg-white/[0.04] p-8 backdrop-blur-2xl shadow-[0_30px_90px_rgba(0,0,0,0.65)] sm:p-12"
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* Full Name */}
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-400">
                Full Name *
              </label>
              <div className="relative flex items-center">
                <User size={18} className="absolute left-4 text-[#d4af37]" />
                <input
                  type="text"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full rounded-2xl border border-white/10 bg-black/40 py-3.5 pl-12 pr-4 text-sm text-white placeholder-gray-500 focus:border-[#d4af37] focus:outline-none"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-400">
                Email Address *
              </label>
              <div className="relative flex items-center">
                <Mail size={18} className="absolute left-4 text-[#d4af37]" />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="john@email.com"
                  className="w-full rounded-2xl border border-white/10 bg-black/40 py-3.5 pl-12 pr-4 text-sm text-white placeholder-gray-500 focus:border-[#d4af37] focus:outline-none"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-400">
                Phone Number *
              </label>
              <div className="relative flex items-center">
                <Phone size={18} className="absolute left-4 text-[#d4af37]" />
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  placeholder="+91 98765 43210"
                  className="w-full rounded-2xl border border-white/10 bg-black/40 py-3.5 pl-12 pr-4 text-sm text-white placeholder-gray-500 focus:border-[#d4af37] focus:outline-none"
                />
              </div>
            </div>

            {/* Position */}
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-400">
                Position *
              </label>
              <div className="relative flex items-center">
                <Briefcase size={18} className="absolute left-4 text-[#d4af37]" />
                <input
                  type="text"
                  name="position"
                  value={form.position}
                  onChange={handleChange}
                  required
                  placeholder="React Developer"
                  className="w-full rounded-2xl border border-white/10 bg-black/40 py-3.5 pl-12 pr-4 text-sm text-white placeholder-gray-500 focus:border-[#d4af37] focus:outline-none"
                />
              </div>
            </div>

            {/* Department */}
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-400">
                Department *
              </label>
              <div className="relative flex items-center">
                <Building2 size={18} className="absolute left-4 text-[#d4af37]" />
                <select
                  name="department"
                  value={form.department}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-white/10 bg-black/40 py-3.5 pl-12 pr-4 text-sm text-white focus:border-[#d4af37] focus:outline-none"
                >
                  <option value="" className="bg-[#121212] text-gray-400">
                    Select Department
                  </option>
                  <option value="Engineering" className="bg-[#121212] text-white">
                    Engineering
                  </option>
                  <option value="Design" className="bg-[#121212] text-white">
                    Design
                  </option>
                  <option value="AI" className="bg-[#121212] text-white">
                    AI
                  </option>
                  <option value="Marketing" className="bg-[#121212] text-white">
                    Marketing
                  </option>
                  <option value="Sales" className="bg-[#121212] text-white">
                    Sales
                  </option>
                  <option value="HR" className="bg-[#121212] text-white">
                    HR
                  </option>
                </select>
              </div>
            </div>

            {/* Experience */}
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-400">
                Experience *
              </label>
              <select
                name="experience"
                value={form.experience}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-white/10 bg-black/40 py-3.5 px-4 text-sm text-white focus:border-[#d4af37] focus:outline-none"
              >
                <option value="" className="bg-[#121212] text-gray-400">
                  Select Experience
                </option>
                <option value="Fresher" className="bg-[#121212] text-white">
                  Fresher
                </option>
                <option value="1-2 Years" className="bg-[#121212] text-white">
                  1-2 Years
                </option>
                <option value="3-5 Years" className="bg-[#121212] text-white">
                  3-5 Years
                </option>
                <option value="5+ Years" className="bg-[#121212] text-white">
                  5+ Years
                </option>
              </select>
            </div>
          </div>

          {/* Resume Upload */}
          <div className="mt-6">
            <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-400">
              Upload Resume (PDF, DOC, DOCX - Max 5MB) *
            </label>

            <label className="flex cursor-pointer items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-[#d4af37]/30 bg-black/30 p-6 text-gray-300 transition-all hover:border-[#d4af37] hover:bg-black/50">
              <Upload className="text-[#d4af37]" size={22} />
              <span className="text-sm font-medium">
                {form.resume ? form.resume.name : "Click to select or drag file"}
              </span>
              <input
                ref={fileInputRef}
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                className="hidden"
                required
              />
            </label>
          </div>

          {/* Cover Letter */}
          <div className="mt-6">
            <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-400">
              Cover Letter / Introduction
            </label>
            <div className="relative flex items-start">
              <FileText size={18} className="absolute left-4 top-4 text-[#d4af37]" />
              <textarea
                rows={5}
                name="coverLetter"
                value={form.coverLetter}
                onChange={handleChange}
                placeholder="Tell us about yourself, your accomplishments, and why you'd like to join..."
                className="w-full rounded-2xl border border-white/10 bg-black/40 py-3.5 pl-12 pr-4 text-sm text-white placeholder-gray-500 focus:border-[#d4af37] focus:outline-none"
              />
            </div>
          </div>

          {/* Agreement Checkbox */}
          <div className="mt-6 flex items-start gap-3">
            <input
              type="checkbox"
              name="agree"
              checked={form.agree}
              onChange={handleChange}
              required
              className="mt-1 h-4 w-4 rounded border-gray-600 bg-black text-[#d4af37] focus:ring-[#d4af37]"
            />
            <p className="text-xs text-gray-400 sm:text-sm">
              I agree that Riyadvi Software Technologies may store and process my
              application details for recruitment purposes.
            </p>
          </div>

          {/* Error Banner */}
          {errorMsg && (
            <div className="mt-6 rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-400">
              {errorMsg}
            </div>
          )}

          {/* Success Banner */}
          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 flex items-center gap-3 rounded-2xl border border-green-500/30 bg-green-500/10 p-4 text-sm text-green-400"
            >
              <CheckCircle2 size={20} className="shrink-0 text-green-400" />
              <span>Your application has been submitted successfully! We'll review it soon.</span>
            </motion.div>
          )}

          {/* Submit Button */}
          <div className="mt-8">
            <button
              type="submit"
              disabled={loading}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#d4af37] py-4 font-semibold text-black transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_35px_rgba(212,175,55,0.45)] disabled:opacity-50 sm:w-auto sm:px-10"
            >
              {loading ? (
                <span>Submitting Application...</span>
              ) : (
                <>
                  <span>Submit Application</span>
                  <Send size={18} className="transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}