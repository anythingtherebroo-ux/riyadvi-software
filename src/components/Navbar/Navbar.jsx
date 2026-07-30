import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { Menu, X, Sparkles } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "./navLinks";
import Button from "../Common/Button";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "");
  }, [menuOpen]);

  // Handler for Book Consultation Button
  const handleConsultationClick = () => {
    setMenuOpen(false); // Close mobile drawer if open

    const contactSection =
      document.getElementById("contact-form") ||
      document.getElementById("contact");

    if (contactSection) {
      // Smooth scroll to contact form if present on current page
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to /contact page if section is on another page
      navigate("/contact");
    }
  };

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-[#080808]/90 backdrop-blur-2xl shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
            : "bg-transparent py-2"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Brand Logo */}
          <Link to="/" className="group flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#d4af37] font-poppins font-extrabold text-black shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-transform duration-300 group-hover:scale-105">
              R
            </div>

            <div>
              <h2 className="font-poppins text-xl font-bold tracking-tight text-white transition-colors group-hover:text-[#d4af37]">
                Riyadvi
              </h2>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-[#d4af37]">
                Software Technologies
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `group relative font-poppins text-sm font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-[#d4af37]"
                      : "text-gray-300 hover:text-[#d4af37]"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{item.name}</span>
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-[#d4af37] shadow-[0_0_8px_#d4af37]"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Desktop Consultation Button */}
          <div className="hidden lg:block">
            <Button onClick={handleConsultationClick}>Book Consultation</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-xl border border-white/15 bg-white/[0.04] p-2.5 text-white transition hover:border-[#d4af37] hover:text-[#d4af37] lg:hidden"
            aria-label="Toggle Mobile Navigation"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Fullscreen Drawer Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed inset-0 z-[60] flex flex-col bg-[#080808]/98 backdrop-blur-2xl lg:hidden"
          >
            {/* Header inside drawer */}
            <div className="flex h-20 items-center justify-between border-b border-white/10 px-6">
              <div className="flex items-center gap-2.5">
                <Sparkles className="text-[#d4af37]" size={18} />
                <h2 className="font-poppins text-xl font-bold text-[#d4af37]">
                  Navigation
                </h2>
              </div>

              <button
                onClick={() => setMenuOpen(false)}
                className="rounded-xl border border-white/15 bg-white/5 p-2 text-white transition hover:border-[#d4af37] hover:text-[#d4af37]"
              >
                <X size={22} />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <div className="flex flex-1 flex-col justify-between px-6 py-10">
              <div className="space-y-2">
                {navLinks.map((item, index) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center justify-between border-b border-white/5 py-4 font-poppins text-xl font-semibold transition-colors ${
                        isActive
                          ? "text-[#d4af37]"
                          : "text-white hover:text-[#d4af37]"
                      }`
                    }
                  >
                    <span>{item.name}</span>
                    <span className="font-mono text-xs font-normal text-gray-500">
                      0{index + 1}
                    </span>
                  </NavLink>
                ))}
              </div>

              {/* Consultation CTA */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <Button onClick={handleConsultationClick} className="w-full justify-center">
                  Book Consultation
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}