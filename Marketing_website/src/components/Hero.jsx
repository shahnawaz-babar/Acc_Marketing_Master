import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import img1 from "../assets/Digital marketing agency.jpg";
import img2 from "../assets/Stay Connected with Mann Technologies!.jpg";
import img3 from "../assets/Transform your footage like a pro.jpg";
import img4 from "../assets/video editing set up 🖥️.jpg";

const slides = [
  {
    image: img1,
    title: "Grow Your Business",
    highlight: "with Marketing Master",
    desc: "Social Media, SEO & Marketing Automation — Business at Ease.",
  },
  {
    image: img2,
    title: "Stay Connected",
    highlight: "With Your Customers",
    desc: "Build trust and engagement with powerful digital strategies.",
  },
  {
    image: img3,
    title: "Transform Your Brand",
    highlight: "With Creative Marketing",
    desc: "High-impact visuals and campaigns that convert.",
  },
  {
    image: img4,
    title: "Professional Video",
    highlight: "Marketing Solutions",
    desc: "Content designed to grow your audience and sales.",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  // auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  const prev = () =>
    setIndex(index === 0 ? slides.length - 1 : index - 1);
  const next = () => setIndex((index + 1) % slides.length);

  return (
    <section className="relative h-[90vh] overflow-hidden" id="home">
      {/* IMAGE SLIDER */}
     <AnimatePresence mode="sync">
  <motion.div
    key={index}
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: `url(${slides[index].image})`,
      backgroundColor: "#0f172a", // IMPORTANT: dark base (no white flash)
    }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 2, ease: "easeInOut" }}
  />
</AnimatePresence>


      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50" />

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl text-white"
            >
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
                {slides[index].title}{" "}
                <span className="text-[#F44336]">
                  {slides[index].highlight}
                </span>
              </h1>

              <p className="mt-6 text-lg text-gray-200">
                {slides[index].desc}
              </p>

              <div className="mt-10 flex gap-6">
                <button className="bg-[#F44336] px-8 py-4 rounded-xl font-semibold hover:scale-105 transition">
                  Try Now
                </button>
                <button className="border border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-black transition">
                  Free Consultation
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ARROWS */}
      <button
        onClick={prev}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-3 rounded-full text-white"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={next}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-3 rounded-full text-white"
      >
        <ChevronRight />
      </button>

      {/* DOTS */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`h-2 w-2 rounded-full ${
              i === index ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
