import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import logo from "../../assets/logo/aks-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#081A3B]/95 backdrop-blur-xl shadow-2xl border-b border-[#D4AF37]/20"
            : "bg-[#081A3B]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="h-14 sm:h-14 lg:h-16 flex items-center justify-between">
              <Link to="/" className="flex items-center gap-3">
              <img
                src={logo}
                alt="AKS Trophy Logo"
className="h-16 sm:h-16 lg:h-29 w-auto object-contain"              />

              <div className="leading-tight">
                <h1 className="text-base sm:text-lg lg:text-2xl font-bold text-white tracking-wide">
                  AKS Trophy
                </h1>

                <p className="text-[#D4AF37] text-[11px] sm:text-xs lg:text-sm">
                  Award for Achievers
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-10 xl:gap-12">
              {navLinks.map((link) => (
                <NavLink key={link.name} to={link.path}>
                  {({ isActive }) => (
                    <span
                      className={`relative text-[16px] font-medium transition-all duration-300 cursor-pointer ${
                        isActive
                          ? "text-[#D4AF37]"
                          : "text-white hover:text-[#D4AF37]"
                      }`}
                    >
                      {link.name}

                      <span
                        className={`absolute left-0 -bottom-2 h-[2px] bg-[#D4AF37] transition-all duration-300 ${
                          isActive ? "w-full" : "w-0"
                        }`}
                      />
                    </span>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <a
                href="https://wa.me/91YOURNUMBER"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#D4AF37] text-[#081A3B] px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 hover:shadow-yellow-500/30 transition-all duration-300"
              >
                <Phone size={18} />

                Get Quote
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden text-white p-2"
            >
              <Menu size={30} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/70 z-[60]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35 }}
              className="fixed top-0 right-0 h-full w-full sm:w-[85%] max-w-sm bg-[#081A3B] z-[70] shadow-2xl"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-6 border-b border-[#D4AF37]/20">
                <div className="flex items-center gap-3">
                  <img
                    src={logo}
                    alt="AKS Trophy"
                    className="h-12 w-auto"
                  />

                 <div className="leading-tight">
  <h2 className="text-white text-xl sm:text-2xl font-bold tracking-wide">
    AKS Trophy
  </h2>

  <p className="text-[#D4AF37] text-sm sm:text-base font-medium">
    Award for Achievers
  </p>
</div>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white"
                >
                  <X size={30} />
                </button>
              </div>

              {/* Mobile Navigation */}
              <div className="flex flex-col items-center justify-center h-[80vh] px-6 space-y-8">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                  >
                    {({ isActive }) => (
                      <span
                        className={`text-2xl font-medium transition duration-300 ${
                          isActive
                            ? "text-[#D4AF37]"
                            : "text-white hover:text-[#D4AF37]"
                        }`}
                      >
                        {link.name}
                      </span>
                    )}
                  </NavLink>
                ))}

                <a
                  href="https://wa.me/91YOURNUMBER"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 bg-[#D4AF37] text-[#081A3B] px-8 py-4 rounded-full font-semibold shadow-lg"
                >
                  Get Quote on WhatsApp
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;