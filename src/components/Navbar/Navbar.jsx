import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "./navLinks";
import Button from "../Common/Button";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close the mobile menu automatically if the viewport grows past
  // the lg breakpoint (e.g. rotating a tablet or resizing a window).
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        scrolled ? "bg-black/90 shadow-lg backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between sm:h-20">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="shrink-0 text-2xl font-bold text-[#D4AF37] sm:text-3xl"
          >
            Riyadvi
          </Link>

          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {navLinks.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `font-medium whitespace-nowrap transition duration-300 ${
                    isActive
                      ? "text-[#D4AF37]"
                      : "text-white hover:text-[#D4AF37]"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button>Book Consultation</Button>
          </div>

          <button
            className="text-white lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="max-h-[calc(100vh-4rem)] overflow-y-auto bg-black lg:hidden"
          >
            {navLinks.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-6 py-4 font-medium transition duration-300 sm:px-8 ${
                    isActive
                      ? "text-[#D4AF37]"
                      : "text-white hover:text-[#D4AF37]"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            <div className="px-6 pb-6 pt-2 sm:px-8">
              <button className="w-full rounded-full bg-[#D4AF37] py-3 font-semibold text-black transition-all duration-300 hover:scale-[1.02]">
                Book Consultation
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;