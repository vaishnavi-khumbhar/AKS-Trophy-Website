import { motion } from "framer-motion";
import { ArrowRight, Phone, Award, Truck } from "lucide-react";
import heroImage from "../../assets/images/hero/hero-trophy.png";
import { useEffect, useState } from "react";



const Counter = ({ end }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;

    const increment = end / 100;

    const timer = setInterval(() => {
      current += increment;

      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [end]);

  return <>{count.toLocaleString()}</>;
};

const Hero = () => {
  return (
<section className="
relative
overflow-hidden
pt-[100px]
lg:pt-[120px]
pb-16
bg-gradient-to-br
from-[#F9F4E8]
via-[#FFFDF8]
to-[#F5E6BE]
">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-300/30 rounded-full blur-[120px]" />

        <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-200/40 rounded-full blur-[140px]" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-yellow-300/20 rounded-full" />

      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

<div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white px-5 py-2 rounded-full shadow-lg border border-yellow-200">

              <Award size={16} className="text-[#D4AF37]" />

              <span className="text-sm font-semibold text-[#D4AF37]">
                Award Winning Trophy Manufacturer
              </span>

            </div>

            {/* Heading */}
            <h1 className="mt-6 leading-[1.05] font-bold">

              <span className="block text-[#0A1F44] text-[2.3rem] sm:text-5xl lg:text-7xl">
                Premium Trophies
              </span>

              <span
  className="
  block
  whitespace-nowrap
  text-[2rem]
  sm:text-5xl
  lg:text-[5.2rem]
  bg-gradient-to-r
  from-[#D4AF37]
  via-[#F7D978]
  to-[#D4AF37]
  bg-clip-text
  text-transparent
  "
>
  Awards & Mementos
</span>
              <span className="block text-[#0A1F44] text-[2.3rem] sm:text-5xl lg:text-7xl">
                in Maharashtra
              </span>

            </h1>

            {/* Description */}
            <p className="mt-6 text-gray-700 text-lg leading-8 max-w-xl mx-auto lg:mx-0">
              AKS Trophy is a leading trophy manufacturer and supplier in
              Maharashtra offering premium trophies, awards, medals and
              customized mementos for schools, colleges, corporates and events.
            </p>

            <p className="mt-4 text-gray-600 text-base leading-7 max-w-xl mx-auto lg:mx-0">
              We provide
              <span className="text-[#D4AF37] font-bold">
                {" "}100+ unique trophy designs{" "}
              </span>
              with logo engraving, name printing and premium finishing.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

              <button className="group px-8 py-4 rounded-full font-bold bg-gradient-to-r from-[#D4AF37] to-[#F4D06F] text-[#0A1F44] shadow-xl hover:scale-105 transition">

                <span className="flex items-center justify-center gap-2">
                  Explore Collection
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition"
                  />
                </span>

              </button>

              <a
                href="https://wa.me/91YOURNUMBER"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 rounded-full font-semibold border-2 border-[#D4AF37] text-[#0A1F44] hover:bg-[#D4AF37] hover:text-white transition flex items-center justify-center gap-2"
              >
                <Phone size={18} />
                Get Custom Quote
              </a>

            </div>

            {/* Stats */}
           <div className="grid grid-cols-3 gap-4 mt-10">

  <div className="bg-white/90 backdrop-blur-md border border-yellow-100 rounded-3xl p-5 shadow-xl hover:-translate-y-2 transition-all duration-300">

    <h3 className="text-3xl lg:text-4xl font-extrabold text-[#D4AF37]">
      <Counter end={100} suffix="+" />
    </h3>

    <p className="text-gray-600 text-sm font-medium mt-1">
      Trophy Designs
    </p>

  </div>

  <div className="bg-white/90 backdrop-blur-md border border-yellow-100 rounded-3xl p-5 shadow-xl hover:-translate-y-2 transition-all duration-300">

    <h3 className="text-3xl lg:text-4xl font-extrabold text-[#D4AF37]">
      <Counter end={5000} suffix="+" />
    </h3>

    <p className="text-gray-600 text-sm font-medium mt-1">
      Happy Clients
    </p>

  </div>

  <div className="bg-white/90 backdrop-blur-md border border-yellow-100 rounded-3xl p-5 shadow-xl hover:-translate-y-2 transition-all duration-300">

    <h3 className="text-3xl lg:text-4xl font-extrabold text-[#D4AF37]">
      <Counter end={15} suffix="+" />
    </h3>

    <p className="text-gray-600 text-sm font-medium mt-1">
      Years Experience
    </p>

  </div>

</div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="relative flex justify-center"
          >

            {/* Floating Card */}
            <div
              className="
              relative
              bg-white/50
              backdrop-blur-xl
              border
              border-white/50
              rounded-[40px]
              p-6 lg:p-10
              shadow-[0_20px_80px_rgba(212,175,55,0.2)]
              "
            >

              {/* Floating Badge 1 */}
              <div className="hidden lg:flex absolute top-10 -right-8 bg-white rounded-2xl px-4 py-3 shadow-xl items-center gap-2">

                <Award size={18} className="text-[#D4AF37]" />

                <span className="font-semibold text-sm">
                  Premium Finish
                </span>

              </div>

              {/* Floating Badge 2 */}
              <div className="hidden lg:flex absolute bottom-16 -left-8 bg-white rounded-2xl px-4 py-3 shadow-xl items-center gap-2">

                <Truck size={18} className="text-[#D4AF37]" />

                <span className="font-semibold text-sm">
                  Fast Delivery
                </span>

              </div>

              <img
                src={heroImage}
                alt="Premium Trophy"
                className="w-full max-w-[300px] lg:max-w-[450px] drop-shadow-[0_30px_40px_rgba(212,175,55,0.35)]"
              />

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Hero;