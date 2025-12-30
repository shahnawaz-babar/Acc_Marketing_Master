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
    title: "Solution of your business",
    highlight: "problem is our business",
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
    title: "We Help You  ",
    highlight: "Get More Customers",
    desc: "SEO, Web Design, Lead Generation & Conversion Training that grows your business.",
  },
  {
    image: img4,
    title: "Koi Dhanda Chhota Nahi Hota,",
    highlight: "Use Chote se Bada Banana Hota Hai",
    author: "by Gajendra",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  // AUTO SLIDE
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () =>
    setIndex(index === 0 ? slides.length - 1 : index - 1);
  const next = () => setIndex((index + 1) % slides.length);

  return (
    <section className="relative h-[90vh] overflow-hidden" id="home">
      {/* BACKGROUND IMAGE */}
      <AnimatePresence mode="sync">
        <motion.div
          key={index}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${slides[index].image})`,
            backgroundColor: "#0f172a",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/50" />

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 1.5 }}
              className="max-w-3xl mx-auto text-white text-center"
            >
              {/* HEADING */}
              <h2
                className={`font-extrabold leading-tight ${
                  index === 3
                    ? "text-4xl md:text-5xl"
                    : "text-5xl md:text-6xl"
                }`}
              >
                {slides[index].title}
                <br />
                <span className="text-[#F44336]">
                  {slides[index].highlight}
                  {slides[index].author && (
          <span className="ml-3 text-sm font-semibold text-orange-400 whitespace-nowrap drop-shadow-[0_0_6px_rgba(255,165,0,0.6)]">
  — {slides[index].author}
</span>


                  )}
                </span>
              </h2>

              {/* DESCRIPTION */}
              {slides[index].desc && (
                <p className="mt-6 text-lg text-gray-200 max-w-xl mx-auto">
                  {slides[index].desc}
                </p>
              )}

              {/* BUTTONS */}
              <div className="mt-10 flex gap-6 justify-center">
                <button className="bg-[#F44336] px-8 py-4 rounded-xl font-semibold hover:scale-105 transition">
                  Get Consultation
                </button>
                <button className="border border-white/40 px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-black transition">
                  View Services
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
