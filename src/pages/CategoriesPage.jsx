import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

import miniImg from "../assets/images/products/mini1.jpg";
import mediumImg from "../assets/images/products/medium1.jpg";
import bigImg from "../assets/images/products/big1.jpg";
import metalImg from "../assets/images/products/metal1.jpg";

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

const CategoriesPage = () => {
  return (
    <>
      {/* Hero */}

      <section className="relative pt-36 pb-24 bg-[#081A3B] overflow-hidden">

        <div className="absolute top-0 left-0 w-96 h-96 bg-[#D4AF37]/10 blur-[150px] rounded-full" />

        <div className="max-w-7xl mx-auto px-5 text-center">

          <span className="inline-block px-4 py-2 rounded-full bg-[#D4AF37]/10 text-[#D4AF37]">
            Trophy Categories
          </span>

          <h1 className="mt-6 text-4xl md:text-6xl font-bold text-white">
            Explore Our
            <span className="text-[#D4AF37]">
              {" "}Categories
            </span>
          </h1>

          <p className="mt-6 text-gray-300 max-w-3xl mx-auto leading-8">
            Browse our premium collection of wooden trophies,
            metal trophies, customized awards and mementos.
          </p>

        </div>

      </section>



      {/* Categories */}
      <section className="py-20 bg-[#F8F8F6]">

        <div className="max-w-7xl mx-auto px-5">

          <div className="space-y-16">

            {categories.map((category, index) => (

              <motion.div
                key={category.id}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                }}
                className={`grid lg:grid-cols-2 gap-10 items-center ${
                  index % 2 !== 0
                    ? "lg:[&>*:first-child]:order-2"
                    : ""
                }`}
              >

                {/* Image */}

                <div className="group overflow-hidden rounded-[32px] shadow-2xl">

                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-[350px] md:h-[500px] object-cover transition duration-700 group-hover:scale-110"
                  />

                </div>

                {/* Content */}

                <div>

                  <span className="inline-block px-4 py-2 rounded-full bg-[#D4AF37]/10 text-[#D4AF37]">
                    {category.count}
                  </span>

                  <h2 className="mt-6 text-3xl md:text-5xl font-bold text-[#081A3B]">
                    {category.title}
                  </h2>

                  <p className="mt-6 text-gray-600 leading-8">
                    {category.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-4">

                    <a
                      href={`https://wa.me/9307623168?text=Hi AKS Trophy, I am interested in ${category.title}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#D4AF37] text-[#081A3B] px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
                    >
                      <MessageCircle size={20} />
                      Enquire Now
                    </a>

                    <button className="inline-flex items-center gap-2 border border-[#081A3B] text-[#081A3B] px-8 py-4 rounded-full font-semibold hover:bg-[#081A3B] hover:text-white transition">
                      View Collection
                      <ArrowRight size={18} />
                    </button>

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* Bottom CTA */}

      <section className="py-20 bg-[#081A3B]">

        <div className="max-w-5xl mx-auto px-5 text-center">

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Need a Customized Trophy?
          </h2>

          <p className="mt-6 text-gray-300 leading-8">
            Contact AKS Trophy today for logo engraving,
            name printing, event-specific designs and
            bulk orders.
          </p>

          <a
            href="https://wa.me/9307623168"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-8 bg-[#D4AF37] text-[#081A3B] px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
          >
            <MessageCircle size={20} />
            WhatsApp Us
          </a>

        </div>

      </section>
    </>
  );
};

export default CategoriesPage;