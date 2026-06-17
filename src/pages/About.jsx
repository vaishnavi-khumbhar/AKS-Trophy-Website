import { motion } from "framer-motion";
import { Trophy, Award, Truck, ShieldCheck, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import CTA from "../components/CTA/CTA";
import logo from "../assets/logo/aks-logo.png";

/* ---------------- COUNTER HOOK ---------------- */
const useCountUpOnView = (end, trigger) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let start = 0;
    const duration = 1500;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, trigger]);

  return count;
};

const About = () => {
  const statsRef = useRef(null);
  const [inView, setInView] = useState(false);

  const trophies = useCountUpOnView(100, inView);
  const customers = useCountUpOnView(5000, inView);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.4 }
    );

    if (statsRef.current) observer.observe(statsRef.current);

    return () => {
      if (statsRef.current) observer.unobserve(statsRef.current);
    };
  }, []);

  const journey = [
    {
      year: "2018",
      title: "The Beginning",
      desc: "AKS Trophy started in Latur with a simple mission – deliver quality trophies with trust and care.",
    },
    {
      year: "2020",
      title: "Expansion Phase",
      desc: "We expanded into custom wooden, metal and premium awards for schools, colleges and sports events.",
    },
    {
      year: "2022",
      title: "Recognition",
      desc: "Became a trusted supplier for corporate events, tournaments and bulk trophy manufacturing.",
    },
    {
      year: "2025",
      title: "Today",
      desc: "A leading trophy brand in Maharashtra known for premium quality, design and fast delivery.",
    },
  ];

  const features = [
    {
      icon: Trophy,
      title: "Premium Craftsmanship",
      desc: "Every trophy is carefully designed with precision finishing.",
    },
    {
      icon: Award,
      title: "Modern Designs",
      desc: "Stylish, creative and event-based trophy designs.",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      desc: "Quick production with on-time delivery assurance.",
    },
    {
      icon: ShieldCheck,
      title: "Trusted Brand",
      desc: "Serving schools, corporates and sports events.",
    },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative pt-28 pb-28 bg-[#081A3B] overflow-hidden">

  <div className="absolute top-0 left-0 w-64 h-64 bg-[#D4AF37]/10 blur-[100px] rounded-full" />

  <div className="max-w-5xl mx-auto px-5 text-center">

    {/* BADGE */}
    <span className="inline-block px-3 py-2 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-sm">
      About Us
    </span>

    {/* HEADING */}
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-white"
    >
      About <span className="text-[#D4AF37]">AKS Trophy</span>
    </motion.h1>

    {/* PARAGRAPH */}
    <p className="mt-4 max-w-2xl mx-auto text-gray-300 leading-7 text-sm sm:text-base">
      We are a trusted trophy manufacturer in Latur, Maharashtra,
      delivering premium awards, medals and customized mementos
      for all types of events.
    </p>

  </div>

</section>

      {/* WHO WE ARE (NEW INFO BLOCK) */}
      {/* WHO WE ARE */}
<section className="py-13 bg-white text-center">
  <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-12 items-center">

    {/* TEXT (mobile first) */}
    <div className="order-1 lg:order-2">
      <h2 className="text-3xl sm:text-5xl font-bold leading-tight">
        <span className="text-[#081A3B]">Who</span>{" "}
        <span className="text-[#D4AF37]">We Are</span>
      </h2>

    <p className="mt-5 text-gray-600 leading-8 text-base sm:text-lg font-medium">
  AKS Trophy is a trusted name in Latur, Maharashtra, renowned for delivering premium-quality trophies, awards, and mementos crafted to celebrate achievements and make every occasion memorable.
</p>

<p className="mt-5 text-gray-600 leading-8 text-base sm:text-lg font-medium">
  With years of experience, we specialize in customized trophies and awards for schools, colleges, sports tournaments, corporate events, and special celebrations, ensuring exceptional quality and elegant finishes.
</p>

<div className="mt-8 grid grid-cols-2 gap-4 sm:gap-5 text-sm sm:text-base font-medium text-gray-700">
  <div className="flex items-center gap-2">
    <span className="text-[#D4AF37] text-lg">✔</span>
    Custom Designs
  </div>

  <div className="flex items-center gap-2">
    <span className="text-[#D4AF37] text-lg">✔</span>
    Premium Finish
  </div>

  <div className="flex items-center gap-2">
    <span className="text-[#D4AF37] text-lg">✔</span>
    Bulk Orders
  </div>

  <div className="flex items-center gap-2">
    <span className="text-[#D4AF37] text-lg">✔</span>
    Fast Delivery
  </div>
</div>
    </div>

    {/* IMAGE (mobile below text) */}
    <div className="order-2 lg:order-1">
      <motion.div className="rounded-[28px] overflow-hidden border border-gray-200 hover:border-[#D4AF37]/40 transition">
        <img
          src={logo}
          alt="AKS Trophy"
          className="h-[240px] sm:h-[350px] w-full object-cover hover:scale-105 transition duration-500"
        />
      </motion.div>
    </div>

  </div>
</section>

      {/* JOURNEY TIMELINE (IMPROVED UI) */}
      <section className="py-10 bg-[#F8F8F6]">
        <div className="max-w-5xl mx-auto px-5">

            
          
           <h2 className="text-center text-4xl sm:text-5xl font-bold mb-14">
            <span className="text-[#081A3B]"> Our</span>{" "}
            <span className="text-[#D4AF37]">Journey</span>
          </h2>


          <div className="space-y-10 relative border-l-2 border-[#D4AF37]/40 pl-8">

            {journey.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-[42px] top-2 w-5 h-5 bg-[#D4AF37] rounded-full shadow-lg" />

                <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition">

                  <span className="text-[#D4AF37] font-semibold">
                    {item.year}
                  </span>

                  <h3 className="text-xl font-bold text-[#081A3B] mt-2">
                    {item.title}
                  </h3>

                 <p className="mt-3 text-gray-600 leading-8 text-base sm:text-lg font-medium">
  {item.desc}
</p>

                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-15 bg-white">
        <div className="max-w-7xl mx-auto px-5 text-center">

          

 <h2 className="text-4xl sm:text-5xl font-bold mb-12">
            <span className="text-[#081A3B]">Why</span>{" "}
            <span className="text-[#D4AF37]">Choose Us</span>
          </h2>


          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

            {features.map((item, i) => {
              const Icon = item.icon;

              return (
                <div
                  key={i}
                  className="p-7 rounded-2xl bg-white border border-gray-200 hover:border-[#D4AF37]/40 hover:shadow-xl transition"
                >
                  <div className="w-14 h-14 mx-auto rounded-xl bg-[#081A3B] flex items-center justify-center">
                    <Icon className="text-[#D4AF37]" size={28} />
                  </div>

                 <h3 className="mt-5 text-xl sm:text-2xl font-bold text-[#081A3B] leading-tight">
  {item.title}
</h3>

<p className="mt-3 text-gray-600 text-sm sm:text-base leading-7 font-medium">
  {item.desc}
</p>
                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* STATS */}
      <section ref={statsRef} className="py-20 bg-[#081A3B]">
        <div className="max-w-6xl mx-auto px-5 text-center">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">

            <div>
              <h3 className="text-5xl font-bold text-[#D4AF37]">
                {trophies}+
              </h3>
              <p className="text-white mt-3">Trophy Designs</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-[#D4AF37]">
                {customers}+
              </h3>
              <p className="text-white mt-3">Happy Customers</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-[#D4AF37]">100%</h3>
              <p className="text-white mt-3">Quality</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-[#D4AF37]">24/7</h3>
              <p className="text-white mt-3">Support</p>
            </div>

          </div>
        </div>
      </section>

      <CTA />
    </>
  );
};

export default About;