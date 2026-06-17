import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Trophy,
  ChevronRight,
} from "lucide-react";

import logo from "../../assets/logo/aks-logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#081A3B] text-white pt-10 md:pt-16 pb-6 border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Top Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center md:text-left">

          {/* Company Info */}
          <div className="flex flex-col items-center md:items-start">
            
            <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4">
              <img
                src={logo}
                alt="AKS Trophy"
                className="h-20 md:h-16 w-auto"
              />

              <div>
                <h3 className="text-xl md:text-2xl font-bold">
                  AKS Trophy
                </h3>
                <p className="text-[#D4AF37] text-sm">
                  Award for Achievers
                </p>
              </div>
            </div>

            <p className="mt-3 md:mt-6 text-gray-300 leading-6 md:leading-7 text-sm max-w-sm md:max-w-none">
              AKS Trophy is a trusted trophy manufacturer in Latur,
              Maharashtra, offering customized trophies, corporate
              awards, sports trophies, medals, and mementos at the
              best price with premium quality and fast delivery.
            </p>
          </div>

          {/* Quick Links */}
         {/* Quick Links */}
<div className="flex flex-col items-center md:items-start">
  <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 text-[#D4AF37]">
    Quick Links
  </h3>

  <ul className="space-y-3 md:space-y-4">

    <li>
      <Link
        to="/"
        className="flex items-center justify-center md:justify-start gap-2 text-gray-300 hover:text-[#D4AF37] transition"
      >
        <ChevronRight size={18} />
        Home
      </Link>
    </li>

    <li>
      <Link
        to="/about"
        className="flex items-center justify-center md:justify-start gap-2 text-gray-300 hover:text-[#D4AF37] transition"
      >
        <ChevronRight size={18} />
        About Us
      </Link>
    </li>

    <li>
      <Link
        to="/products"
        className="flex items-center justify-center md:justify-start gap-2 text-gray-300 hover:text-[#D4AF37] transition"
      >
        <ChevronRight size={18} />
        Products
      </Link>
    </li>

    <li>
      <Link
        to="/faq"
        className="flex items-center justify-center md:justify-start gap-2 text-gray-300 hover:text-[#D4AF37] transition"
      >
        <ChevronRight size={18} />
        FAQ
      </Link>
    </li>

    <li>
      <Link
        to="/contact"
        className="flex items-center justify-center md:justify-start gap-2 text-gray-300 hover:text-[#D4AF37] transition"
      >
        <ChevronRight size={18} />
        Contact
      </Link>
    </li>

  </ul>
</div>

       {/* Categories */}
<div className="flex flex-col items-center md:items-start">
  <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 text-[#D4AF37]">
    Categories
  </h3>

  <ul className="space-y-3 md:space-y-4 text-gray-300">
    {[
      "Mini Wooden Trophies",
      "Medium Wooden Trophies",
      "Big Wooden Trophies",
      "Metal Trophies",
      "Customized Awards",
    ].map((item, i) => (
      <li key={i}>
        <Link
          to="/products"
          className="flex items-center justify-center md:justify-start gap-2 hover:text-[#D4AF37] transition"
        >
          <Trophy size={18} className="text-[#D4AF37]" />
          {item}
        </Link>
      </li>
    ))}
  </ul>
</div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 text-[#D4AF37]">
              Contact Us
            </h3>

            <div className="space-y-4 md:space-y-6">

              <div className="flex flex-col items-center md:flex-row md:items-start gap-2 md:gap-3">
                <MapPin size={22} className="text-[#D4AF37]" />
                <p className="text-gray-300 leading-6 md:leading-7 text-sm">
                  AKS TROPHY HOUSE, MG Rd, Latur, Maharashtra 413512
                </p>
              </div>

              <a
                href="tel:+91XXXXXXXXXX"
                className="flex items-center justify-center md:justify-start gap-3 text-gray-300 hover:text-[#D4AF37] transition"
              >
                <Phone size={20} className="text-[#D4AF37]" />
                +91 XXXXX XXXXX
              </a>

              <a
                href="mailto:akstrophyy@gmail.com"
                className="flex items-center justify-center md:justify-start gap-3 text-gray-300 hover:text-[#D4AF37] transition"
              >
                <Mail size={20} className="text-[#D4AF37]" />
                akstrophyy@gmail.com
              </a>

              <div className="flex justify-center md:justify-start">
                <a
                  href="https://wa.me/91XXXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#D4AF37] text-[#081A3B] px-5 py-2.5 md:px-6 md:py-3 rounded-full font-semibold hover:bg-[#c89f24] transition"
                >
                  <MessageCircle size={18} />
                  WhatsApp Us
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 mt-10 md:mt-14 pt-6 md:pt-8 text-center">
          <p className="text-gray-400 text-xs md:text-sm">
            © {new Date().getFullYear()} AKS Trophy. All Rights Reserved.
          </p>

          <p className="mt-1 md:mt-2 text-gray-500 text-xs md:text-sm">
            Designed with excellence to celebrate every achievement.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;