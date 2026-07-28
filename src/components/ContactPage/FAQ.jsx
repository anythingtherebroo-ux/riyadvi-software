import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

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

  const toggleFAQ = (index) => {
    setActive(active === index ? -1 : index);
  };

  return (
    <section className="relative overflow-hidden bg-[#050505] py-28">

      {/* Background */}

      <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-[#D4AF37]/10 blur-[170px]" />

      <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-[#D4AF37]/10 blur-[170px]" />

      <div className="relative mx-auto max-w-5xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <span className="rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-[#D4AF37]">

            Frequently Asked Questions

          </span>

          <h2 className="mt-8 text-5xl font-black text-white">

            Got Questions?

            <span className="block text-[#D4AF37]">

              We've Got Answers

            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">

            Here are some of the most common questions our clients ask before starting a project.

          </p>

        </motion.div>

        {/* FAQ List */}

        <div className="space-y-6">

          {faqs.map((faq, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
                duration: 0.6,
              }}
              className="overflow-hidden rounded-3xl border border-white/10 bg-[#0B0B0B]"
            >

              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between px-8 py-7 text-left transition hover:bg-white/5"
              >
                <h3 className="pr-8 text-xl font-semibold text-white">

                  {faq.question}

                </h3>

                <motion.div
                  animate={{
                    rotate: active === index ? 180 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown
                    size={26}
                    className="text-[#D4AF37]"
                  />
                </motion.div>

              </button>

              <AnimatePresence>

                {active === index && (

                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.35,
                    }}
                    className="overflow-hidden"
                  >

                    <div className="border-t border-white/10 px-8 py-7">

                      <p className="leading-8 text-gray-400">

                        {faq.answer}

                      </p>

                    </div>

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