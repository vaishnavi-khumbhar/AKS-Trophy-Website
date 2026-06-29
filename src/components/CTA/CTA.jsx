import { MessageCircle, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="py-8 lg:py-14 bg-[#F5F9FF] relative overflow-hidden">

      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#F5C200]/10 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#081A3B]/10 rounded-full blur-[140px]" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-r from-[#081A3B] via-[#0A2559] to-[#081A3B] rounded-[35px] lg:rounded-[45px] px-6 py-12 sm:px-10 lg:px-16 lg:py-16 text-center shadow-[0_20px_60px_rgba(8,26,59,0.25)] overflow-hidden"
        >
          
          {/* Decorative Circle */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#F5C200]/10 rounded-full" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#F5C200]/10 rounded-full" />

          {/* Badge */}
          <span className="inline-block px-5 py-2 rounded-full bg-[#F5C200]/15 border border-[#F5C200]/20 text-[#F5C200] text-sm font-semibold">
             Maharashtra's Trusted Trophy Manufacturer
          </span>

          {/* Heading */}
          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Ready To Order Your
            <span className="text-[#F5C200]">
              {" "}Perfect Trophy?
            </span>
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-4xl mx-auto text-gray-300 leading-8 text-base sm:text-lg">
            AKS Small Trophy House offers <span className="text-[#F5C200] font-semibold">800+ Trophy Designs</span>
            including Wooden, Acrylic, Metal, Glass, Fiber, Shields,
            Medals, Sports Cups, Mementos and Customized Awards.
            Wholesale & Retail orders available with delivery across Maharashtra.
            Prices start from <span className="text-[#F5C200] font-semibold">₹50 to ₹50,000</span>.
          </p>

         

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">

            <a
              href="https://wa.me/91YOURNUMBER"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#F5C200] hover:bg-[#e6b800] text-[#081A3B] px-8 py-4 rounded-full font-bold transition duration-300 hover:scale-105 shadow-lg"
            >
              <MessageCircle size={20} />
              WhatsApp Now
            </a>

            <a
              href="tel:+91YOURNUMBER"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#F5C200] text-white hover:bg-[#F5C200] hover:text-[#081A3B] px-8 py-4 rounded-full font-bold transition duration-300"
            >
              <PhoneCall size={20} />
              Call Now
            </a>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default CTA;