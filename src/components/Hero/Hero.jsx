import {
  FaTruck,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";
import { FaIndianRupeeSign } from "react-icons/fa6";

import trophyImg from "../../assets/trophyImg.jpeg";
import RemoveMobile from "../../assets/Remove.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#06152E] mt-3 pt-30 sm:pt-30 lg:pt-40 pb-20 sm:pb-28 lg:pb-30">
      {/* Desktop-only background trophy image — hidden on mobile/tablet so only the RemoveMobile image shows there */}
      <div
        className="hidden lg:block absolute inset-0"
        style={{
          backgroundImage: `url(${trophyImg})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right center",
        }}
      ></div>

      {/* Golden ambient glow animation — drifts behind everything, mobile + desktop */}
      <div className="absolute inset-0 pointer-events-none animate-bg-glow-shift">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, rgba(250,204,21,0.18), transparent 38%), radial-gradient(circle at 85% 20%, rgba(250,204,21,0.14), transparent 35%), radial-gradient(circle at 70% 80%, rgba(250,204,21,0.10), transparent 32%)",
          }}
        ></div>
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#06152E]/10"></div>

     

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">
            <p className="font-[cursive] italic text-white text-2xl sm:text-3xl mb-1 animate-hero-fade-in" style={{ animationDelay: "0ms" }}>
              Premium Trophy
            </p>

            <h1 className="font-extrabold leading-[1.05] tracking-tight overflow-hidden">
              <span
                className="block text-white text-3xl sm:text-4xl lg:text-6xl animate-hero-slide-up"
                style={{ animationDelay: "120ms" }}
              >
                MANUFACTURER
              </span>

              <span
                className="block text-yellow-400 text-3xl sm:text-4xl lg:text-6xl mt-1 animate-hero-slide-up animate-hero-shine"
                style={{ animationDelay: "320ms" }}
              >
                IN MAHARASHTRA
              </span>
            </h1>

            <div className="flex items-center justify-center lg:justify-start gap-2 mt-4 mb-5 animate-hero-fade-in" style={{ animationDelay: "480ms" }}>
              <span className="h-[2px] w-10 bg-yellow-500"></span>
              <span className="text-yellow-400 tracking-[6px] text-xs">
                ★ ★ ★
              </span>
              <span className="h-[2px] w-10 bg-yellow-500"></span>
            </div>

            <p className="text-white text-lg sm:text-xl animate-hero-fade-in" style={{ animationDelay: "560ms" }}>
              <span className="text-yellow-400 font-bold">800+</span> Trophy
              Designs for Every Achievement
            </p>

            <div className="mt-5 flex flex-wrap justify-center lg:justify-start gap-3 max-w-2xl animate-hero-fade-in" style={{ animationDelay: "640ms" }}>
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
    <span
      key={index}
      className="px-4 py-2 rounded-full border border-yellow-400/40 bg-white/10 backdrop-blur-md text-white text-sm sm:text-base font-medium hover:bg-yellow-400 hover:text-[#06152E] transition-all duration-300 shadow-lg"
    >
      ✦ {item}
    </span>
  ))}
</div>

            <p className="font-[cursive] italic text-yellow-400 text-3xl sm:text-4xl mt-4 animate-hero-fade-in" style={{ animationDelay: "720ms" }}>
              Customized Trophies Available
            </p>

            {/* MOBILE/TABLET ONLY IMAGE — hidden on desktop (lg), keeps desktop content/layout untouched */}
            <div className="lg:hidden flex justify-center mt-6 animate-hero-image-in" style={{ animationDelay: "820ms" }}>
              <div className="relative animate-hero-glow-pulse">
                <img
                  src={RemoveMobile}
                  alt="Premium trophy designs - wooden, acrylic, metal, glass and medals"
                  className="w-full max-w-sm sm:max-w-md h-auto object-contain relative z-10"
                />
              </div>
            </div>

            {/* FEATURES */}
            <div className="mt-8 flex flex-col lg:flex-row items-center gap-6">
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-yellow-400 text-2xl" />

                <div>
                  <h4 className="text-white font-semibold">
                    Wholesale & Retail
                  </h4>

                  <p className="text-gray-300 text-sm">Available</p>
                </div>
              </div>

              <div className="hidden lg:block text-white/40 text-3xl">|</div>

              <div className="flex items-center gap-3">
                <FaIndianRupeeSign className="text-yellow-400 text-2xl" />

                <div>
                  <h4 className="text-white font-semibold">
                    Prices Start From
                  </h4>

                  <p className="text-yellow-400 font-bold">
                    ₹50{" "}
                    <span className="text-white font-normal">to</span> ₹50,000
                  </p>
                </div>
              </div>

              <div className="hidden lg:block text-white/40 text-3xl">|</div>

              <div className="flex items-center gap-3">
                <FaTruck className="text-yellow-400 text-2xl" />

                <div>
                  <h4 className="text-white font-semibold">
                    Delivery Across
                  </h4>

                  <p className="text-gray-300 text-sm">Maharashtra</p>
                </div>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start">
              <a
                href="/products"
                className="flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-[#06152E] font-bold px-7 py-3.5 rounded-full transition-all duration-300"
              >
                Browse 800+ Designs
                <FaArrowRight />
              </a>

              <a
                href="/contact"
                className="flex items-center justify-center gap-2 border border-yellow-500 text-white hover:bg-yellow-500 hover:text-[#06152E] px-7 py-3.5 rounded-full transition-all duration-300"
              >
                Get Custom Quote
                <FaArrowRight />
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
        
        </div>
      </div>

      {/* Hero entrance + ambient animations — scoped to this component */}
      <style>{`
        @keyframes heroFadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroSlideUp {
          from { opacity: 0; transform: translateY(100%); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroShine {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes heroImageIn {
          from { opacity: 0; transform: translateY(20px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes heroGlowPulse {
          0%, 100% { opacity: 0.35; transform: scale(0.96); }
          50% { opacity: 0.7; transform: scale(1.04); }
        }
        @keyframes bgGlowShift {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(2%, -2%) scale(1.06); }
        }

        .animate-hero-fade-in {
          opacity: 0;
          animation: heroFadeIn 0.7s ease-out forwards;
        }
        .animate-hero-slide-up {
          opacity: 0;
          animation: heroSlideUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .animate-hero-shine {
          background-image: linear-gradient(
            100deg,
            #facc15 30%,
            #fff7cc 45%,
            #facc15 60%
          );
          background-size: 250% auto;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation:
            heroSlideUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards,
            heroShine 3.5s ease-in-out 1.2s infinite;
        }
        .animate-hero-image-in {
          opacity: 0;
          animation: heroImageIn 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .animate-hero-glow-pulse::before {
          content: "";
          position: absolute;
          inset: -10%;
          background: radial-gradient(circle, rgba(250,204,21,0.35), transparent 70%);
          filter: blur(20px);
          animation: heroGlowPulse 3s ease-in-out infinite;
          z-index: 0;
        }
        .animate-bg-glow-shift {
          animation: bgGlowShift 8s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-hero-fade-in,
          .animate-hero-slide-up,
          .animate-hero-shine,
          .animate-hero-image-in,
          .animate-hero-glow-pulse::before,
          .animate-bg-glow-shift {
            animation: none;
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
