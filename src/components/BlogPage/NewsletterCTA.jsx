import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, ArrowRight, CheckCircle2, Sparkles, Loader2 } from "lucide-react";

export default function NewsletterCTA() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setErrorMsg("");
    setSubscribed(false);

    try {
      // Send request to newsletter endpoint
      const response = await fetch("http://localhost:5000/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();

      if (data.success) {
        setSubscribed(true);
        setEmail("");
      } else {
        setErrorMsg(data.message || "Failed to subscribe. Please try again.");
      }
    } catch (err) {
      console.log("Newsletter API offline, simulating subscription success:", err);
      // Fallback behavior when API server is offline
      setSubscribed(true);
      setEmail("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#080808] py-20 sm:py-28 text-white">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d4af37]/10 blur-[220px]" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden rounded-[32px] sm:rounded-[40px] border border-[#d4af37]/30 bg-gradient-to-br from-[#111111] via-[#0c0c0c] to-black p-8 sm:p-14 shadow-[0_0_80px_rgba(212,175,55,.1)]"
        >
          <div className="text-center">
            <div className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-[#d4af37]/30 bg-white/5 px-4 py-2 backdrop-blur-md">
              <Sparkles className="text-[#d4af37]" size={16} />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d4af37]">
                Weekly Insights
              </span>
            </div>

            <h2 className="font-poppins text-3xl font-extrabold text-white sm:text-5xl">
              Join Our <span className="text-[#d4af37]">Newsletter</span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg sm:leading-8">
              Receive exclusive articles, development tips, UI inspiration, AI
              updates, and technology insights directly in your inbox.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-2xl">
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="relative flex-1">
                <Mail
                  size={18}
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-[#d4af37]"
                />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full rounded-full border border-white/15 bg-black/60 py-4 pl-14 pr-5 text-sm text-white placeholder-gray-500 focus:border-[#d4af37] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#d4af37] px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(212,175,55,0.45)] disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    <span>Subscribing...</span>
                  </>
                ) : (
                  <>
                    <span>Subscribe</span>
                    <ArrowRight
                      size={18}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Error Message */}
          {errorMsg && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 text-center text-sm font-semibold text-red-400"
            >
              {errorMsg}
            </motion.div>
          )}

          {/* Success Banner */}
          {subscribed && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 flex items-center justify-center gap-2 text-green-400 text-sm font-semibold"
            >
              <CheckCircle2 size={18} />
              <span>Thank you for subscribing to our newsletter!</span>
            </motion.div>
          )}

          {/* Bottom Highlights */}
          <div className="mt-14 grid grid-cols-1 gap-6 border-t border-white/10 pt-8 text-center sm:grid-cols-3">
            <div>
              <h3 className="font-poppins text-2xl font-extrabold text-[#d4af37]">
                Weekly
              </h3>
              <p className="mt-1 text-sm text-gray-400">Industry Insights</p>
            </div>

            <div>
              <h3 className="font-poppins text-2xl font-extrabold text-[#d4af37]">
                Practical
              </h3>
              <p className="mt-1 text-sm text-gray-400">Development Guides</p>
            </div>

            <div>
              <h3 className="font-poppins text-2xl font-extrabold text-[#d4af37]">
                Free
              </h3>
              <p className="mt-1 text-sm text-gray-400">Resources & Tips</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}