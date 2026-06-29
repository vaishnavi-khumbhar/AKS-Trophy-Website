import { Link } from "react-router-dom";
import { ChevronRight, Phone, Mail, MapPin, Clock } from "lucide-react";
import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

import logo from "../../assets/logo/aks-logo.png";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Categories", to: "/categories" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact Us", to: "/contact" },
];

const categories = [
  "Wooden Trophies",
  "Acrylic Trophies",
  "Metal Trophies",
  "Glass Trophies",
  "Medals & Cups",
  "Shields & Awards",
];

const businessTypes = [
  "Manufacturer",
  "Supplier",
  "Wholesale",
  "Retail",
  "Customized Orders",
];

const socials = [
  { href: "https://facebook.com", icon: <FaFacebookF size={15} />, bg: "bg-[#1877F2]" },
  { href: "https://instagram.com", icon: <FaInstagram size={15} />, bg: "bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888]" },
  { href: "https://wa.me/9307623168", icon: <FaWhatsapp size={15} />, bg: "bg-[#25D366]" },
  { href: "https://youtube.com", icon: <FaYoutube size={15} />, bg: "bg-[#FF0000]" },
];

const SectionHeading = ({ children }) => (
  <div className="mb-5">
    <h3
      className="text-sm md:text-base font-bold text-[#D4AF37] uppercase tracking-widest"
      style={{ fontFamily: "Cormorant Garamond, serif" }}
    >
      {children}
    </h3>
    <div className="mt-2 flex items-center gap-1.5 justify-center sm:justify-start">
      <span className="h-px w-8 bg-gradient-to-r from-[#D4AF37] to-transparent" />
      <span className="w-1 h-1 rounded-full bg-[#D4AF37]/60" />
    </div>
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-[#081A3B] text-white pt-14 md:pt-16 pb-8 border-t border-[#D4AF37]/20 relative overflow-hidden">

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "radial-gradient(#D4AF37 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-10 gap-x-8">

          {/* ── BRAND ── */}
          <div className="sm:col-span-2 lg:col-span-1 flex flex-col items-center sm:items-start text-center sm:text-left">

            <div className="flex items-center gap-3 mb-3">
              <div
                className="p-1.5 rounded-xl"
                style={{ border: "2px solid rgba(212,175,55,0.35)" }}
              >
                <img
                  src={logo}
                  alt="AKS Trophy"
                  className="h-16 w-16 object-contain"
                />
              </div>
              <div className="leading-tight">
                <p className="text-white font-bold text-xl leading-6">
                  AKS <span className="text-[#D4AF37]">Trophy</span>
                </p>
                <p className="text-[#D4AF37] font-bold text-xl leading-6">House</p>
              </div>
            </div>

            <p className="text-gray-300 text-sm leading-7 mt-2 max-w-[240px]">
              Leading Trophy Manufacturer in Maharashtra with 800+ unique
              designs. Wholesale & Retail available.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-2.5 mt-5 justify-center sm:justify-start">
             {socials.map((s, i) => (
  <a
    key={i}
    href={s.href}
    target="_blank"
    rel="noopener noreferrer"
    className={`${s.bg} text-white w-9 h-9 rounded-full flex items-center justify-center hover:scale-110 transition-transform flex-shrink-0`}
    style={{ border: "1.5px solid rgba(212,175,55,0.3)" }}
  >
    {s.icon}
  </a>
))}
            </div>

            {/* WhatsApp button */}
            
            <a
  href="https://wa.me/9307623168"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-5 inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2.5 rounded-full font-semibold hover:bg-[#1ebe5a] transition text-sm shadow-lg"
>
  <FaWhatsapp size={16} />
  WhatsApp Us
</a>
          </div>

          {/* ── QUICK LINKS ── */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <SectionHeading>Quick Links</SectionHeading>
            <ul className="space-y-2.5 w-full">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.to}
                    className="group inline-flex items-center gap-2 text-gray-300 hover:text-[#D4AF37] transition text-sm justify-center sm:justify-start w-full"
                  >
                    <ChevronRight size={13} className="text-[#D4AF37] flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── CATEGORIES ── */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <SectionHeading>Categories</SectionHeading>
            <ul className="space-y-2.5 w-full">
              {categories.map((item, i) => (
                <li key={i}>
                  <Link
                    to="/products"
                    className="group inline-flex items-center gap-2 text-gray-300 hover:text-[#D4AF37] transition text-sm justify-center sm:justify-start w-full"
                  >
                    <ChevronRight size={13} className="text-[#D4AF37] flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── CONTACT ── */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <SectionHeading>Contact Us</SectionHeading>
            <ul className="space-y-4 w-full">

             <li>
  <a
    href="tel:+9307623168"
    className="inline-flex items-center gap-3 text-gray-300 hover:text-[#D4AF37] transition text-sm group"
  >
    <span className="w-8 h-8 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center shrink-0 group-hover:bg-[#D4AF37]/20 transition">
      <Phone size={14} className="text-[#D4AF37]" />
    </span>
    +91 9307623168
  </a>
</li>
<li>
  <a
    href="tel:+9307623168"
    className="inline-flex items-center gap-3 text-gray-300 hover:text-[#D4AF37] transition text-sm group"
  >
    <span className="w-8 h-8 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center shrink-0 group-hover:bg-[#D4AF37]/20 transition">
      <Phone size={14} className="text-[#D4AF37]" />
    </span>
    +91 12345 67890
  </a>
</li>

              <li className="inline-flex items-start gap-3 text-gray-300 text-sm">
                <span className="w-8 h-8 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={14} className="text-[#D4AF37]" />
                </span>
                <span className="text-left">
                  Shop No. 12, Main Road,<br />
                  Pune, Maharashtra – 411001
                </span>
              </li>

              <li className="inline-flex items-center gap-3 text-gray-300 text-sm">
                <span className="w-8 h-8 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center shrink-0">
                  <Clock size={14} className="text-[#D4AF37]" />
                </span>
                Mon – Sat: 9:00 AM – 8:00 PM
              </li>

            </ul>
          </div>

          {/* ── BUSINESS TYPE ── */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <SectionHeading>Business Type</SectionHeading>
            <ul className="space-y-2.5 mb-6 w-full">
              {businessTypes.map((item, i) => (
                <li
                  key={i}
                  className="inline-flex items-center gap-2 text-gray-300 text-sm justify-center sm:justify-start w-full"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} AKS Trophy House. All Rights Reserved.
          </p>
          <p className="text-gray-500 text-xs">
            Designed with excellence to celebrate every achievement.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;