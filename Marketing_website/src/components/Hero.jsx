import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// BACKGROUND IMAGES
import img1 from "../assets/Digital marketing agency.jpg";
import img2 from "../assets/Stay Connected with Mann Technologies!.jpg";
import img3 from "../assets/Transform your footage like a pro.jpg";
import img4 from "../assets/video editing set up 🖥️.jpg";

// PERSON IMAGES
import srkImg from "../assets/srk.png";
import gajendraImg from "../assets/GajendraSir.png";

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
    desc: "SEO, Web Design, Lead Generation & Conversion Training that grows your business.",
  },
  {
    image: img4,
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

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
        <motion.div
          key={index}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[index].image})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
        />
      </AnimatePresence>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* CONTENT — TRUE CENTER */}
      <div className="relative z-20 min-h-[100svh] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-6xl text-white"
          >
            {/* 🔥 LAST SLIDE */}
            {index === 3 ? (
              <div className="flex flex-col gap-8">

                {/* ROW 1 */}
                <div className="flex flex-row items-center gap-4 max-w-5xl mx-auto px-6">
                  <h2 className="flex-1 text-base sm:text-lg md:text-4xl font-extrabold leading-snug">
                    Koi dhanda chhota nahi hota <br />
                    aur dhande se bada koi dharam nahi hota
                  </h2>

                  <img
                    src={srkImg}
                    alt="SRK"
                    className="w-20 sm:w-24 md:w-44 shrink-0 drop-shadow-2xl"
                  />
                </div>

                {/* ROW 2 */}
                <div className="flex flex-row items-center gap-4 max-w-4xl mx-auto px-6">
                  <img
                    src={gajendraImg}
                    alt="Gajendra Sir"
                    className="w-20 sm:w-28 md:w-52 shrink-0 drop-shadow-2xl"
                  />

                  <h2 className="flex-1 text-base sm:text-lg md:text-4xl font-extrabold leading-snug text-right">
                    Koi dhanda chhota nahi hota, <br />
                    usse chhote se bada banana hota hai
                  </h2>
                </div>

              </div>
            ) : (
              /* NORMAL SLIDES */
              <div className="text-center max-w-3xl mx-auto px-6">
                <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
                  {slides[index].title}
                  <br />
                  <span className="text-[#F44336]">
                    {slides[index].highlight}
                  </span>
                </h2>

                {slides[index].desc && (
                  <p className="mt-6 text-lg text-gray-200">
                    {slides[index].desc}
                  </p>
                )}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ARROWS — MOBILE + DESKTOP */}
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
