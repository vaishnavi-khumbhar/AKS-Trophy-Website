import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectCoverflow,
  Pagination,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { MessageCircle } from "lucide-react";
import { featuredProducts } from "../../data/featuredProducts";

const FeaturedProducts = () => {
  return (
    <section className="py-10 lg:py-14 bg-[#081A3B] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-10 lg:mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] text-sm font-medium">
            Featured Collection
          </span>

          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Explore Our Premium{" "}
            <span className="text-[#D4AF37]">Trophy Collection</span>
          </h2>

        <p className="mt-3 max-w-3xl mx-auto text-gray-300 leading-8 text-base sm:text-lg font-medium">
  Premium trophies, awards, and medals crafted with exceptional quality and elegance to celebrate every achievement.
</p>
        </div>

        {/* Slider */}
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 6,
            stretch: 0,
            depth: 160,
            modifier: 2,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          breakpoints={{
            320: { slidesPerView: 1.1 },
            480: { slidesPerView: 1.2 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >

          {featuredProducts.map((product) => (
            <SwiperSlide key={product.id}>
              
              {/* CARD */}
              <div className="group bg-white rounded-[24px] overflow-hidden shadow-xl border border-[#D4AF37]/10 hover:border-[#D4AF37]/40 transition-all duration-500 w-full max-w-[300px] mx-auto flex flex-col">

                {/* IMAGE */}
                <div className="h-[260px] sm:h-[270px] md:h-[280px] flex items-center justify-center bg-gradient-to-b from-[#fffdf8] via-white to-[#fafafa] p-2 overflow-hidden">

                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition duration-500"
                  />

                </div>

                {/* CONTENT (TIGHT SPACING FIX) */}
                <div className="p-3 sm:p-4 text-center flex flex-col items-center">

                  <span className="inline-block bg-[#D4AF37]/10 text-[#D4AF37] px-3 py-1 rounded-full text-xs font-medium">
                    {product.category}
                  </span>

                  <h3 className="mt-2 text-lg sm:text-xl font-bold text-[#081A3B] min-h-[40px] flex items-center justify-center">
                    {product.name}
                  </h3>

                  <a
                    href={`https://wa.me/91YOURNUMBER?text=Hi, I am interested in ${product.name}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 flex items-center justify-center gap-2 w-full bg-[#D4AF37] hover:bg-[#caa229] text-[#081A3B] py-2 rounded-xl font-semibold transition"
                  >
                    <MessageCircle size={18} />
                    Enquire
                  </a>

                </div>

              </div>

            </SwiperSlide>
          ))}

        </Swiper>

      </div>
    </section>
  );
};

export default FeaturedProducts;