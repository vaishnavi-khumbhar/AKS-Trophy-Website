import { Swiper, SwiperSlide } from "swiper/react";

import {
  Autoplay,
  Pagination,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { Star, Quote } from "lucide-react";

import { motion } from "framer-motion";

import { testimonials } from "../../data/testimonials";

const Testimonials = () => {
  return (
    <section className="py-15 lg:py-15 bg-[#081A3B] overflow-hidden">

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] text-sm font-medium">
            Testimonials
          </span>

          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            What Our
            <span className="text-[#D4AF37]">
              {" "}Clients Say
            </span>
          </h2>

         <p className="mt-5 max-w-3xl mx-auto text-gray-300 leading-8 text-base sm:text-lg md:text-xl font-medium">
  Hear from schools, organizations, and event planners who trust AKS Trophy for premium awards that celebrate achievements with excellence and pride.
</p>
        </motion.div>

        {/* Slider */}
        <Swiper
          modules={[
            Autoplay,
            Pagination,
          ]}
          spaceBetween={30}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },

            768: {
              slidesPerView: 2,
            },

            1024: {
              slidesPerView: 3,
            },
          }}
        >

          {testimonials.map((item) => (

           <SwiperSlide key={item.id}>
  <motion.div
    whileHover={{
      y: -8,
      scale: 1.02,
    }}
    transition={{ duration: 0.3 }}
    className="h-full bg-white rounded-[28px] p-6 shadow-xl border border-[#D4AF37]/20 relative overflow-hidden"
  >
    {/* Top Glow */}
    <div className="absolute top-0 left-0 w-full h-1 bg-[#D4AF37]" />

    {/* Quote Icon */}
    <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center">
      <Quote
        size={24}
        className="text-[#D4AF37]"
      />
    </div>

    {/* Review */}
    <p className="mt-4 text-gray-600 leading-7 text-[15px] min-h-[105px]">
      "{item.review}"
    </p>

    {/* Rating */}
    <div className="flex gap-1 mt-4">
      {[...Array(item.rating)].map((_, index) => (
        <Star
          key={index}
          size={16}
          fill="#D4AF37"
          color="#D4AF37"
        />
      ))}
    </div>

    {/* User */}
    <div className="flex items-center gap-3 mt-5 pt-5 border-t border-gray-100">

      <img
        src={item.image}
        alt={item.name}
        className="w-14 h-14 rounded-full object-cover border-2 border-[#D4AF37]"
      />

      <div>
        <h4 className="text-[#081A3B] font-semibold text-base">
          {item.name}
        </h4>

        <p className="text-gray-500 text-sm">
          {item.designation}
        </p>
      </div>

    </div>
  </motion.div>
</SwiperSlide>

          ))}

        </Swiper>

      </div>
    </section>
  );
};

export default Testimonials;