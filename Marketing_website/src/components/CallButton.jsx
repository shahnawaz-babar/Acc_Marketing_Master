import { PhoneCall } from "lucide-react";

const CallButton = () => {
  return (
    <a
      href="tel:+919893509493"
       className="
        fixed bottom-6 right-6 z-50 
        bg-red-500 hover:bg-red-600 
        text-white p-4 rounded-full 
        shadow-2xl ring-4 ring-red-300/30
        transition-all duration-300 
        hover:scale-110 active:scale-95
      "
    >
      <PhoneCall size={28} />
    </a>
  );
};

export default CallButton;
