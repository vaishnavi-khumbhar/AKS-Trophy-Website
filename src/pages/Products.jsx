import { useState, useEffect } from "react";
import { ArrowRight, MessageCircle, Phone, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { FaIndianRupeeSign } from "react-icons/fa6";

import {
  Trophy,
  Award,
  Medal,
  Star,
  Sparkles,
  Truck,
  Gem,
  Shield,
  Users,
  Gift,
  Layers,
  Wand2,
} from "lucide-react";

import {
  PenTool,
  BadgeCheck,
  Palette,
  PackageCheck,
} from "lucide-react";

import { Link, useSearchParams } from "react-router-dom";

import products from "../data/products";

// ---------------------------------------------------------------------------
// CATEGORY IMAGES
// ---------------------------------------------------------------------------
import woodenImg from "../assets/images/categories/wooden.jpg";
import acrylicImg from "../assets/images/categories/acrylic.jpg";
import metalImg from "../assets/images/categories/metal1.png";
import glassImg from "../assets/images/categories/glass.jpeg";
import fiberImg from "../assets/images/categories/fiber.jpg";
import basedImg from "../assets/images/categories/based.jpg";
import trophyImg from "../assets/images/categories/trophy.jpg";
import shieldImg from "../assets/images/categories/shield.jpg";
import medalsImg from "../assets/images/categories/goldmedal.jpg";
import cupImg from "../assets/images/categories/cup.avif";
import mementosImg from "../assets/images/categories/mementos.jpg";

import heroImg from "../assets/Remove.png";

// ---------------------------------------------------------------------------
// Static data
// ---------------------------------------------------------------------------
const categoryCards = [
  { id: 1, title: "Wooden", filterKey: "Wooden", icon: Trophy, image: woodenImg },
  { id: 2, title: "Acrylic", filterKey: "Acrylic", icon: Gem, image: acrylicImg },
  { id: 3, title: "Metal", filterKey: "Metal", icon: Award, image: metalImg },
  { id: 4, title: "Glass", filterKey: "Glass", icon: Sparkles, image: glassImg },
  { id: 5, title: "Fiber", filterKey: "Fiber", icon: Users, image: fiberImg },
  { id: 6, title: "Based", filterKey: "Based", icon: Layers, image: basedImg },
  { id: 7, title: "Trophy", filterKey: "Trophy", icon: Trophy, image: trophyImg },
  { id: 8, title: "Shield", filterKey: "Shield", icon: Shield, image: shieldImg },
  { id: 9, title: "Medals", filterKey: "Medals", icon: Medal, image: medalsImg },
  { id: 10, title: "Cup", filterKey: "Cup", icon: Trophy, image: cupImg },
  { id: 11, title: "Mementos", filterKey: "Mementos", icon: Gift, image: mementosImg },
];

const filterTabs = ["All", ...categoryCards.map((c) => c.filterKey), "Customized"];

const heroStats = [
  { icon: Trophy, value: "800+", label: "Unique Trophy Designs" },
  { icon: FaIndianRupeeSign, value: "₹50 – ₹50,000", label: "Price Range" },
  { icon: Truck, value: "All Maharashtra", label: "Delivery Available" },
  { icon: Star, value: "Wholesale & Retail", label: "Both Available" },
];

const featureCards = [
  { title: "Logo Engraving", icon: PenTool },
  { title: "Name Printing", icon: BadgeCheck },
  { title: "Custom Design Options", icon: Palette },
  { title: "Bulk Order Support", icon: PackageCheck },
];

const getPlaceholderMeta = (id) => {
  const n = Number(id) || 0;
  const badge = n % 5 === 0 ? "Best Seller" : n % 7 === 0 ? "New" : null;
  const price = 50 + (n % 20) * 250;
  return { badge, price };
};

const handleWhatsAppEnquiry = (productName = "Hello, I want to enquire about your products") => {
  const message = encodeURIComponent(
    `Hi AKS Trophy, I am interested in ${productName}`
  );

  window.open(
    `https://wa.me/919307623168?text=${message}`,
    "_blank"
  );
};

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filter, setFilter] = useState(searchParams.get("category") || "All");

  // Keep filter in sync if the URL's ?category= changes (e.g. via Link clicks
  // from the homepage, header menu, or browser back/forward navigation)
  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat && cat !== filter) {
      setFilter(cat);
    }
  }, [searchParams]);

  // When user manually clicks a filter tab/card, also reflect it in the URL
  // so the page is shareable/bookmarkable at the filtered state
  const updateFilter = (value) => {
    setFilter(value);
    if (value === "All") {
      setSearchParams({});
    } else {
      setSearchParams({ category: value });
    }
  };

  // Filter logic: this matches EVERY product in products.js whose `category`
  // equals the selected filter. If products.js has 3 "Wooden" items, all 3
  // will appear here. This list is NOT limited per category — it shows
  // however many items exist in products.js for that category.
  const filteredProducts =
    filter === "All"
      ? products
      : products.filter((item) => item.category === filter);

  const featured = filteredProducts.slice(0, 12);
  const remaining = filteredProducts.slice(12);

  return (
    <>
      {/* ===================================================================
          HERO BANNER
      =================================================================== */}
      <section className="relative bg-gradient-to-br from-[#081A3B] via-[#0B2C5D] to-[#081A3B] overflow-hidden pt-30 sm:pt-28 lg:pt-[130px] pb-12 sm:pb-20 lg:pb-24">
        <div className="absolute top-0 right-0 w-[16rem] sm:w-[28rem] h-[16rem] sm:h-[28rem] bg-[#D4AF37]/20 blur-[100px] sm:blur-[160px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-40 sm:w-72 h-40 sm:h-72 bg-[#D4AF37]/10 blur-[100px] sm:blur-[140px] rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-5 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-6 items-center">
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] text-xs sm:text-sm font-semibold">
                AKS Small Trophy House
              </span>

              <h1 className="mt-5 sm:mt-2 text-2xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight">
                800+ Premium{" "}
                <span className="text-[#D4AF37]">Trophy Designs</span>
              </h1>

              <div className="flex justify-center items-center gap-3 mt-6">
                <div className="h-[2px] w-14 bg-gradient-to-r from-transparent to-[#FFD700]" />
                <div className="w-2 h-2 rounded-full bg-[#FFD700]" />
                <div className="w-2 h-2 rounded-full bg-[#FFD700]/50" />
                <div className="w-2 h-2 rounded-full bg-[#FFD700]" />
                <div className="h-[2px] w-14 bg-gradient-to-l from-transparent to-[#FFD700]" />
              </div>

              <div
                className="mt-5 sm:mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 sm:gap-y-3 text-white/90 text-xs sm:text-sm md:text-base font-semibold"
              >
                {[
                  "Wooden",
                  "Acrylic",
                  "Metal",
                  "Glass",
                  "Fiber",
                  "Shields",
                  "Medals",
                  "Cups",
                  "Mementos",
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <span className="px-2 sm:px-3 hover:text-[#FFD54A] transition-colors duration-300 cursor-default">
                      {item}
                    </span>

                    {index !== 8 && (
                      <span className="h-4 sm:h-5 w-[2px] bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent opacity-70"></span>
                    )}
                  </div>
                ))}
              </div>

              <p className="mt-4 sm:mt-5 text-gray-300 max-w-xl mx-auto lg:mx-0 leading-7 text-sm sm:text-base">
                AKS Small Trophy House is Maharashtra&apos;s trusted name for
                premium trophies and awards. With 800+ unique designs across
                every material, fully customized options, and prices starting
                at just ₹50, we serve schools, corporates, and sports events
                with both wholesale and retail orders — delivered anywhere in
                Maharashtra.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-6 sm:mt-7">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D4AF37] to-yellow-500 text-[#081A3B] px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-bold text-xs sm:text-sm shadow-lg shadow-[#D4AF37]/30 hover:scale-105 transition"
                >
                  <Phone size={16} />
                  Get Best Quote
                </Link>

                <a
                  href="https://wa.me/919307623168"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold text-xs sm:text-sm shadow-lg hover:bg-green-700 hover:scale-105 transition"
                >
                  <MessageCircle size={16} />
                  WhatsApp Us
                </a>
              </div>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative flex items-center justify-center"
            >
              <div className="absolute w-44 h-44 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-[#D4AF37]/30 rounded-full blur-2xl sm:blur-3xl" />
              <img
                src={heroImg}
                alt="Premium Trophy"
                className="relative z-10 h-[220px] sm:h-[300px] md:h-[340px] lg:h-[400px] object-contain drop-shadow-2xl"
              />
            </motion.div>
          </div>

          {/* GLASSMORPHISM STATS BAR */}
          <div className="mt-10 sm:mt-12 lg:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6">
            {heroStats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-xl border border-white/15 p-3 sm:p-5 text-center shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#D4AF37] hover:shadow-[0_0_30px_rgba(212,175,55,0.35)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10 mx-auto mb-2.5 sm:mb-4 flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F7E27E] shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Icon size={20} className="text-[#081A3B] sm:hidden" />
                    <Icon size={26} className="text-[#081A3B] hidden sm:block" />
                  </div>

                  <h3 className="relative z-10 text-base sm:text-2xl md:text-3xl font-extrabold text-white leading-tight break-words">
                    {stat.value}
                  </h3>

                  <div className="relative z-10 mx-auto my-2 sm:my-3 h-[2px] w-8 sm:w-10 rounded-full bg-[#D4AF37]" />

                  <p className="relative z-10 text-[10px] sm:text-xs md:text-sm text-white/75 leading-relaxed">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================================================
          EXPLORE TROPHY CATEGORIES
      =================================================================== */}
      <section className="relative py-12 sm:py-16 bg-gradient-to-b from-white via-[#FDFCF7] to-[#F8F8F6] overflow-hidden">
        {/* Background Glow */}
        <div className="absolute -top-20 left-0 w-80 h-80 bg-[#FFD700]/10 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#081A3B]/5 rounded-full blur-[140px]"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-5">
          {/* Heading */}
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#081A3B]/5 border border-[#D4AF37]/30 text-[#081A3B] font-semibold text-sm tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#FFD700]"></span>
              Premium Trophy Collection
              <span className="w-2 h-2 rounded-full bg-[#FFD700]"></span>
            </span>

            <h2 className="mt-6 text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              <span className="text-[#081A3B]">Explore Our</span>
              <br />
              <span className="bg-gradient-to-r from-[#FFD700] via-[#F5C542] to-[#D4AF37] bg-clip-text text-transparent">
                Trophy Categories
              </span>
            </h2>

            {/* Premium Divider */}
            <div className="flex justify-center items-center gap-3 mt-7">
              <div className="w-16 sm:w-24 h-[2px] bg-gradient-to-r from-transparent via-[#FFD700] to-transparent"></div>
              <span className="w-3 h-3 rounded-full bg-[#FFD700] shadow-[0_0_15px_#FFD700]"></span>
              <span className="w-2 h-2 rounded-full bg-[#FFD700]/40"></span>
              <span className="w-3 h-3 rounded-full bg-[#FFD700] shadow-[0_0_15px_#FFD700]"></span>
              <div className="w-16 sm:w-24 h-[2px] bg-gradient-to-r from-transparent via-[#FFD700] to-transparent"></div>
            </div>

            <p
              className="mt-7 max-w-4xl mx-auto text-gray-600 text-base sm:text-lg lg:text-xl leading-8 sm:leading-9 font-medium"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Explore our premium collection featuring
              <span className="font-bold text-[#081A3B]"> 11 Trophy Categories </span>
              and
              <span className="font-bold text-[#081A3B]"> 800+ Exclusive Designs</span>.
              Every trophy is crafted with premium finishing and can be fully customized with your
              <span className="font-semibold text-[#081A3B]"> logo, name, engraving, branding,</span>
              making it perfect for schools, colleges, sports tournaments, corporate awards,
              cultural events and special celebrations.
            </p>
          </div>

          {/* ================= FILTER TABS ================= */}
          <div className="relative rounded-[32px] border border-[#D4AF37]/20 bg-white shadow-xl p-6 sm:p-8 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#FFD700] via-[#FFE56A] to-[#FFD700]"></div>
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#FFD700] via-[#FFE56A] to-[#FFD700]"></div>

            <span className="absolute top-[-2px] left-[-2px] w-6 h-6 border-l-[3px] border-t-[3px] border-[#FFD700] rounded-tl-[32px]"></span>
            <span className="absolute top-[-2px] right-[-2px] w-6 h-6 border-r-[3px] border-t-[3px] border-[#FFD700] rounded-tr-[32px]"></span>
            <span className="absolute bottom-[-2px] left-[-2px] w-6 h-6 border-l-[3px] border-b-[3px] border-[#FFD700] rounded-bl-[32px]"></span>
            <span className="absolute bottom-[-2px] right-[-2px] w-6 h-6 border-r-[3px] border-b-[3px] border-[#FFD700] rounded-br-[32px]"></span>

            <div className="flex flex-wrap justify-center gap-3 sm:gap-5">
              {filterTabs.map((item) => (
                <button
                  key={item}
                  onClick={() => updateFilter(item)}
                  className={`group relative overflow-hidden rounded-full px-5 sm:px-7 py-3 text-sm sm:text-base font-bold transition-all duration-500
                  ${
                    filter === item
                      ? "bg-gradient-to-r from-[#081A3B] to-[#0D2F66] text-white border border-[#FFD700] shadow-[0_10px_35px_rgba(212,175,55,.35)]"
                      : "bg-[#F8F8F6] border border-[#D4AF37]/25 text-[#081A3B] hover:bg-[#081A3B] hover:text-white hover:border-[#FFD700] hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(212,175,55,.28)]"
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {filter === item && (
                      <span className="w-2 h-2 rounded-full bg-[#FFD700]"></span>
                    )}
                    {item}
                  </span>
                  <span
                    className={`absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-[#FFD700] to-yellow-300 transition-all duration-500
                    ${filter === item ? "w-full" : "w-0 group-hover:w-full"}`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* ================= PREMIUM CATEGORY CARDS ================= */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 mt-8 sm:mt-10">
            {categoryCards.map((cat) => {
              const Icon = cat.icon;
              const isActive = filter === cat.filterKey;

              return (
                <div
                  key={cat.id}
                  className={`group relative overflow-hidden rounded-[24px] sm:rounded-[30px] border-2 transition-all duration-500
                  ${
                    isActive
                      ? "border-[#D4AF37] bg-gradient-to-b from-[#0B2C5D] to-[#081A3B] shadow-[0_18px_45px_rgba(212,175,55,.35)] -translate-y-1 sm:-translate-y-2"
                      : "border-[#D4AF37]/20 bg-white hover:border-[#D4AF37] hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-[0_18px_45px_rgba(212,175,55,.22)]"
                  }`}
                >
                  {/* Image (click to filter) */}
                  <button
                    type="button"
                    onClick={() => updateFilter(cat.filterKey)}
                    className="relative w-full h-44 sm:h-60 overflow-hidden block"
                  >
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    />
                  </button>

                  {/* Floating icon badge (outside overflow-hidden image button so it's not clipped) */}
                  <div className="relative h-0">
                    <div className="absolute -top-5 sm:-top-6 left-1/2 -translate-x-1/2 z-10">
                      <div
                        className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center shadow-lg border-2 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 ${
                          isActive
                            ? "bg-gradient-to-r from-[#FFD700] to-yellow-400 border-white"
                            : "bg-white border-[#FFD700]"
                        }`}
                      >
                        <Icon size={16} className="text-[#081A3B] sm:hidden" />
                        <Icon size={20} className="text-[#081A3B] hidden sm:block" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-6 sm:pt-8 pb-4 sm:pb-5 px-2.5 sm:px-3 flex flex-col items-center">
                    <h3
                      className={`text-xs sm:text-base font-bold text-center transition ${
                        isActive ? "text-white" : "text-[#081A3B]"
                      }`}
                    >
                      {cat.title}
                    </h3>

                    <div className="mt-2.5 sm:mt-3 w-full">
                      <button
                        type="button"
                        onClick={() => handleWhatsAppEnquiry(`${cat.title} Trophies`)}
                        className="w-full flex items-center justify-center gap-1 text-[10px] sm:text-xs font-bold py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white shadow-md hover:scale-105 transition"
                      >
                        <MessageCircle size={12} />
                        Enquiry
                      </button>
                    </div>
                  </div>

                  {/* Bottom underline */}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] bg-gradient-to-r from-[#FFD700] to-yellow-300 transition-all duration-500 ${
                      isActive ? "w-2/3" : "w-0 group-hover:w-2/3"
                    }`}
                  />
                </div>
              );
            })}

            {/* ================= CUSTOMIZED AWARDS ================= */}
            <div
              onClick={() => updateFilter("Customized")}
              className={`group relative cursor-pointer overflow-hidden rounded-[24px] sm:rounded-[30px] border-2 transition-all duration-500 flex flex-col items-center justify-center p-3.5 sm:p-6
              ${
                filter === "Customized"
                  ? "border-[#D4AF37] bg-gradient-to-b from-[#0B2C5D] to-[#081A3B] shadow-[0_18px_45px_rgba(212,175,55,.35)] -translate-y-2"
                  : "border-[#D4AF37]/30 bg-gradient-to-b from-[#FDFCF8] to-white hover:border-[#D4AF37] hover:-translate-y-2 hover:shadow-[0_18px_45px_rgba(212,175,55,.22)]"
              }`}
            >
              {/* TOP BAR */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#FFD700] via-yellow-300 to-[#FFD700]" />

              {/* BOTTOM BAR */}
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#FFD700] via-yellow-300 to-[#FFD700]" />

              {/* CORNERS */}
              <span className="absolute top-[-2px] left-[-2px] w-5 h-5 border-l-[3px] border-t-[3px] border-[#FFD700] rounded-tl-[30px]" />
              <span className="absolute top-[-2px] right-[-2px] w-5 h-5 border-r-[3px] border-t-[3px] border-[#FFD700] rounded-tr-[30px]" />
              <span className="absolute bottom-[-2px] left-[-2px] w-5 h-5 border-l-[3px] border-b-[3px] border-[#FFD700] rounded-bl-[30px]" />
              <span className="absolute bottom-[-2px] right-[-2px] w-5 h-5 border-r-[3px] border-b-[3px] border-[#FFD700] rounded-br-[30px]" />

              {/* Glow */}
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-[#FFD700]/20 blur-3xl opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* Ghost Text */}
              <div className="absolute right-3 top-2 text-6xl font-black text-[#081A3B]/5 select-none">
                ★
              </div>

              {/* Icon */}
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-[#FFD700]/20 blur-2xl scale-150 group-hover:scale-[2] transition duration-500" />

                <div className="relative w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r from-[#FFD700] to-yellow-400 flex items-center justify-center shadow-lg group-hover:rotate-12 group-hover:scale-110 transition duration-500">
                  <Wand2 size={22} className="text-[#081A3B] sm:hidden" />
                  <Wand2 size={34} className="text-[#081A3B] hidden sm:block" />
                </div>
              </div>

              {/* Dots */}
              <div className="flex justify-center gap-1.5 sm:gap-2 mt-3 sm:mt-6">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#FFD700]" />
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#FFD700]/40" />
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#FFD700]" />
              </div>

              {/* Title */}
              <h3
                className={`mt-2.5 sm:mt-5 text-xs sm:text-lg font-bold text-center transition ${
                  filter === "Customized" ? "text-white" : "text-[#081A3B]"
                }`}
              >
                Customized
                <br />
                Awards
              </h3>

              {/* Description */}
              <p
                className={`hidden sm:block mt-3 text-center text-sm leading-6 px-2 ${
                  filter === "Customized" ? "text-gray-300" : "text-gray-500"
                }`}
              >
                Create a unique trophy with your logo, name,
                branding and premium engraving.
              </p>

              {/* CTA */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleWhatsAppEnquiry("Customized Awards");
                }}
                className="mt-2.5 sm:mt-6 w-full rounded-full bg-gradient-to-r from-green-500 to-green-600 py-1.5 sm:py-3 text-[10px] sm:text-sm font-semibold text-white shadow-lg hover:scale-105 transition duration-300"
              >
                {" "}
                <span className="hidden sm:inline">Design My Trophy</span>
                <span className="sm:hidden">Enquiry</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          FEATURED PRODUCTS
      =================================================================== */}
      <section className="py-8 sm:py-10 lg:py-14 bg-gradient-to-b from-[#F8F8F6] via-white to-[#F8F8F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-5">

          <div className="text-center mb-8 sm:mb-14">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
              <span className="text-[#081A3B]">Featured </span>
              <span className="text-[#FFD700]">Products</span>
            </h2>

            <div className="flex justify-center items-center gap-2 sm:gap-3 mt-4 sm:mt-5">
              <div className="h-[2px] w-8 sm:w-16 bg-[#FFD700]" />
              <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-[#FFD700] shadow-[0_0_12px_#FFD700]" />
              <div className="h-[2px] w-8 sm:w-16 bg-[#FFD700]" />
            </div>
            <p
              className="mt-3 sm:mt-5 max-w-3xl mx-auto px-1 text-gray-600 text-sm sm:text-lg md:text-xl leading-7 sm:leading-8 font-medium"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Discover our premium collection of{" "}
              <span className="font-semibold text-[#0F1E3D]">
                trophies, medals, and awards
              </span>{" "}
              crafted with exceptional quality, elegant finishes, and precision
              engraving to celebrate every achievement with pride.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-6">

            {featured.map((product, index) => {
              const { badge, price } = getPlaceholderMeta(product.id);

              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6 }}
                  className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white border border-[#081A3B]/20 shadow-md sm:shadow-lg hover:border-[#081A3B] hover:shadow-[0_15px_30px_rgba(8,26,59,0.25)] transition-all duration-500"
                >
                  {badge && (
                    <span className="absolute top-2 sm:top-4 left-2 sm:left-4 z-20 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[9px] sm:text-xs font-bold shadow bg-[#081A3B] text-white">
                      {badge}
                    </span>
                  )}

                  <div className="relative h-32 sm:h-52 lg:h-64 bg-gradient-to-b from-[#EAF0F8] to-white flex items-center justify-center overflow-hidden p-2.5 sm:p-5">
                    <div className="absolute top-0 left-0 h-1 w-full bg-[#081A3B]" />
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain transition-all duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-2.5 sm:p-5 text-center">
                    <h3 className="text-xs sm:text-lg lg:text-xl font-bold text-[#081A3B] line-clamp-2 group-hover:opacity-90 transition-colors min-h-[32px] sm:min-h-0">
                      {product.name}
                    </h3>

                    <p className="mt-1.5 sm:mt-3 text-lg sm:text-2xl lg:text-3xl font-extrabold text-[#081A3B]">
                      ₹{price}
                    </p>

                    <span className="text-[9px] sm:text-sm text-gray-500">
                      Starting Price
                    </span>

                    <div className="mx-auto mt-2 sm:mt-4 h-[2px] w-6 sm:w-12 bg-[#081A3B] rounded-full group-hover:w-20 transition-all duration-500"></div>

                    <div className="mt-3 sm:mt-5 flex flex-col sm:flex-row gap-1.5 sm:gap-2">
                      <Link
                        to={`/products/${product.id}`}
                        className="flex-1 inline-flex items-center justify-center rounded-lg sm:rounded-xl border border-[#081A3B] py-1.5 sm:py-2 text-[10px] sm:text-sm font-semibold text-[#081A3B] hover:bg-[#081A3B] hover:text-white transition"
                      >
                        View Details
                      </Link>

                      <a
                        href={`https://wa.me/919307623168?text=${encodeURIComponent(
                          `Hi AKS Trophy, I am interested in ${product.name}`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-1 sm:gap-2 rounded-lg sm:rounded-xl bg-[#081A3B] py-1.5 sm:py-2 text-[10px] sm:text-sm font-bold text-white hover:scale-105 transition"
                      >
                        <MessageCircle size={14} />
                        Enquire
                      </a>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#081A3B] group-hover:w-full transition-all duration-500"></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================================================
          MORE PRODUCTS
      =================================================================== */}
      {remaining.length > 0 && (
        <section className="py-10 sm:py-14 bg-[#F8F8F6]">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-3xl font-bold text-[#081A3B]">
                More <span className="text-[#D4AF37]">Products</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {remaining.map((product, index) => {
                const { badge, price } = getPlaceholderMeta(product.id);
                return (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.04 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition w-full border border-gray-100"
                  >
                    {badge && (
                      <span
                        className={`absolute top-2 sm:top-3 left-2 sm:left-3 z-10 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-[9px] sm:text-[11px] font-semibold shadow ${
                          badge === "Best Seller"
                            ? "bg-gradient-to-r from-[#D4AF37] to-yellow-500 text-[#081A3B]"
                            : "bg-[#081A3B] text-white"
                        }`}
                      >
                        {badge}
                      </span>
                    )}

                    <div className="w-full h-36 sm:h-52 md:h-60 lg:h-64 bg-white flex items-center justify-center p-2.5 sm:p-3">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain transition duration-500 hover:scale-105"
                      />
                    </div>

                    <div className="p-2.5 sm:p-3 flex flex-col gap-1 sm:gap-1.5 items-center">
                      <h3 className="text-xs sm:text-base font-semibold text-[#081A3B] text-center line-clamp-2 min-h-[28px] sm:min-h-0">
                        {product.name}
                      </h3>

                      <p className="text-[#D4AF37] font-bold text-xs sm:text-sm">
                        ₹{price}
                        <span className="text-gray-400 font-normal"> onwards</span>
                      </p>

                      <div className="flex flex-col sm:flex-row gap-1.5 sm:gap-2 w-full mt-1.5 sm:mt-2">
                        <Link
                          to={`/products/${product.id}`}
                          className="flex-1 inline-flex items-center justify-center gap-1 border border-[#081A3B] text-[#081A3B] py-1.5 sm:py-2 rounded-lg text-[10px] sm:text-sm font-semibold hover:bg-[#081A3B] hover:text-white transition"
                        >
                          View Details
                        </Link>
                        <a
                          href={`https://wa.me/919307623168?text=${encodeURIComponent(
                            `Hi AKS Trophy, I am interested in ${product.name}`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-1.5 bg-gradient-to-r from-[#D4AF37] to-yellow-500 text-[#081A3B] py-1.5 sm:py-2 rounded-lg text-[10px] sm:text-sm font-semibold hover:scale-105 transition"
                        >
                          <MessageCircle size={14} />
                          Enquire
                        </a>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ===================================================================
          FEATURES (Customization capabilities)
      =================================================================== */}
      <section className="py-8 sm:py-5 bg-gradient-to-b from-[#F8F8F6] via-white to-[#F8F8F6] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-5">

          <div className="text-center mb-10 sm:mb-14">
            <h2 className="mt-4 sm:mt-6 text-3xl sm:text-5xl font-extrabold leading-tight">
              <span className="text-[#081A3B]">Make It </span>
              <span className="text-[#FFD700]">Yours</span>
            </h2>

            <div className="flex justify-center items-center gap-2.5 sm:gap-3 mt-4 sm:mt-5">
              <div className="h-[2px] w-10 sm:w-16 bg-[#FFD700]" />
              <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#FFD700] shadow-[0_0_12px_#FFD700]" />
              <div className="h-[2px] w-10 sm:w-16 bg-[#FFD700]" />
            </div>

            <p
              className="mt-4 sm:mt-5 max-w-3xl mx-auto px-1 text-gray-600 text-sm sm:text-lg md:text-xl leading-7 sm:leading-8 font-medium"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Personalize every trophy with your{" "}
              <span className="font-semibold text-[#0F1E3D]">
                logo, name, engraving, and custom branding
              </span>{" "}
              — perfect for{" "}
              <span className="font-semibold text-[#FFD700]">
                schools, colleges, sports tournaments, corporate awards,
              </span>{" "}
              cultural events, and memorable celebrations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-7">
            {featureCards.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-3xl border border-[#FFD700]/30 bg-white p-6 sm:p-8 text-center shadow-lg transition-all duration-500 hover:-translate-y-3 hover:border-[#FFD700] hover:bg-[#081A3B] hover:shadow-[0_15px_40px_rgba(255,215,0,0.25)]"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-[#FFD700]/15 via-transparent to-[#081A3B]/20"></div>

                  <div className="relative z-10 mx-auto mb-5 sm:mb-6 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-[#FFD700] shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <Icon size={32} className="text-[#081A3B] sm:hidden" />
                    <Icon size={40} className="text-[#081A3B] hidden sm:block" />
                  </div>

                  <h3 className="relative z-10 text-xl sm:text-2xl font-bold text-[#081A3B] group-hover:text-[#FFD700] transition-colors duration-300">
                    {item.title}
                  </h3>

                  <div className="relative z-10 mx-auto mt-3 sm:mt-4 h-[2px] w-10 sm:w-12 bg-[#FFD700] group-hover:w-20 transition-all duration-500"></div>

                  <p className="relative z-10 mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 leading-6 sm:leading-7 transition-colors duration-300 group-hover:text-white">
                    Premium quality customization with precise finishing and elegant craftsmanship.
                  </p>

                  <div className="absolute bottom-0 left-0 w-full h-1 bg-[#FFD700] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ===================================================================
          BULK ORDER / FOOTER CTA
      =================================================================== */}
      <section className="relative py-10 sm:py-10 bg-white overflow-hidden">
        <div className="absolute -top-16 -left-16 sm:-top-24 sm:-left-20 w-56 sm:w-80 h-56 sm:h-80 rounded-full bg-[#FFD700]/15 blur-[80px] sm:blur-[120px]" />
        <div className="absolute -bottom-16 -right-16 sm:-bottom-20 sm:-right-20 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-[#1E4D8C]/10 blur-[100px] sm:blur-[140px]" />

        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle,#FFD700_1px,transparent_1px)] bg-[size:28px_28px]" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-5">

          <div className="text-center">
            <h2 className="mt-4 sm:mt-6 text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-[#081A3B]">
              Ready To Order
              {" "}
              <span className="text-[#FFD700]">Your Trophy?</span>
            </h2>
            <div className="flex justify-center items-center gap-3 mt-6">
              <div className="h-[2px] w-14 bg-gradient-to-r from-transparent to-[#FFD700]" />
              <div className="w-2 h-2 rounded-full bg-[#FFD700]" />
              <div className="w-2 h-2 rounded-full bg-[#FFD700]/50" />
              <div className="w-2 h-2 rounded-full bg-[#FFD700]" />
              <div className="h-[2px] w-14 bg-gradient-to-l from-transparent to-[#FFD700]" />
            </div>

            <p
              className="mt-4 sm:mt-6 max-w-3xl mx-auto px-2 text-gray-600 text-base sm:text-lg md:text-xl leading-8 font-medium"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Choose from{" "}
              <span className="font-bold text-[#FFB800]">800+ Premium Trophy Designs</span>{" "}
              featuring custom engraving, logo branding, wholesale pricing, and{" "}
              <span className="font-semibold text-[#0F1E3D]">
                fast delivery across Maharashtra.
              </span>
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 mt-12 sm:mt-16">

            {/* Card 1 */}
            <div className="group relative overflow-hidden rounded-[32px] border-2 border-[#FFD700]/20 bg-white p-8 sm:p-10 text-center shadow-lg hover:-translate-y-3 hover:border-[#FFD700] hover:shadow-[0_18px_45px_rgba(255,215,0,0.25)] transition-all duration-500">
              <div className="absolute top-0 right-0 w-28 h-28 bg-[#FFD700]/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#FFD700] via-yellow-300 to-[#FFD700]" />
              <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#FFD700] via-yellow-300 to-[#FFD700]" />
              <span className="absolute top-[-2px] left-[-2px] w-6 h-6 border-t-[3px] border-l-[3px] border-[#FFD700] rounded-tl-[32px]" />
              <span className="absolute top-[-2px] right-[-2px] w-6 h-6 border-t-[3px] border-r-[3px] border-[#FFD700] rounded-tr-[32px]" />
              <span className="absolute bottom-[-2px] left-[-2px] w-6 h-6 border-b-[3px] border-l-[3px] border-[#FFD700] rounded-bl-[32px]" />
              <span className="absolute bottom-[-2px] right-[-2px] w-6 h-6 border-b-[3px] border-r-[3px] border-[#FFD700] rounded-br-[32px]" />
              <div className="absolute right-5 top-3 text-7xl font-black text-[#081A3B]/5 select-none">01</div>

              <h3 className="relative text-5xl sm:text-6xl font-black text-[#081A3B] group-hover:scale-110 transition duration-300">
                800+
              </h3>

              <div className="flex justify-center gap-2 mt-5">
                <span className="w-2 h-2 rounded-full bg-[#FFD700]" />
                <span className="w-2 h-2 rounded-full bg-[#FFD700]/40" />
                <span className="w-2 h-2 rounded-full bg-[#FFD700]" />
              </div>

              <p className="mt-6 text-2xl font-bold text-[#081A3B]">Premium Designs</p>

              <p className="mt-4 text-gray-600 text-base sm:text-lg leading-8 font-medium">
                Wide collection of customized trophies crafted for schools,
                corporate events, sports competitions and every special occasion.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group relative overflow-hidden rounded-[32px] border-2 border-[#FFD700]/20 bg-white p-8 sm:p-10 text-center shadow-lg hover:-translate-y-3 hover:border-[#FFD700] hover:shadow-[0_18px_45px_rgba(255,215,0,0.25)] transition-all duration-500">
              <div className="absolute top-0 right-0 w-28 h-28 bg-[#FFD700]/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#FFD700] via-yellow-300 to-[#FFD700]" />
              <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#FFD700] via-yellow-300 to-[#FFD700]" />
              <span className="absolute top-[-2px] left-[-2px] w-6 h-6 border-t-[3px] border-l-[3px] border-[#FFD700] rounded-tl-[32px]" />
              <span className="absolute top-[-2px] right-[-2px] w-6 h-6 border-t-[3px] border-r-[3px] border-[#FFD700] rounded-tr-[32px]" />
              <span className="absolute bottom-[-2px] left-[-2px] w-6 h-6 border-b-[3px] border-l-[3px] border-[#FFD700] rounded-bl-[32px]" />
              <span className="absolute bottom-[-2px] right-[-2px] w-6 h-6 border-b-[3px] border-r-[3px] border-[#FFD700] rounded-br-[32px]" />
              <div className="absolute right-5 top-3 text-7xl font-black text-[#081A3B]/5 select-none">02</div>

              <h3 className="relative text-5xl sm:text-6xl font-black text-[#081A3B]">₹50+</h3>

              <div className="flex justify-center gap-2 mt-5">
                <span className="w-2 h-2 rounded-full bg-[#FFD700]" />
                <span className="w-2 h-2 rounded-full bg-[#FFD700]/40" />
                <span className="w-2 h-2 rounded-full bg-[#FFD700]" />
              </div>

              <p className="mt-6 text-2xl font-bold text-[#081A3B]">Starting Price</p>

              <p className="mt-4 text-gray-600 text-base sm:text-lg leading-8 font-medium">
                Affordable pricing with premium quality trophies, awards and
                customized mementos for every budget.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group relative overflow-hidden rounded-[32px] border-2 border-[#FFD700]/20 bg-white p-8 sm:p-10 text-center shadow-lg hover:-translate-y-3 hover:border-[#FFD700] hover:shadow-[0_18px_45px_rgba(255,215,0,0.25)] transition-all duration-500">
              <div className="absolute top-0 right-0 w-28 h-28 bg-[#FFD700]/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#FFD700] via-yellow-300 to-[#FFD700]" />
              <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#FFD700] via-yellow-300 to-[#FFD700]" />
              <span className="absolute top-[-2px] left-[-2px] w-6 h-6 border-t-[3px] border-l-[3px] border-[#FFD700] rounded-tl-[32px]" />
              <span className="absolute top-[-2px] right-[-2px] w-6 h-6 border-t-[3px] border-r-[3px] border-[#FFD700] rounded-tr-[32px]" />
              <span className="absolute bottom-[-2px] left-[-2px] w-6 h-6 border-b-[3px] border-l-[3px] border-[#FFD700] rounded-bl-[32px]" />
              <span className="absolute bottom-[-2px] right-[-2px] w-6 h-6 border-b-[3px] border-r-[3px] border-[#FFD700] rounded-br-[32px]" />
              <div className="absolute right-5 top-3 text-7xl font-black text-[#081A3B]/5 select-none">03</div>

              <h3 className="relative text-5xl sm:text-6xl font-black text-[#081A3B]">Fast</h3>

              <div className="flex justify-center gap-2 mt-5">
                <span className="w-2 h-2 rounded-full bg-[#FFD700]" />
                <span className="w-2 h-2 rounded-full bg-[#FFD700]/40" />
                <span className="w-2 h-2 rounded-full bg-[#FFD700]" />
              </div>

              <p className="mt-6 text-2xl font-bold text-[#081A3B]">Quick Delivery</p>

              <p className="mt-4 text-gray-600 text-base sm:text-lg leading-8 font-medium">
                Fast, safe and reliable delivery across Maharashtra with complete
                support for bulk and urgent orders.
              </p>
            </div>

          </div>

          <div className="mt-10 sm:mt-14 flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
            <a
              href="tel:+919307623168"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#081A3B] px-6 sm:px-8 py-3 sm:py-4 font-semibold text-sm sm:text-base text-[#081A3B] hover:bg-[#081A3B] hover:text-white transition-all duration-300 hover:scale-105"
            >
              <Phone size={18} />
              Call Now
            </a>

            <a
              href="https://wa.me/919307623168"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FFD700] px-6 sm:px-8 py-3 sm:py-4 font-bold text-sm sm:text-base text-[#081A3B] shadow-lg hover:scale-105"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#081A3B] px-6 sm:px-8 py-3 sm:py-4 font-bold text-sm sm:text-base text-white hover:bg-[#FFD700] hover:text-[#081A3B] transition-all duration-300 hover:scale-105"
            >
              Get Quote
              <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default Products;
