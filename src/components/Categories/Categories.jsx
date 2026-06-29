import { useEffect, useRef, useState } from "react";
import {
  FaMedal,
  FaUsers,
  FaAward,
  FaShieldAlt,
} from "react-icons/fa";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md";

export const categories = [
  {
    id: 1,
    title: "Wooden Trophies",
    badge: "Bestseller",
    image:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQOpPJcjuEHSMcrugGphhNGWi3hRDsDTo7A_lEBWWWuwVccufrXBgeG7EAo-EG_rqVxgHapGJ32zwufrrcTtkpPnywIaHcxkUruw8r6Ha2ScFCxL26ADHGYagM",
    description:
      "Premium wooden trophies for schools, colleges and corporate awards.",
  },
  {
    id: 2,
    title: "Acrylic Trophies",
    badge: "Modern",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUtIcD8Gf1GCVFSDs-QSbLAQZ3840h5T6uO9TGFAME-w&s=10",
    description:
      "Modern acrylic trophies with premium laser engraving.",
  },
  {
    id: 3,
    title: "Metal Trophies",
    badge: "Luxury",
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRKDya6uT3ZeqdMxXqV8L9MNu9vr4Q-Qezezmx8cGUW1yV-B-OKASyARdj337Z5ZJzc3CKyZiessmAZJ5pC4iEMSgQfsa_ZZ3U0gWlT_utMSVZQMQUbQoQ7",
    description:
      "Luxury metal trophies for sports and corporate events.",
  },
  {
    id: 4,
    title: "Glass Trophies",
    badge: "Elegant",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0d4YNt6QDxTdxO0nDFbgUNSrzdrD_7Ku51bxx912YQw&s=10",
    description:
      "Elegant crystal and glass trophies for premium awards.",
  },
  {
    id: 5,
    title: "Fiber Trophies",
    badge: "Affordable",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe091Qf0Hi6bgi91noEmnKzcZVIjAQiwU3fgINm7DRhg&s=10",
    description:
      "Affordable fiber trophies available in various designs.",
  },
  {
    id: 6,
    title: "Shields",
    badge: "Classic",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2l28TqVBnbZXp7i4n1Zb7qf5SLvGchvwu-3a5dIXohw&s=10",
    description:
      "Wooden and metal shields for recognition ceremonies.",
  },
  {
    id: 7,
    title: "Medals",
    badge: "Custom",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO1yeK06q5SpImtDd3fK0gb6g1T2llgWilvQen-jCbzw&s=10",
    description:
      "Gold, silver and bronze medals with customization.",
  },
  {
    id: 8,
    title: "Sports Cups",
    badge: "Premium",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpuyPYAQ-12jfOWTc-df-KIkWwSDjzC0EtA2hovpG16Q&s=10",
    description:
      "Premium sports cups for tournaments and championships.",
  },
  {
    id: 9,
    title: "Mementos",
    badge: "Unique",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNE9lcwtbV7DsGMqt_4zatSyZOiLfxD4X2T2q9USpRgcy7eTsmZ2XZ3p0&s=10",
    description:
      "Customized mementos for corporate and personal events.",
  },
  {
    id: 10,
    title: "Customized Awards",
    badge: "Personalized",
    image:
      "https://static.yourprint.in/new-admin-ajax.php?action=resize_outer_image&cfcache=all&url=s3-media/d-i-o/Trophies/trophy_hi-plus_I748_o.jpg&resizeTo=600",
    description:
      "Personalized awards with custom logos and branding.",
  },
];

// ─── parse a value like "5000+", "₹50", "All" into a number target ──────────
function parseTarget(raw) {
  const digits = raw.replace(/[^0-9]/g, "");
  return digits ? parseInt(digits, 10) : null;
}

// ─── Animated Counter ────────────────────────────────────────────────────────
function AnimatedCounter({ value, duration = 1800 }) {
  const target = parseTarget(value);
  const [display, setDisplay] = useState(target !== null ? 0 : value);
  const hasAnimated = useRef(false);
  const ref = useRef(null);

  useEffect(() => {
    if (target === null) return; // non-numeric like "All"

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const start = performance.now();

          const tick = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // ease-out quad
            const eased = 1 - (1 - progress) * (1 - progress);
            const current = Math.floor(eased * target);
            setDisplay(current);
            if (progress < 1) requestAnimationFrame(tick);
            else setDisplay(target);
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  if (target === null) return <span ref={ref}>{value}</span>;

  // reconstruct the original format: prefix + number + suffix
  const prefix = value.startsWith("₹") ? "₹" : "";
  const suffix = value.endsWith("+") ? "+" : "";
  const formatted = display.toLocaleString("en-IN");

  return (
    <span ref={ref}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

// ─── Stats data ──────────────────────────────────────────────────────────────
const stats = [
  { icon: <FaMedal />, value: "800+", label: "Unique Designs" },
  { icon: <FaUsers />, value: "5000+", label: "Happy Customers" },
  { icon: <FaAward />, value: "10+", label: "Years Experience" },
  { icon: <FaIndianRupeeSign />, value: "₹50", label: "Starting Price" },
  { icon: <FaShieldAlt />, value: "₹50000", label: "Premium Awards" },
  { icon: <MdLocationOn />, value: "All", label: "Maharashtra Delivery" },
];

// ─── Main Component ──────────────────────────────────────────────────────────
const TrophyCategories = () => {
  return (
    <section className="bg-white pt-12 sm:pt-16 lg:pt-10 pb-0">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">

        {/* HEADING */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-3 sm:mb-4">
          <span className="hidden sm:flex items-center gap-2 flex-1 max-w-[200px] lg:max-w-[250px]">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-yellow-500/70" />
            <span className="text-yellow-500 text-xs rotate-45">◆</span>
            <span className="text-yellow-500 text-xs rotate-45">◆</span>
          </span>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#081A3B] tracking-wide text-center leading-tight">
            Our Trophy 
{" "}
             <span className="text-[#F5C200]">
          Categories
          </span>
          </h2>

          <span className="hidden sm:flex items-center gap-2 flex-1 max-w-[200px] lg:max-w-[250px]">
            <span className="text-yellow-500 text-xs rotate-45">◆</span>
            <span className="text-yellow-500 text-xs rotate-45">◆</span>
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-yellow-500/70" />
          </span>
        </div>

        <p className="text-center text-[#0B2C5D] font-medium text-base sm:text-lg lg:text-xl mb-10 sm:mb-14 lg:mb-16">
          Wide Range of Premium Trophies &amp; Awards
        </p>

        {/* CATEGORY GRID */}
        {/* CATEGORY GRID */}
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-4 sm:gap-x-6 lg:gap-x-8 gap-y-14 sm:gap-y-16">
  {categories.map((item) => (
    <div
      key={item.id}
      className="group relative bg-white rounded-2xl transition-all duration-300 hover:-translate-y-2 pt-6 sm:pt-8 px-3 sm:px-5 pb-12"
      style={{
        border: "2px solid #F5C200",
        boxShadow: "0 2px 12px rgba(245,194,0,0.10)",
      }}
    >
      {/* Corner accents */}
      <span className="absolute top-[-2px] left-[-2px] w-4 h-4 border-t-[3px] border-l-[3px] border-yellow-400 rounded-tl-2xl" />
      <span className="absolute top-[-2px] right-[-2px] w-4 h-4 border-t-[3px] border-r-[3px] border-yellow-400 rounded-tr-2xl" />
      <span className="absolute bottom-[-2px] left-[-2px] w-4 h-4 border-b-[3px] border-l-[3px] border-yellow-400 rounded-bl-2xl" />
      <span className="absolute bottom-[-2px] right-[-2px] w-4 h-4 border-b-[3px] border-r-[3px] border-yellow-400 rounded-br-2xl" />

      {/* Badge */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#F5C200] text-[#081A3B] text-[10px] font-semibold px-3 py-0.5 rounded-full whitespace-nowrap z-10 shadow">
        {item.badge}
      </div>

      {/* Subtle golden tint overlay */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{ background: "linear-gradient(160deg, rgba(245,194,0,0.07) 0%, transparent 60%)" }}
      />

      {/* Image */}
      <div className="h-32 sm:h-40 lg:h-48 xl:h-52 flex items-center justify-center mb-2 sm:mb-3">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-contain group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500"
        />
      </div>

      {/* Label */}
      <div className="absolute left-0 right-0 bottom-0 rounded-b-2xl overflow-hidden">
        <div
          className="text-white text-xs sm:text-sm font-semibold text-center py-2.5 sm:py-3 px-2 sm:px-3 flex items-center justify-center gap-1.5"
          style={{ background: "linear-gradient(135deg, #0d1f52, #081A3B)", borderTop: "1.5px solid rgba(245,194,0,0.3)" }}
        >
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-yellow-400 shrink-0" />
          {item.title}
        </div>
      </div>
    </div>
  ))}
</div>

      </div>

      {/* STATS BAR */}
      <div className="mt-14 sm:mt-18 lg:mt-20">
        <div className="bg-gradient-to-r from-[#0a1742] via-[#0d1f52] to-[#0a1742] py-8 sm:py-10 lg:py-12">
          <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-7 gap-x-3 sm:gap-x-4 lg:divide-x divide-yellow-500/20">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center gap-3 lg:px-4"
                >
                  <span className="text-yellow-400 text-3xl sm:text-4xl lg:text-5xl shrink-0">
                    {stat.icon}
                  </span>

                  <div className="leading-tight text-left min-w-0">
                    <p className="text-white font-extrabold text-lg sm:text-xl lg:text-2xl whitespace-nowrap">
                      <AnimatedCounter value={stat.value} />
                    </p>
                    <p className="text-yellow-100/80 text-xs sm:text-sm lg:text-base whitespace-nowrap">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrophyCategories;
