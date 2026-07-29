import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "./navLinks";
import Button from "../Common/Button";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-[#080808]/90 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

          {/* Logo */}

          <Link
            to="/"
            className="flex items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#d4af37] font-bold text-black">
              R
            </div>

            <div>

              <h2 className="font-bold text-white text-xl">

                Riyadvi

              </h2>

              <p className="text-xs tracking-widest text-[#d4af37] uppercase">

                Software Technologies

              </p>

            </div>
          </Link>

          {/* Desktop */}

          <div className="hidden items-center gap-8 lg:flex">

            {navLinks.map((item) => (

              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `relative text-sm font-medium transition ${
                    isActive
                      ? "text-[#d4af37]"
                      : "text-gray-300 hover:text-[#d4af37]"
                  }`
                }
              >
                {item.name}
              </NavLink>

            ))}

          </div>

          <div className="hidden lg:block">

            <Button>

              Book Consultation

            </Button>

          </div>

          {/* Mobile */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border border-white/10 p-2 text-white lg:hidden"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <AnimatePresence>

        {menuOpen && (

          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: .35 }}
            className="fixed inset-0 z-[60] bg-[#080808]"
          >
            <div className="flex h-20 items-center justify-between border-b border-white/10 px-6">

              <h2 className="text-2xl font-bold text-[#d4af37]">

                Menu

              </h2>

              <button
                onClick={() => setMenuOpen(false)}
                className="rounded-lg border border-white/10 p-2 text-white"
              >
                <X />
              </button>

            </div>

            <div className="flex flex-col px-6 py-10">

              {navLinks.map((item, index) => (

                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-4 border-b border-white/5 py-5 text-xl ${
                      isActive
                        ? "text-[#d4af37]"
                        : "text-white"
                    }`
                  }
                >

                  <span className="text-gray-600">

                    {String(index + 1).padStart(2, "0")}

                  </span>

                  {item.name}

                </NavLink>

              ))}

              <div className="mt-10">

                <Button className="w-full">

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