import {
  FaStar,
  FaTrophy,
  FaStore,
  FaRupeeSign,
  FaTruck,
  FaBars,
  FaTimes,
  FaWhatsapp,
  FaPhoneAlt,
  FaChevronDown,
} from "react-icons/fa";
import logo from "../../assets/logo/aks-logo.png";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import {
  FaMedal,
  FaCrown,
  FaShieldAlt,
  FaPalette,
  FaFire,
  FaBoxOpen,
  FaUsers,
  FaGift,
} from "react-icons/fa";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  const navLink =
    "relative text-white font-medium text-[15px] whitespace-nowrap hover:text-yellow-400 transition duration-300 after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-[2px] after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full";

  const active =
    "text-yellow-400 after:w-full after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:bg-yellow-400";

  // Shared classNames for the redesigned desktop dropdown panel + items
  const dropdownPanel =
    "absolute left-0 top-10 w-72 rounded-2xl border border-yellow-500/25 bg-gradient-to-b from-[#0B1F3A] to-[#06152E] shadow-2xl shadow-black/60 opacity-0 invisible -translate-y-2 scale-95 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:scale-100 transition-all duration-300 ease-out z-50 overflow-hidden";

  const dropdownItem =
    "flex items-center gap-3 px-5 py-3 hover:bg-yellow-400/10 transition-colors duration-200 group/item";

  // Icon style updated to match reference: plain icon, no background box, larger size
  const dropdownIconWrap =
    "flex items-center justify-center w-5 h-5 shrink-0 text-lg group-hover/item:scale-110 transition-transform duration-200";

  // Products list data (desktop dropdown + mobile accordion share this)
  // All icons use gold/yellow to match the reference design.
  
  // Categories list data (desktop dropdown + mobile accordion share this)
  // Icons matched to reference screenshot: Wooden/Metal/Sports Cups = trophy,
  // Acrylic/Medals = medal, Glass/Shields = shield, Fiber = people/group,
  // Mementos = gift. All icons use gold/yellow to match the reference design.
  const categoryLinks = [
  { to: "/products?category=Wooden", label: "Wooden Trophy", icon: <FaTrophy className="text-yellow-400" /> },
  { to: "/products?category=Acrylic", label: "Acrylic Trophy", icon: <FaMedal className="text-yellow-400" /> },
  { to: "/products?category=Metal", label: "Metal Trophy", icon: <FaTrophy className="text-yellow-400" /> },
  { to: "/products?category=Glass", label: "Glass Trophy", icon: <FaShieldAlt className="text-yellow-400" /> },
  { to: "/products?category=Fiber", label: "Fiber Trophy", icon: <FaUsers className="text-yellow-400" /> },
  { to: "/products?category=Cup", label: "Sports Cups", icon: <FaTrophy className="text-yellow-400" /> },
  { to: "/products?category=Shield", label: "Shields", icon: <FaShieldAlt className="text-yellow-400" /> },
  { to: "/products?category=Medals", label: "Medals", icon: <FaMedal className="text-yellow-400" /> },
  { to: "/products?category=Mementos", label: "Mementos", icon: <FaGift className="text-yellow-400" /> },
];

  // Marquee content repeated so the scroll loop looks seamless
  const MarqueeContent = () => (
    <div className="flex items-center gap-3 px-3 shrink-0">
      <div className="flex items-center gap-1.5">
        <FaStar className="text-[#F4B400] text-[10px]" />
        <span className="font-semibold text-[#F4B400] text-[12px]">
          AKS SMALL TROPHY HOUSE
        </span>
        <span className="text-white/70 text-[12px]">
          – Trusted Trophy Manufacturer in Maharashtra
        </span>
      </div>
      <span className="text-[#F4B400]/50 text-[11px]">|</span>
      <div className="flex items-center gap-1 text-[12px]">
        <FaTrophy className="text-[#F4B400] text-[10px]" />
        <span>800+ Designs</span>
      </div>
      <span className="text-[#F4B400]/50 text-[11px]">|</span>
      <div className="flex items-center gap-1 text-[12px]">
        <FaStore className="text-[#F4B400] text-[10px]" />
        <span>Wholesale &amp; Retail</span>
      </div>
      <span className="text-[#F4B400]/50 text-[11px]">|</span>
      <div className="flex items-center gap-1 text-[12px]">
        <FaRupeeSign className="text-[#F4B400] text-[10px]" />
        <span>Prices: ₹50 – ₹50,000</span>
      </div>
      <span className="text-[#F4B400]/50 text-[11px]">|</span>
      <div className="flex items-center gap-1 text-[12px]">
        <FaTruck className="text-[#F4B400] text-[10px]" />
        <span>Delivery All Maharashtra</span>
      </div>
    </div>
  );

  return (
    <>
      {/* marquee keyframes — scoped inline so no extra config/file is needed */}
      <style>{`
        @keyframes aks-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .aks-marquee-track {
          animation: aks-marquee 18s linear infinite;
        }
        .aks-marquee-track-desktop {
          animation: aks-marquee 28s linear infinite;
        }
        .aks-marquee-wrapper:hover .aks-marquee-track {
          animation-play-state: paused;
        }
        @keyframes aks-accordion-in {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .aks-accordion-item {
          animation: aks-accordion-in 0.25s ease-out forwards;
        }
      `}</style>

      {/* ================= TOP BAR — DESKTOP (fixed/sticky at the very top) ================= */}
      <div className="hidden lg:flex items-center fixed top-0 left-0 w-full z-[70] h-9 bg-[#0B2C5D] border-b border-[#F4B400]/40 text-white overflow-hidden">
        <div className="flex w-max aks-marquee-track aks-marquee-track-desktop">
          <MarqueeContent />
          <MarqueeContent />
        </div>
      </div>

      {/* ================= TOP BAR — MOBILE / TABLET (fixed/sticky marquee) ================= */}
      <div className="lg:hidden flex items-center fixed top-0 left-0 w-full z-[70] h-8 bg-[#0B2C5D] border-b border-[#F4B400]/40 text-white overflow-hidden">
        <div className="flex w-max aks-marquee-track">
          <MarqueeContent />
          <MarqueeContent />
        </div>
      </div>

      {/* ================= MAIN NAV ================= */}
      {/* lg:top-9 pushes the navbar below the fixed desktop top bar (h-9 = 36px) so it docks right under it */}
<nav className="fixed top-8 lg:top-9 left-0 w-full z-[60] bg-[#0B1F3A]">        {/* max-w-7xl + mx-auto keeps content centered and bounded
            so nothing stretches edge-to-edge on wide screens */}
        <div className="w-full pl-0 pr-3 sm:pr-5 lg:pr-8">
          <div className="flex items-center justify-between h-[68px] sm:h-[78px] lg:h-[88px] gap-3">
            {/* ---------- Logo ---------- */}
            <Link
              to="/"
              className="flex items-center justify-center lg:justify-start gap-2 flex-1"
            >
              {/* Logo */}
              <img
                src={logo}
                alt="AKS Trophy House"
                className="h-16 w-16 sm:h-20 sm:w-20 lg:h-28 lg:w-28 object-contain shrink-0"
              />

              {/* Text */}
              <div className="min-w-0">
                <h1 className="text-[18px] sm:text-2xl lg:text-3xl font-bold leading-tight whitespace-nowrap">
                  <span className="text-white">AKS </span>
                  <span className="text-yellow-400"> Small Trophy</span>
                </h1>

                <div className="flex items-center gap-1 mt-1">
                  <span className="h-[1px] w-5 bg-yellow-500"></span>

                  <p
                    className="text-center uppercase font-semibold tracking-[4px] text-[10px] sm:text-xs text-yellow-300"
                    style={{ fontFamily: "Cinzel, serif" }}
                  >
                    House
                  </p>

                  <span className="h-[1px] w-5 bg-yellow-500"></span>
                </div>
              </div>
            </Link>
            {/* ---------- Desktop Menu ---------- */}
            <div className="hidden lg:flex items-center gap-5 xl:gap-6 ml-auto">
              <NavLink
                to="/"
                className={({ isActive }) => `${navLink} ${isActive ? active : ""}`}
              >
                Home
              </NavLink>

              <NavLink
                to="/about"
                className={({ isActive }) => `${navLink} ${isActive ? active : ""}`}
              >
                About Us
              </NavLink>

              {/* Products dropdown */}
              <div className="group relative">
  {/* Products Page Link */}
  <Link
    to="/products"
    className="flex items-center gap-1 text-white hover:text-yellow-400 transition font-medium"
  >
    Products
    <FaChevronDown className="text-xs transition-transform duration-300 group-hover:rotate-180" />
  </Link>

  {/* Dropdown */}
 <div className={`${dropdownPanel} max-h-[26rem] overflow-y-auto`}>
                  {/* gold accent line on top */}
                  <div className="h-[3px] w-full bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 sticky top-0" />

                 {categoryLinks.map((item) => (
  <Link key={item.label} to={item.to} className={dropdownItem}>
    <span className={dropdownIconWrap}>{item.icon}</span>
    <span className="text-white text-[14px] font-medium group-hover/item:text-yellow-300 transition-colors">
      {item.label}
    </span>
  </Link>
))}
                </div>
</div>
             


              <NavLink
                to="/faq"
                className={({ isActive }) => `${navLink} ${isActive ? active : ""}`}
              >
                FAQ
              </NavLink>

              <NavLink
                to="/contact"
                className={({ isActive }) => `${navLink} ${isActive ? active : ""}`}
              >
                Contact
              </NavLink>
            </div>

            {/* ---------- Right Buttons (desktop) ---------- */}
            <div className="hidden lg:flex items-center gap-2.5 xl:gap-3 shrink-0">
              <Link
                to="/contact"
                className="flex items-center gap-2 px-5 xl:px-6 py-2.5 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-[#06152E] font-bold shadow-lg hover:scale-105 hover:shadow-yellow-500/30 transition text-[13px] xl:text-[14px] whitespace-nowrap"
              >
                <FaPhoneAlt className="shrink-0" />
                Get Quote
              </Link>

              <a
                href="https://wa.me/9307623168"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 xl:px-6 py-2.5 rounded-full bg-green-600 text-white font-semibold shadow-lg hover:bg-green-700 hover:scale-105 transition text-[13px] xl:text-[14px] whitespace-nowrap"
              >
                <FaWhatsapp size={17} className="shrink-0" />
                WhatsApp
              </a>
            </div>

            {/* ---------- Mobile Hamburger (attractive gold-ring button, pinned right) ---------- */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              className="lg:hidden relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-yellow-500/70 text-yellow-400 hover:bg-yellow-500/10 hover:border-yellow-400 active:scale-90 transition-all duration-300 shrink-0"
            >
              <span
                className={`absolute transition-all duration-300 ${
                  mobileOpen ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"
                }`}
              >
                <FaBars size={18} />
              </span>
              <span
                className={`absolute transition-all duration-300 ${
                  mobileOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"
                }`}
              >
                <FaTimes size={18} />
              </span>
            </button>
          </div>
        </div>

        {/* ================= MOBILE MENU — all links & accordions centered ================= */}
        <div
          className={`lg:hidden bg-[#06152E] overflow-hidden transition-all duration-500 ease-in-out border-t border-yellow-500/10 ${
            mobileOpen ? "max-h-[85vh] overflow-y-auto" : "max-h-0"
          }`}
        >
          <div className="flex flex-col items-center p-5 sm:p-6 space-y-1">
            <NavLink
              to="/"
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `w-full text-center py-3 px-2 rounded-lg text-[16px] font-medium transition ${
                  isActive ? "text-yellow-400 bg-white/5" : "text-white hover:bg-white/5"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `w-full text-center py-3 px-2 rounded-lg text-[16px] font-medium transition ${
                  isActive ? "text-yellow-400 bg-white/5" : "text-white hover:bg-white/5"
                }`
              }
            >
              About Us
            </NavLink>


            {/* Mobile Products accordion — themed card with icons */}
          <div className="w-full rounded-xl overflow-hidden border border-yellow-500/15 bg-white/[0.02]">

  {/* HEADER */}
  <button
    onClick={() => setMobileProductsOpen((prev) => !prev)}
    className="w-full flex items-center justify-between py-3 px-4 text-[16px] font-medium text-white hover:bg-white/5 transition"
  >
    <span className="flex items-center gap-2">
      <FaBoxOpen className="text-yellow-400 text-sm" />
      Products
    </span>

    <FaChevronDown
      className={`text-yellow-400 transition-transform duration-300 ${
        mobileProductsOpen ? "rotate-180" : ""
      }`}
    />
  </button>

  {/* DROPDOWN */}
  <div
    className={`overflow-y-auto transition-all duration-300 ${
      mobileProductsOpen ? "max-h-[380px]" : "max-h-0"
    }`}
  >
    <div className="flex flex-col px-2 pb-2 gap-1 border-t border-yellow-500/10">

      {/* ALL PRODUCTS */}
      <Link
        to="/products"
        onClick={() => {
          setMobileProductsOpen(false);
          setMobileOpen(false); // navbar close पण कर
        }}
        className="flex items-center gap-3 py-2.5 px-3 rounded-lg text-yellow-300 hover:bg-yellow-400/10 text-[14px]"
      >
        <FaBoxOpen className="text-yellow-400 text-lg" />
        View All Products
      </Link>

      {/* CATEGORY LINKS */}
     {categoryLinks.map((item) => (
  <Link
    key={item.label}
    to={item.to}
    onClick={() => {
      setMobileProductsOpen(false);
      setMobileOpen(false);
    }}
    className="flex items-center gap-3 py-2.5 px-3 rounded-lg text-gray-200 hover:bg-yellow-400/10 hover:text-yellow-300 text-[14px]"
  >
    <span className="text-lg">{item.icon}</span>
    {item.label}
  </Link>
))}

    </div>
  </div>
</div>

            <NavLink
              to="/faq"
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `w-full text-center py-3 px-2 rounded-lg text-[16px] font-medium transition ${
                  isActive ? "text-yellow-400 bg-white/5" : "text-white hover:bg-white/5"
                }`
              }
            >
              FAQ
            </NavLink>

            <NavLink
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `w-full text-center py-3 px-2 rounded-lg text-[16px] font-medium transition ${
                  isActive ? "text-yellow-400 bg-white/5" : "text-white hover:bg-white/5"
                }`
              }
            >
              Contact
            </NavLink>

            <div className="flex flex-col gap-3 pt-3 w-full">
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-[#06152E] text-center py-3.5 rounded-full font-bold shadow-lg active:scale-95 transition"
              >
                <FaPhoneAlt />
                Get Quote
              </Link>

              <a
                href="https://wa.me/9307623168"
                target="_blank"
                rel="noreferrer"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 bg-green-600 text-white text-center py-3.5 rounded-full font-bold shadow-lg active:scale-95 transition"
              >
                <FaWhatsapp size={20} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
