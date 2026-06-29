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
    <section className="relative py-10 lg:py-16 bg-[#081A3B] overflow-hidden">

      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#F5C200]/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#F5C200]/6 rounded-full blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(#F5C200 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full border border-dashed border-[#F5C200]/10" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full border border-dashed border-[#F5C200]/10" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* HEADING */}
        <div className="text-center mb-10 lg:mb-14">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#F5C400]/15 border border-[#F5C400]/30 text-[#F5C400] font-semibold text-sm">
            800+ Trophy Designs
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Explore Our Premium{" "}
            <span className="text-[#F5C400]">Trophy Collection</span>
          </h2>

          {/* Divider */}
          <div className="flex items-center justify-center gap-3 mt-5 mb-5">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#F5C200]/60" />
            <span className="w-2 h-2 rounded-full bg-[#F5C200]" />
            <span className="w-2 h-2 rounded-full bg-[#F5C200]/40" />
            <span className="w-2 h-2 rounded-full bg-[#F5C200]" />
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#F5C200]/60" />
          </div>

          <p className="max-w-4xl mx-auto text-gray-300 leading-8 text-base sm:text-lg font-medium">
            Discover our premium collection of Wooden, Acrylic, Metal, Glass,
            Fiber Trophies, Shields, Medals, Sports Cups, Mementos, and
            Customized Awards. Wholesale & Retail available with delivery
            across Maharashtra.
          </p>
        </div>

        {/* SLIDER */}
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
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
            <SwiperSlide key={product.id} className="pb-10">
              <div
                className="group relative bg-white rounded-2xl overflow-hidden shadow-xl transition-all duration-500 hover:-translate-y-2 w-full max-w-[300px] mx-auto flex flex-col"
                style={{ border: "2px solid rgba(245,196,0,0.3)" }}
                onMouseEnter={e => e.currentTarget.style.border = "2px solid #F5C400"}
                onMouseLeave={e => e.currentTarget.style.border = "2px solid rgba(245,196,0,0.3)"}
              >
                {/* Corner accents */}
                <span className="absolute top-[-2px] left-[-2px] w-4 h-4 border-t-[3px] border-l-[3px] border-yellow-400 rounded-tl-2xl z-10" />
                <span className="absolute top-[-2px] right-[-2px] w-4 h-4 border-t-[3px] border-r-[3px] border-yellow-400 rounded-tr-2xl z-10" />
                <span className="absolute bottom-[-2px] left-[-2px] w-4 h-4 border-b-[3px] border-l-[3px] border-yellow-400 rounded-bl-2xl z-10" />
                <span className="absolute bottom-[-2px] right-[-2px] w-4 h-4 border-b-[3px] border-r-[3px] border-yellow-400 rounded-br-2xl z-10" />

                {/* Top bar */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#F5C400] via-[#FFD84D] to-[#F5C400] z-10" />

                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/0 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none z-0" />

                {/* Image */}
                <div className="relative h-[260px] sm:h-[270px] md:h-[280px] flex items-center justify-center bg-gradient-to-b from-[#FFFCE8] via-white to-[#FAFAFA] p-2 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-108 transition duration-500"
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 p-4 text-center flex flex-col items-center border-t-2 border-[#F5C400]/15">

                  <span className="inline-flex items-center gap-1 bg-[#F5C400]/15 text-[#081A3B] px-3 py-1 rounded-full text-xs font-bold border border-[#F5C400]/25">
                    <span className="w-1 h-1 rounded-full bg-[#F5C400] inline-block" />
                    {product.category}
                  </span>

                  <h3 className="mt-3 text-lg sm:text-xl font-bold text-[#081A3B] min-h-[55px] flex items-center justify-center">
  {product.name}
</h3>

<a
  href={`https://wa.me/91YOURNUMBER?text=Hi, I am interested in ${product.name}`}
  target="_blank"
  rel="noreferrer"
  className="group/btn mt-3 relative flex items-center justify-center gap-2 w-full bg-[#F5C400] hover:bg-[#E5B800] text-[#081A3B] py-3 rounded-xl font-bold transition-all duration-300 shadow-md hover:shadow-lg overflow-hidden"
>
  {/* Shine sweep */}
  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />

  <MessageCircle size={18} className="relative z-10" />

  <span className="relative z-10">Enquire Now</span>
</a>

                </div>

                {/* Bottom bar */}
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#F5C400] to-[#FFD84D]" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* BOTTOM STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          {[
            { num: "800+", label: "Designs" },
            { num: "₹50", label: "Starting Price" },
            { num: "₹50K", label: "Premium Awards" },
            { num: "All MH", label: "Delivery" },
          ].map((stat, i) => (
            <div
              key={i}
              className="group relative bg-white/8 backdrop-blur-sm rounded-xl p-4 text-center overflow-hidden transition-all duration-300 hover:-translate-y-1"
              style={{ border: "2px solid rgba(245,196,0,0.25)" }}
              onMouseEnter={e => e.currentTarget.style.border = "2px solid #F5C400"}
              onMouseLeave={e => e.currentTarget.style.border = "2px solid rgba(245,196,0,0.25)"}
            >
              {/* Corner accents */}
              <span className="absolute top-[-2px] left-[-2px] w-3 h-3 border-t-[2px] border-l-[2px] border-yellow-400 rounded-tl-xl" />
              <span className="absolute top-[-2px] right-[-2px] w-3 h-3 border-t-[2px] border-r-[2px] border-yellow-400 rounded-tr-xl" />
              <span className="absolute bottom-[-2px] left-[-2px] w-3 h-3 border-b-[2px] border-l-[2px] border-yellow-400 rounded-bl-xl" />
              <span className="absolute bottom-[-2px] right-[-2px] w-3 h-3 border-b-[2px] border-r-[2px] border-yellow-400 rounded-br-xl" />

              {/* Top bar */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#F5C400] to-[#FFD84D]" />

              <h3 className="text-[#F5C400] text-2xl font-bold">{stat.num}</h3>
              <p className="text-white text-sm mt-1">{stat.label}</p>

              {/* Bottom bar */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#F5C400] to-[#FFD84D]" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedProducts;