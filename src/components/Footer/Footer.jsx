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
    <footer className="bg-[#081A3B] text-white pt-20 pb-8 border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Top Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Company Info */}
          <div>
            <div className="flex items-center gap-4">
              <img
                src={logo}
                alt="AKS Trophy"
                className="h-16 w-auto"
              />

              <div>
                <h3 className="text-2xl font-bold">
                  AKS Trophy
                </h3>

                <p className="text-[#D4AF37] text-sm">
                  Award for Achievers
                </p>
              </div>
            </div>

            <p className="mt-6 text-gray-300 leading-8 text-sm">
              AKS Trophy is a trusted trophy manufacturer in Latur,
              Maharashtra, offering customized trophies, corporate
              awards, sports trophies, medals, and mementos at the
              best price with premium quality and fast delivery.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-[#D4AF37]">
              Quick Links
            </h3>

            <ul className="space-y-4">

              <li>
                <Link
                  to="/"
                  className="flex items-center gap-2 text-gray-300 hover:text-[#D4AF37] transition"
                >
                  <ChevronRight size={18} />
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="flex items-center gap-2 text-gray-300 hover:text-[#D4AF37] transition"
                >
                  <ChevronRight size={18} />
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/products"
                  className="flex items-center gap-2 text-gray-300 hover:text-[#D4AF37] transition"
                >
                  <ChevronRight size={18} />
                  Products
                </Link>
              </li>

              <li>
                <Link
                  to="/faq"
                  className="flex items-center gap-2 text-gray-300 hover:text-[#D4AF37] transition"
                >
                  <ChevronRight size={18} />
                  FAQ
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="flex items-center gap-2 text-gray-300 hover:text-[#D4AF37] transition"
                >
                  <ChevronRight size={18} />
                  Contact
                </Link>
              </li>

            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-[#D4AF37]">
              Categories
            </h3>

            <ul className="space-y-4 text-gray-300">

              <li className="flex items-center gap-2">
                <Trophy size={18} className="text-[#D4AF37]" />
                Mini Wooden Trophies
              </li>

              <li className="flex items-center gap-2">
                <Trophy size={18} className="text-[#D4AF37]" />
                Medium Wooden Trophies
              </li>

              <li className="flex items-center gap-2">
                <Trophy size={18} className="text-[#D4AF37]" />
                Big Wooden Trophies
              </li>

              <li className="flex items-center gap-2">
                <Trophy size={18} className="text-[#D4AF37]" />
                Metal Trophies
              </li>

              <li className="flex items-center gap-2">
                <Trophy size={18} className="text-[#D4AF37]" />
                Customized Awards
              </li>

            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-[#D4AF37]">
              Contact Us
            </h3>

            <div className="space-y-6">

              <div className="flex items-start gap-4">
                <MapPin
                  size={22}
                  className="text-[#D4AF37] mt-1 flex-shrink-0"
                />

                <p className="text-gray-300 leading-7">
                  AKS TROPHY HOUSE,
                  MG Rd, beside BANK OF MAHARASHTRA,
                  Latur, Maharashtra 413512
                </p>
              </div>

              <a
                href="tel:+91XXXXXXXXXX"
                className="flex items-center gap-4 text-gray-300 hover:text-[#D4AF37] transition"
              >
                <Phone size={20} className="text-[#D4AF37]" />

                +91 XXXXX XXXXX
              </a>

              <a
                href="mailto:akstrophyy@gmail.com"
                className="flex items-center gap-4 text-gray-300 hover:text-[#D4AF37] transition"
              >
                <Mail size={20} className="text-[#D4AF37]" />

                akstrophyy@gmail.com
              </a>

              <a
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#D4AF37] text-[#081A3B] px-6 py-3 rounded-full font-semibold hover:bg-[#c89f24] transition"
              >
                <MessageCircle size={18} />

                WhatsApp Us
              </a>

            </div>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 mt-14 pt-8 text-center">

          <p className="text-gray-400 text-sm leading-7">
            © {new Date().getFullYear()} AKS Trophy. All Rights Reserved.
          </p>

          <p className="mt-2 text-gray-500 text-sm">
            Designed with excellence to celebrate every achievement.
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;