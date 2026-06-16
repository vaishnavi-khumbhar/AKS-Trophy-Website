import { motion } from "framer-motion";
import {
  Trophy,
  Award,
  ShieldCheck,
  PackageCheck,
  Truck,
} from "lucide-react";

const trustData = [
  {
    icon: Trophy,
    title: "100+",
    subtitle: "Trophy Designs Available",
  },
  {
    icon: Award,
    title: "Custom",
    subtitle: "Trophies & Awards",
  },
  {
    icon: ShieldCheck,
    title: "Premium",
    subtitle: "Quality Materials",
  },
  {
    icon: PackageCheck,
    title: "Bulk",
    subtitle: "Affordable Pricing",
  },
  {
    icon: Truck,
    title: "Fast",
    subtitle: "On-Time Delivery",
  },
];

const TrustSection = () => {
  return (
<section className="relative py-10 lg:py-14 bg-[#F8F8F6] overflow-hidden">      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-[#D4AF37]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-56 h-56 bg-[#032B7A]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-[#D4AF37]/10 text-[#D4AF37] px-4 py-2 rounded-full text-sm font-medium mb-4">
            Why Choose AKS Trophy?
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#081A3B]">
            Trusted by Schools,
            <span className="text-[#D4AF37]"> Businesses & Sports Events</span>
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-gray-600 leading-8">
            We deliver premium-quality trophies, medals, and customized awards
            crafted with precision and excellence to celebrate every success.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-5">
          {trustData.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                }}
                className="group relative bg-white rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Gold Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/0 to-[#D4AF37]/5 opacity-0 group-hover:opacity-100 transition duration-500" />

                {/* Icon */}
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-[#081A3B] flex items-center justify-center mx-auto group-hover:bg-[#D4AF37] transition duration-300">
                  <Icon
                    size={32}
                    className="text-[#D4AF37] group-hover:text-[#081A3B] transition duration-300"
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 text-center mt-6">
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#081A3B]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm lg:text-base text-gray-600 leading-6">
                    {item.subtitle}
                  </p>
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#D4AF37] group-hover:w-full transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;