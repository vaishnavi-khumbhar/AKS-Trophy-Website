import { motion } from "framer-motion";
import {
  Trophy,
  Award,
  ShieldCheck,
  PackageCheck,
  Truck,
} from "lucide-react";

const trustData = [
  { icon: Trophy, title: "100+", subtitle: "Trophy Designs Available" },
  { icon: Award, title: "Custom", subtitle: "Trophies & Awards" },
  { icon: ShieldCheck, title: "Premium", subtitle: "Quality Materials" },
  { icon: PackageCheck, title: "Bulk", subtitle: "Affordable Pricing" },
  { icon: Truck, title: "Fast", subtitle: "On-Time Delivery" },
];

const TrustSection = () => {
  return (
    <section className="relative py-12 lg:py-16 bg-white overflow-hidden">

      {/* Background glow */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-yellow-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-56 h-56 bg-[#081A3B]/10 rounded-full blur-3xl" />

      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#081A3B 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* HEADER */}
       <div className="text-center mb-12">
  <span className="inline-flex items-center bg-yellow-400/15 border border-yellow-400/50 text-[#0B1F3A] px-5 py-2 rounded-full text-sm font-medium">
    Why Choose AKS Trophy?
  </span>


          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#081A3B]">
            Trusted by Schools,{" "}
            <span className="text-yellow-500">Businesses & Sports Events</span>
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-gray-600 text-base sm:text-lg">
            We deliver premium-quality trophies, medals, and customized awards with precision and excellence.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {trustData.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="group relative bg-white rounded-2xl p-5 sm:p-6 text-center
                  shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                style={{ border: "2px solid #F5C200" }}
              >
                {/* Corner accents */}
                <span className="absolute top-[-2px] left-[-2px] w-4 h-4 border-t-[3px] border-l-[3px] border-yellow-400 rounded-tl-2xl" />
                <span className="absolute top-[-2px] right-[-2px] w-4 h-4 border-t-[3px] border-r-[3px] border-yellow-400 rounded-tr-2xl" />
                <span className="absolute bottom-[-2px] left-[-2px] w-4 h-4 border-b-[3px] border-l-[3px] border-yellow-400 rounded-bl-2xl" />
                <span className="absolute bottom-[-2px] right-[-2px] w-4 h-4 border-b-[3px] border-r-[3px] border-yellow-400 rounded-br-2xl" />

                {/* Hover gold glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/0 to-yellow-500/8 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none rounded-2xl" />

                {/* Top accent line on hover */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#F5C200] via-[#FFD84D] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* ICON BOX */}
                <div className="relative z-10 w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-[#0B2C5D] to-[#123D7A] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Icon size={26} className="text-[#F5C200]" />
                  {/* Yellow dot badge */}
                  <span className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-[#F5C200] rounded-full border-2 border-white" />
                </div>

                {/* TEXT */}
                <div className="relative z-10 mt-5">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#081A3B]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-gray-600">
                    {item.subtitle}
                  </p>
                </div>

                {/* Bottom yellow bar */}
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#F5C200] to-[#FFD84D]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;