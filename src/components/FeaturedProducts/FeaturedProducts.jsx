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
    <section className="py-14 lg:py-16 bg-[#081A3B] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-2 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] text-sm font-medium">
            Featured Collection
          </span>

          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Explore Our Premium
            <span className="text-[#D4AF37]"> Trophy Collection</span>
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-gray-300 leading-8">
            Explore our wide range of premium trophies, awards, medals, and
            mementos crafted to celebrate every achievement with elegance and excellence.
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
            rotate: 8,
            stretch: 0,
            depth: 150,
            modifier: 2,
            slideShadows: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[
            EffectCoverflow,
            Pagination,
            Autoplay,
          ]}
          breakpoints={{
            320: {
              slidesPerView: 1.1,
            },
            480: {
              slidesPerView: 1.2,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
        >
          {featuredProducts.map((product) => (
            <SwiperSlide key={product.id}>

              <div className="group relative bg-white rounded-[30px] overflow-hidden shadow-xl border border-[#D4AF37]/10 hover:border-[#D4AF37]/30 hover:shadow-[0_20px_50px_rgba(212,175,55,0.2)] transition-all duration-500 w-full max-w-[280px] sm:max-w-[300px] md:max-w-[310px] mx-auto">

                {/* Image */}
                <div className="h-[180px] sm:h-[220px] md:h-[240px] flex items-center justify-center bg-gradient-to-b from-[#fffdf8] via-white to-[#fafafa] p-4 sm:p-5 overflow-hidden">

                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain transition-all duration-700 group-hover:scale-110"
                  />

                </div>

                {/* Content */}
                <div className="p-5 text-center">

                  <span className="inline-block bg-[#D4AF37]/10 text-[#D4AF37] px-4 py-2 rounded-full text-sm font-medium">
                    {product.category}
                  </span>

                  <h3 className="mt-4 text-xl sm:text-2xl font-bold text-[#081A3B] min-h-[60px] flex items-center justify-center">
                    {product.name}
                  </h3>

                  <a
                    href={`https://wa.me/91YOURNUMBER?text=Hi, I am interested in ${product.name}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 flex items-center justify-center gap-2 w-full bg-[#D4AF37] hover:bg-[#caa229] text-[#081A3B] py-3 rounded-2xl font-semibold transition-all duration-300"
                  >
                    <MessageCircle size={20} />
                    Enquire on WhatsApp
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