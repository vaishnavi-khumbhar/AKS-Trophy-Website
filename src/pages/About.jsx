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
  <div className="text-center mb-12">
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
      <span className="text-[#081A3B]">{white} </span>
      <span className="text-[#F5C200]">{gold}</span>
    </h2>
    <div className="flex items-center justify-center gap-3 mt-4">
      <span className="h-px w-14 bg-gradient-to-r from-transparent to-[#F5C200]/60" />
      <span className="w-2 h-2 rounded-full bg-[#F5C200]" />
      <span className="w-2 h-2 rounded-full bg-[#F5C200]/40" />
      <span className="w-2 h-2 rounded-full bg-[#F5C200]" />
      <span className="h-px w-14 bg-gradient-to-l from-transparent to-[#F5C200]/60" />
    </div>
  </div>
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
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#F5C200 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full border border-dashed border-[#F5C200]/10 pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full border border-dashed border-[#F5C200]/10 pointer-events-none" />

        <div className="max-w-5xl mx-auto px-5 text-center relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5C200]/10 border border-[#F5C200]/30 text-[#F5C200] text-sm font-semibold tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F5C200] inline-block" />
            About Us
            <span className="w-1.5 h-1.5 rounded-full bg-[#F5C200] inline-block" />
          </span>


          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-5 text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
          >
            About{" "}
            <span className="text-[#F5C200]">AKS Small Trophy House</span>
          </motion.h1>

       <div className="flex justify-center items-center gap-3 mt-6">

      <div className="h-[2px] w-14 bg-gradient-to-r from-transparent to-[#FFD700]" />

      <div className="w-2 h-2 rounded-full bg-[#FFD700]" />

      <div className="w-2 h-2 rounded-full bg-[#FFD700]/50" />

      <div className="w-2 h-2 rounded-full bg-[#FFD700]" />

      <div className="h-[2px] w-14 bg-gradient-to-l from-transparent to-[#FFD700]" />

    </div>


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
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#F5C200]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1 relative"
          >
            <div
              className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-500 relative"
              style={{ border: "2px solid #F5C200" }}
            >
              {/* Corner accents */}
              <span className="absolute top-[-2px] left-[-2px] w-5 h-5 border-t-[3px] border-l-[3px] border-yellow-400 rounded-tl-2xl z-10" />
              <span className="absolute top-[-2px] right-[-2px] w-5 h-5 border-t-[3px] border-r-[3px] border-yellow-400 rounded-tr-2xl z-10" />
              <span className="absolute bottom-[-2px] left-[-2px] w-5 h-5 border-b-[3px] border-l-[3px] border-yellow-400 rounded-bl-2xl z-10" />
              <span className="absolute bottom-[-2px] right-[-2px] w-5 h-5 border-b-[3px] border-r-[3px] border-yellow-400 rounded-br-2xl z-10" />

              <img
                src={logo}
                alt="AKS Trophy"
                className="h-[240px] sm:h-[360px] w-full object-cover hover:scale-105 transition duration-500"
              />
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-5 -right-5 sm:-right-8 bg-white rounded-xl px-4 py-3 shadow-xl z-20"
              style={{ border: "2px solid #F5C200" }}
            >
              <p className="text-[#F5C200] text-2xl font-extrabold leading-none">2+</p>
              <p className="text-[#081A3B] text-xs font-semibold mt-1">Years Trusted</p>
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5C200]/12 border border-[#F5C200]/35 text-[#081A3B] text-xs font-semibold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F5C200] inline-block" />
              Our Story
            </span>

            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
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

            <div className="mt-8 grid grid-cols-2 gap-3 text-sm sm:text-base font-medium text-gray-700">
              {["Custom Designs", "Premium Finish", "Bulk Orders", "Fast Delivery"].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-white rounded-xl px-3 py-2.5"
                  style={{ border: "1.5px solid rgba(245,194,0,0.3)" }}
                >
                  <span className="w-5 h-5 rounded-full bg-[#F5C200] flex items-center justify-center text-[#081A3B] text-xs font-bold shrink-0">✔</span>
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* ══════════ JOURNEY TIMELINE ══════════ */}
      <section className="py-20 bg-[#F8F8F6] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#F5C200]/6 rounded-full blur-[100px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#081A3B 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-5">
          <SectionHeading white="Our" gold="Journey" />

          <div className="relative mt-12 border-l-[3px] border-[#F5C200]/40 pl-10 space-y-12">
            {journey.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[52px] top-4 w-5 h-5 bg-[#F5C200] rounded-full shadow-lg shadow-yellow-300/40 ring-4 ring-[#F5C200]/20" />

                {/* Card */}
                <div
                  className="group relative bg-white p-7 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                  style={{ border: "2px solid rgba(245,194,0,0.25)" }}
                  onMouseEnter={e => e.currentTarget.style.border = "2px solid #F5C200"}
                  onMouseLeave={e => e.currentTarget.style.border = "2px solid rgba(245,194,0,0.25)"}
                >
                  {/* Corner accents */}
                  <span className="absolute top-[-2px] left-[-2px] w-4 h-4 border-t-[3px] border-l-[3px] border-yellow-400 rounded-tl-2xl" />
                  <span className="absolute top-[-2px] right-[-2px] w-4 h-4 border-t-[3px] border-r-[3px] border-yellow-400 rounded-tr-2xl" />
                  <span className="absolute bottom-[-2px] left-[-2px] w-4 h-4 border-b-[3px] border-l-[3px] border-yellow-400 rounded-bl-2xl" />
                  <span className="absolute bottom-[-2px] right-[-2px] w-4 h-4 border-b-[3px] border-r-[3px] border-yellow-400 rounded-br-2xl" />

                  {/* Top Accent */}
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#F5C200] via-[#FFD84D] to-[#F5C200]" />

                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#F5C200]/0 to-[#F5C200]/5 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" />

                  {/* Year */}
                  <span className="inline-block bg-[#F5C200]/10 text-[#F5C200] text-xs sm:text-sm font-bold px-4 py-2 rounded-full tracking-widest border border-[#F5C200]/25">
                    {item.year}
                  </span>

                  <h3 className="text-2xl sm:text-[28px] font-bold text-[#081A3B] mt-4 leading-tight">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-gray-600 leading-8 text-base sm:text-[17px] font-medium">
                    {item.desc}
                  </p>

                  {/* Background Number */}
                  <span className="absolute -bottom-3 right-4 text-7xl font-black text-[#081A3B]/[0.04] select-none pointer-events-none">
                    {i + 1}
                  </span>

                  {/* Bottom bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#F5C200] to-[#FFD84D]" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ FEATURES ══════════ */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F5C200]/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-5 text-center">
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
                  whileHover={{ y: -6 }}
                  className="group relative p-7 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                  style={{ border: "2px solid rgba(245,194,0,0.25)" }}
                  onMouseEnter={e => e.currentTarget.style.border = "2px solid #F5C200"}
                  onMouseLeave={e => e.currentTarget.style.border = "2px solid rgba(245,194,0,0.25)"}
                >
                  {/* Corner accents */}
                  <span className="absolute top-[-2px] left-[-2px] w-4 h-4 border-t-[3px] border-l-[3px] border-yellow-400 rounded-tl-2xl" />
                  <span className="absolute top-[-2px] right-[-2px] w-4 h-4 border-t-[3px] border-r-[3px] border-yellow-400 rounded-tr-2xl" />
                  <span className="absolute bottom-[-2px] left-[-2px] w-4 h-4 border-b-[3px] border-l-[3px] border-yellow-400 rounded-bl-2xl" />
                  <span className="absolute bottom-[-2px] right-[-2px] w-4 h-4 border-b-[3px] border-r-[3px] border-yellow-400 rounded-br-2xl" />

                  {/* Top bar */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#F5C200] via-[#FFD84D] to-[#F5C200]" />

                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/0 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" />

                  <div className="relative w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-[#081A3B] to-[#123D7A] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Icon className="text-[#F5C200]" size={28} />
                    <span className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-[#F5C200] rounded-full border-2 border-white" />
                  </div>

                  <h3 className="mt-5 text-lg sm:text-xl font-bold text-[#081A3B] leading-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-gray-600 text-sm sm:text-base leading-7 font-medium">
                    {item.desc}
                  </p>

                  {/* Bottom bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#F5C200] to-[#FFD84D]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════ STATS ══════════ */}
      <section ref={statsRef} className="py-20 bg-[#081A3B] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#F5C200]/8 blur-[100px] rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#F5C200]/8 blur-[100px] rounded-full" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: "radial-gradient(#F5C200 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-5 text-center z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
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
                whileHover={{ y: -4 }}
                className="relative flex flex-col items-center bg-white/5 backdrop-blur-sm rounded-2xl py-7 px-3 overflow-hidden transition-all duration-300"
                style={{ border: "2px solid rgba(245,194,0,0.25)" }}
                onMouseEnter={e => e.currentTarget.style.border = "2px solid #F5C200"}
                onMouseLeave={e => e.currentTarget.style.border = "2px solid rgba(245,194,0,0.25)"}
              >
                {/* Corner accents */}
                <span className="absolute top-[-2px] left-[-2px] w-3.5 h-3.5 border-t-[2px] border-l-[2px] border-yellow-400 rounded-tl-2xl" />
                <span className="absolute top-[-2px] right-[-2px] w-3.5 h-3.5 border-t-[2px] border-r-[2px] border-yellow-400 rounded-tr-2xl" />
                <span className="absolute bottom-[-2px] left-[-2px] w-3.5 h-3.5 border-b-[2px] border-l-[2px] border-yellow-400 rounded-bl-2xl" />
                <span className="absolute bottom-[-2px] right-[-2px] w-3.5 h-3.5 border-b-[2px] border-r-[2px] border-yellow-400 rounded-br-2xl" />

                {/* Top bar */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#F5C200] to-[#FFD84D]" />

                <h3 className="text-4xl sm:text-5xl font-extrabold text-[#F5C200] leading-none">
                  {stat.value}
                </h3>
                <div className="w-8 h-0.5 bg-[#F5C200]/40 rounded-full mt-3 mb-3" />
                <p className="text-gray-300 text-sm sm:text-base font-medium">{stat.label}</p>

                {/* Bottom bar */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#F5C200] to-[#FFD84D]" />
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