import {
  FaTruck,
  FaPen,
  FaShoppingCart,
} from "react-icons/fa";
import { GiTrophyCup } from "react-icons/gi";
import { BsPatchCheckFill } from "react-icons/bs";

const FeatureBar = () => {
  const features = [
    {
      icon: <GiTrophyCup className="text-[#0B2C5D] text-2xl sm:text-3xl" />,
      badgeBg: "bg-gradient-to-br from-yellow-300 to-yellow-500",
      title: "800+",
      subtitle: "Unique Designs",
    },
    {
      icon: <FaTruck className="text-white text-xl sm:text-2xl" />,
      badgeBg: "bg-gradient-to-br from-[#123a73] to-[#0B2C5D]",
      title: "Delivery",
      subtitle: "All Maharashtra",
    },
    {
      icon: <FaPen className="text-[#0B2C5D] text-xl sm:text-2xl" />,
      badgeBg: "bg-gradient-to-br from-yellow-300 to-yellow-500",
      title: "100%",
      subtitle: "Customized",
    },
    {
      icon: (
        <span className="font-extrabold text-[#0B2C5D] text-xl sm:text-2xl leading-none">
          ₹
        </span>
      ),
      badgeBg: "bg-gradient-to-br from-yellow-300 to-yellow-500",
      title: "₹50 – ₹50K",
      subtitle: "Price Range",
    },
    {
      icon: <FaShoppingCart className="text-white text-xl sm:text-2xl" />,
      badgeBg: "bg-gradient-to-br from-[#123a73] to-[#0B2C5D]",
      title: "Wholesale",
      subtitle: "& Retail",
    },
    {
      icon: <BsPatchCheckFill className="text-[#0B2C5D] text-2xl sm:text-3xl" />,
      badgeBg: "bg-gradient-to-br from-yellow-300 to-yellow-500",
      title: "Premium",
      subtitle: "Quality",
    },
  ];

  return (
<section className="relative z-30 -mt-12 sm:-mt-16 lg:-mt-20 xl:-mt-24 px-3 sm:px-6 lg:px-8">
  
  
  
          <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-[1.25rem] sm:rounded-[1.25rem] shadow-[0_20px_50px_-12px_rgba(11,44,93,0.35)] px-5 sm:px-8 lg:px-10 py-7 sm:py-8 border border-yellow-100">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-8 gap-x-4 lg:gap-x-9">
            {features.map((item, i) => (
              <div key={i} className="relative flex justify-center lg:justify-start">
                {/* divider dot between items on desktop, skip before first */}
                {i !== 0 && (
                  <span className="hidden lg:block absolute -left-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-yellow-400" />
                )}

                <div className="group flex items-center gap-3 lg:pl-4 cursor-default transition-transform duration-300 hover:-translate-y-1">
                  <div
                    className={`flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${item.badgeBg} shadow-md shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
                  >
                    {item.icon}
                  </div>
                  <div className="leading-tight text-left">
                    <p className="text-[#0B2C5D] font-extrabold text-sm sm:text-base lg:text-lg whitespace-nowrap">
                      {item.title}
                    </p>
                    <p className="text-gray-500 font-semibold text-[11px] sm:text-xs whitespace-nowrap mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureBar;
