import { MessageCircle, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="py-5 lg:py-10 bg-[#F8F8F6] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#D4AF37]/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#0A1E4A] to-[#081A3B] border border-[#D4AF37]/20 rounded-[40px] px-8 py-14 lg:px-16 lg:py-16 text-center shadow-2xl"
        >
          {/* Badge */}
          <span className="inline-block px-4 py-2 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-sm font-medium">
            Make Every Achievement Memorable
          </span>

          {/* Heading */}
          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Looking for Premium
            <span className="text-[#D4AF37]">
              {" "}Customized Trophies?
            </span>
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-3xl mx-auto text-gray-300 leading-8">
            Contact AKS Trophy today for customized trophies,
            awards, medals, and bulk orders. We ensure premium
            quality, unique designs, and timely delivery.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">
            
            <a
              href="https://wa.me/91YOURNUMBER"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#D4AF37] hover:bg-[#c79d1d] text-[#081A3B] px-8 py-4 rounded-full font-semibold transition duration-300 hover:scale-105"
            >
              <MessageCircle size={20} />
              WhatsApp Us
            </a>

            <a
              href="tel:+91YOURNUMBER"
              className="inline-flex items-center justify-center gap-2 border border-[#D4AF37] text-white hover:bg-[#D4AF37] hover:text-[#081A3B] px-8 py-4 rounded-full font-semibold transition duration-300"
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