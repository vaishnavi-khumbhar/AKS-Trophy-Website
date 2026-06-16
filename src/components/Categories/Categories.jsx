import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { categories } from "../../data/categories";

const Categories = () => {
  return (
    <section className="py-3 lg:py-2 bg-[#F8F8F6]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-2 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-sm font-medium">
            Our Categories
          </span>

          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#081A3B]">
            Explore Our Trophy
            <span className="text-[#D4AF37]"> Collection</span>
          </h2>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto leading-8">
            Browse our premium range of trophies crafted to celebrate every achievement with elegance and excellence.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">

          {categories.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{ y: -12 }}
              className="group overflow-hidden rounded-[32px] bg-white shadow-lg hover:shadow-2xl transition duration-500"
            >
              {/* Image */}
             {/* Image */}
<div className="relative h-72 overflow-hidden bg-white">
  <img
    src={item.image}
    alt={item.title}
    className="w-full h-full object-contain p-2 group-hover:scale-105 transition duration-700"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-[#081A3B]/80 via-[#081A3B]/20 to-transparent" />

  {/* Product Count */}
  <div className="absolute top-4 left-4 z-10">
    <span className="bg-[#D4AF37] text-[#081A3B] px-4 py-2 rounded-full text-sm font-semibold">
      {item.count}
    </span>
  </div>
</div>

              {/* Content */}
              <div className="p-7">

                <h3 className="text-2xl font-bold text-[#081A3B] group-hover:text-[#D4AF37] transition">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  {item.description}
                </p>

                <button className="mt-6 flex items-center gap-2 text-[#D4AF37] font-semibold group-hover:gap-3 transition-all">
                  Explore Category

                  <ArrowRight size={18} />
                </button>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Categories;