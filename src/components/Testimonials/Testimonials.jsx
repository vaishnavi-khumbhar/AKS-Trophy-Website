import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

import { testimonials } from "../../data/testimonials";

const Testimonials = () => {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-[#081A3B] via-[#0D2555] to-[#081A3B] overflow-hidden relative">

      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#F5C200]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#F5C200]/5 rounded-full blur-[120px]" />
        {/* Dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(#F5C200 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Dashed circle decorations */}
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full border border-dashed border-[#F5C200]/10" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full border border-dashed border-[#F5C200]/10" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#F5C200]/15 border border-[#F5C200]/30 text-[#F5C200] text-sm font-semibold">
           
            Testimonials
           
          </span>

          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            What Our{" "}
            <span className="text-[#F5C200]">Clients Say</span>
          </h2>

          {/* Divider */}
          <div className="flex items-center justify-center gap-3 mt-5 mb-5">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#F5C200]/60" />
            <span className="w-2 h-2 rounded-full bg-[#F5C200]" />
            <span className="w-2 h-2 rounded-full bg-[#F5C200]/40" />
            <span className="w-2 h-2 rounded-full bg-[#F5C200]" />
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#F5C200]/60" />
          </div>

          <p className="max-w-3xl mx-auto text-gray-300 leading-8 text-base sm:text-lg md:text-xl font-medium">
            Hear from schools, organizations, event planners, and customers
            across Maharashtra who trust AKS Trophy for premium awards,
            customized trophies, medals, shields, and mementos.
          </p>
        </motion.div>

        {/* SLIDER */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id} className="pb-10">
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group relative h-full bg-white rounded-2xl p-6 shadow-xl transition-all duration-300 overflow-hidden"
                style={{ border: "2px solid #F5C200" }}
              >
                {/* Corner accents */}
                <span className="absolute top-[-2px] left-[-2px] w-4 h-4 border-t-[3px] border-l-[3px] border-yellow-400 rounded-tl-2xl" />
                <span className="absolute top-[-2px] right-[-2px] w-4 h-4 border-t-[3px] border-r-[3px] border-yellow-400 rounded-tr-2xl" />
                <span className="absolute bottom-[-2px] left-[-2px] w-4 h-4 border-b-[3px] border-l-[3px] border-yellow-400 rounded-bl-2xl" />
                <span className="absolute bottom-[-2px] right-[-2px] w-4 h-4 border-b-[3px] border-r-[3px] border-yellow-400 rounded-br-2xl" />

                {/* Top yellow bar */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#F5C200] via-[#FFD84D] to-[#F5C200]" />

                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/0 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none rounded-2xl" />

                {/* Quote icon */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#0B2C5D] to-[#123D7A] flex items-center justify-center shadow-md">
                    <Quote size={20} className="text-[#F5C200]" />
                  </div>
                  {/* Rating top-right */}
                  <div className="flex gap-0.5">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="#F5C200" color="#F5C200" />
                    ))}
                  </div>
                </div>

                {/* Review */}
                <p className="relative z-10 mt-4 text-gray-600 leading-7 text-[15px] min-h-[100px]">
                  "{item.review}"
                </p>

                {/* User */}
                <div className="relative z-10 flex items-center gap-3 mt-5 pt-4 border-t border-[#F5C200]/20">
                  <div className="relative shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-[#F5C200]"
                    />
                    {/* Online dot */}
                    <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-white" />
                  </div>

                  <div className="min-w-0">
                    <h4 className="text-[#081A3B] font-bold text-base truncate">
                      {item.name}
                    </h4>
                    <p className="text-gray-500 text-sm truncate">
                      {item.designation}
                    </p>
                  </div>

                  {/* Verified badge */}
                  <div className="ml-auto shrink-0 flex items-center gap-1 bg-green-50 border border-green-200 rounded-full px-2 py-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                    <span className="text-[10px] text-green-600 font-medium">Verified</span>
                  </div>
                </div>

                {/* Bottom yellow bar */}
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#F5C200] to-[#FFD84D]" />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;