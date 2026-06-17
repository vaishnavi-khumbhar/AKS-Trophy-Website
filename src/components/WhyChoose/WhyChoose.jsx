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
    description:
      "Wide range of premium trophies crafted for every occasion.",
  },
  {
    icon: Award,
    title: "Customized Awards",
    description:
      "Logo engraving, name printing and event-specific designs.",
  },
  {
    icon: ShieldCheck,
    title: "Premium Quality",
    description:
      "Crafted using high-quality materials with fine detailing.",
  },
  {
    icon: Package,
    title: "Bulk Pricing",
    description:
      "Affordable pricing options for schools and organizations.",
  },
  {
    icon: Truck,
    title: "On-Time Delivery",
    description:
      "Quick production and timely delivery across Maharashtra.",
  },
  {
    icon: HeartHandshake,
    title: "Customer Satisfaction",
    description:
      "Dedicated support to ensure a seamless experience.",
  },
];

const WhyChoose = () => {
  return (
    <section className="py-10 lg:py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT CONTENT */}
          <div>
            <span className="inline-block px-5 py-2 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] font-medium">
              Why Choose AKS Trophy?
            </span>

            <h2 className="mt-6 text-4xl lg:text-5xl font-bold text-[#081A3B] leading-tight">
              Excellence In Every
              <span className="text-[#D4AF37]"> Award We Create</span>
            </h2>

          <p className="mt-6 text-gray-600 leading-8 text-base sm:text-lg md:text-xl font-medium max-w-3xl">
  AKS Trophy delivers premium trophies, medals, and mementos crafted with precision to celebrate every achievement with elegance, excellence, and pride.
</p>

           

            {/* FEATURES */}
            <div className="grid sm:grid-cols-2 gap-5 mt-12">
              {features.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      y: 80,
                      scale: 0.8,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.12,
                      type: "spring",
                    }}
                    whileHover={{
                      y: -15,
                      scale: 1.04,
                    }}
                    className="bg-[#F8F8F6] rounded-3xl p-6 shadow-md hover:shadow-2xl border border-gray-100 transition-all duration-300"
                  >
                    <motion.div
                      whileHover={{
                        rotate: 360,
                        scale: 1.15,
                      }}
                      transition={{
                        duration: 0.8,
                      }}
                      className="w-14 h-14 rounded-2xl bg-[#081A3B] flex items-center justify-center"
                    >
                      <Icon size={28} className="text-[#D4AF37]" />
                    </motion.div>

                    <h3 className="mt-5 text-xl font-semibold text-[#081A3B]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-gray-600 leading-7 text-sm">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center lg:justify-end -mt-10 lg:-mt-24"
          >
            {/* Glow */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="absolute w-[350px] h-[350px] bg-[#D4AF37]/20 blur-[120px] rounded-full"
            />

            {/* Trophy */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.5,
                rotate: -20,
                y: 100,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                rotate: 0,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 1.2,
                type: "spring",
                bounce: 0.4,
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 2, 0, -2, 0],
              }}
className="relative z-10 flex flex-col items-center"            >
<img
  src={trophyImage}
  alt="AKS Trophy"
  className="
w-[200px]
sm:w-[230px]
md:w-[320px]
lg:w-[450px]
xl:w-[520px]
mx-auto
drop-shadow-[0_50px_80px_rgba(0,0,0,0.25)]
"
/>


{/* COUNTERS */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="grid grid-cols-3 gap-2 sm:gap-4 mt-6 w-full max-w-sm mx-auto"
>
  <div className="bg-white rounded-2xl shadow-lg border border-gray-100 py-3 px-2 text-center hover:-translate-y-1 transition-all duration-300">
    <h3 className="text-lg sm:text-3xl font-bold text-[#D4AF37]">
      100+
    </h3>
    <p className="text-[10px] sm:text-sm text-gray-500 mt-1">
      Designs
    </p>
  </div>

  <div className="bg-white rounded-2xl shadow-lg border border-gray-100 py-3 px-2 text-center hover:-translate-y-1 transition-all duration-300">
    <h3 className="text-lg sm:text-3xl font-bold text-[#D4AF37]">
      5000+
    </h3>
    <p className="text-[10px] sm:text-sm text-gray-500 mt-1">
      Orders
    </p>
  </div>

  <div className="bg-white rounded-2xl shadow-lg border border-gray-100 py-3 px-2 text-center hover:-translate-y-1 transition-all duration-300">
    <h3 className="text-lg sm:text-3xl font-bold text-[#D4AF37]">
      100%
    </h3>
    <p className="text-[10px] sm:text-sm text-gray-500 mt-1">
      Quality
    </p>
  </div>
</motion.div>
            </motion.div>
            

            {/* Decorative Elements */}
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="absolute top-20 right-0 w-6 h-6 rounded-full bg-[#D4AF37]"
            />

            <motion.div
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="absolute bottom-24 left-10 w-4 h-4 rounded-full bg-[#081A3B]"
            />

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-1/2 left-0 w-10 h-10 border-2 border-[#D4AF37] rounded-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;