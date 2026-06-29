import { motion } from "framer-motion";
import {
  Trophy,
  PencilRuler,
  BadgeCheck,
  Truck,
} from "lucide-react";

const processSteps = [
  {
    id: "01",
    icon: Trophy,
    title: "Select Trophy",
    description:
      "Choose from our premium collection of wooden, acrylic, metal, glass, fiber and customized trophies.",
  },
  {
    id: "02",
    icon: PencilRuler,
    title: "Customize Design",
    description:
      "Add logo engraving, recipient names, event details and custom branding as per your requirements.",
  },
  {
    id: "03",
    icon: BadgeCheck,
    title: "Approve Artwork",
    description:
      "Review the design sample and approve the final artwork before production begins.",
  },
  {
    id: "04",
    icon: Truck,
    title: "Craft & Deliver",
    description:
      "We manufacture with precision and deliver across Maharashtra on time.",
  },
];

const Process = () => {
  return (
    <section className="relative py-16 lg:py-20 bg-[#F8F8F6] overflow-hidden">

      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#F5C200]/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#081A3B]/5 rounded-full blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "radial-gradient(#081A3B 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full border border-dashed border-[#F5C200]/15" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full border border-dashed border-[#F5C200]/15" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#F5C200]/12 border border-[#F5C200]/35 text-[#081A3B] text-sm font-semibold">
           
            Our Process
          </span>

          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#081A3B]">
            From Idea To{" "}
            <span className="text-[#F5C200]">Achievement</span>
          </h2>

          {/* Divider */}
          <div className="flex items-center justify-center gap-3 mt-5 mb-5">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#F5C200]/60" />
            <span className="w-2 h-2 rounded-full bg-[#F5C200]" />
            <span className="w-2 h-2 rounded-full bg-[#F5C200]/40" />
            <span className="w-2 h-2 rounded-full bg-[#F5C200]" />
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#F5C200]/60" />
          </div>

          <p className="max-w-3xl mx-auto text-gray-600 leading-8 text-base sm:text-lg md:text-xl font-medium">
            AKS Trophy follows a simple and transparent process to create
            premium awards, medals and trophies with exceptional quality,
            customization and timely delivery.
          </p>
        </motion.div>

        {/* DESKTOP TIMELINE */}
    <div className="hidden lg:grid lg:grid-cols-4 gap-8 relative">

  {/* Connecting dashed line */}
  <div
    className="absolute top-[30px] left-[12%] right-[12%] h-px z-0"
    style={{ borderTop: "2px dashed rgba(245,194,0,0.35)" }}
  />

  {processSteps.map((step, index) => {
    const Icon = step.icon;

    return (
      <motion.div
        key={step.id}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.15 }}
        viewport={{ once: true }}
        whileHover={{ y: -10 }}
        className="group relative text-center z-10"
      >
        {/* Step circle */}
        <div className="relative w-14 h-14 mx-auto rounded-full bg-[#F5C200] flex items-center justify-center text-[#081A3B] font-bold text-lg shadow-lg z-10">
          {step.id}
          <span className="absolute inset-0 rounded-full border-2 border-[#F5C200] animate-ping opacity-20" />
        </div>

        {/* CARD */}
        <div
          className="group relative mt-7 bg-white rounded-2xl px-6 py-6 shadow-md hover:shadow-xl transition-all duration-300 
          h-[300px] flex flex-col justify-start overflow-hidden"
          style={{ border: "2px solid rgba(245,194,0,0.25)" }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.border = "2px solid #F5C200")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.border = "2px solid rgba(245,194,0,0.25)")
          }
        >
          {/* Corner accents */}
          <span className="absolute top-[-2px] left-[-2px] w-4 h-4 border-t-[3px] border-l-[3px] border-yellow-400 rounded-tl-2xl" />
          <span className="absolute top-[-2px] right-[-2px] w-4 h-4 border-t-[3px] border-r-[3px] border-yellow-400 rounded-tr-2xl" />
          <span className="absolute bottom-[-2px] left-[-2px] w-4 h-4 border-b-[3px] border-l-[3px] border-yellow-400 rounded-bl-2xl" />
          <span className="absolute bottom-[-2px] right-[-2px] w-4 h-4 border-b-[3px] border-r-[3px] border-yellow-400 rounded-br-2xl" />

          {/* Top bar */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#F5C200] via-[#FFD84D] to-[#F5C200]" />

          {/* ghost number */}
          <span className="absolute -bottom-2 -right-1 text-7xl font-black text-[#081A3B]/[0.04] select-none pointer-events-none">
            {step.id}
          </span>

          {/* hover glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/0 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none rounded-2xl" />

          {/* ICON */}
          <div className="relative z-10 flex flex-col items-center">

            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0B2C5D] to-[#123D7A] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Icon className="text-[#F5C200]" size={28} />
            </div>

            {/* TITLE */}
            <h3 className="mt-5 text-2xl font-bold text-[#081A3B] text-center leading-snug">
              {step.title}
            </h3>

            {/* DESCRIPTION (FIXED OVERLAP) */}
            <p className="mt-4 text-gray-600 text-sm sm:text-base leading-7 text-center px-2">
              {step.description}
            </p>
          </div>

          {/* Bottom bar */}
          <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#F5C200] to-[#FFD84D]" />
        </div>
      </motion.div>
    );
  })}
</div>



        {/* MOBILE TIMELINE */}
        <div className="lg:hidden space-y-4">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4 items-start"
              >
                {/* Left — number + connector */}
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-11 h-11 rounded-full bg-[#F5C200] flex items-center justify-center text-[#081A3B] font-bold text-sm shadow-md z-10">
                    {step.id}
                  </div>
                  {index !== processSteps.length - 1 && (
                    <div
                      className="w-px flex-1 mt-2"
                      style={{ borderLeft: "2px dashed rgba(245,194,0,0.4)", minHeight: "32px" }}
                    />
                  )}
                </div>

                {/* Right — card */}
                <div
                  className="relative flex-1 mb-4 bg-white rounded-2xl p-5 shadow-md overflow-hidden"
                  style={{ border: "2px solid #F5C200" }}
                >
                  {/* Corner accents */}
                  <span className="absolute top-[-2px] left-[-2px] w-3 h-3 border-t-[3px] border-l-[3px] border-yellow-400 rounded-tl-2xl" />
                  <span className="absolute top-[-2px] right-[-2px] w-3 h-3 border-t-[3px] border-r-[3px] border-yellow-400 rounded-tr-2xl" />
                  <span className="absolute bottom-[-2px] left-[-2px] w-3 h-3 border-b-[3px] border-l-[3px] border-yellow-400 rounded-bl-2xl" />
                  <span className="absolute bottom-[-2px] right-[-2px] w-3 h-3 border-b-[3px] border-r-[3px] border-yellow-400 rounded-br-2xl" />

                  {/* Top bar */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#F5C200] to-[#FFD84D]" />

                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#0B2C5D] to-[#123D7A] flex items-center justify-center shadow-md shrink-0">
                      <Icon className="text-[#F5C200]" size={22} />
                    </div>
                    <h3 className="text-base font-bold text-[#081A3B]">
                      {step.title}
                    </h3>
                  </div>

                  <p className="mt-3 text-gray-600 text-sm leading-6">
                    {step.description}
                  </p>

                  {/* Bottom bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#F5C200] to-[#FFD84D]" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Process;