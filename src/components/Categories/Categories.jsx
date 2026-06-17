import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { categories } from "../../data/categories";

const Categories = () => {
  return (
    <section className="py-7 lg:py-14 bg-[#F8F8F6]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-10 lg:mb-14">
          <span className="inline-block px-4 py-2 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-sm font-medium">
            Our Categories
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#081A3B]">
            Explore Our Trophy{" "}
            <span className="text-[#D4AF37]">Collection</span>
          </h2>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-8 text-base sm:text-lg md:text-xl font-medium">
  Explore our premium collection of trophies, thoughtfully crafted to celebrate achievements with elegance, excellence, and lasting memories.
</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">

          {categories.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="
                group bg-white
                border border-[#081A3B]/15
                hover:border-[#D4AF37]/60
                rounded-2xl overflow-hidden
                shadow-sm hover:shadow-xl
                transition-all duration-300
                flex flex-col items-center text-center
              "
            >

              {/* IMAGE */}
              <div className="w-full flex justify-center items-center bg-white pt-5">
                <div className="w-[70%] sm:w-[75%] lg:w-[80%] h-44 sm:h-52 lg:h-56 flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition duration-500"
                  />
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-5 lg:p-6 w-full">

                <h3 className="text-xl lg:text-2xl font-bold text-[#081A3B] group-hover:text-[#D4AF37] transition">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-600 text-sm leading-6">
                  {item.description}
                </p>

                <button className="mt-5 inline-flex items-center justify-center gap-2 text-[#D4AF37] font-semibold group-hover:gap-3 transition-all">
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