
import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "../data/faq";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
<>

      <section className="relative pt-28 pb-28 bg-[#081A3B] overflow-hidden">

  <div className="absolute top-0 left-0 w-64 h-64 bg-[#D4AF37]/10 blur-[100px] rounded-full" />

  <div className="max-w-5xl mx-auto px-5 text-center">

    {/* BADGE */}
    <span className="inline-block px-3 py-2 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-sm">
      Frequently Asked Questions
    </span>

    {/* HEADING */}
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-white"
    >
      Answers to Your
      <span className="text-[#D4AF37]"> Common Questions</span>
    </motion.h1>

    {/* PARAGRAPH */}
    <p className="mt-4 max-w-2xl mx-auto text-gray-300 leading-7 text-sm sm:text-base">
      Find quick answers about our trophies, customization options,
      logo engraving, bulk orders, delivery timelines, and everything
      you need to know before placing your order with AKS Trophy.
    </p>

  </div>

</section>


{/* faq start */}
    <section className="bg-[#F8F8F6] pt-10 pb-10">
      <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-2 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-sm font-medium">
            Frequently Asked Questions
          </span>

          <h1 className="mt-5 text-4xl sm:text-5xl font-bold text-[#081A3B]">
            Got Questions?
            <span className="text-[#D4AF37]"> We Have Answers</span>
          </h1>

          <p className="mt-5 max-w-3xl mx-auto text-gray-600 leading-8 text-base sm:text-lg md:text-xl font-medium">
  Explore answers to frequently asked questions about our premium trophies, customization options, ordering process, and timely delivery services.
</p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              layout
              className="bg-white rounded-3xl shadow-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-semibold text-[#081A3B] pr-4">
                  {faq.question}
                </span>

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
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-gray-600 leading-8">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-[#081A3B] rounded-[32px] p-8 sm:p-12 text-center">
          <h2 className="text-3xl font-bold text-white">
            Still Have Questions?
          </h2>

          <p className="mt-4 text-gray-300 leading-8">
            Contact AKS Trophy for customized trophies, bulk orders,
            and expert guidance.
          </p>

          <a
            href="https://wa.me/91YOURNUMBER"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-8 bg-[#D4AF37] text-[#081A3B] px-8 py-4 rounded-full font-semibold hover:scale-105 transition duration-300"
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