import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock,
} from "lucide-react";

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <>
      {/* HERO */}

      <section className="relative pt-24 md:pt-35 pb-20 md:pb-28 bg-[#081A3B] overflow-hidden">

  <div className="absolute top-0 left-0 w-72 md:w-96 h-72 md:h-96 bg-[#FFD700]/10 blur-[150px] rounded-full"></div>

  <div className="max-w-7xl mx-auto px-4 sm:px-5 text-center">

    <span className="inline-block px-3 py-2 rounded-full bg-[#FFD700]/10 text-[#FFD700] text-sm">
      Contact AKS Trophy
    </span>

    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-white"
    >
      Let's Create Something
      <span className="text-[#FFD700]"> Memorable</span>
    </motion.h1>

    <p className="mt-6 max-w-3xl mx-auto text-gray-300 leading-7 md:leading-8 text-sm sm:text-base">
      Looking for customized trophies, awards,
      medals or bulk orders? Get in touch with us.
    </p>

  </div>

</section>

      {/* CONTACT CARDS */}

        <section className="py-10 bg-[#F8F8F6]">

        <div className="max-w-7xl mx-auto px-5">

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

            {/* Phone */}

            <motion.a
              whileHover={{ y: -8 }}
              href="tel:+91XXXXXXXXXX"
              className="bg-white rounded-[30px] p-8 shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-[#081A3B] rounded-2xl flex items-center justify-center mx-auto">
                <Phone className="text-[#FFD700]" />
              </div>

              <h3 className="mt-5 text-xl font-bold text-[#081A3B]">
                Call Us
              </h3>

              <p className="mt-3 text-gray-600">
                +91 XXXXX XXXXX
              </p>
            </motion.a>

            {/* WhatsApp */}

            <motion.a
              whileHover={{ y: -8 }}
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-[30px] p-8 shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-[#081A3B] rounded-2xl flex items-center justify-center mx-auto">
                <MessageCircle className="text-[#FFD700]" />
              </div>

              <h3 className="mt-5 text-xl font-bold text-[#081A3B]">
                WhatsApp
              </h3>

              <p className="mt-3 text-gray-600">
                Quick Response
              </p>
            </motion.a>

            {/* Email */}

            <motion.a
              whileHover={{ y: -8 }}
              href="mailto:akstrophyy@gmail.com"
              className="bg-white rounded-[30px] p-8 shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-[#081A3B] rounded-2xl flex items-center justify-center mx-auto">
                <Mail className="text-[#FFD700]" />
              </div>

              <h3 className="mt-5 text-xl font-bold text-[#081A3B]">
                Email Us
              </h3>

              <p className="mt-3 text-gray-600 break-all">
                akstrophyy@gmail.com
              </p>
            </motion.a>

            {/* Timing */}

            <motion.div
              whileHover={{ y: -8 }}
              className="bg-white rounded-[30px] p-8 shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-[#081A3B] rounded-2xl flex items-center justify-center mx-auto">
                <Clock className="text-[#FFD700]" />
              </div>

              <h3 className="mt-5 text-xl font-bold text-[#081A3B]">
                Working Hours
              </h3>

              <p className="mt-3 text-gray-600">
                Mon - Sun
              </p>

              <p className="text-gray-600">
                9:00 AM - 8:00 PM
              </p>
            </motion.div>

          </div>

        </div>

      </section>

      {/* CONTACT FORM + MAP */}

     <section className="py-10 md:py-20 bg-white">

  <div className="max-w-7xl mx-auto px-4 sm:px-5">

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

            {/* FORM */}

           <div className="bg-[#F8F8F6] p-6 md:p-8 rounded-[32px] shadow-lg">

  <h2 className="text-2xl md:text-3xl font-bold text-[#081A3B]">
    Send Inquiry
  </h2>

  <form className="mt-8 space-y-5">

    <input
      type="text"
      placeholder="Your Name"
      className="w-full p-4 rounded-xl border outline-none focus:border-[#FFD700]"
    />

    <input
      type="tel"
      placeholder="Phone Number"
      className="w-full p-4 rounded-xl border outline-none focus:border-[#FFD700]"
    />

    <input
      type="email"
      placeholder="Email Address"
      className="w-full p-4 rounded-xl border outline-none focus:border-[#FFD700]"
    />

    <textarea
      rows="5"
      placeholder="Your Requirement"
      className="w-full p-4 rounded-xl border outline-none focus:border-[#FFD700]"
    />

    <button
      type="submit"
      className="w-full bg-[#FFD700] text-[#081A3B] py-4 rounded-xl font-semibold hover:scale-[1.02] transition"
    >
      Send Inquiry
    </button>

  </form>

</div>

            {/* MAP + ADDRESS */}

            <div>

              <div className="bg-[#081A3B] p-8 rounded-[32px] text-white">

                <h2 className="text-3xl font-bold">
                  Visit Our Store
                </h2>

                <div className="mt-8 flex gap-4">

                  <MapPin
                    className="text-[#FFD700] mt-1"
                    size={22}
                  />

                  <p className="leading-8">
                    AKS TROPHY HOUSE,
                    MG Rd, beside BANK OF MAHARASHTRA,
                    Latur, Maharashtra 413512
                  </p>

                </div>

              </div>

              {/* GOOGLE MAP */}

             <div className="mt-8 overflow-hidden rounded-[32px] shadow-lg">

  <iframe
    title="AKS Trophy Location"
    src="https://maps.google.com/maps?q=Latur&t=&z=13&ie=UTF8&iwloc=&output=embed"
    className="w-full h-[250px] sm:h-[320px] md:h-[400px]"
    loading="lazy"
  />

</div>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

     <section className="py-10 bg-[#F8F8F6]">

  <div className="max-w-5xl mx-auto px-4 sm:px-5">

    <div className="relative overflow-hidden rounded-[32px] md:rounded-[40px] bg-gradient-to-r from-[#081A3B] via-[#0D2552] to-[#081A3B] px-5 sm:px-8 py-12 md:py-16 text-center shadow-2xl">

      {/* Glow Effect */}
      <div className="absolute -top-20 -left-20 w-60 h-60 bg-[#FFD700]/20 blur-[120px] rounded-full"></div>
      <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-[#FFD700]/20 blur-[120px] rounded-full"></div>

      {/* Badge */}
      <span className="inline-block px-4 py-2 rounded-full bg-[#FFD700]/10 text-[#FFD700] text-sm font-medium border border-[#FFD700]/30">
        Premium Trophy Collection
      </span>

      {/* Heading */}
     <h2 className="mt-6 text-2xl sm:text-3xl md:text-5xl font-bold text-white leading-tight">
  Ready To Celebrate
  <span className="text-[#FFD700]"> Every Achievement?</span>
</h2>

      {/* Paragraph */}
     <p className="mt-6 text-gray-300 max-w-2xl mx-auto leading-7 md:leading-8 text-sm sm:text-base md:text-lg">
  Get premium trophies, awards, medals and customized
  mementos crafted with exceptional quality for schools,
  sports events, corporate functions and special occasions.
</p>

      {/* Buttons */}
     <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

  <a
    href="https://wa.me/91XXXXXXXXXX"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center gap-2 bg-[#FFD700] text-[#081A3B] px-8 py-4 rounded-full font-semibold hover:scale-105 transition duration-300 shadow-lg"
  >
    <MessageCircle size={20} />
    Chat on WhatsApp
  </a>

  <a
    href="/products"
    className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#081A3B] transition duration-300"
  >
    Explore Products
  </a>

</div>
    </div>

  </div>
</section>
    </>
  );
};

export default Contact;