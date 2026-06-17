import { useState } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Trophy, Award, Medal, Star, Sparkles } from "lucide-react";


import products from "../data/products";

import "swiper/css";
import "swiper/css/pagination";

import miniImg from "../assets/images/products/mini1r.png";
import mediumImg from "../assets/images/products/medium1r.png";
import bigImg from "../assets/images/products/big1r.png";
import metalImg from "../assets/images/products/metal1r.png";


 import {
  PenTool,
  BadgeCheck,
  Palette,
  PackageCheck,
} from "lucide-react";

const categories = [
  {
    id: 1,
    title: "Mini Wooden Trophies",
    count: "86 Products",
    image: miniImg,
    description:
      "Elegant mini-sized wooden trophies perfect for school competitions, events, and recognition programs.",
  },

  {
    id: 2,
    title: "Medium Wooden Trophies",
    count: "29 Products",
    image: mediumImg,
    description:
      "Premium medium-sized trophies designed for sports events, corporate functions, and achievements.",
  },

  {
    id: 3,
    title: "Big Wooden Trophies",
    count: "Premium Collection",
    image: bigImg,
    description:
      "Luxury large-size trophies crafted to celebrate prestigious achievements and grand occasions.",
  },

  {
    id: 4,
    title: "Metal Trophies",
    count: "28 Products",
    image: metalImg,
    description:
      "Stylish metal trophies with premium finish ideal for corporate awards and championship events.",
  },
];


const Products = () => {
  const [filter, setFilter] = useState("All");

  const filteredProducts =
    filter === "All"
      ? products
      : products.filter(
          (item) => item.category === filter
        );

  return (
    <>

      {/* product category all */}

      <section className="relative pt-28 pb-28 bg-[#081A3B] overflow-hidden">

  <div className="absolute top-0 left-0 w-96 h-96 bg-[#D4AF37]/10 blur-[150px] rounded-full" />

  <div className="max-w-7xl mx-auto px-5 text-center">

    <span className="inline-block px-3 py-2 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-sm">
      Trophy Products
    </span>

    {/* ONLY HEADING MOTION */}
    <motion.h1
       initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-6 text-4xl md:text-6xl font-bold text-white"
    >
      Explore Our{" "}
      <span className="text-[#D4AF37]">
        Products & Categories
      </span>
    </motion.h1>

    <p className="mt-6 text-gray-300 max-w-3xl mx-auto leading-8">
      Browse our premium collection of wooden trophies,
      metal trophies, customized awards and mementos.
    </p>

  </div>

</section>



{/* labl name  */}


<section className="py-10 bg-[#F8F8F6]">

  <div className="max-w-6xl mx-auto px-5 text-center">

    {/* BIG HERO HEADING */}
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#081A3B] leading-tight">
      Premium <span className="text-[#D4AF37]">Trophy Collection</span>
     
    </h2>

    {/* DESCRIPTION */}
 <p className="mt-6 text-gray-700 max-w-3xl mx-auto leading-8 text-base sm:text-lg md:text-xl font-medium">
  Explore our wide range of premium trophies, awards, medals, and mementos designed for every occasion.
</p>

    {/* SUB SECTION WITH ICONS */}
    <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">

  <div className="bg-gray-100 border border-[#081A3B] rounded-xl p-4 hover:bg-[#081A3B] hover:text-white transition duration-300">
    <Trophy className="mx-auto mb-2 text-[#D4AF37]" />
    <p className="text-sm font-semibold">Modern & Classic Designs</p>
  </div>

  <div className="bg-gray-100 border border-[#081A3B] rounded-xl p-4 hover:bg-[#081A3B] hover:text-white transition duration-300">
    <Award className="mx-auto mb-2 text-[#D4AF37]" />
    <p className="text-sm font-semibold">Corporate Awards</p>
  </div>

  <div className="bg-gray-100 border border-[#081A3B] rounded-xl p-4 hover:bg-[#081A3B] hover:text-white transition duration-300">
    <Medal className="mx-auto mb-2 text-[#D4AF37]" />
    <p className="text-sm font-semibold">Sports Trophies</p>
  </div>

  <div className="bg-gray-100 border border-[#081A3B] rounded-xl p-4 hover:bg-[#081A3B] hover:text-white transition duration-300">
    <Star className="mx-auto mb-2 text-[#D4AF37]" />
    <p className="text-sm font-semibold">Custom Mementos</p>
  </div>

</div>

  </div>

</section>

            {/* Categories */}
        <section className="bg-[#F8F8F6] py-4">

  <Swiper
    modules={[Autoplay, Pagination]}
    autoplay={{
      delay: 4000,
      disableOnInteraction: false,
    }}
    pagination={{
      clickable: true,
    }}
    loop={true}
    className="pb-12"
  >
    {categories.map((item) => (
      <SwiperSlide key={item.id}>

        <div className="max-w-5xl mx-auto px-4">

          <div
            className="
              grid
              lg:grid-cols-2
              rounded-[24px]
              overflow-hidden
              shadow-xl
              bg-white
              min-h-[320px]
              lg:min-h-[380px]
            "
          >

            {/* LEFT CONTENT */}

            <div
              className="
                bg-[#081A3B]
                text-white
                p-6
                sm:p-8
                md:p-10
                flex
                flex-col
                justify-center
              "
            >

              <span className="text-[#D4AF37] text-sm uppercase tracking-widest font-semibold">
                {item.count}
              </span>

              <h2
                className="
                  text-2xl
                  sm:text-3xl
                  md:text-4xl
                  font-bold
                  mt-4
                  leading-tight
                "
              >
                {item.title}
              </h2>

              <p
                className="
                  mt-4
                  text-sm
                  sm:text-base
                  text-white/80
                  leading-7
                "
              >
                {item.description}
              </p>

              <div className="flex flex-wrap gap-3 mt-6">

                <button
                  className="
                    bg-[#D4AF37]
                    text-[#081A3B]
                    px-5
                    sm:px-6
                    py-3
                    rounded-full
                    font-semibold
                    text-sm
                    hover:scale-105
                    transition
                  "
                >
                  Enquire Now
                </button>

                <button
                  className="
                    border
                    border-white
                    px-5
                    sm:px-6
                    py-3
                    rounded-full
                    text-sm
                    hover:bg-white
                    hover:text-[#081A3B]
                    transition
                  "
                >
                  View Collection
                </button>

              </div>

            </div>

            {/* RIGHT IMAGE */}

            <div
              className="
                bg-white
                relative
                flex
                items-center
                justify-center
                min-h-[220px]
                sm:min-h-[260px]
                lg:min-h-[380px]
              "
            >

              <div className="absolute w-52 h-52 bg-[#D4AF37]/20 rounded-full blur-3xl"></div>

              <img
                src={item.image}
                alt={item.title}
               className="
  h-[250px]
  sm:h-[320px]
  md:h-[380px]
  lg:h-[450px]
  object-contain
  relative
  z-10
  transition-all
  duration-700
  hover:scale-105
"
              />

            </div>

          </div>

        </div>

      </SwiperSlide>
    ))}
  </Swiper>

</section>



      {/* Filter */}

    

{/* FILTER SECTION */}
<section className="py-10 bg-white">

  <div className="max-w-7xl mx-auto px-5">

    {/* Heading */}
    <div className="text-center mb-8">
      <span className="inline-block px-4 py-2 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-sm font-medium">
        Browse Collection
      </span>

      <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-[#081A3B]">
        Explore Trophy
        <span className="text-[#D4AF37]"> Categories</span>
      </h2>

     <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-8 text-base sm:text-lg md:text-xl font-medium">
  Discover our premium range of wooden trophies, custom awards, and elegant mementos crafted for every achievement.
</p>
    </div>

    {/* Filter Buttons */}
    <div className="flex flex-wrap justify-center gap-3">

      {["All", "Big Wooden", "Medium Wooden", "Mini Wooden"].map(
        (item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            className={`px-5 py-2 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
              filter === item
                ? "bg-[#D4AF37] text-[#081A3B]"
                : "bg-gray-100 text-gray-700 hover:bg-[#081A3B] hover:text-white"
            }`}
          >
            {item}
          </button>
        )
      )}

    </div>

  </div>

</section>

      {/* Products Grid */}
<section className="py-10 bg-[#F8F8F6]">
  <div className="max-w-6xl mx-auto px-4">

    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">

      {filteredProducts.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
          className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition w-full"
        >

          {/* IMAGE BOX (HEIGHT INCREASED) */}
          <div className="w-full h-52 sm:h-60 md:h-64 bg-white flex items-center justify-center p-3">

            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain transition duration-500 hover:scale-105"
            />

          </div>

          {/* CONTENT */}
          <div className="p-3 flex flex-col gap-2 items-center">

            <h3 className="text-sm sm:text-base font-semibold text-[#081A3B] text-center line-clamp-2">
              {product.name}
            </h3>

            <a
              href={`https://wa.me/91YOURNUMBER?text=Hi AKS Trophy, I am interested in ${product.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 w-full bg-[#D4AF37] text-[#081A3B] py-2 rounded-lg text-xs sm:text-sm font-semibold hover:scale-105 transition"
            >
              <MessageCircle size={16} />
              Enquire Now
            </a>

          </div>

        </motion.div>
      ))}

    </div>

  </div>
</section>

      {/* Features */}

<section className="py-14 sm:py-16 lg:py-20 bg-white">
  <div className="max-w-6xl mx-auto px-4 sm:px-5">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-7">

      {[
        {
          title: "Logo Engraving",
          icon: PenTool,
        },
        {
          title: "Name Printing",
          icon: BadgeCheck,
        },
        {
          title: "Custom Design Options",
          icon: Palette,
        },
        {
          title: "Bulk Order Support",
          icon: PackageCheck,
        },
      ].map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="group bg-[#081A3B] text-white rounded-3xl p-6 sm:p-8 text-center shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
          >
            {/* Icon */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-5 rounded-full bg-gradient-to-r from-[#D4AF37] to-yellow-500 flex items-center justify-center group-hover:scale-110 transition duration-300">
              <Icon
                size={28}
                className="text-white sm:w-8 sm:h-8"
              />
            </div>

            {/* Title */}
            <h3 className="text-lg sm:text-xl font-semibold leading-7">
              {item.title}
            </h3>
          </div>
        );
      })}

    </div>
  </div>
</section>
    </>
  );
};

export default Products;