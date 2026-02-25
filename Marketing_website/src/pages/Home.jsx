import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Process from "../components/Process";
import EnquiryForm from "../components/EnquiryForm";

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  useEffect(() => {
    document.title =
      "Digital Marketing Company in Indore | SEO, Branding & Web Design | Ace Marketing Master | Top Marketing Agency in Indore";

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Ace Marketing Master is a leading digital marketing company in Indore offering SEO, branding, web design and growth marketing services."
      );
    }
  }, []);

  return (
    <>
      <Navbar activeSlide={activeSlide} />
      <Hero setActiveSlide={setActiveSlide} />
      <Services />
      <Process />
      <Projects />
      <EnquiryForm />
      <Footer />
    </>
  );
}