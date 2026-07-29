import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

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
  },
  {
    icon: FaInstagram,
    href: "https://instagram.com",
  },
  {
    icon: FaLinkedinIn,
    href: "https://linkedin.com",
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
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#080808]">
      {/* Background */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-[#d4af37]/5 blur-[150px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#d4af37]/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-14 lg:grid-cols-4">
          {/* Company */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#d4af37] text-xl font-bold text-black">
                R
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">
                  Riyadvi
                </h2>
                <p className="text-xs uppercase tracking-[0.25em] text-[#d4af37]">
                  Software Technologies
                </p>
              </div>
            </div>

            <p className="mt-6 leading-8 text-gray-400">
              We build premium software solutions, websites,
              mobile apps and digital experiences that help
              businesses grow.
            </p>

            <div className="mt-8 flex gap-4">
              {socialLinks.map(({ icon: Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-gray-300 transition hover:border-[#d4af37] hover:bg-[#d4af37] hover:text-black"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">
              Quick Links
            </h3>

            <div className="space-y-4">
              {quickLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block text-gray-400 transition hover:translate-x-1 hover:text-[#d4af37]"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">
              Services
            </h3>

            <div className="space-y-4">
              {services.map((service) => (
                <p key={service} className="text-gray-400">
                  {service}
                </p>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">
              Contact
            </h3>

            <div className="space-y-5">
              <div className="flex gap-3">
                <Mail size={18} className="mt-1 text-[#d4af37]" />
                <span className="text-gray-400">
                  contact@riyadvi.com
                </span>
              </div>

              <div className="flex gap-3">
                <Phone size={18} className="mt-1 text-[#d4af37]" />
                <span className="text-gray-400">
                  +91 XXXXX XXXXX
                </span>
              </div>

              <div className="flex gap-3">
                <MapPin size={18} className="mt-1 text-[#d4af37]" />
                <span className="text-gray-400">
                  Tamil Nadu, India
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 lg:flex-row">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Riyadvi Software Technologies.
            All Rights Reserved.
          </p>

          <button
            onClick={scrollTop}
            className="flex items-center gap-2 rounded-full border border-[#d4af37]/30 px-5 py-3 text-[#d4af37] transition hover:bg-[#d4af37] hover:text-black"
          >
            Back to Top
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}