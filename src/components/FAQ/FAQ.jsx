import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "../../data/faq";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const homeFaqs = faqs.slice(0, 3);

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-b from-[#F8F8F6] to-white relative overflow-hidden">

      {/* Background decorations */}
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
        <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full border border-dashed border-[#F5C200]/15" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full border border-dashed border-[#F5C200]/15" />
      </div>

      <div className="relative max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* HEADING */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#F5C200]/12 border border-[#F5C200]/35 text-[#081A3B] text-sm font-semibold">
          
            FAQ
           
          </span>

          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#081A3B]">
            Frequently Asked{" "}
            <span className="text-[#F5C200]">Questions</span>
          </h2>

          {/* Divider */}
          <div className="flex items-center justify-center gap-3 mt-5 mb-5">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#F5C200]/60" />
            <span className="w-2 h-2 rounded-full bg-[#F5C200]" />
            <span className="w-2 h-2 rounded-full bg-[#F5C200]/40" />
            <span className="w-2 h-2 rounded-full bg-[#F5C200]" />
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#F5C200]/60" />
          </div>

          <p className="text-gray-600 leading-8 text-base sm:text-lg md:text-xl font-medium max-w-3xl mx-auto">
            Find answers about trophy customization, bulk orders,
            wholesale pricing, Maharashtra delivery, premium materials,
            and our simple ordering process.
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="space-y-5">
          {homeFaqs.map((faq, index) => (
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
              {/* Corner accents — always visible when active */}
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

              {/* Number badge */}
              <div className="absolute left-5 sm:left-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-[0.06] text-6xl font-black text-[#081A3B] select-none">
                {String(index + 1).padStart(2, "0")}
              </div>

              <button
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between p-6 sm:p-7 text-left"
              >
                <div className="flex items-center gap-4 pr-4">
                  {/* Index pill */}
                  <span
                    className="shrink-0 w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold transition-all duration-300"
                    style={{
                      background: activeIndex === index ? "#F5C200" : "rgba(245,194,0,0.12)",
                      color: activeIndex === index ? "#081A3B" : "#F5C200",
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-[#081A3B]">
                    {faq.question}
                  </h3>
                </div>

                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="shrink-0 flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300"
                  style={{
                    background: activeIndex === index ? "#F5C200" : "rgba(245,194,0,0.10)",
                  }}
                >
                  <ChevronDown
                    size={20}
                    style={{ color: activeIndex === index ? "#081A3B" : "#F5C200" }}
                  />
                </motion.div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-4 border-t border-[#F5C200]/15">
                      <div className="flex gap-3">
                        {/* Left accent bar */}
                        <div className="w-1 shrink-0 rounded-full bg-gradient-to-b from-[#F5C200] to-[#F5C200]/20" />
                        <p className="text-gray-600 text-base leading-7">
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

        {/* BUTTON */}
        <div className="text-center mt-12">
          <Link
            to="/faq"
            className="group relative inline-flex items-center justify-center gap-2 bg-[#081A3B] hover:bg-[#102A5C] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg overflow-hidden"
          >
            {/* Button shine effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <span className="relative">View All FAQs</span>
            <span className="relative w-6 h-6 rounded-full bg-[#F5C200] flex items-center justify-center">
              <ChevronDown size={14} className="text-[#081A3B] -rotate-90" />
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default FAQ;