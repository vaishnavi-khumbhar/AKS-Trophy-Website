import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import heroImage from "../../assets/images/hero/hero-trophy.png";

const Hero = () => {
  return (
<section className="relative overflow-hidden bg-gradient-to-br from-[#081A3B] via-[#032B7A] to-[#0B4D3A] pt-[95px] sm:pt-[105px] lg:pt-[110px] pb-8 lg:pb-0">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 items-center gap-4 lg:gap-8 py-0 lg:py-0">

          {/* Left Content */}
          <motion.div
            className="order-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            {/* Tag */}
            <span className="inline-block bg-[#D4AF37]/15 border border-[#D4AF37]/20 text-[#D4AF37] px-4 py-1 rounded-full text-xs sm:text-sm font-medium mb-2">
              Award for Achievers
            </span>

            {/* Heading */}
            <h1 className="font-bold text-white leading-[1.05] tracking-tight">
              <span className="block text-[1.8rem] sm:text-5xl lg:text-6xl">
                Premium Trophies,
              </span>

              <span className="block text-[1.8rem] sm:text-5xl lg:text-6xl text-[#D4AF37]">
                Awards & Mementos
              </span>

              <span className="block text-[1.8rem] sm:text-5xl lg:text-6xl">
                in Maharashtra
              </span>
            </h1>

            {/* Paragraphs */}
            <div className="mt-3 lg:mt-7">
              <p className="text-gray-300 text-[15px] sm:text-lg leading-6 sm:leading-7 max-w-xl mx-auto lg:mx-0">
                AKS Trophy is a leading trophy manufacturer and supplier in
                Latur, Maharashtra, offering high-quality trophies, awards,
                medals, and mementos designed to celebrate every success.
              </p>

              <p className="mt-3 text-gray-400 text-[14px] sm:text-base leading-6 sm:leading-7 max-w-xl mx-auto lg:mx-0  lg:mt-7">
                We offer{" "}
                <span className="text-[#D4AF37] font-semibold">
                  100+ unique trophy designs
                </span>
                , along with customized trophies with logo engraving,
                name printing, and event-specific designs.
              </p>
            </div>

            {/* Buttons */}
            <div className="mt-5 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start  lg:mt-7">

              <button className="bg-[#D4AF37] hover:bg-[#c59d1d] text-[#081A3B] px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 shadow-xl">
                Explore Collection
                <ArrowRight size={18} />
              </button>

              <a
                href="https://wa.me/91YOURNUMBER"
                target="_blank"
                rel="noreferrer"
                className="border border-[#D4AF37] text-white hover:bg-[#D4AF37] hover:text-[#081A3B] px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-300"
              >
                <Phone size={18} />
                Get Custom Quote
              </a>

            </div>

            {/* Mobile Image */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                y: [0, -4, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="lg:hidden flex justify-center mt-4 mb-4"
            >
              <img
                src={heroImage}
                alt="Premium Trophy"
className="w-full max-w-[170px] sm:max-w-[220px] drop-shadow-[0_20px_35px_rgba(212,175,55,0.30)]"              />
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 mt-0 text-center  lg:mt-7">

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#D4AF37]">
                  100+
                </h3>
                <p className="text-gray-400 text-sm">
                  Trophy Designs
                </p>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#D4AF37]">
                  100%
                </h3>
                <p className="text-gray-400 text-sm">
                  Premium Quality
                </p>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#D4AF37]">
                  Fast
                </h3>
                <p className="text-gray-400 text-sm">
                  Delivery
                </p>
              </div>

            </div>

          </motion.div>

          {/* Desktop Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -8, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="hidden lg:flex justify-end relative"
          >
            <div className="absolute w-[280px] h-[280px] rounded-full bg-[#D4AF37]/20 blur-[70px]" />

            <img
              src={heroImage}
              alt="Premium Trophy"
              className="relative z-10 w-full max-w-[380px] xl:max-w-[430px] drop-shadow-[0_25px_35px_rgba(212,175,55,0.30)]"
            />
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Hero;