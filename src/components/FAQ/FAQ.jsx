import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "../../data/faq";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Homepage वर फक्त 4 FAQs दाखवायचे
  const homeFaqs = faqs.slice(0, 3);

  return (
    <section className="py-10 lg:py-15 bg-[#F8F8F6]">
      <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-2 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-sm font-medium">
            FAQs
          </span>

          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#081A3B]">
            Frequently Asked
            <span className="text-[#D4AF37]"> Questions</span>
          </h2>

          <p className="mt-5 text-gray-600 leading-8 max-w-2xl mx-auto">
            Find quick answers about our trophies, customization,
            delivery, and ordering process.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-5">
          {homeFaqs.map((faq, index) => (
            <motion.div
              key={index}
              layout
className="bg-white rounded-3xl shadow-lg overflow-hidden border border-[#081A3B]"            >
              <button
                onClick={() =>
                  setActiveIndex(
                    activeIndex === index ? null : index
                  )
                }
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <h3 className="text-base sm:text-lg font-semibold text-[#081A3B] pr-4">
                  {faq.question}
                </h3>

                <motion.div
                  animate={{
                    rotate: activeIndex === index ? 180 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="text-[#D4AF37]" />
                </motion.div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-gray-600 leading-7">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* View All FAQs Button */}
        <div className="text-center mt-12">
          <Link
            to="/faq"
            className="inline-flex items-center justify-center bg-[#081A3B] hover:bg-[#0B2559] text-white px-8 py-4 rounded-full font-semibold transition duration-300 hover:scale-105"
          >
            View All FAQs
          </Link>
        </div>

      </div>
    </section>
  );
};

export default FAQ;