import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.jpg";

const navItems = [
  { label: "Home", id: "home" },
  { label: "Services", id: "services" },
  { label: "Process", id: "process" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300
      ${scrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">

        {/* LOGO */}
        <div
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-3 cursor-pointer"
        >
          <img src={logo} alt="Acc Marketing Master" className="h-9 w-9 rounded" />
     <h1
  className="
    text-lg md:text-xl lg:text-2xl
    font-extrabold tracking-wide
    bg-gradient-to-b from-yellow-300 via-orange-400 to-red-600
    bg-clip-text text-transparent
    drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]
    leading-tight
  "
>
  Acc Marketing Master
</h1>



        </div>

        {/* DESKTOP MENU */}
        <ul
          className={`hidden md:flex gap-10 font-semibold
          ${scrolled ? "text-gray-900" : "text-white"}`}
        >
          {navItems.map((item) => (
            <li
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="cursor-pointer hover:text-[#D32F2F] transition"
            >
              {item.label}
            </li>
          ))}
        </ul>

        {/* DESKTOP CTA */}
        <button
          onClick={() => scrollToSection("contact")}
          className="hidden md:block bg-[#D32F2F] text-white px-6 py-3 rounded-xl
          font-semibold shadow hover:bg-red-700 transition"
        >
          Free Consultation
        </button>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setOpen(true)}
          className={`md:hidden ${scrolled ? "text-gray-900" : "text-white"}`}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-white z-50 md:hidden"
          >
            <div className="flex justify-between items-center px-6 h-20">
              <h2 className="text-xl font-bold text-[#D32F2F]">
                Acc Marketing Master
              </h2>
              <X size={30} onClick={() => setOpen(false)} />
            </div>

            <ul className="flex flex-col gap-6 px-6 pt-10 text-lg font-semibold text-gray-800">
              {navItems.map((item) => (
                <li
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="cursor-pointer"
                >
                  {item.label}
                </li>
              ))}

              <button
                onClick={() => scrollToSection("contact")}
                className="mt-6 bg-[#D32F2F] text-white py-4 rounded-xl font-semibold"
              >
                Free Consultation
              </button>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
