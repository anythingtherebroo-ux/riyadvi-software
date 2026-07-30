import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";

const faqs = [
  {
    question: "How long does a project usually take?",
    answer:
      "Project timelines depend on the scope and complexity. Most websites are completed within 2–6 weeks, while larger web or mobile applications may take several months.",
  },
  {
    question: "How much does a website or application cost?",
    answer:
      "Pricing depends on your requirements, features, integrations, and timeline. After our consultation, we'll provide a detailed proposal and transparent quotation.",
  },
  {
    question: "Do you provide maintenance and support?",
    answer:
      "Yes. We offer ongoing maintenance, performance monitoring, security updates, bug fixes, and feature enhancements after your project is launched.",
  },
  {
    question: "Can we schedule a free consultation?",
    answer:
      "Absolutely. You can use the Calendly booking section above to schedule a free consultation at a time that works best for you.",
  },
  {
    question: "Which technologies do you work with?",
    answer:
      "We build solutions using React, Next.js, Node.js, Laravel, Flutter, React Native, Python, cloud platforms, AI technologies, and modern UI/UX design practices.",
  },
  {
    question: "Will my website be mobile friendly?",
    answer:
      "Yes. Every website we build is fully responsive and optimized for desktops, tablets, and mobile devices.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState(0);
  const toggleFAQ = (index) => setActive(active === index ? -1 : index);

  return (
    <section className="relative overflow-hidden bg-[#050505] py-24 sm:py-32 text-white">
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
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
              Frequently Asked Questions
            </span>
          </div>

          <h2 className="font-poppins text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Got Questions?{" "}
            <span className="bg-gradient-to-r from-[#d4af37] via-yellow-300 to-[#d4af37] bg-clip-text text-transparent">
              We've Got Answers
            </span>
          </h2>

          <p className="mt-6 text-base leading-relaxed text-gray-400 sm:text-lg sm:leading-8">
            Here are some of the most common questions our clients ask before
            starting a project.
          </p>
        </motion.div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl transition-colors hover:border-[#d4af37]/30"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between p-6 text-left font-poppins text-lg font-bold text-white sm:p-7"
                aria-expanded={active === index}
              >
                <span>{faq.question}</span>
                <motion.span
                  animate={{ rotate: active === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#d4af37]/10 text-[#d4af37]"
                >
                  <ChevronDown size={20} />
                </motion.span>
              </button>

              <AnimatePresence>
                {active === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden px-6 pb-6 text-gray-300 sm:px-7 sm:pb-7"
                  >
                    <p className="text-base leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}