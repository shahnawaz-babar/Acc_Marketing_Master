import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Projects    from "../components/Projects";

import Footer from "../components/Footer";
import Process from "../components/Process";
import EnquiryForm from "../components/EnquiryForm";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Process />   {/* 👈 ADD HERE */}
      <Projects/>
      <EnquiryForm />
      {/* <Footer /> */}
    </>
  );
}
