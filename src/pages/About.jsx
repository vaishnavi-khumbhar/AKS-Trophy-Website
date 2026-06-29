import { motion } from "framer-motion";
import { Trophy, Award, Truck, ShieldCheck } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import CTA from "../components/CTA/CTA";
import logo from "../assets/logo/aks-logo.png";

/* ── COUNTER HOOK ── */
const useCountUpOnView = (end, trigger) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const duration = 1500;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) { clearInterval(timer); setCount(end); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [end, trigger]);
  return count;
};

const journey = [
  { year: "2018", title: "The Beginning",    desc: "AKS Trophy started in Latur with a simple mission – deliver quality trophies with trust and care." },
  { year: "2020", title: "Expansion Phase",  desc: "We expanded into custom wooden, metal and premium awards for schools, colleges and sports events." },
  { year: "2022", title: "Recognition",      desc: "Became a trusted supplier for corporate events, tournaments and bulk trophy manufacturing." },
  { year: "2025", title: "Today",            desc: "A leading trophy brand in Maharashtra known for premium quality, design and fast delivery." },
];

const features = [
  { icon: Trophy,      title: "Premium Craftsmanship", desc: "Every trophy is carefully designed with precision finishing." },
  { icon: Award,       title: "Modern Designs",        desc: "Stylish, creative and event-based trophy designs." },
  { icon: Truck,       title: "Fast Delivery",         desc: "Quick production with on-time delivery assurance." },
  { icon: ShieldCheck, title: "Trusted Brand",         desc: "Serving schools, corporates and sports events." },
];

/* ─── reusable section heading ─── */
const SectionHeading = ({ white, gold }) => (
  <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold mb-12">
    <span className="text-[#081A3B]">{white} </span>
    <span className="text-[#F5C200]">{gold}</span>
  </h2>
);

const About = () => {
  const statsRef = useRef(null);
  const [inView, setInView] = useState(false);
  const trophies  = useCountUpOnView(100,  inView);
  const customers = useCountUpOnView(5000, inView);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.4 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => { if (statsRef.current) observer.unobserve(statsRef.current); };
  }, []);

  return (
    <>
      {/* ══════════ HERO ══════════ */}
      <section className="relative pt-36 pb-28 bg-[#081A3B] overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#F5C200]/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#F5C200]/5 blur-[80px] rounded-full" />

        <div className="max-w-5xl mx-auto px-5 text-center relative z-10">
          {/* badge */}
          <span className="inline-block px-4 py-2 rounded-full bg-[#F5C200]/10 border border-[#F5C200]/30 text-[#F5C200] text-sm font-semibold tracking-wide">
            About Us
          </span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-5 text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
          >
            About{" "}
            <span className="text-[#F5C200]">AKS Trophy</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-5 max-w-2xl mx-auto text-gray-300 leading-7 text-sm sm:text-base"
          >
            We are a trusted trophy manufacturer in Latur, Maharashtra,
            delivering premium awards, medals and customized mementos
            for all types of events.
          </motion.p>
        </div>
      </section>

      {/* ══════════ WHO WE ARE ══════════ */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="rounded-[28px] overflow-hidden border-2 border-[#F5C200]/30 shadow-xl hover:shadow-2xl transition duration-500">
              <img
                src={logo}
                alt="AKS Trophy"
                className="h-[240px] sm:h-[360px] w-full object-cover hover:scale-105 transition duration-500"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              <span className="text-[#081A3B]">Who </span>
              <span className="text-[#F5C200]">We Are</span>
            </h2>

            <p className="mt-5 text-gray-600 leading-8 text-base sm:text-lg font-medium">
              AKS Trophy is a trusted name in Latur, Maharashtra, renowned for delivering
              premium-quality trophies, awards, and mementos crafted to celebrate achievements
              and make every occasion memorable.
            </p>

            <p className="mt-4 text-gray-600 leading-8 text-base sm:text-lg font-medium">
              With years of experience, we specialize in customized trophies and awards for
              schools, colleges, sports tournaments, corporate events, and special celebrations,
              ensuring exceptional quality and elegant finishes.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 text-sm sm:text-base font-medium text-gray-700">
              {["Custom Designs", "Premium Finish", "Bulk Orders", "Fast Delivery"].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-[#F5C200] text-lg font-bold">✔</span>
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* ══════════ JOURNEY TIMELINE ══════════ */}
      <section className="py-16 bg-[#F8F8F6]">
        <div className="max-w-5xl mx-auto px-5">
          <SectionHeading white="Our" gold="Journey" />

          <div className="relative border-l-2 border-[#F5C200]/40 pl-8 space-y-10">
            {journey.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                {/* dot */}
                <div className="absolute -left-[42px] top-3 w-5 h-5 bg-[#F5C200] rounded-full shadow-lg shadow-yellow-300/40 ring-4 ring-[#F5C200]/20" />

                <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:border-[#F5C200]/30 hover:shadow-xl transition">
                  <span className="inline-block bg-[#F5C200]/10 text-[#F5C200] text-xs font-bold px-3 py-1 rounded-full tracking-widest">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-bold text-[#081A3B] mt-3">{item.title}</h3>
                  <p className="mt-2 text-gray-600 leading-7 text-sm sm:text-base font-medium">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ FEATURES ══════════ */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-5 text-center">
          <SectionHeading white="Why" gold="Choose Us" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
            {features.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-7 rounded-2xl bg-white border border-gray-200 hover:border-[#F5C200]/50 hover:shadow-xl transition group"
                >
                 <div className="w-14 h-14 mx-auto rounded-xl bg-[#081A3B] flex items-center justify-center group-hover:bg-[#081A3B] transition duration-300">
  <Icon
    className="text-[#F5C200] group-hover:text-[#F5C200]"
    size={28}
  />
</div>

                  <h3 className="mt-5 text-lg sm:text-xl font-bold text-[#081A3B] leading-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-gray-600 text-sm sm:text-base leading-7 font-medium">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════ STATS ══════════ */}
      <section ref={statsRef} className="py-20 bg-[#081A3B] relative overflow-hidden">
        {/* bg glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#F5C200]/8 blur-[100px] rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#F5C200]/8 blur-[100px] rounded-full" />
        </div>

        <div className="max-w-6xl mx-auto px-5 text-center relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { value: `${trophies}+`, label: "Trophy Designs" },
              { value: `${customers}+`, label: "Happy Customers" },
              { value: "100%", label: "Quality" },
              { value: "24/7", label: "Support" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center"
              >
                <h3 className="text-4xl sm:text-5xl font-extrabold text-[#F5C200] leading-none">
                  {stat.value}
                </h3>
                <div className="w-8 h-0.5 bg-[#F5C200]/40 rounded-full mt-3 mb-3" />
                <p className="text-gray-300 text-sm sm:text-base font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
};

export default About;
