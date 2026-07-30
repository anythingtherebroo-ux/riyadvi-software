import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const services = [
  "Web Development",
  "App Development",
  "UI/UX Design",
  "Digital Marketing",
];

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "About", path: "/about" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

const socialLinks = [
  {
    icon: FaFacebookF,
    href: "https://facebook.com",
    label: "Facebook",
  },
  {
    icon: FaInstagram,
    href: "https://instagram.com",
    label: "Instagram",
  },
  {
    icon: FaLinkedinIn,
    href: "https://linkedin.com",
    label: "LinkedIn",
  },
];

export default function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#080808] text-white">
      {/* Top Gold Glowing Accent Line */}
      <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent" />

      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute left-0 top-0 h-80 w-80 rounded-full bg-[#d4af37]/5 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#d4af37]/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-14">
          {/* Column 1: Company Profile */}
          <div>
            <Link to="/" className="group flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#d4af37] font-poppins text-xl font-extrabold text-black shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-transform duration-300 group-hover:scale-105">
                R
              </div>

              <div>
                <h2 className="font-poppins text-xl font-bold tracking-tight text-white">
                  Riyadvi
                </h2>
                <p className="text-[10px] uppercase tracking-widest text-[#d4af37]">
                  Software Technologies
                </p>
              </div>
            </Link>

            <p className="mt-6 text-sm leading-relaxed text-gray-400">
              We build premium software solutions, websites, mobile apps and
              digital experiences that help businesses innovate and grow.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/[0.03] text-gray-300 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-[#d4af37] hover:bg-[#d4af37] hover:text-black hover:shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="mb-6 font-poppins text-base font-bold uppercase tracking-wider text-white">
              Quick Links
            </h3>

            <ul className="space-y-3 font-medium text-sm">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="inline-block text-gray-400 transition-all duration-300 hover:translate-x-1.5 hover:text-[#d4af37]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="mb-6 font-poppins text-base font-bold uppercase tracking-wider text-white">
              Services
            </h3>

            <ul className="space-y-3 font-medium text-sm text-gray-400">
              {services.map((service) => (
                <li key={service} className="transition-colors hover:text-white">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div>
            <h3 className="mb-6 font-poppins text-base font-bold uppercase tracking-wider text-white">
              Contact
            </h3>

            <div className="space-y-4 text-sm text-gray-400">
              <div className="flex items-start gap-3">
                <Mail size={18} className="mt-0.5 shrink-0 text-[#d4af37]" />
                <a
                  href="mailto:contact@riyadvi.com"
                  className="transition hover:text-white"
                >
                  contact@riyadvi.com
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5 shrink-0 text-[#d4af37]" />
                <a
                  href="tel:+919876543210"
                  className="transition hover:text-white"
                >
                  +91 XXXXX XXXXX
                </a>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-[#d4af37]" />
                <span>Tamil Nadu, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-center text-xs text-gray-500 sm:text-left">
            © {new Date().getFullYear()} Riyadvi Software Technologies. All
            Rights Reserved.
          </p>

          <button
            onClick={scrollTop}
            className="group inline-flex items-center gap-2 rounded-full border border-[#d4af37]/30 bg-white/[0.02] px-5 py-2.5 text-xs font-semibold text-[#d4af37] backdrop-blur-md transition-all duration-300 hover:border-[#d4af37] hover:bg-[#d4af37] hover:text-black hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]"
          >
            <span>Back to Top</span>
            <ArrowUp
              size={14}
              className="transition-transform duration-300 group-hover:-translate-y-1"
            />
          </button>
        </div>
      </div>
    </footer>
  );
}