import { motion } from "framer-motion";
import {
  Trophy,
  Award,
  Truck,
  ShieldCheck,
  Package,
  HeartHandshake,
} from "lucide-react";

import trophyImage from "../../assets/images/whychoose/trophy.png";

const features = [
  {
    icon: Trophy,
    title: "100+ Trophy Designs",
    description: "Wide range of premium trophies crafted for every occasion.",
  },
  {
    icon: Award,
    title: "Customized Awards",
    description: "Logo engraving, name printing and event-specific designs.",
  },
  {
    icon: ShieldCheck,
    title: "Premium Quality",
    description: "Crafted using high-quality materials with fine detailing.",
  },
  {
    icon: Package,
    title: "Bulk Pricing",
    description: "Affordable pricing options for schools and organizations.",
  },
  {
    icon: Truck,
    title: "On-Time Delivery",
    description: "Quick production and timely delivery across Maharashtra.",
  },
  {
    icon: HeartHandshake,
    title: "Customer Satisfaction",
    description: "Dedicated support to ensure a seamless experience.",
  },
];

const WhyChoose = () => {
  return (
    <section className="relative py-14 lg:py-15 overflow-hidden bg-white">

      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F5C200]/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0B2C5D]/10 rounded-full blur-[160px]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "radial-gradient(#0B2C5D 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full border border-dashed border-[#F5C200]/15" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full border border-dashed border-[#F5C200]/15" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Section Badge */}
       
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B2C5D] leading-tight">
              Excellence In Every{" "}
              <span className="text-[#F5C200]">Award We Create</span>
            </h2>

            {/* Divider */}
            <div className="flex items-center gap-3 mt-5 mb-5">
              <span className="h-px w-16 bg-gradient-to-r from-[#F5C200]/60 to-transparent" />
              <span className="w-2 h-2 rounded-full bg-[#F5C200]" />
              <span className="w-2 h-2 rounded-full bg-[#F5C200]/40" />
            </div>

            <p className="text-gray-600 leading-7 text-sm sm:text-base lg:text-lg font-medium max-w-2xl">
              AKS Trophy delivers premium trophies, medals, and mementos crafted
              with precision to celebrate every achievement with elegance and pride.
            </p>

            {/* FEATURES GRID */}
            <div className="grid sm:grid-cols-2 gap-4 mt-10">
              {features.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -6, scale: 1.02 }}
                    className="group relative bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                    style={{ border: "2px solid rgba(245,194,0,0.25)" }}
                    onMouseEnter={e => e.currentTarget.style.border = "2px solid #F5C200"}
                    onMouseLeave={e => e.currentTarget.style.border = "2px solid rgba(245,194,0,0.25)"}
                  >
                    {/* Corner accents */}
                    <span className="absolute top-[-2px] left-[-2px] w-4 h-4 border-t-[3px] border-l-[3px] border-yellow-400 rounded-tl-2xl" />
                    <span className="absolute top-[-2px] right-[-2px] w-4 h-4 border-t-[3px] border-r-[3px] border-yellow-400 rounded-tr-2xl" />
                    <span className="absolute bottom-[-2px] left-[-2px] w-4 h-4 border-b-[3px] border-l-[3px] border-yellow-400 rounded-bl-2xl" />
                    <span className="absolute bottom-[-2px] right-[-2px] w-4 h-4 border-b-[3px] border-r-[3px] border-yellow-400 rounded-br-2xl" />

                    {/* Top accent line on hover */}
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#F5C200] via-[#FFD84D] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Hover glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/0 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none rounded-2xl" />

                    {/* Ghost number */}
                    <span className="absolute -bottom-1 -right-1 text-6xl font-black text-[#0B2C5D]/[0.04] select-none pointer-events-none">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="flex items-start gap-4 relative z-10">
                      {/* Icon */}
                      <div className="relative shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#0B2C5D] to-[#123D7A] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Icon size={22} className="text-[#F5C200]" />
                        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#F5C200] rounded-full border-2 border-white" />
                      </div>

                      <div className="min-w-0">
                        <h3 className="text-[20px] font-bold text-[#0B2C5D]">
  {item.title}
</h3>
                       <p className="mt-1 text-gray-500 text-[16px] leading-6">
  {item.description}
</p>
                      </div>
                    </div>

                    {/* Bottom bar */}
                    <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#F5C200] to-[#FFD84D]" />
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* RIGHT IMAGE — unchanged */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Glow */}
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute w-[320px] sm:w-[420px] h-[320px] sm:h-[420px] bg-[#F5C200]/25 blur-[140px] rounded-full"
            />

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="relative z-10"
            >
              <img
                src={trophyImage}
                alt="AKS Trophy"
                className="w-[220px] sm:w-[300px] md:w-[380px] lg:w-[480px] xl:w-[550px] mx-auto drop-shadow-[0_20px_50px_rgba(245,194,0,0.35)]"
              />

              {/* COUNTERS */}
             <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-6 w-full max-w-sm mx-auto">
  {[
    { num: "100+", label: "Designs" },
    { num: "5000+", label: "Orders" },
    { num: "100%", label: "Quality" },
  ].map((item, i) => (
    <motion.div
      key={i}
      whileHover={{ y: -4 }}
      className="relative bg-white rounded-xl py-4 sm:py-5 text-center shadow-lg overflow-hidden transition-all duration-300"
      style={{ border: "2px solid rgba(245,194,0,0.3)" }}
    >
      {/* top & bottom bars */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#F5C200] to-[#FFD84D]" />
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#F5C200] to-[#FFD84D]" />

      {/* NUMBER */}
      <h3 className="text-xl sm:text-3xl font-bold text-[#F5C200]">
        {item.num}
      </h3>

      {/* LABEL */}
      <p
        className="text-[15px] sm:text-[16px] md:text-[19px] text-[#0B2C5D] mt-1 font-medium"
        style={{ fontFamily: "Cormorant Garamond, serif" }}
      >
        {item.label}
      </p>
    </motion.div>
  ))}
</div>


            </motion.div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-10 right-0 w-6 h-6 bg-[#F5C200] rounded-full shadow-[0_0_25px_#F5C200]"
            />
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute bottom-20 left-5 w-5 h-5 bg-[#0B2C5D] rounded-full shadow-lg"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyChoose;