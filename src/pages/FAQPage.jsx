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
      <section className="relative pt-32 sm:pt-36 pb-24 sm:pb-28 bg-[#081A3B] overflow-hidden">
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
            Frequently Asked Questions
            <span className="w-1.5 h-1.5 rounded-full bg-[#F5C200] inline-block" />
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
            Find quick answers about our trophies, customization options,
            logo engraving, bulk orders, delivery timelines, and everything
            you need to know before placing your order with AKS Trophy.
          </motion.p>

        </div>
      </section>

      {/* ── FAQ ACCORDION ── */}
      <section className="bg-[#F8F8F6] pt-14 pb-14 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#F5C200]/8 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#081A3B]/5 rounded-full blur-[120px]" />
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: "radial-gradient(#081A3B 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
        </div>

        <div className="relative max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">

          {/* Section heading */}
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#081A3B]/10 border border-[#081A3B]/30 text-[#081A3B] text-sm font-semibold tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F5C200] inline-block" />
              Frequently Asked Questions
              <span className="w-1.5 h-1.5 rounded-full bg-[#F5C200] inline-block" />
            </span>

            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#081A3B] leading-tight">
              Got Questions?
              <span className="text-[#F5C200]"> We Have Answers</span>
            </h2>

            {/* Divider */}
            <div className="flex items-center justify-center gap-3 mt-5 mb-5">
              <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#F5C200]/60" />
              <span className="w-2 h-2 rounded-full bg-[#F5C200]" />
              <span className="w-2 h-2 rounded-full bg-[#F5C200]/40" />
              <span className="w-2 h-2 rounded-full bg-[#F5C200]" />
              <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#F5C200]/60" />
            </div>

            <p className="max-w-3xl mx-auto text-gray-600 leading-8 text-base sm:text-lg font-medium">
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
                whileHover={{ y: -3 }}
                className="group relative bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300"
                style={{
                  border: activeIndex === index
                    ? "2px solid #F5C200"
                    : "2px solid rgba(245,194,0,0.2)",
                  boxShadow: activeIndex === index
                    ? "0 8px 30px rgba(245,194,0,0.12)"
                    : "0 2px 12px rgba(0,0,0,0.06)",
                }}
              >
                {/* Corner accents — active only */}
                {activeIndex === index && (
                  <>
                    <span className="absolute top-[-2px] left-[-2px] w-4 h-4 border-t-[3px] border-l-[3px] border-yellow-400 rounded-tl-2xl z-10" />
                    <span className="absolute top-[-2px] right-[-2px] w-4 h-4 border-t-[3px] border-r-[3px] border-yellow-400 rounded-tr-2xl z-10" />
                    <span className="absolute bottom-[-2px] left-[-2px] w-4 h-4 border-b-[3px] border-l-[3px] border-yellow-400 rounded-bl-2xl z-10" />
                    <span className="absolute bottom-[-2px] right-[-2px] w-4 h-4 border-b-[3px] border-r-[3px] border-yellow-400 rounded-br-2xl z-10" />
                  </>
                )}

                {/* Top bar — active only */}
                {activeIndex === index && (
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#F5C200] via-[#FFD84D] to-[#F5C200]" />
                )}

                {/* Ghost number */}
                <div className="absolute left-5 sm:left-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-[0.06] text-6xl font-black text-[#081A3B] select-none">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 sm:p-7 lg:p-8 text-left"
                >
                  <div className="flex items-center gap-4 pr-4">
                    {/* Index pill */}
                    <span
                      className="shrink-0 w-9 h-9 rounded-xl flex items-center justify-center text-xs font-bold transition-all duration-300"
                      style={{
                        background: activeIndex === index ? "#F5C200" : "rgba(245,194,0,0.12)",
                        color: activeIndex === index ? "#081A3B" : "#F5C200",
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-base sm:text-lg lg:text-[22px] font-semibold text-[#081A3B] leading-7 sm:leading-8">
                      {faq.question}
                    </span>
                  </div>

                  <motion.div
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0 flex items-center justify-center w-10 sm:w-11 h-10 sm:h-11 rounded-full transition-all duration-300"
                    style={{
                      background: activeIndex === index ? "#F5C200" : "rgba(245,194,0,0.10)",
                    }}
                  >
                    <ChevronDown
                      size={22}
                      style={{ color: activeIndex === index ? "#081A3B" : "#F5C200" }}
                    />
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
                      <div className="px-6 sm:px-7 lg:px-8 pb-6 sm:pb-7 lg:pb-8 pt-5 border-t border-[#F5C200]/20">
                        <div className="flex gap-3">
                          <div className="w-1 shrink-0 rounded-full bg-gradient-to-b from-[#F5C200] to-[#F5C200]/20" />
                          <p className="text-gray-600 text-base sm:text-lg lg:text-[18px] leading-8 sm:leading-9 font-medium">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Bottom bar */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[3px] transition-all duration-300"
                  style={{
                    background: activeIndex === index
                      ? "linear-gradient(90deg, #F5C200, #FFD84D)"
                      : "transparent",
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* CTA box */}
          <div className="mt-16 relative bg-[#081A3B] rounded-[32px] p-8 sm:p-12 text-center overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#F5C200]/5 blur-[60px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#F5C200]/5 blur-[60px] rounded-full pointer-events-none" />
            <div
              className="absolute inset-0 opacity-[0.04] pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(#F5C200 1px, transparent 1px)",
                backgroundSize: "26px 26px",
              }}
            />

            {/* Corner accents */}
            <span className="absolute top-[-2px] left-[-2px] w-6 h-6 border-t-[3px] border-l-[3px] border-yellow-400 rounded-tl-[32px] z-10" />
            <span className="absolute top-[-2px] right-[-2px] w-6 h-6 border-t-[3px] border-r-[3px] border-yellow-400 rounded-tr-[32px] z-10" />
            <span className="absolute bottom-[-2px] left-[-2px] w-6 h-6 border-b-[3px] border-l-[3px] border-yellow-400 rounded-bl-[32px] z-10" />
            <span className="absolute bottom-[-2px] right-[-2px] w-6 h-6 border-b-[3px] border-r-[3px] border-yellow-400 rounded-br-[32px] z-10" />

            {/* Top bar */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#F5C200] via-[#FFD84D] to-[#F5C200]" />

            <h2 className="text-2xl sm:text-3xl font-bold text-white relative z-10">
              Still Have Questions?
            </h2>

            <p className="mt-4 text-gray-300 leading-8 text-sm sm:text-base relative z-10">
              Contact AKS Trophy for customized trophies, bulk orders,
              and expert guidance.
            </p>

            <a
  href="https://wa.me/919307623168"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 mt-6 sm:mt-8 bg-[#F5C200] text-[#081A3B] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base hover:bg-yellow-300 hover:scale-105 transition-all duration-300 shadow-lg shadow-yellow-400/20 relative z-10"
>
  <MessageCircle size={18} />
  Chat on WhatsApp
</a>

            {/* Bottom bar */}
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#F5C200] to-[#FFD84D]" />
          </div>

        </div>
      </section>
    </>
  );
};

export default FAQ;