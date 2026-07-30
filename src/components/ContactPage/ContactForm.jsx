import { useRef, useState } from "react";
import { motion } from "framer-motion";
import API from "../../Services/api";
import { services } from "./contactData";
import {
  Send,
  User,
  Mail,
  Phone,
  Building2,
  Briefcase,
  DollarSign,
  Calendar,
  MessageSquare,
  Sparkles,
} from "lucide-react";

const budgetOptions = [
  "Below ₹50,000",
  "₹50,000 - ₹1,00,000",
  "₹1,00,000 - ₹3,00,000",
  "Above ₹3,00,000",
];

const timelineOptions = [
  "Immediately",
  "Within 1 Month",
  "1 - 3 Months",
  "3 - 6 Months",
  "Flexible",
];

export default function ContactForm() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const formData = new FormData(formRef.current);
      const payload = {
        name: formData.get("user_name"),
        email: formData.get("user_email"),
        phone: formData.get("phone"),
        company: formData.get("company"),
        service: formData.get("service"),
        budget: formData.get("budget"),
        timeline: formData.get("timeline"),
        message: formData.get("message"),
      };

      const response = await API.post("/contact", payload);

      if (!response.data.success) {
        throw new Error(response.data.message || "Failed to send message");
      }

      setSuccess(response.data.message || "Message sent successfully!");
      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (err) {
      console.error("CONTACT FORM SUBMIT ERROR:", err);
      setError(
        err.response?.data?.message ||
          err.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact-form" className="relative overflow-hidden bg-[#080808] py-24 sm:py-32 text-white">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center sm:mb-20"
        >
          <div className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-[#d4af37]/30 bg-white/5 px-4 py-2 backdrop-blur-md shadow-[0_0_20px_rgba(212,175,55,0.1)]">
            <Sparkles className="text-[#d4af37]" size={16} />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d4af37] sm:text-sm">
              Send Us A Message
            </span>
          </div>

          <h2 className="font-poppins text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Tell Us About{" "}
            <span className="bg-gradient-to-r from-[#d4af37] via-yellow-300 to-[#d4af37] bg-clip-text text-transparent">
              Your Project
            </span>
          </h2>

          <p className="mt-6 text-base leading-relaxed text-gray-400 sm:text-lg sm:leading-8">
            Fill out the form below and our team will get back to you within 24 hours.
          </p>
        </motion.div>

        {/* Glass Form Panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto max-w-4xl rounded-3xl border border-white/15 bg-white/[0.04] p-8 backdrop-blur-2xl shadow-[0_30px_90px_rgba(0,0,0,0.6)] sm:p-12"
        >
          <form ref={formRef} onSubmit={sendEmail} className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* Full Name */}
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-400">
                Full Name *
              </label>
              <div className="relative flex items-center">
                <User size={18} className="absolute left-4 text-[#d4af37]" />
                <input
                  type="text"
                  name="user_name"
                  required
                  placeholder="John Doe"
                  className="w-full rounded-2xl border border-white/10 bg-black/40 py-3.5 pl-12 pr-4 text-sm text-white placeholder-gray-500 focus:border-[#d4af37] focus:outline-none"
                />
              </div>
            </div>

            {/* Email Address */}
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-400">
                Email Address *
              </label>
              <div className="relative flex items-center">
                <Mail size={18} className="absolute left-4 text-[#d4af37]" />
                <input
                  type="email"
                  name="user_email"
                  required
                  placeholder="john@email.com"
                  className="w-full rounded-2xl border border-white/10 bg-black/40 py-3.5 pl-12 pr-4 text-sm text-white placeholder-gray-500 focus:border-[#d4af37] focus:outline-none"
                />
              </div>
            </div>

            {/* Phone Number */}
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-400">
                Phone Number
              </label>
              <div className="relative flex items-center">
                <Phone size={18} className="absolute left-4 text-[#d4af37]" />
                <input
                  type="tel"
                  name="phone"
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full rounded-2xl border border-white/10 bg-black/40 py-3.5 pl-12 pr-4 text-sm text-white placeholder-gray-500 focus:border-[#d4af37] focus:outline-none"
                />
              </div>
            </div>

            {/* Company */}
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-400">
                Company
              </label>
              <div className="relative flex items-center">
                <Building2 size={18} className="absolute left-4 text-[#d4af37]" />
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  className="w-full rounded-2xl border border-white/10 bg-black/40 py-3.5 pl-12 pr-4 text-sm text-white placeholder-gray-500 focus:border-[#d4af37] focus:outline-none"
                />
              </div>
            </div>

            {/* Service Required */}
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-400">
                Service Required
              </label>
              <div className="relative flex items-center">
                <Briefcase size={18} className="absolute left-4 text-[#d4af37]" />
                <select
                  name="service"
                  className="w-full rounded-2xl border border-white/10 bg-black/40 py-3.5 pl-12 pr-4 text-sm text-white focus:border-[#d4af37] focus:outline-none"
                >
                  {services.map((service) => (
                    <option key={service} value={service} className="bg-[#121212] text-white">
                      {service}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Budget */}
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-400">
                Budget
              </label>
              <div className="relative flex items-center">
                <DollarSign size={18} className="absolute left-4 text-[#d4af37]" />
                <select
                  name="budget"
                  className="w-full rounded-2xl border border-white/10 bg-black/40 py-3.5 pl-12 pr-4 text-sm text-white focus:border-[#d4af37] focus:outline-none"
                >
                  {budgetOptions.map((option) => (
                    <option key={option} value={option} className="bg-[#121212] text-white">
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Timeline */}
            <div className="sm:col-span-2">
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-400">
                Project Timeline
              </label>
              <div className="relative flex items-center">
                <Calendar size={18} className="absolute left-4 text-[#d4af37]" />
                <select
                  name="timeline"
                  className="w-full rounded-2xl border border-white/10 bg-black/40 py-3.5 pl-12 pr-4 text-sm text-white focus:border-[#d4af37] focus:outline-none"
                >
                  {timelineOptions.map((option) => (
                    <option key={option} value={option} className="bg-[#121212] text-white">
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Project Description */}
            <div className="sm:col-span-2">
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-400">
                Project Description *
              </label>
              <div className="relative flex items-start">
                <MessageSquare size={18} className="absolute left-4 top-4 text-[#d4af37]" />
                <textarea
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell us about your project, business goals, required features..."
                  className="w-full rounded-2xl border border-white/10 bg-black/40 py-3.5 pl-12 pr-4 text-sm text-white placeholder-gray-500 focus:border-[#d4af37] focus:outline-none"
                />
              </div>
            </div>

            {/* Status Messages */}
            {(success || error) && (
              <div className="sm:col-span-2">
                {success && (
                  <div className="rounded-2xl border border-green-500/30 bg-green-500/10 p-4 text-sm text-green-400">
                    {success}
                  </div>
                )}
                {error && (
                  <div className="rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-400">
                    {error}
                  </div>
                )}
              </div>
            )}

            {/* Submit Button */}
            <div className="sm:col-span-2 mt-4">
              <button
                type="submit"
                disabled={loading}
                className="group flex w-full items-center justify-center gap-2 rounded-full bg-[#d4af37] py-4 font-semibold text-black transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_35px_rgba(212,175,55,0.45)] disabled:opacity-50"
              >
                {loading ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={18} className="transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}