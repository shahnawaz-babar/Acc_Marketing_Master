import { motion } from "framer-motion";
import {
  BarChart,
  Video,
  PenTool,
  Search,
  Monitor,
  Megaphone,
} from "lucide-react";

import s1 from "../assets/service1.jpg";
import s2 from "../assets/service2.jpg";
import s3 from "../assets/service3.png";
import s4 from "../assets/service4.jpg";
import s5 from "../assets/service5.jpg";
import s6 from "../assets/service6.jpg";

const services = [

   {
    title: "Search Engine & Google My Business Optimization",
    desc: "Rank higher on Google and get organic traffic that converts.",
    icon: Search,
    image: s4,
  },
  {
    title: "Social Media Management & Marketing",
    desc: "Grow your brand visibility and engagement across all major platforms.",
    icon: BarChart,
    image: s1,
  },
  {
    title: "Content Creation",
    desc: "High-converting short videos and reels for maximum reach.",
    icon: Video,
    image: s2,
  },
  {
    title: "Content Writing & Creation",
    desc: "Powerful captions, ads and content that convert visitors to customers.",
    icon: PenTool,
    image: s3,
  }, 
  {
    title: "Website Design",
    desc: "Modern, fast and responsive websites built for conversions.",
    icon: Monitor,
    image: s5,
  },
  {
    title: "Lead Generation by Meta & Google Ads",
    desc: "ROI-focused Google Ads & Social Media advertising.",
    icon: Megaphone,
    image: s6,
  },
];

export default function Services() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="relative pt-16 pb-28 bg-[#F8F9FB]" id="services">
      {/* HERO → SERVICES CONNECTOR */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-[#F8F9FB]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#1E1E1E]">
            Our <span className="text-[#D32F2F]">Services</span>
          </h1>

          <p className="mt-5 text-lg text-gray-600">
            Everything you need to grow your brand digitally — strategy, design,
            marketing and performance.
          </p>
        </motion.div>

        {/* SERVICES GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group bg-white rounded-3xl overflow-hidden shadow hover:shadow-2xl transition"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-8">
                <service.icon className="w-10 h-10 text-[#D32F2F] mb-4" />
                <h3 className="text-xl font-bold text-[#1E1E1E]">
                  {service.title}
                </h3>
                <p className="mt-3 text-gray-600">{service.desc}</p>

                <button className="mt-6 text-[#D32F2F] font-semibold hover:underline">
                  Learn More →
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 text-center bg-[#D32F2F] rounded-3xl py-16 px-6 text-white"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Ready to Grow Your Business?
          </h2>

          <p className="mt-4 text-lg opacity-90">
            Let’s create a digital strategy that delivers real results.
          </p>

          <button
            onClick={scrollToContact}
            className="mt-8 bg-white text-[#D32F2F] px-10 py-4 rounded-xl font-semibold hover:scale-105 transition"
          >
            For Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
}
