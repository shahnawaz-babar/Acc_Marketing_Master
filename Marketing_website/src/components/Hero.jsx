import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// BACKGROUND IMAGES
import img1 from "../assets/Digital marketing agency.jpg";
import img2 from "../assets/Stay Connected with Mann Technologies!.jpg";
import img3 from "../assets/Transform your footage like a pro.jpg";
import digitalMarketingImg from "../assets/Digita_marketingl.jpg";
import koiDhandaImg from "../assets/Koi_dhanda.jpeg";

const slides = [
  {
    image: img1,
    title: "Solution of your business problem,",
    highlight: "is our business",
    desc: "Your business growth empowers us.",
  },
  {
    image: img2,
    title: "A to Z methods to",
    highlight: "grow your business",
    desc: "From planning, execution to lead generation and conversion.",
  },
  {
    image: img3,
    title: "We Help You",
    highlight: "Get More Customers",
    desc:
      "SEO | WEB DESIGN | LEAD GENERATION | CONVERSION TRAINING THAT GROWS YOUR BUSINESS",
  },
  // ✅ NEW DIGITAL MARKETING SLIDE
  {
  image: digitalMarketingImg,
  title:     "We Help Brands to get more customers / Leads",
  highlight: "Help customers to Find the right solution",
 desc:"Help businesses to run smoothly use Technologies",
  },
  // ✅ LAST SLIDE
  {
    image: koiDhandaImg,
    custom: "poster",
  },
];

export default function Hero({ setActiveSlide }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setActiveSlide(index);
  }, [index, setActiveSlide]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const prev = () =>
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  const next = () =>
    setIndex((prev) => (prev + 1) % slides.length);

  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden">

      {/* BACKGROUND */}
      <AnimatePresence mode="sync">
        {slides[index].custom === "poster" ? (
          <motion.img
            key={index}
            src={slides[index].image}
            className="absolute inset-0 w-full h-full object-contain bg-[#F7F1E3]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
          />
        ) : (
          <motion.div
            key={index}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[index].image})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
          />
        )}
      </AnimatePresence>

      {/* DARK OVERLAY (NOT FOR POSTER) */}
      {slides[index].custom !== "poster" && (
        <div className="absolute inset-0 bg-black/60" />
      )}

      {/* ================= CONTENT ================= */}

      {/* NORMAL SLIDES */}
      {!slides[index].custom && (
        <div className="relative z-20 min-h-[100svh] flex items-center justify-center">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-3xl text-white text-center px-6"
          >
            <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
              {slides[index].title}
              <br />
              <span className="text-[#F44336]">
                {slides[index].highlight}
              </span>
            </h2>

            <p className="mt-6 text-lg text-gray-200">
              {slides[index].desc}
            </p>
          </motion.div>
        </div>
      )}

      {/* ✅ DIGITAL MARKETING CUSTOM SLIDE */}
      {slides[index].custom === "digital" && (
        <div className="relative z-20 min-h-[100svh] flex items-center justify-center text-white px-6">
          <div className="bg-black/70 p-10 rounded-2xl space-y-6 max-w-2xl">
            <p className="text-xl md:text-2xl font-semibold">
              We Help Brands to get more customers / Leads
            </p>
            <p className="text-xl md:text-2xl font-semibold">
              Help customers to Find the right solution
            </p>
            <p className="text-xl md:text-2xl font-semibold">
              Help businesses to run smoothly use Technologies
            </p>
          </div>
        </div>
      )}

      {/* ARROWS */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-30 bg-white/20 p-2 md:p-3 rounded-full"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-30 bg-white/20 p-2 md:p-3 rounded-full"
      >
        <ChevronRight />
      </button>

      {/* DOTS */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${
              i === index ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}