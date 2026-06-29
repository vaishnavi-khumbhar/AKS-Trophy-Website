import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "../data/faq";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFAQ = (index) => setActiveIndex(activeIndex === index ? null : index);

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative pt-35 pb-28 bg-[#081A3B] overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#F5C200]/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#F5C200]/5 blur-[80px] rounded-full" />

        <div className="max-w-5xl mx-auto px-5 text-center relative z-10">

          <span className="inline-block px-4 py-2 rounded-full bg-[#F5C200]/10 border border-[#F5C200]/30 text-[#F5C200] text-sm font-semibold tracking-wide">
            Frequently Asked Questions
          </span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-5 text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
          >
            Answers to Your
            <span className="text-[#F5C200]"> Common Questions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-5 max-w-2xl mx-auto text-gray-300 leading-7 text-sm sm:text-base"
          >
            Find quick answers about our trophies, customization options,
            logo engraving, bulk orders, delivery timelines, and everything
            you need to know before placing your order with AKS Trophy.
          </motion.p>

        </div>
      </section>

      {/* ── FAQ ACCORDION ── */}
      <section className="bg-[#F8F8F6] pt-14 pb-14">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">

          {/* Section heading */}
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-2 rounded-full bg-[#081A3B]/10 border border-[#081A3B]/30 text-[#081A3B] text-sm font-semibold tracking-wide">
              Frequently Asked Questions
            </span>

            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#081A3B] leading-tight">
              Got Questions?
              <span className="text-[#F5C200]"> We Have Answers</span>
            </h2>

            <p className="mt-5 max-w-3xl mx-auto text-gray-600 leading-8 text-base sm:text-lg font-medium">
              Explore answers to frequently asked questions about our premium trophies,
              customization options, ordering process, and timely delivery services.
            </p>
          </div>

          {/* Accordion */}
         <div className="space-y-5">
  {faqs.map((faq, index) => (
    <motion.div
      key={index}
      layout
      whileHover={{ y: -2 }}
      className={`bg-white rounded-3xl shadow-md overflow-hidden border transition-all duration-300 ${
        activeIndex === index
          ? "border-[#F5C200] shadow-xl"
          : "border-gray-100 hover:border-[#F5C200]/40"
      }`}
    >
      {/* Question */}
      <button
        onClick={() => toggleFAQ(index)}
        className="w-full flex items-center justify-between p-7 sm:p-8 text-left"
      >
        <span className="text-lg sm:text-xl lg:text-[22px] font-semibold text-[#081A3B] pr-4 leading-8">
          {faq.question}
        </span>

        <motion.div
          animate={{ rotate: activeIndex === index ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex items-center justify-center w-11 h-11 rounded-full bg-[#F5C200]/10 shrink-0"
        >
          <ChevronDown size={22} className="text-[#F5C200]" />
        </motion.div>
      </button>

      {/* Answer */}
      <AnimatePresence>
        {activeIndex === index && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-7 sm:px-8 pb-7 sm:pb-8 pt-5 border-t border-[#F5C200]/20">
              <p className="text-gray-600 text-base sm:text-lg lg:text-[18px] leading-9 font-medium">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  ))}
</div>


          {/* CTA box */}
          <div className="mt-16 bg-[#081A3B] rounded-[32px] p-8 sm:p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#F5C200]/5 blur-[60px] rounded-full pointer-events-none" />

            <h2 className="text-2xl sm:text-3xl font-bold text-white relative z-10">
              Still Have Questions?
            </h2>

            <p className="mt-4 text-gray-300 leading-8 text-sm sm:text-base relative z-10">
              Contact AKS Trophy for customized trophies, bulk orders,
              and expert guidance.
            </p>

            <a
              href="https://wa.me/91YOURNUMBER"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 bg-[#F5C200] text-[#081A3B] px-8 py-4 rounded-full font-bold hover:bg-yellow-300 hover:scale-105 transition-all duration-300 shadow-lg shadow-yellow-400/20 relative z-10"
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>
          </div>

        </div>
      </section>
    </>
  );
};

export default FAQ;
