import { useState } from "react";
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

import { Link } from "react-router-dom";

import products from "../data/products";

// ---------------------------------------------------------------------------
// CATEGORY IMAGES
// ---------------------------------------------------------------------------
// TODO: Replace these paths once the real category photos are supplied.
// Expected file names below — drop matching images into
// src/assets/images/categories/ and these imports will resolve automatically.
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

// Hero — reuse the existing big trophy image already in the project
import heroImg from "../assets/Remove.png";

// ---------------------------------------------------------------------------
// Static data
// ---------------------------------------------------------------------------

// All 11 categories the business deals in, each with its own image + icon.
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

// Deterministic placeholder badge/price assignment so re-renders stay stable.
// Real price/badge data should eventually live in the products data file —
// this is a temporary in-component placeholder until that field is added.
const getPlaceholderMeta = (id) => {
  const n = Number(id) || 0;
  const badge = n % 5 === 0 ? "Best Seller" : n % 7 === 0 ? "New" : null;
  const price = 50 + (n % 20) * 250; // spread across the real ₹50–₹50,000 range
  return { badge, price };
};

const WHATSAPP_NUMBER = "91YOURNUMBER";

//  WhatsApp Enquiry Function
const handleWhatsAppEnquiry = (productName = "Hello, I want to enquire about your products") => {
  const message = encodeURIComponent(
    `Hi AKS Trophy, I am interested in ${productName}`
  );

  window.open(
    `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`,
    "_blank"
  );
};

const Products = () => {
  const [filter, setFilter] = useState("All");

  const filteredProducts =
    filter === "All"
      ? products
      : products.filter((item) => item.category === filter);

  const featured = filteredProducts.slice(0, 12);
  const remaining = filteredProducts.slice(12);

  return (
    <>
      

      {/* ===================================================================
          HERO BANNER — strong brand + business highlights
      =================================================================== */}
<section className="relative bg-gradient-to-br from-[#081A3B] via-[#0B2C5D] to-[#081A3B] overflow-hidden pt-28 sm:pt-20 lg:pt-[68px] pb-16 sm:pb-20 lg:pb-24">        {/* ambient glow */}
        <div className="absolute top-0 right-0 w-[28rem] h-[28rem] bg-[#D4AF37]/20 blur-[160px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#D4AF37]/10 blur-[140px] rounded-full" />

        <div className="max-w-7xl mx-auto px-5 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-6 items-center">
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] text-sm font-semibold">
                <Sparkles size={14} />
                AKS Small Trophy House
              </span>

              <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                800+ Premium{" "}
                <span className="text-[#D4AF37]">Trophy Designs</span>
              </h1>

            <div
  className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-y-3 text-white/90 text-sm sm:text-base font-semibold animate-hero-fade-in"
  style={{ animationDelay: "640ms" }}
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
      <span className="px-3 hover:text-[#FFD54A] transition-colors duration-300 cursor-default">
        {item}
      </span>

      {index !== 8 && (
        <span className="h-5 w-[2px] bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent opacity-70"></span>
      )}
    </div>
  ))}
</div>

              <p className="mt-5 text-gray-300 max-w-xl leading-7 text-sm sm:text-base">
                AKS Small Trophy House is Maharashtra&apos;s trusted name for
                premium trophies and awards. With 800+ unique designs across
                every material, fully customized options, and prices starting
                at just ₹50, we serve schools, corporates, and sports events
                with both wholesale and retail orders — delivered anywhere in
                Maharashtra.
              </p>

              <div className="flex flex-wrap gap-3 mt-7">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D4AF37] to-yellow-500 text-[#081A3B] px-6 py-3 rounded-full font-bold text-sm shadow-lg shadow-[#D4AF37]/30 hover:scale-105 transition"
                >
                  <Phone size={16} />
                  Get Best Quote
                </a>

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full font-semibold text-sm shadow-lg hover:bg-green-700 hover:scale-105 transition"
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
              <div className="absolute w-64 h-64 sm:w-80 sm:h-80 bg-[#D4AF37]/30 rounded-full blur-3xl" />
              <img
                src={heroImg}
                alt="Premium Trophy"
                className="relative z-10 h-[300px] sm:h-[340px] lg:h-[400px] object-contain drop-shadow-2xl"
              />
            </motion.div>
          </div>

          {/* GLASSMORPHISM STATS BAR — core business highlights */}
          <div className="mt-12 lg:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
  {heroStats.map((stat) => {
    const Icon = stat.icon;

    return (
      <div
        key={stat.label}
        className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-xl border border-white/15 p-5 text-center shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#D4AF37] hover:shadow-[0_0_30px_rgba(212,175,55,0.35)]"
      >
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Icon */}
        <div className="relative z-10 mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F7E27E] shadow-lg group-hover:scale-110 transition-transform duration-300">
          <Icon size={26} className="text-[#081A3B]" />
        </div>

        {/* Value */}
        <h3 className="relative z-10 text-2xl sm:text-3xl font-extrabold text-white">
          {stat.value}
        </h3>

        {/* Divider */}
        <div className="relative z-10 mx-auto my-3 h-[2px] w-10 rounded-full bg-[#D4AF37]" />

        {/* Label */}
        <p className="relative z-10 text-xs sm:text-sm text-white/75 leading-relaxed">
          {stat.label}
        </p>
      </div>
    );
  })}
</div>
        </div>
      </section>

      
     
     
      {/* ===================================================================
          EXPLORE TROPHY CATEGORIES — all 11 categories, rich gold/navy cards
      =================================================================== */}
      <section className="py-10 sm:py-1 bg-white">
        <div className="max-w-7xl mx-auto px-5">
         <div className="text-center mb-14">
  {/* Premium Badge */}
  

  {/* Main Heading */}
  <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
    <span className="text-[#081A3B]">Explore Our</span>
    <br />

    <span className="bg-gradient-to-r from-[#FFD700] via-[#F5C542] to-[#FFC107] bg-clip-text text-transparent">
      Trophy Categories
    </span>
  </h2>

  {/* Premium Divider */}
  <div className="flex items-center justify-center mt-6">
    <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-[#FFD700] to-transparent"></div>

    <div className="mx-4 h-4 w-4 rounded-full bg-[#FFD700] shadow-[0_0_15px_#FFD700]"></div>

    <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-[#FFD700] to-transparent"></div>
  </div>

  {/* Description */}
  <p
  className="mt-6 max-w-3xl mx-auto text-gray-600 text-base sm:text-lg md:text-xl leading-8 font-medium px-2"
  style={{ fontFamily: "'Poppins', sans-serif" }}
>
  Explore our premium collection featuring{" "}
  <span className="font-bold text-[#0F1E3D]">11 Trophy Categories</span> and{" "}
  <span className="font-bold text-[#0F1E3D]">800+ Exclusive Designs</span>.
  Every trophy is expertly crafted and fully customizable with your{" "}
  <span className="font-semibold text-[#0F1E3D]">
    logo, name, engraving, and branding
  </span>{" "}
  — perfect for schools, colleges, sports tournaments, corporate awards,
  cultural events, and special celebrations.
</p>
</div>

 {/* ===================================================================
          FILTER TABS
      =================================================================== */}
     <section className="py-10 bg-gradient-to-b from-[#F8F8F6] to-white">
  <div className="max-w-7xl mx-auto px-5">
    <div className="flex flex-wrap justify-center gap-4">
      {filterTabs.map((item) => (
        <button
          key={item}
          onClick={() => setFilter(item)}
          className={`group relative overflow-hidden rounded-full px-6 py-3 text-sm sm:text-base font-semibold transition-all duration-500 transform hover:-translate-y-1 ${
            filter === item
              ? "bg-[#081A3B] text-white shadow-[0_8px_30px_rgba(8,26,59,0.35)] border border-[#D4AF37]"
              : "bg-white text-[#081A3B] border border-[#D4AF37]/40 hover:bg-[#081A3B] hover:text-white hover:border-[#D4AF37] hover:shadow-[0_8px_25px_rgba(212,175,55,0.30)]"
          }`}
        >
          <span className="relative z-10 flex items-center gap-2">
            {item}
          </span>

          <span
            className={`absolute left-0 bottom-0 h-1 bg-gradient-to-r from-[#D4AF37] to-yellow-300 transition-all duration-500 ${
              filter === item
                ? "w-full"
                : "w-0 group-hover:w-full"
            }`}
          />
        </button>
      ))}
    </div>
  </div>
</section>



          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5">
            {categoryCards.map((cat) => {
              const Icon = cat.icon;
              const isActive = filter === cat.filterKey;
              return (
                <button
                  key={cat.id}
                  onClick={() => setFilter(cat.filterKey)}
                  className={`group relative rounded-2xl overflow-hidden border transition-all duration-300 text-left ${
                    isActive
                      ? "border-[#D4AF37] ring-2 ring-[#D4AF37]/40 bg-gradient-to-b from-[#0B2C5D] to-[#081A3B]"
                      : "border-gray-200 bg-gradient-to-b from-[#F8F8F6] to-white hover:border-[#D4AF37] hover:shadow-xl"
                  }`}
                >
                  <div className="aspect-square w-full flex items-center justify-center p-4 relative">
                    <div className="absolute w-24 h-24 bg-[#D4AF37]/10 rounded-full blur-2xl" />
                    <img
                      src={cat.image}
                      alt={`${cat.title} Trophy`}
                      className="relative z-10 h-full w-full object-contain transition duration-500 group-hover:scale-110"
                    />
                  </div>

                 <div
  className={`flex flex-col items-center justify-center gap-2 py-3 border-t ${
    isActive
      ? "border-white/10"
      : "border-gray-200 group-hover:bg-[#081A3B] group-hover:border-transparent"
  } transition-colors duration-300`}
>
  
  {/* ICON + TITLE */}
  <div className="flex items-center gap-2">
    <Icon size={16} className="text-[#D4AF37]" />
    <span
      className={`text-sm font-semibold ${
        isActive
          ? "text-white"
          : "text-[#081A3B] group-hover:text-white"
      }`}
    >
      {cat.title}
    </span>
  </div>

  {/* ✅ WHATSAPP BUTTON HERE (ADD THIS) */}
  <button
    onClick={(e) => {
      e.stopPropagation();
      handleWhatsAppEnquiry(cat.title);
    }}
    className="bg-green-500 text-white text-xs px-3 py-1 rounded-lg hover:bg-green-600 transition"
  >
    Enquiry Now
  </button>

</div>

                </button>
              );
            })}

            {/* Customized Awards — highlighted differently since it's a service, not a material */}
            <button
              onClick={() => setFilter("Customized")}
              className={`group relative rounded-2xl overflow-hidden border-2 border-dashed transition-all duration-300 text-left flex flex-col items-center justify-center p-4 ${
                filter === "Customized"
                  ? "border-[#D4AF37] bg-gradient-to-b from-[#0B2C5D] to-[#081A3B]"
                  : "border-[#D4AF37]/50 bg-gradient-to-b from-[#081A3B]/5 to-white hover:border-[#D4AF37] hover:shadow-xl"
              }`}
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#D4AF37] to-yellow-500 flex items-center justify-center mb-3 group-hover:scale-110 transition duration-300">
                <Wand2 size={24} className="text-[#081A3B]" />
              </div>
              <span
                className={`text-sm font-semibold text-center ${
                  filter === "Customized" ? "text-white" : "text-[#081A3B]"
                }`}
              >
                Customized
                <br />
                Awards
              </span>
            </button>
            
          </div>
        </div>
      </section>

     

      {/* ===================================================================
          FEATURED PRODUCTS — badges + price + view details + enquire
      =================================================================== */}
     <section className="py-8 sm:py-10 lg:py-14 bg-gradient-to-b from-[#F8F8F6] via-white to-[#F8F8F6]">
  <div className="max-w-7xl mx-auto px-4 sm:px-5">

    {/* Heading */}
    <div className="text-center mb-10 sm:mb-14">

      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
        <span className="text-[#081A3B]">Featured </span>
        <span className="text-[#FFD700]">Products</span>
      </h2>

      <div className="flex justify-center items-center gap-2 sm:gap-3 mt-4 sm:mt-5">
        <div className="h-[2px] w-10 sm:w-16 bg-[#FFD700]" />
        <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-[#FFD700] shadow-[0_0_12px_#FFD700]" />
        <div className="h-[2px] w-10 sm:w-16 bg-[#FFD700]" />
      </div>
<p
  className="mt-4 sm:mt-5 max-w-3xl mx-auto px-2 text-gray-600 text-base sm:text-lg md:text-xl leading-8 font-medium"
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

        {/* Badge */}
        {badge && (
          <span
            className={`absolute top-2 sm:top-4 left-2 sm:left-4 z-20 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold shadow ${
              badge === "Best Seller"
                ? "bg-[#081A3B] text-white"
                : "bg-[#081A3B] text-white"
            }`}
          >
            {badge}
          </span>
        )}

        {/* Image */}
        <div className="relative h-40 sm:h-52 lg:h-64 bg-gradient-to-b from-[#EAF0F8] to-white flex items-center justify-center overflow-hidden p-3 sm:p-5">

          {/* top bar */}
          <div className="absolute top-0 left-0 h-1 w-full bg-[#081A3B]" />

          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain transition-all duration-500 group-hover:scale-110"
          />
        </div>

        {/* Content */}
        <div className="p-3 sm:p-5 text-center">

          <h3 className="text-sm sm:text-lg lg:text-xl font-bold text-[#081A3B] line-clamp-2 group-hover:opacity-90 transition-colors">
            {product.name}
          </h3>

          <p className="mt-2 sm:mt-3 text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#081A3B]">
            ₹{price}
          </p>

          <span className="text-[10px] sm:text-sm text-gray-500">
            Starting Price
          </span>

          <div className="mx-auto mt-3 sm:mt-4 h-[2px] w-8 sm:w-12 bg-[#081A3B] rounded-full group-hover:w-20 transition-all duration-500"></div>

          {/* Buttons */}
          <div className="mt-4 sm:mt-5 flex flex-col sm:flex-row gap-2">

            <Link
              to={`/products/${product.id}`}
              className="flex-1 inline-flex items-center justify-center rounded-lg sm:rounded-xl border border-[#081A3B] py-2 text-xs sm:text-sm font-semibold text-[#081A3B] hover:bg-[#081A3B] hover:text-white transition"
            >
              View Details
            </Link>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi AKS Trophy, I am interested in ${product.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1 sm:gap-2 rounded-lg sm:rounded-xl bg-[#081A3B] py-2 text-xs sm:text-sm font-bold text-white hover:scale-105 transition"
            >
              <MessageCircle size={16} />
              Enquire
            </a>

          </div>
        </div>

        {/* Bottom Hover Bar */}
        <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#081A3B] group-hover:w-full transition-all duration-500"></div>

      </motion.div>
    );
  })}
</div>




  </div>
</section>

      

      {/* ===================================================================
          MORE PRODUCTS (remaining items, only if there are any)
      =================================================================== */}
      {remaining.length > 0 && (
        <section className="py-14 bg-[#F8F8F6]">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#081A3B]">
                More <span className="text-[#D4AF37]">Products</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
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
                        className={`absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full text-[11px] font-semibold shadow ${
                          badge === "Best Seller"
                            ? "bg-gradient-to-r from-[#D4AF37] to-yellow-500 text-[#081A3B]"
                            : "bg-[#081A3B] text-white"
                        }`}
                      >
                        {badge}
                      </span>
                    )}

                    <div className="w-full h-52 sm:h-60 md:h-64 bg-white flex items-center justify-center p-3">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain transition duration-500 hover:scale-105"
                      />
                    </div>

                    <div className="p-3 flex flex-col gap-1.5 items-center">
                      <h3 className="text-sm sm:text-base font-semibold text-[#081A3B] text-center line-clamp-2">
                        {product.name}
                      </h3>

                      <p className="text-[#D4AF37] font-bold text-sm">
                        ₹{price}
                        <span className="text-gray-400 font-normal"> onwards</span>
                      </p>

                      <div className="flex gap-2 w-full mt-2">
                        <Link
                          to={`/products/${product.id}`}
                          className="flex-1 inline-flex items-center justify-center gap-1 border border-[#081A3B] text-[#081A3B] py-2 rounded-lg text-xs sm:text-sm font-semibold hover:bg-[#081A3B] hover:text-white transition"
                        >
                          View Details
                        </Link>

                        <a
                          href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi AKS Trophy, I am interested in ${product.name}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-1.5 bg-gradient-to-r from-[#D4AF37] to-yellow-500 text-[#081A3B] py-2 rounded-lg text-xs sm:text-sm font-semibold hover:scale-105 transition"
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
     <section className="py-5 sm:py-5 bg-gradient-to-b from-[#F8F8F6] via-white to-[#F8F8F6] overflow-hidden">
  <div className="max-w-7xl mx-auto px-5">

    {/* Heading */}
    <div className="text-center mb-14">
     
      <h2 className="mt-6 text-4xl sm:text-5xl font-extrabold leading-tight">
        <span className="text-[#081A3B]">
          Make It{" "}
        </span>

        <span className="text-[#FFD700]">
          Yours
        </span>
      </h2>

      {/* Divider */}
      <div className="flex justify-center items-center gap-3 mt-5">
        <div className="h-[2px] w-16 bg-[#FFD700]" />
        <div className="w-3 h-3 rounded-full bg-[#FFD700] shadow-[0_0_12px_#FFD700]" />
        <div className="h-[2px] w-16 bg-[#FFD700]" />
      </div>

      <p
  className="mt-5 max-w-3xl mx-auto px-2 text-gray-600 text-base sm:text-lg md:text-xl leading-8 font-medium"
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

    {/* Cards */}
   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">

  {featureCards.map((item) => {
    const Icon = item.icon;

    return (
      <div
        key={item.title}
        className="group relative overflow-hidden rounded-3xl border border-[#FFD700]/30 bg-white p-8 text-center shadow-lg transition-all duration-500 hover:-translate-y-3 hover:border-[#FFD700] hover:bg-[#081A3B] hover:shadow-[0_15px_40px_rgba(255,215,0,0.25)]"
      >
        {/* Glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-[#FFD700]/15 via-transparent to-[#081A3B]/20"></div>

        {/* Icon */}
        <div className="relative z-10 mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#FFD700] shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
          <Icon size={40} className="text-[#081A3B]" />
        </div>

        {/* Title (INCREASED FONT) */}
        <h3 className="relative z-10 text-2xl font-bold text-[#081A3B] group-hover:text-[#FFD700] transition-colors duration-300">
          {item.title}
        </h3>

        {/* Divider */}
        <div className="relative z-10 mx-auto mt-4 h-[2px] w-12 bg-[#FFD700] group-hover:w-20 transition-all duration-500"></div>

        {/* Description (INCREASED FONT) */}
        <p className="relative z-10 mt-4 text-base text-gray-600 leading-7 transition-colors duration-300 group-hover:text-white">
          Premium quality customization with precise finishing and elegant craftsmanship.
        </p>

        {/* Bottom Accent */}
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
     <section className="relative py-5 sm:py-10 bg-white overflow-hidden">
  {/* Background Decoration */}
  <div className="absolute -top-24 -left-20 w-80 h-80 rounded-full bg-[#FFD700]/15 blur-[120px]" />
  <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-[#1E4D8C]/10 blur-[140px]" />

  <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle,#FFD700_1px,transparent_1px)] bg-[size:28px_28px]" />

  <div className="relative z-10 max-w-6xl mx-auto px-5">

    {/* Heading */}
    <div className="text-center">
     
      <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-[#081A3B]">
        Ready To Order
        <br />
        <span className="text-[#FFD700]">
          Your Trophy?
        </span>
      </h2>

      <p className="mt-6 max-w-2xl mx-auto text-gray-600 text-base sm:text-lg leading-8">
        Choose from <span className="font-bold text-[#FFD700]">800+</span>
        premium trophy designs with custom engraving, wholesale pricing and
        fast delivery across Maharashtra.
      </p>
    </div>

    {/* Stats */}
   {/* Stats */}
<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-14">

  {/* Card 1 */}
  <div className="group relative overflow-hidden rounded-3xl border border-[#FFD700]/20 bg-white p-8 text-center shadow-lg hover:-translate-y-2 hover:border-[#FFD700] hover:shadow-[0_15px_40px_rgba(255,215,0,0.25)] transition-all duration-500">

    <span className="absolute top-0 left-0 w-full h-1 bg-[#FFD700]"></span>

    <h3 className="text-5xl font-extrabold text-[#081A3B] group-hover:scale-110 transition duration-300">
      800+
    </h3>

    <div className="mx-auto mt-4 h-[3px] w-12 rounded-full bg-[#081A3B] group-hover:w-20 transition-all duration-500"></div>

    <p className="mt-5 text-xl font-semibold text-[#081A3B]">
      Premium Designs
    </p>

    <p className="mt-2 text-gray-500 text-sm leading-6">
      Wide collection of customized trophies for every occasion.
    </p>
  </div>

  {/* Card 2 */}
  <div className="group relative overflow-hidden rounded-3xl border border-[#FFD700]/20 bg-white p-8 text-center shadow-lg hover:-translate-y-2 hover:border-[#FFD700] hover:shadow-[0_15px_40px_rgba(255,215,0,0.25)] transition-all duration-500">

    <span className="absolute top-0 left-0 w-full h-1 bg-[#FFD700]"></span>

    <h3 className="text-5xl font-extrabold text-[#081A3B] group-hover:scale-110 transition duration-300">
      ₹50+
    </h3>

    <div className="mx-auto mt-4 h-[3px] w-12 rounded-full bg-[#081A3B] group-hover:w-20 transition-all duration-500"></div>

    <p className="mt-5 text-xl font-semibold text-[#081A3B]">
      Starting Price
    </p>

    <p className="mt-2 text-gray-500 text-sm leading-6">
      Affordable pricing with premium quality craftsmanship.
    </p>
  </div>

  {/* Card 3 */}
  <div className="group relative overflow-hidden rounded-3xl border border-[#FFD700]/20 bg-white p-8 text-center shadow-lg hover:-translate-y-2 hover:border-[#FFD700] hover:shadow-[0_15px_40px_rgba(255,215,0,0.25)] transition-all duration-500">

    <span className="absolute top-0 left-0 w-full h-1 bg-[#FFD700]"></span>

    <h3 className="text-5xl font-extrabold text-[#081A3B] group-hover:scale-110 transition duration-300">
      Fast
    </h3>

    <div className="mx-auto mt-4 h-[3px] w-12 rounded-full bg-[#081A3B] group-hover:w-20 transition-all duration-500"></div>

    <p className="mt-5 text-xl font-semibold text-[#081A3B]">
      Quick Delivery
    </p>

    <p className="mt-2 text-gray-500 text-sm leading-6">
      Safe & fast delivery across Maharashtra with bulk order support.
    </p>
  </div>

</div>

{/* Buttons */}
<div className="mt-14 flex flex-wrap justify-center gap-4">

  <a
    href="tel:+919999999999"
    className="inline-flex items-center gap-2 rounded-full border-2 border-[#081A3B] px-8 py-4 font-semibold text-[#081A3B] hover:bg-[#081A3B] hover:text-white transition-all duration-300 hover:scale-105"
  >
    <Phone size={18} />
    Call Now
  </a>

  <a
    href={`https://wa.me/${WHATSAPP_NUMBER}`}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 rounded-full bg-[#FFD700] px-8 py-4 font-bold text-[#081A3B] shadow-lg hover:scale-105 hover:shadow-[0_15px_35px_rgba(255,215,0,0.35)] transition-all duration-300"
  >
    <MessageCircle size={18} />
    WhatsApp
  </a>

  <a
    href="/contact"
    className="inline-flex items-center gap-2 rounded-full bg-[#081A3B] px-8 py-4 font-bold text-white hover:bg-[#FFD700] hover:text-[#081A3B] transition-all duration-300 hover:scale-105"
  >
    Get Quote
    <ArrowRight size={18} />
  </a>

</div>
  </div>
</section>
    </>
  );
};

export default Products;
