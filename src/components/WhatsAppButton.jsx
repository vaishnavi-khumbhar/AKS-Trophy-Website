import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919999999999"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-[9999]"
    >
      <div className="relative">
        
        {/* Pulse */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30"></span>

        {/* Button */}
        <div className="relative w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300">
          <FaWhatsapp className="text-white text-4xl" />
        </div>

      </div>
    </a>
  );
};

export default WhatsAppButton;