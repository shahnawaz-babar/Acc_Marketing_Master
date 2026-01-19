import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// BACKGROUND IMAGES
import img1 from "../assets/Digital marketing agency.jpg";
import img2 from "../assets/Stay Connected with Mann Technologies!.jpg";
import img3 from "../assets/Transform your footage like a pro.jpg";
import img4 from "../assets/video editing set up 🖥️.jpg";

// TRANSPARENT PERSON IMAGES
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
    title: "Special Zig Zag Slide",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  // AUTO SLIDE
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => {
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const next = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* BACKGROUND */}
      <AnimatePresence mode="sync">
        <motion.div
          key={index}
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${slides[index].image})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
        />
      </AnimatePresence>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* CONTENT */}
      <div className="relative z-20 min-h-screen flex items-center justify-center px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 1 }}
            className="w-full max-w-6xl text-white"
          >
            {/* 🔥 LAST SLIDE */}
            {index === 3 ? (
              <div className="w-full flex flex-col items-center justify-center gap-16">

                {/* ROW 1 */}
                <div className="flex items-center justify-center gap-10 w-full max-w-5xl">
                  <div className="flex-1">
                    <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                      Koi Dhanda Chhota Nahi Hota
                    </h2>
                  </div>

                  <img
                    src={srkImg}
                    alt="SRK"
                    className="w-36 md:w-44 drop-shadow-2xl"
                  />
                </div>

                {/* ROW 2 */}
                <div className="flex items-center justify-center gap-10 w-full max-w-5xl">
                  <img
                    src={gajendraImg}
                    alt="Gajendra Sir"
                    className="w-44 md:w-52 drop-shadow-2xl"
                  />

                  <div className="flex-1">
                    <p className="text-4xl md:text-5xl font-extrabold leading-tight text-white">
                      Usse Chote se Bada Banana Hota Hai
                    </p>
                  </div>
                </div>

              </div>
            ) : (
              /* NORMAL SLIDES */
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
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

      {/* ARROWS */}
      <button
        onClick={prev}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 bg-white/20 p-3 rounded-full hover:bg-white/40"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={next}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 bg-white/20 p-3 rounded-full hover:bg-white/40"
      >
        <ChevronRight />
      </button>

      {/* DOTS */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
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
