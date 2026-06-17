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
      "Choose from our premium collection of wooden, metal, and customized trophies.",
  },

  {
    id: "02",
    icon: PencilRuler,
    title: "Customize Design",
    description:
      "Add logo engraving, recipient names, and event details as per your requirements.",
  },

  {
    id: "03",
    icon: BadgeCheck,
    title: "Approve Artwork",
    description:
      "Review the design sample and approve it before production begins.",
  },

  {
    id: "04",
    icon: Truck,
    title: "Craft & Deliver",
    description:
      "Our team creates the trophy with precision and ensures timely delivery.",
  },
];

const Process = () => {
  return (
    <section className="relative py-15 lg:py-15 bg-[#F8F8F6] overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#D4AF37]/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#081A3B]/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] font-medium text-sm">
            Custom Process
          </span>

          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#081A3B]">
            From Idea to
            <span className="text-[#D4AF37]">
              {" "}Achievement
            </span>
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-gray-600 leading-8 text-base sm:text-lg md:text-xl font-medium">
  Our simple and transparent process ensures that every trophy and award is crafted with precision, delivering exceptional quality and elegance in every detail.
</p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-8 relative">

          {/* Connecting Line */}
          <div className="absolute top-16 left-0 w-full h-1 bg-[#D4AF37]/20" />

          {processSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="relative text-center z-10"
              >
                {/* Step Number */}
                <div className="w-16 h-16 mx-auto rounded-full bg-[#D4AF37] flex items-center justify-center text-[#081A3B] font-bold text-xl shadow-lg">
                  {step.id}
                </div>

                {/* Card */}
<div className="mt-7 bg-white rounded-3xl px-7 py-7 shadow-lg hover:shadow-2xl transition duration-300 h-[280px] flex flex-col">                  <div className="w-16 h-16 rounded-2xl bg-[#081A3B] flex items-center justify-center mx-auto">
                    <Icon className="text-[#D4AF37]" size={32} />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-[#081A3B]">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-gray-600 leading-7">
                    {step.description}
                  </p>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Timeline */}
    {/* Mobile Timeline */}
<div className="lg:hidden space-y-6">

  {processSteps.map((step, index) => {
    const Icon = step.icon;

    return (
      <motion.div
        key={step.id}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.4,
          delay: index * 0.1,
        }}
        viewport={{ once: true }}
        className="flex flex-col items-center text-center"
      >

        {/* Step Number */}
        <div className="w-12 h-12 rounded-full bg-[#D4AF37] flex items-center justify-center text-[#081A3B] font-bold text-sm shadow-md">
          {step.id}
        </div>

        {/* Card */}
        <div className="mt-3 bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition duration-300 w-full max-w-[320px]">

          {/* Icon */}
          <div className="w-14 h-14 rounded-2xl bg-[#081A3B] flex items-center justify-center mx-auto">
            <Icon className="text-[#D4AF37]" size={26} />
          </div>

          {/* Title */}
          <h3 className="mt-3 text-lg font-bold text-[#081A3B]">
            {step.title}
          </h3>

          {/* Description */}
          <p className="mt-2 text-gray-600 text-sm leading-6">
            {step.description}
          </p>

        </div>

        {/* Connector Line */}
        {index !== processSteps.length - 1 && (
          <div className="w-1 h-6 bg-[#D4AF37]/20 mt-3 rounded-full" />
        )}

      </motion.div>
    );
  })}
</div>

      </div>
    </section>
  );
};

export default Process;