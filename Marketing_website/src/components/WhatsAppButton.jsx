import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919893509493"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-24 right-6 z-50 
        bg-red-500 hover:bg-red-600 
        text-white p-4 rounded-full 
        shadow-2xl ring-4 ring-red-300/30
        transition-all duration-300 
        hover:scale-110 active:scale-95
      "
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default WhatsAppButton;
