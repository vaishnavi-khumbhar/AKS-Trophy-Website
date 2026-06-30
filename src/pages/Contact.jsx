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

      {/* ================= HERO ================= */}

<section className="relative pt-32 md:pt-36 pb-24 md:pb-28 bg-[#081A3B] overflow-hidden">

  {/* Glow */}
  <div className="absolute top-0 left-0 w-72 md:w-[420px] h-72 md:h-[420px] bg-[#FFD700]/12 blur-[150px] rounded-full" />
  <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#FFD700]/8 blur-[120px] rounded-full" />

  {/* Pattern */}
  <div
    className="absolute inset-0 opacity-[0.04]"
    style={{
      backgroundImage: "radial-gradient(#FFD700 1px, transparent 1px)",
      backgroundSize: "28px 28px",
    }}
  />

  {/* Circle Borders */}
  <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full border border-dashed border-[#FFD700]/10"></div>
  <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full border border-dashed border-[#FFD700]/10"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-5 text-center">

    {/* Badge */}

    <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#FFD700]/10 border border-[#FFD700]/30 text-[#FFD700] text-sm font-semibold">

      <span className="w-1.5 h-1.5 rounded-full bg-[#FFD700]" />

      Contact AKS Small Trophy House

      <span className="w-1.5 h-1.5 rounded-full bg-[#FFD700]" />

    </span>

    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: .6 }}
      className="mt-6 text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
    >
      Let's Create Something
      <span className="text-[#FFD700]"> Memorable</span>
    </motion.h1>

    {/* Divider */}

    <div className="flex justify-center items-center gap-3 mt-6">

      <div className="h-[2px] w-14 bg-gradient-to-r from-transparent to-[#FFD700]" />

      <div className="w-2 h-2 rounded-full bg-[#FFD700]" />

      <div className="w-2 h-2 rounded-full bg-[#FFD700]/50" />

      <div className="w-2 h-2 rounded-full bg-[#FFD700]" />

      <div className="h-[2px] w-14 bg-gradient-to-l from-transparent to-[#FFD700]" />

    </div>

    <p className="mt-6 max-w-3xl mx-auto text-gray-300 leading-8 text-sm sm:text-lg">

      Looking for customized trophies, awards, medals or bulk orders?

      Connect with AKS Trophy House and let us craft something memorable

      for your school, corporate event or sports tournament.

    </p>

  </div>

</section>

      {/* CONTACT CARDS */}

        {/* ================= CONTACT CARDS ================= */}

<section className="py-12 bg-[#F8F8F6] relative overflow-hidden">

  <div className="absolute top-0 right-0 w-72 h-72 bg-[#FFD700]/10 blur-[120px] rounded-full"></div>

  <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#081A3B]/5 blur-[120px] rounded-full"></div>

  <div className="max-w-7xl mx-auto px-5">

   <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

  {/* Call Us */}
  <motion.a
    whileHover={{ y: -8 }}
    transition={{ duration: 0.3 }}
    href="tel:+919307623168"
    className="group relative overflow-hidden bg-white rounded-[30px] p-8 text-center border-2 border-[#FFD700]/20 hover:border-[#FFD700] shadow-lg hover:shadow-2xl transition-all duration-300"
  >
    {/* Decorative */}
    <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#FFD700] via-yellow-300 to-[#FFD700]" />
    <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#FFD700] via-yellow-300 to-[#FFD700]" />

    <span className="absolute top-[-2px] left-[-2px] w-5 h-5 border-l-[3px] border-t-[3px] border-[#FFD700] rounded-tl-[30px]" />
    <span className="absolute top-[-2px] right-[-2px] w-5 h-5 border-r-[3px] border-t-[3px] border-[#FFD700] rounded-tr-[30px]" />
    <span className="absolute bottom-[-2px] left-[-2px] w-5 h-5 border-l-[3px] border-b-[3px] border-[#FFD700] rounded-bl-[30px]" />
    <span className="absolute bottom-[-2px] right-[-2px] w-5 h-5 border-r-[3px] border-b-[3px] border-[#FFD700] rounded-br-[30px]" />

    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-[#FFD700]/10 via-transparent to-[#081A3B]/5 transition-all duration-300" />

    <div className="relative z-10">
      <div className="w-20 h-20 bg-[#081A3B] rounded-3xl flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 transition duration-300">
        <Phone size={34} className="text-[#FFD700]" />
      </div>

      <h3 className="mt-6 text-2xl font-bold text-[#081A3B]">
        Call Us
      </h3>

      <div className="flex justify-center gap-2 mt-3">
        <span className="w-2 h-2 rounded-full bg-[#FFD700]" />
        <span className="w-2 h-2 rounded-full bg-[#FFD700]/40" />
        <span className="w-2 h-2 rounded-full bg-[#FFD700]" />
      </div>

      <p className="mt-5 text-gray-600 font-medium text-lg">
        +91 9307623168
      </p>
    </div>
  </motion.a>

  {/* WhatsApp */}
  <motion.a
    whileHover={{ y: -8 }}
    transition={{ duration: 0.3 }}
    href="https://wa.me/919307623168"
    target="_blank"
    rel="noopener noreferrer"
    className="group relative overflow-hidden bg-white rounded-[30px] p-8 text-center border-2 border-[#FFD700]/20 hover:border-[#FFD700] shadow-lg hover:shadow-2xl transition-all duration-300"
  >
    <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#FFD700] via-yellow-300 to-[#FFD700]" />
    <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#FFD700] via-yellow-300 to-[#FFD700]" />

    <span className="absolute top-[-2px] left-[-2px] w-5 h-5 border-l-[3px] border-t-[3px] border-[#FFD700] rounded-tl-[30px]" />
    <span className="absolute top-[-2px] right-[-2px] w-5 h-5 border-r-[3px] border-t-[3px] border-[#FFD700] rounded-tr-[30px]" />
    <span className="absolute bottom-[-2px] left-[-2px] w-5 h-5 border-l-[3px] border-b-[3px] border-[#FFD700] rounded-bl-[30px]" />
    <span className="absolute bottom-[-2px] right-[-2px] w-5 h-5 border-r-[3px] border-b-[3px] border-[#FFD700] rounded-br-[30px]" />

    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-[#FFD700]/10 via-transparent to-[#081A3B]/5 transition-all duration-300" />

    <div className="relative z-10">
      <div className="w-20 h-20 bg-[#081A3B] rounded-3xl flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 transition duration-300">
        <MessageCircle size={34} className="text-[#FFD700]" />
      </div>

      <h3 className="mt-6 text-2xl font-bold text-[#081A3B]">
        WhatsApp
      </h3>

      <div className="flex justify-center gap-2 mt-3">
        <span className="w-2 h-2 rounded-full bg-[#FFD700]" />
        <span className="w-2 h-2 rounded-full bg-[#FFD700]/40" />
        <span className="w-2 h-2 rounded-full bg-[#FFD700]" />
      </div>

      <p className="mt-5 text-gray-600 font-medium text-lg">
        Quick Response
      </p>
    </div>
  </motion.a>

  {/* Email */}
  <motion.a
    whileHover={{ y: -8 }}
    transition={{ duration: 0.3 }}
    href="mailto:akstrophyy@gmail.com"
    className="group relative overflow-hidden bg-white rounded-[30px] p-8 text-center border-2 border-[#FFD700]/20 hover:border-[#FFD700] shadow-lg hover:shadow-2xl transition-all duration-300"
  >
    <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#FFD700] via-yellow-300 to-[#FFD700]" />
    <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#FFD700] via-yellow-300 to-[#FFD700]" />

    <span className="absolute top-[-2px] left-[-2px] w-5 h-5 border-l-[3px] border-t-[3px] border-[#FFD700] rounded-tl-[30px]" />
    <span className="absolute top-[-2px] right-[-2px] w-5 h-5 border-r-[3px] border-t-[3px] border-[#FFD700] rounded-tr-[30px]" />
    <span className="absolute bottom-[-2px] left-[-2px] w-5 h-5 border-l-[3px] border-b-[3px] border-[#FFD700] rounded-bl-[30px]" />
    <span className="absolute bottom-[-2px] right-[-2px] w-5 h-5 border-r-[3px] border-b-[3px] border-[#FFD700] rounded-br-[30px]" />

    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-[#FFD700]/10 via-transparent to-[#081A3B]/5 transition-all duration-300" />

    <div className="relative z-10">
      <div className="w-20 h-20 bg-[#081A3B] rounded-3xl flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 transition duration-300">
        <Mail size={34} className="text-[#FFD700]" />
      </div>

      <h3 className="mt-6 text-2xl font-bold text-[#081A3B]">
        Email Us
      </h3>

      <div className="flex justify-center gap-2 mt-3">
        <span className="w-2 h-2 rounded-full bg-[#FFD700]" />
        <span className="w-2 h-2 rounded-full bg-[#FFD700]/40" />
        <span className="w-2 h-2 rounded-full bg-[#FFD700]" />
      </div>

      <p className="mt-5 text-gray-600 font-medium break-all">
        akstrophyy@gmail.com
      </p>
    </div>
  </motion.a>

  {/* Working Hours */}
  <motion.div
    whileHover={{ y: -8 }}
    transition={{ duration: 0.3 }}
    className="group relative overflow-hidden bg-white rounded-[30px] p-8 text-center border-2 border-[#FFD700]/20 hover:border-[#FFD700] shadow-lg hover:shadow-2xl transition-all duration-300"
  >
    <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#FFD700] via-yellow-300 to-[#FFD700]" />
    <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#FFD700] via-yellow-300 to-[#FFD700]" />

    <span className="absolute top-[-2px] left-[-2px] w-5 h-5 border-l-[3px] border-t-[3px] border-[#FFD700] rounded-tl-[30px]" />
    <span className="absolute top-[-2px] right-[-2px] w-5 h-5 border-r-[3px] border-t-[3px] border-[#FFD700] rounded-tr-[30px]" />
    <span className="absolute bottom-[-2px] left-[-2px] w-5 h-5 border-l-[3px] border-b-[3px] border-[#FFD700] rounded-bl-[30px]" />
    <span className="absolute bottom-[-2px] right-[-2px] w-5 h-5 border-r-[3px] border-b-[3px] border-[#FFD700] rounded-br-[30px]" />

    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-[#FFD700]/10 via-transparent to-[#081A3B]/5 transition-all duration-300" />

    <div className="relative z-10">
      <div className="w-20 h-20 bg-[#081A3B] rounded-3xl flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 transition duration-300">
        <Clock size={34} className="text-[#FFD700]" />
      </div>

      <h3 className="mt-6 text-2xl font-bold text-[#081A3B]">
        Working Hours
      </h3>

      <div className="flex justify-center gap-2 mt-3">
        <span className="w-2 h-2 rounded-full bg-[#FFD700]" />
        <span className="w-2 h-2 rounded-full bg-[#FFD700]/40" />
        <span className="w-2 h-2 rounded-full bg-[#FFD700]" />
      </div>

      <p className="mt-5 text-gray-600 font-medium">
        Mon - Sun
      </p>

      <p className="text-gray-600">
        9:00 AM - 8:00 PM
      </p>
    </div>
  </motion.div>

</div>

        </div>

      </section>





      {/* CONTACT FORM + MAP */}

    <section className="py-14 md:py-20 bg-white relative overflow-hidden">

  {/* Background Effects */}

  <div className="absolute top-0 right-0 w-80 h-80 bg-[#FFD700]/10 blur-[140px] rounded-full"></div>

  <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#081A3B]/5 blur-[140px] rounded-full"></div>

  <div
    className="absolute inset-0 opacity-[0.03]"
    style={{
      backgroundImage: "radial-gradient(#081A3B 1px, transparent 1px)",
      backgroundSize: "28px 28px",
    }}
  />

  <div className="relative max-w-7xl mx-auto px-4 sm:px-5">

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

      {/* ================= FORM ================= */}

      <motion.div
        whileHover={{ y: -4 }}
        className="relative overflow-hidden rounded-[34px] bg-[#F8F8F6] p-6 md:p-9 border-2 border-[#FFD700]/20 shadow-xl transition-all duration-300 hover:border-[#FFD700]"
      >

        {/* Top Bottom Border */}

        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#FFD700] via-yellow-300 to-[#FFD700]" />

        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#FFD700] via-yellow-300 to-[#FFD700]" />

        {/* Corners */}

        <span className="absolute top-[-2px] left-[-2px] w-6 h-6 border-t-[3px] border-l-[3px] border-[#FFD700] rounded-tl-[34px]" />

        <span className="absolute top-[-2px] right-[-2px] w-6 h-6 border-t-[3px] border-r-[3px] border-[#FFD700] rounded-tr-[34px]" />

        <span className="absolute bottom-[-2px] left-[-2px] w-6 h-6 border-b-[3px] border-l-[3px] border-[#FFD700] rounded-bl-[34px]" />

        <span className="absolute bottom-[-2px] right-[-2px] w-6 h-6 border-b-[3px] border-r-[3px] border-[#FFD700] rounded-br-[34px]" />

        {/* Badge */}

        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#081A3B]/10 border border-[#081A3B]/20 text-[#081A3B] text-sm font-semibold">

          <span className="w-2 h-2 rounded-full bg-[#FFD700]" />

          Send Inquiry

          <span className="w-2 h-2 rounded-full bg-[#FFD700]" />

        </span>

        <h2 className="mt-5 text-3xl font-bold text-[#081A3B]">

          Let's Talk

        </h2>

        <p className="mt-3 text-gray-600 leading-7">

          Fill the form and our team will contact you shortly.

        </p>

        <form className="mt-8 space-y-5">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full h-14 rounded-xl border border-gray-200 bg-white px-5 outline-none transition-all focus:border-[#FFD700] focus:ring-4 focus:ring-[#FFD700]/20"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full h-14 rounded-xl border border-gray-200 bg-white px-5 outline-none transition-all focus:border-[#FFD700] focus:ring-4 focus:ring-[#FFD700]/20"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full h-14 rounded-xl border border-gray-200 bg-white px-5 outline-none transition-all focus:border-[#FFD700] focus:ring-4 focus:ring-[#FFD700]/20"
          />

          <textarea
            rows={5}
            placeholder="Your Requirement"
            className="w-full rounded-xl border border-gray-200 bg-white p-5 resize-none outline-none transition-all focus:border-[#FFD700] focus:ring-4 focus:ring-[#FFD700]/20"
          />

          <button
            type="submit"
            className="group w-full h-14 rounded-xl bg-[#081A3B] text-white font-semibold transition-all duration-300 hover:bg-[#FFD700] hover:text-[#081A3B] shadow-xl hover:shadow-yellow-300/40"
          >
            Send Inquiry →
          </button>

        </form>

      </motion.div>

      {/* ================= RIGHT ================= */}

      <div className="space-y-8">

        {/* Store Card */}

        <motion.div
          whileHover={{ y: -4 }}
          className="relative overflow-hidden rounded-[34px] bg-[#081A3B] p-8 text-white border-2 border-[#FFD700]/20 shadow-xl"
        >

          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#FFD700] via-yellow-300 to-[#FFD700]" />

          <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#FFD700] via-yellow-300 to-[#FFD700]" />

          <span className="absolute top-[-2px] left-[-2px] w-6 h-6 border-t-[3px] border-l-[3px] border-[#FFD700] rounded-tl-[34px]" />

          <span className="absolute top-[-2px] right-[-2px] w-6 h-6 border-t-[3px] border-r-[3px] border-[#FFD700] rounded-tr-[34px]" />

          <span className="absolute bottom-[-2px] left-[-2px] w-6 h-6 border-b-[3px] border-l-[3px] border-[#FFD700] rounded-bl-[34px]" />

          <span className="absolute bottom-[-2px] right-[-2px] w-6 h-6 border-b-[3px] border-r-[3px] border-[#FFD700] rounded-br-[34px]" />

          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFD700]/10 border border-[#FFD700]/20 text-[#FFD700] text-sm font-semibold">

            <span className="w-2 h-2 rounded-full bg-[#FFD700]" />

            Visit Our Store

            <span className="w-2 h-2 rounded-full bg-[#FFD700]" />

          </span>

          <h2 className="mt-6 text-3xl font-bold">

            AKS Trophy House

          </h2>

          <div className="mt-8 flex gap-4">

            <div className="w-14 h-14 rounded-2xl bg-[#FFD700] flex items-center justify-center shrink-0">

              <MapPin className="text-[#081A3B]" size={24} />

            </div>

            <p className="leading-8 text-gray-200">

              AKS TROPHY HOUSE <br />

              MG Road, beside Bank of Maharashtra <br />

              Latur, Maharashtra 413512

            </p>

          </div>

        </motion.div>

        {/* Google Map */}

        <motion.div
          whileHover={{ scale: 1.01 }}
          className="relative overflow-hidden rounded-[34px] border-2 border-[#FFD700]/20 shadow-xl"
        >

          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#FFD700] via-yellow-300 to-[#FFD700] z-10" />

          <iframe
            title="AKS Trophy Location"
            src="https://maps.google.com/maps?q=Latur&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-[260px] sm:h-[320px] md:h-[400px]"
            loading="lazy"
          />

        </motion.div>

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
    href="https://wa.me/9307623168"
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